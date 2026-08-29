import { NextResponse } from "next/server";

export async function GET() {
  const name = process.env.VALORANT_USERNAME;
  const tag = process.env.VALORANT_TAG;
  const apiKey = process.env.HENRIK_API_KEY;

  const url = `https://api.henrikdev.xyz/valorant/v2/account/${name}/${tag}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: apiKey ?? "",
      },
    });

    const data = await res.json();

    return NextResponse.json(data.data);
  } catch {
    return NextResponse.json({ status: 500, message: "Internal API fetch failed" });
  }
}
