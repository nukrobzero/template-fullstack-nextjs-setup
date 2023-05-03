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
    try {
      const { title, description } = req.body;
      const slug = title.replace(/\s+/g, "-").toLowerCase();
      const response = await prisma.category.create({
        data: {
          title: title as string,
          slug: slug as string,
          description: description as string,
        },
      });
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else if (req.method === "PUT") {
    try {
      const { id, title, description } = req.body;
      const slug = title.replace(/\s+/g, "-").toLowerCase();
      const response = await prisma.category.update({
        where: {
          id,
        },
        data: {
          title: title as string,
          slug: slug as string,
          description: description as string,
        },
      });
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      const category = await prisma.category.findUnique({
        where: {
          id: id as string,
        },
      });

      if (!category) {
        return res.status(404).json({ message: "category not found." });
      }

      const deleteCategory = await prisma.category.delete({
        where: {
          id: id as string,
        },
      });

      res.status(200).json(deleteCategory);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong." });
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
