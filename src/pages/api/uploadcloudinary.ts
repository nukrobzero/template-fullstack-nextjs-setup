import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import stream from "stream";
import util from "util";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pipeline = util.promisify(stream.pipeline);

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

const upload = multer({
  storage: multer.memoryStorage(),
});

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

  if (req.method === "POST") {
    try {
      await runMiddleware(req, res, upload.single("file"));
      const file = req.file;
      // Create a readable stream from buffer
      const readableStream = new stream.PassThrough();
      readableStream.end(file.buffer);
      // Upload file to Cloudinary using stream

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          upload_preset: process.env.CLOUDINARY_CLOUD_PRESET,
        },
        (error, result) => {
          if (result) {
            res.status(200).json(result);
          } else {
            console.log(error);
            res.status(500).json(error);
          }
        }
      );
      await pipeline(readableStream, uploadStream);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else if (req.method === "DELETE") {
    try {
      const { imageURL } = req.query;
      //@ts-ignore
      const cutOriginalURL = imageURL.substring(
        //@ts-ignore
        imageURL.lastIndexOf("/") + 1,
        //@ts-ignore
        imageURL.lastIndexOf(".")
      );
      const cloudinaryUrl = `${process.env.CLOUDINARY_CLOUD_PRESET}/${cutOriginalURL}`;

      const publicId = cloudinaryUrl;

      cloudinary.uploader.destroy(publicId, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).json(result);
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
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
