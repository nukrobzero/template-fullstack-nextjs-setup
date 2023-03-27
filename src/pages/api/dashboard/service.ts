import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
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
    const { title } = req.body;
    const slug = title.replace(/\s+/g, "-").toLowerCase() as string;
    try {
      const response = await prisma.pages.create({
        data: {
          title: title as string,
          slug,
        },
      });
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.body;
    const { title } = req.body;
    const slug = title.replace(/\s+/g, "-").toLowerCase();
    try {
      const response = await prisma.pages.update({
        where: {
          id,
        },
        data: {
          title,
          slug,
        },
      });
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else if (req.method === "GET") {
    try {
      const getPage = await prisma.pages.findMany();
      res.status(200).json(getPage);
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
