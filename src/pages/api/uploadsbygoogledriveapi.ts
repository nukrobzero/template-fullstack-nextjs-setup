import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
          const filePath = path.join(
            __dirname,
            "../../../../public/home/hero-bg.jpeg"
          );

          try {
            const response = await drive.files.create({
              requestBody: {
                name: uuidv4(),
                mimeType: "image/jpg",
                parents: [folderId],
              },
              media: {
                mimeType: "image/jpg",
                body: fs.createReadStream(filePath),
              },
            });

            const fileId = response.data.id;
            const embedUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            console.log(embedUrl);
            res.status(200).json({ message: `Uploaded! imgID:${fileId}` });
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
          const filePath = path.join(
            __dirname,
            "../../../../public/home/hero-bg.jpeg"
          );

          try {
            const response = await drive.files.create({
              requestBody: {
                name: uuidv4(),
                mimeType: "image/jpg",
                parents: [folderId],
              },
              media: {
                mimeType: "image/jpg",
                body: fs.createReadStream(filePath),
              },
            });

            const fileId = response.data.id;
            const embedUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            console.log(fileId);
            res.status(200).json({
              message: `Create Folder And successfully! imgID:${fileId}`,
            });
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
