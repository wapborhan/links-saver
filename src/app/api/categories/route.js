import { connectDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDatabase();

    const categories = await db.collection("categories").find({}).toArray();

    if (!categories.length) {
      return NextResponse.json(
        { message: "No categories found" },
        { status: 404 }
      );
    }

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
export const POST = async (request) => {
  const catData = await request.json();
  try {
    const db = await connectDatabase();

    const categories = await db.collection("categories").insertOne(catData);

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
