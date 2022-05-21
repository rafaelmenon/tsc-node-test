import { PrismaClient } from "@prisma/client";
import User from "../models/user.model";
const prisma = new PrismaClient();

export const createUser = async (data: User) => {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: false,
    },
  });
  return user;
};
