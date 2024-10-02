import { connectDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDatabase();

    const website = await db.collection("websites").find({}).toArray();

    if (!website.length) {
      return NextResponse.json(
        { message: "No Websites found" },
        { status: 404 }
      );
    }

    return NextResponse.json(website);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request) => {
  const id = await request.nextUrl.pathname.split("/").slice(-1)[0];
  try {
    const db = await connectDatabase();

    const filter = { _id: new ObjectId(id) };

    const website = await db.collection("websites").deleteOne(filter);

    return NextResponse.json(website);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
