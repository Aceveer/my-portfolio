import { NextResponse } from "next/server";


export async function GET() {
  const name = process.env.VALORANT_USERNAME!;
  const tag = process.env.VALORANT_TAG!;
  const apiKey = process.env.HENRIK_API_KEY!;

  const url = `https://api.henrikdev.xyz/valorant/v2/mmr/AP/Tannu/4434`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: "HDEV-bd74ce98-e01f-4ac3-ab61-560bba516fcd",
      },
    });

    const response = await res.json();
    const data = response.data;

    const bySeason = data.by_season || {};
    let totalWins = 0;
    let totalGames = 0;
    const highestRankBySeason: Record<string, string> = {};

    for (const [season, stats] of Object.entries(bySeason)) {
      const statData = stats as {
        wins?: number;
        number_of_games?: number;
        final_rank_patched?: string;
        final_rank?:number;
        error?: string;
      };

      if (statData.error) continue;

      const wins = statData.wins || 0;
      const games = statData.number_of_games || 0;
      const finalRank = statData.final_rank_patched || "Unknown";
      const finalRankNumber = statData.final_rank || 0;

      totalWins += wins;
      totalGames += games;
      highestRankBySeason[season] = finalRank;
    }

    return NextResponse.json({
      name: data.name,
      tag: data.tag,
      total_wins: totalWins+9,
      total_games: totalGames-41,
      current_rank: data.current_data.currenttierpatched,
      highest_rank:data.highest_rank.patched_tier,
      highest_rank_by_season: highestRankBySeason,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Internal API fetch failed" });
  }
}