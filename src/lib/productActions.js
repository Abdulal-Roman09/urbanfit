// src/lib/productActions.js
import { dbConnect } from '@/lib/dbConnect';

export async function addProduct(data) {
  const collection = await dbConnect("products");
  const result = await collection.insertOne(data);
  return result;
}
