import { requireAuth } from "@clerk/express";
import { clerkClient } from "@clerk/clerk-sdk-node";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth.userId;

      if (!clerkId) {
        return res.status(401).json({ message: "Unauthorized - invalid token" });
      }

      // Fetch user from Clerk backend
      const clerkUser = await clerkClient.users.getUser(clerkId);

      // Check if user exists in DB
      let user = await User.findOne({ clerkId });

      // If not, create one
      if (!user) {
        user = await User.create({
          clerkId,
          name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
          email: clerkUser.emailAddresses[0].emailAddress,
          profileImage: clerkUser.imageUrl,
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protectRoute:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];

