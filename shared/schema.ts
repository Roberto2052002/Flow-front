import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const joinRequests = pgTable("join_requests", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  nativeLanguage: text("native_language").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  howFound: text("how_found"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertJoinRequestSchema = createInsertSchema(joinRequests).pick({
  fullName: true,
  nativeLanguage: true,
  email: true,
  phone: true,
  howFound: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertJoinRequest = z.infer<typeof insertJoinRequestSchema>;
export type JoinRequest = typeof joinRequests.$inferSelect;
