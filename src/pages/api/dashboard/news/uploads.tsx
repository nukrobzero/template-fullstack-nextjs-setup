import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import multer from "multer";

function runMiddleware(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse,
  fn: (...args: any[]) => void
): Promise<any> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
) {
  const session = await getSession({ req });
  // Check if user is authenticated
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  const CLIENT_ID = process.env.GOOGLE_DRIVE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
  const REDIRECT_URI = process.env.GOOGLE_DRIVE_REDIRECT_URI;
  const REFRESH_TOKEN = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;

  const oauth2client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oauth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const drive = google.drive({
    version: "v3",
    auth: oauth2client,
  });

  if (req.method === "POST") {
    try {
      const multerUpload = multer({ dest: "public/uploads/" });
      await runMiddleware(req, res, multerUpload.single("file"));
      //Folder Name in Google Drive
      const folderName =
        process.env.GOOGLE_DRIVE_FOLDERNAME || "Public-Web-Image";

      const { data } = await drive.files.list({
        q: "mimeType='application/vnd.google-apps.folder' and trashed=false",
        fields: "nextPageToken, files(id, name, mimeType)",
        spaces: "drive",
      });

      if (data.files && data.files.length > 0) {
        const folders = data.files.filter(
          (file) => file.mimeType === "application/vnd.google-apps.folder"
        );

        let folderId;

        for (let i = 0; i < folders.length; i++) {
          if (folders[i].name === folderName) {
            folderId = folders[i].id;
            break;
          }
        }

        if (folderId) {
          console.log(folderId);
          // Upload file to folder
          const filePath = req.file.path;
          const fileSize = fs.statSync(filePath).size;
          const fileName = uuidv4();
          try {
            const response = await drive.files.create({
              requestBody: {
                name: fileName,
                mimeType: req.file.mimetype,
                parents: [folderId],
              },
              media: {
                mimeType: req.file.mimetype,
                body: fs.createReadStream(filePath),
              },
            });

            const fileId = response.data.id;
            const embedUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            console.log(embedUrl);
            res.status(200).json(fileId);
            //delete file after success
            if (fileId) {
              fs.unlinkSync(filePath);
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          // Create main folder
          const folder = await drive.files.create({
            requestBody: {
              name: folderName,
              mimeType: "application/vnd.google-apps.folder",
            },
            fields: "id",
          });

          const folderId = folder.data.id as string;

          //Set permissions
          await drive.permissions.create({
            fileId: folderId,
            requestBody: {
              role: "reader",
              type: "anyone",
            },
          });

          // Upload file to folder
          const filePath = req.file.path;
          const fileName = uuidv4();
          try {
            const response = await drive.files.create({
              requestBody: {
                name: fileName,
                mimeType: req.file.mimetype,
                parents: [folderId],
              },
              media: {
                mimeType: req.file.mimetype,
                body: fs.createReadStream(filePath),
              },
            });

            const fileId = response.data.id;
            console.log(fileId);
            res.status(200).json(fileId);
            //delete file after success
            if (fileId) {
              fs.unlinkSync(filePath);
            }
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        console.log("No folders found");
      }
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "DELETE") {
    try {
      const { fileId } = req.query;
      await drive.files.delete({
        fileId: fileId as string,
      });
      res.status(200).json({ message: "Delete successfully" });
    } catch (error) {
      console.log(error);
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
