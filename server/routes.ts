import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertJoinRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Join request submission
  app.post("/api/join-request", async (req, res) => {
    try {
      const validatedData = insertJoinRequestSchema.parse(req.body);
      const joinRequest = await storage.createJoinRequest(validatedData);
      res.json({ success: true, data: joinRequest });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    }
  });

  // Get all join requests (for admin purposes)
  app.get("/api/join-requests", async (req, res) => {
    try {
      const requests = await storage.getAllJoinRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
