import { NextResponse } from "next/server";
import { addProduct } from "@/lib/productActions";

export const POST = async (req) => {
  try {
    const data = await req.json();
    const result = await addProduct(data);
    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
};
