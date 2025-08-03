import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit") || "6";
  const apiKey = process.env.NEWS_API_KEY;

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=বাংলা&sortBy=publishedAt&language=bn&pageSize=${limit}&apiKey=${apiKey}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("fetch-news API error:", err);
    return NextResponse.json({ articles: [] });
  }
}
