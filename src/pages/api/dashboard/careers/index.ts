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
      const { title, content, description, status, jobtype } = req.body;
      const slug = title.replace(/\s+/g, "-").toLowerCase();

      const response = await prisma.careers.create({
        data: {
          title: title as string,
          slug: slug as string,
          content: content as string,
          description: description as string,
          status: status as string,
          jobtype: jobtype as string,
        },
      });
      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else if (req.method === "PUT") {
    try {
      const { id, title, content, description, status, jobtype } = req.body;
      const slug = title.replace(/\s+/g, "-").toLowerCase();

      const response = await prisma.careers.update({
        where: {
          id,
        },
        data: {
          title: title as string,
          slug: slug as string,
          content: content as string,
          description: description as string,
          status: status as string,
          jobtype: jobtype as string,
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
