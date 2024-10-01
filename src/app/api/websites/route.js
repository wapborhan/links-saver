import { connectDatabase } from "@/utils/db";
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
export const POST = async (request) => {
  const webData = await request.json();
  try {
    const db = await connectDatabase();
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${webData.url}&sz=40`;

    const webDatas = {
      ...webData,
      logo: faviconUrl,
    };

    const website = await db.collection("websites").insertOne(webDatas);

    return NextResponse.json(website);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
