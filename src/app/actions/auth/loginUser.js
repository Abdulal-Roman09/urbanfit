"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const loginUsr = async (payload) => {
  try {
    const { email, password } = payload;

    // 1. DB connect
    const userCollection = await dbConnect("users");

    // 2. User check
    const user = await userCollection.findOne({ email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    // 3. Password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { success: false, message: "Invalid credentials" };
    }

    // 4. Remove password before returning
    const { password: _, ...userData } = user;

    return {
      success: true,
      message: "Login successful",
      user: userData,
    };
  } catch (error) {
    console.error("Login Error:", error);
    return { success: false, message: "Something went wrong" };
  }
};
