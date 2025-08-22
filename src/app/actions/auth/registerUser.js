"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
  console.log(payload);
  const userCollection = dbConnect("users");

  // check existing user
  const existingUser = await userCollection.findOne({ email: payload.email });
  if (existingUser) {
    return { success: false, message: "User already exists!" };
  }

  // hash password correctly
  const hashPassword = await bcrypt.hash(payload.password, 10);
  payload.password = hashPassword;

  // insert user
  const res = await userCollection.insertOne(payload);

  return {
    success: res.acknowledged,
    insertedId: res.insertedId,
  };
};
