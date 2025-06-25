"use client";

import { useEffect, useState } from "react";
import MatchPieChart from "./components/valorantComponents/matchPieChart";
// import RankProgressChart from "./components/valorantComponents/rankProgressChart";
import HighlightCarousel from "./components/valorantComponents/highlightVideosCarousel";
import ValorantLoader from "../components/loaders/valorantLoader";
import GradientText from "./components/valorantComponents/gradientText"
import './components/valorantComponents/valorant.css'

interface MMRData {
  name: string;
  tag: string;
  total_games: number;
  total_wins: number;
  current_rank: string;
  highest_rank: string;
  highest_rank_by_season: Record<string, string>;
}

export default function ValorantStats() {
    const [response,setResponse] = useState<MMRData | null>(null)
    const [accountLevel, setAccountLevel] = useState<number | null>(null);
    const [loader,setLoader] = useState<boolean>(true);
    // const [hovered, setHovered] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch MMR Data
        const res = await fetch("/api/valorant/mmr");
        const data = await res.json();
        if (data) {
          setResponse(data);
        } else {
          console.log("Failed to fetch MMR data");
        }

        // Fetch Account Level
        const res2 = await fetch("/api/valorant/account-level");
        const data2 = await res2.json();
        if (data2 && data2.account_level !== undefined) {
          setAccountLevel(data2.account_level);
          setLoader(false);
        } else {
          console.log("Failed to fetch account level");
        }
      } catch (err) {
        console.error("Error fetching Valorant data:", err);
      }
    };
    fetchData();
  }, []);


return (
  <div className="p-6 rounded-lg bg-gradient-to-br from-black via-zinc-900 to-red-900 text-white relative">
    {loader? <ValorantLoader/> : <>

    {/* Tab Header */}
    <GradientText
        colors={["#C21B1B", "#8F1A1A", "#210000", "#8F1A1A", "#C21B1B"]}
        showBorder={false}
        className="custom-class text-3xl font-bold mb-8 text-center slide-in-bottom"
        >
        Valorant Stats
    </GradientText>


    {/* 1st Row */}
    <div className="relative flex flex-row justify-between items-center gap-8 mb-6">
        {/* Left: Profile Info */}
        <div className="flex flex-col items-center w-36 slide-in-left">
            <img
            src="/valorant-card.png"
            alt="Valorant Card"
            className="w-30 h-30 rounded-full border-2 border-white mb-2"
            />
            <span className="text-gray-300 text-lg font-semibold text-center">
            {response ? `${response.name}#${response.tag}` : "Loading..."}
            </span>
            <span className="text-gray-300 text-sm text-center">Account Level: {accountLevel}</span>
        </div>

        {/* Center: Hero Tag (absolutely centered over parent) */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-center slide-in-bottom">
            Top 0.1% Players In APAC<br/>
            <span className="text-base">Source:</span> <a href="https://www.esportstales.com/valorant/rank-distribution-and-percentage-of-players-by-tier" target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 underline hover:text-blue-300 font-medium">Valorant Rank Distribution →</a>
        </h1>

        {/* Right: Stats and Pie Chart */}
        <div className="flex items-center gap-6 slide-in-right">
            <div className="text-sm text-gray-300 space-y-2 text-right">
            <p>
                <span className="text-white font-semibold text-lg">Games Played:</span>{" "}
                {response?.total_games ?? 0}
            </p>
            <p>
                <span className="text-white font-semibold text-lg">Games Won:</span>{" "}
                {response?.total_wins ?? 0}
            </p>
            <p>
                <span className="text-white font-semibold text-lg">Games Lost:</span>{" "}
                {(response?.total_games ?? 0) - (response?.total_wins ?? 0)}
            </p>
            </div>
            <div className="w-44 h-44">
            <MatchPieChart totalGames={response?.total_games ?? 0} totalWins={response?.total_wins ?? 0} />
            </div>
        </div>
    </div>

    {/* Rank Row */}
    <div className="flex justify-between items-center mb-8">
      {/* Current Rank (Left) */}
      <div className="flex items-center gap-4 slide-in-left">
        <img
          src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/23/smallicon.png"
          alt="Current Rank"
          className="w-16 h-16 rounded-full border-2 border-white"
        />
        <div>
          <p className="text-lg font-semibold">Current Rank</p>
          <p className="text-sm text-gray-300">{response?.current_rank}</p>
        </div>
      </div>

      {/* Link to Valorant Profile (Center) */}
      <a
        href="https://tracker.gg/valorant/profile/riot/Tannu%234434/overview"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-400 underline hover:text-blue-300 transition slide-in-top"
      >
        View Full Valorant Profile →
      </a>

      {/* Peak Rank (Right) */}
      <div className="flex items-center gap-4 slide-in-right">
        <div className="text-right">
          <p className="text-lg font-semibold">Peak Rank</p>
          <p className="text-sm text-gray-300">{response?.highest_rank}</p>
        </div>
        <img
          src="/immortal3.jpg"
          alt="Peak Rank"
          className="w-16 h-16 rounded-full border-2 border-white"
        />
      </div>
    </div>

    {/* Match Stats + Highlight */}
    <div className="flex flex-col md:flex-row gap-8 mt-10 justify-center items-start">
        <HighlightCarousel />
    </div>

    </> }
  </div>
);

}
