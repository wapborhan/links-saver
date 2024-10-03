import { connectDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const cat = request.nextUrl.searchParams.get("cat");
  try {
    const db = await connectDatabase();
    let website;

    if (cat === "all") {
      website = await db.collection("websites").find({}).toArray();
    } else {
      website = await db
        .collection("websites")
        .find({ categories: cat })
        .toArray();
    }

    if (!website) {
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
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${webData.url}&sz=96`;

    const existingName = await db
      .collection("websites")
      .findOne({ name: webData.name });

    const existingUrl = await db
      .collection("websites")
      .findOne({ url: webData.url });

    if (existingName) {
      return NextResponse.json(
        { message: "Website with this Name already exists" },
        { status: 409 }
      );
    }

    if (existingUrl) {
      return NextResponse.json(
        { message: "Website with this URL already exists" },
        { status: 409 }
      );
    }

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
