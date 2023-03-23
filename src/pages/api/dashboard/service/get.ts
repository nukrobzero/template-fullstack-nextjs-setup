import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prismadb";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ name: "Nukrob" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong!" });
  }
}
