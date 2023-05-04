import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import { prisma } from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  // Check if user is authenticated
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  if (req.method === "POST") {
    try {
      const {
        title,
        coverImage,
        content,
        description,
        date,
        keywords,
        status,
      } = req.body;

      const slug = title.replace(/\s+/g, "-").toLowerCase();

      const response = await prisma.news.create({
        data: {
          title: title as string,
          slug: slug as string,
          description: description as string,
          coverImage: coverImage as string,
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
  } else if (req.method === "PUT") {
    try {
      const {
        id,
        title,
        coverImage,
        content,
        description,
        date,
        keywords,
        status,
      } = req.body;

      const slug = title.replace(/\s+/g, "-").toLowerCase();

      const response = await prisma.news.update({
        where: {
          id,
        },
        data: {
          title: title as string,
          slug: slug as string,
          description: description as string,
          coverImage: coverImage as string,
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
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.query;

      //check have id ?
      const page = await prisma.news.findUnique({
        where: { id: id as string },
        select: {
          id: true,
          coverImage: true,
        },
      });
      if (!page) {
        return res.status(404).json({ message: "Page not found." });
      }

      const coverImage = page.coverImage;
      if (coverImage !== "") {
        //Delete Image in Cloudinary
        const cutOriginalURL = coverImage.substring(
          coverImage.lastIndexOf("/") + 1,
          coverImage.lastIndexOf(".")
        );
        const cloudinaryUrl = `sumipol-image/${cutOriginalURL}`;
        const publicId = cloudinaryUrl;

        cloudinary.uploader.destroy(publicId, async function (error, result) {
          if (error) {
            console.log(error);
          } else {
            if (await result) {
              const deletePage = await prisma.news.delete({
                where: { id: id as string },
              });
              res.status(200).json(deletePage);
            }
          }
        });
      } else {
        const deletePage = await prisma.news.delete({
          where: { id: id as string },
        });

        res.status(200).json(deletePage);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
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
