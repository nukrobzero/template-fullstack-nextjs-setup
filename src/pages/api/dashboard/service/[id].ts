// import { getSession } from "next-auth/react";
// import type { NextApiRequest, NextApiResponse } from "next";
// import { prisma } from "@/lib/prismadb";
// import fs from "fs";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const session = await getSession({ req });
//   // Check if user is authenticated
//   if (!session) {
//     return res.status(401).json({ message: "Unauthorized." });
//   }
//   if (req.method === "DELETE") {
//     const { id } = req.query;
//     const page = await prisma.services.findUnique({
//       where: { id: id as string },
//       include: {
//         subservices: true,
//       },
//     });
//     if (!page) {
//       return res.status(404).json({ message: "Page not found." });
//     }
//     const { coverImage } = page;

//     // Delete image from public/uploads folder
//     coverImage === "" ? "" : fs.unlinkSync(`public/${coverImage}`);

//     // Delete subpages and their images
//     for (const subpage of page.subservices) {
//       const { coverImage: subpageCover } = subpage;
//       fs.unlinkSync(`public/${subpageCover}`);
//       await prisma.subservices.delete({
//         where: { id: subpage.id },
//       });
//     }
//     const deletePage = await prisma.services.delete({
//       where: { id: id as string },
//     });
//     res.status(200).json(deletePage);
//   }
//   // HTTP method not supported!
//   else {
//     res.setHeader("Allow", ["DELETE"]);
//     res
//       .status(405)
//       .json({ message: `HTTP method ${req.method} is not supported.` });
//   }
// }
