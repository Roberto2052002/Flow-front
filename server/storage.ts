import { users, joinRequests, type User, type InsertUser, type JoinRequest, type InsertJoinRequest } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createJoinRequest(request: InsertJoinRequest): Promise<JoinRequest>;
  getAllJoinRequests(): Promise<JoinRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private joinRequests: Map<number, JoinRequest>;
  private currentUserId: number;
  private currentJoinRequestId: number;

  constructor() {
    this.users = new Map();
    this.joinRequests = new Map();
    this.currentUserId = 1;
    this.currentJoinRequestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createJoinRequest(insertRequest: InsertJoinRequest): Promise<JoinRequest> {
    const id = this.currentJoinRequestId++;
    const request: JoinRequest = { 
      ...insertRequest, 
      id, 
      createdAt: new Date() 
    };
    this.joinRequests.set(id, request);
    return request;
  }

  async getAllJoinRequests(): Promise<JoinRequest[]> {
    return Array.from(this.joinRequests.values());
  }
}

export const storage = new MemStorage();
