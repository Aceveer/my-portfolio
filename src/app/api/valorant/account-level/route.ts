import { NextResponse } from "next/server";

export async function GET() {

    const url = `https://api.henrikdev.xyz/valorant/v2/account/Tannu/4434`;

    try {
        const res = await fetch(url, {
        headers: {
            Authorization: "HDEV-bd74ce98-e01f-4ac3-ab61-560bba516fcd",
        },
        });

        const data = await res.json();

        return NextResponse.json(data.data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500, message: "Internal API fetch failed" });
    }
}
