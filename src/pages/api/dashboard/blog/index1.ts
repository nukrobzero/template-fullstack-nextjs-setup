import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prismadb";
import multer from "multer";
import fs from "fs";

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
  if (req.method === "POST") {
    try {
      const multerUpload = multer({ dest: "public/uploads/" });
      await runMiddleware(req, res, multerUpload.single("file"));

      const {
        title,
        content,
        categoryId,
        description,
        date,
        keywords,
        status,
      } = req.body;

      const slug = title.replace(/\s+/g, "-").toLowerCase();
      const { originalname, path, filename } = req.file;
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      const newPath = path + "." + ext;
      const newPathDB = "uploads/" + filename + "." + ext;

      fs.renameSync(path, newPath);

      const response = await prisma.blogs.create({
        data: {
          title: title as string,
          slug: slug as string,
          categoryId: categoryId as string,
          description: description as string,
          coverImage: newPathDB as string,
          content: content as string,
          date: date as string,
          keywords: keywords as string,
          status: status as string,
        },
      });
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else if (req.method === "PUT") {
    try {
      const multerUpload = multer({ dest: "public/uploads/" });
      await runMiddleware(req, res, multerUpload.single("file"));
      const {
        id,
        title,
        coverImage,
        content,
        categoryId,
        description,
        date,
        keywords,
        status,
      } = req.body;
      const slug = title.replace(/\s+/g, "-").toLowerCase();
      //check have new image
      if (req.file) {
        try {
          const { originalname, path, filename } = req.file;
          const parts = originalname.split(".");
          const ext = parts[parts.length - 1];
          const newPath = path + "." + ext;
          const newPathDB = "uploads/" + filename + "." + ext;

          fs.renameSync(path, newPath);

          // Delete image from public/uploads folder
          fs.unlinkSync(`public/${coverImage}`);

          const response = await prisma.blogs.update({
            where: {
              id,
            },
            data: {
              title: title as string,
              slug: slug as string,
              categoryId: categoryId as string,
              description: description as string,
              coverImage: newPathDB as string,
              content: content as string,
              date: date as string,
              keywords: keywords as string,
              status: status as string,
            },
          });
          return res.status(200).json(response);
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Something went wrong." });
        }
      }
      //if not have new image
      const response = await prisma.blogs.update({
        where: {
          id,
        },
        data: {
          title: title as string,
          slug: slug as string,
          categoryId: categoryId as string,
          description: description as string,
          content: content as string,
          date: date as string,
          keywords: keywords as string,
          status: status as string,
        },
      });
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong!" });
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
