import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
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
        //Delete Image in Google Drive
        await drive.files.delete({
          fileId: coverImage as string,
        });
      }

      const deletePage = await prisma.news.delete({
        where: { id: id as string },
      });

      res.status(200).json(deletePage);
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
