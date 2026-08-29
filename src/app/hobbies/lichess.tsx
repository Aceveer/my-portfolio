import React, { useState, useEffect } from 'react';
import '../components/loaders/lichessLoader.css';
import GradientText from './components/valorantComponents/gradientText';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './components/valorantComponents/valorant.css'

import { SiLichess } from 'react-icons/si';
import { GiBulletBill } from 'react-icons/gi';
import { AiFillFire } from 'react-icons/ai';
import { LuRabbit } from 'react-icons/lu';
import PerformanceBar from './components/lichessComponents/barChart';

const gameModes = ['bullet', 'blitz', 'rapid'];

function ChessTab() {
  const [account, setAccount] = useState<any>(null);
  const [modeStats, setModeStats] = useState<any>(null);
  const [selectedMode, setSelectedMode] = useState('bullet');
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      // Call your internal API instead of directly hitting Lichess
      const accountRes = await fetch("/api/lichess");
      const accountData = await accountRes.json();
      setAccount(accountData);

      // Call public Lichess mode stats directly
      const modeRes = await fetch(`https://lichess.org/api/user/ikedy/perf/${selectedMode}`);
      const modeData = await modeRes.json();
      setModeStats(modeData);
    } catch (error) {
      console.error("Error fetching Lichess data:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [selectedMode]);


  return (
    <div
      className="text-slate-200 p-6 rounded-2xl shadow-lg border border-amber-200/15"
      style={{
        background:
          'linear-gradient(135deg, #1a1208 0%, #2e2114 55%, #3b2a17 100%)',
      }}
    >
      {loading ? (
            <div className="flex items-center justify-center min-h-[200px] w-full">
              <div className="chess-icon" />
            </div>
      ) : (
        <>

          {/* Header */}
          <GradientText
            colors={['#e7c9a0', '#f5e2c4', '#c9a227', '#f5e2c4', '#e7c9a0']}
            showBorder={false}
            className="custom-class text-base md:text-xl lg:text-3xl font-bold mb-8 text-center slide-in-bottom"
          >
            Chess Stats
          </GradientText>

          {/* Top Row - Icon + User Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
            {/* Left */}
            <div className="flex items-center gap-4 slide-in-left">
              <SiLichess className="h-8 w-8 lg:w-16 lg:h-16" />
              <div className='text-base lg:text-lg'>
                <p className="font-semibold"><a href='https://lichess.org/@/iKedy' target='_blank'>{account?.username}</a></p>
                <p className="text-slate-400">Lichess</p>
              </div>
            </div>

            {/* Middle */}
            <div className="flex-1 text-center slide-in-bottom">
              <p className="text-sm md:text-base lg:text-lg font-semibold  ml-4">
                2024 Penant B Grade Board 2 Winner
              </p>
            </div>

            {/* Right */}
            <div className="text-right slide-in-right">
              <p className="text-xs md:text-sm lg:text-base">
                Created:{' '}
                {account?.createdAt
                  ? new Date(account.createdAt)
                      .toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })
                      .replace(/ /g, ' ')
                  : 'N/A'}
              </p>
              <p className="text-xs md:text-sm lg:text-base">
                Last Active:{' '}
                {account?.seenAt
                  ? new Date(account.seenAt)
                      .toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })
                      .replace(/ /g, ' ')
                  : 'N/A'}
              </p>
            </div>
          </div>

            {/* Second Row - Game Icons */}
            <div className="flex justify-around text-2xl sm:text-4xl my-4 slide-in-top">
              <GiBulletBill title="Bullet" className={selectedMode === 'bullet' ? 'text-amber-300' : 'text-slate-400'}/>
              <AiFillFire title="Blitz" className={selectedMode === 'blitz' ? 'text-amber-300' : 'text-slate-400'} />
              <LuRabbit title="Rapid" className={selectedMode === 'rapid' ? 'text-amber-300' : 'text-slate-400'} />
            </div>

          {/* Ratings Row */}
          <div className="flex justify-around text-xs md:text-lg font-semibold mb-6 slide-in-top">
            <p className={selectedMode === 'bullet' ? 'text-amber-300' : 'text-slate-400'}>Bullet: {account?.perfs?.bullet?.rating || 'N/A'}</p>
            <p className={selectedMode === 'blitz' ? 'text-amber-300' : 'text-slate-400'}>Blitz: {account?.perfs?.blitz?.rating || 'N/A'}</p>
            <p className={selectedMode === 'rapid' ? 'text-amber-300' : 'text-slate-400'}>Rapid: {account?.perfs?.rapid?.rating || 'N/A'}</p>
          </div>

          {/* Dropdown and Mode Stats */}
          <div className="mt-4">

          {/* Dropdown */}
          <FormControl variant="outlined" className="fade-in-fwd" size="small">
            <InputLabel id="lichess-mode-label" sx={{ color: "#cbd5e1", "&.Mui-focused": { color: "#fcd34d" } }}>
              View Stats:
            </InputLabel>
            <Select
              labelId="lichess-mode-label"
              id="lichess-mode"
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              label="View Stats:"
              size="small"
              sx={{
                color: "#f1f5f9",
                ".MuiOutlinedInput-notchedOutline": { borderColor: "rgba(231,201,160,0.35)" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(252,211,77,0.6)" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#fcd34d" },
                ".MuiSvgIcon-root": { color: "#cbd5e1" },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#2e2114",
                    color: "#f1f5f9",
                    border: "1px solid rgba(231,201,160,0.2)",
                    "& .MuiMenuItem-root:hover": { bgcolor: "rgba(252,211,77,0.15)" },
                    "& .Mui-selected": { bgcolor: "rgba(252,211,77,0.25) !important" },
                  },
                },
              }}
            >
              {gameModes.map((mode) => (
                <MenuItem key={mode} value={mode}>
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Stats Display */}
          {modeStats && (
            <div className="mt-6 p-4 rounded-xl bg-opacity-20 shadow-md text-slate-200 w-full">
              <p className="font-bold text-base sm:text-lg capitalize mb-4 text-center sm:text-left">
                {selectedMode} Stats
              </p>

              {/* Rating, Percentile, Progress */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm sm:text-base">
                <div>
                  <p className="text-base sm:text-lg font-semibold">
                    {(modeStats.perf.glicko.rating.toString()).substring(0, 4)}
                  </p>
                  <p className="text-slate-400">Rating</p>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold">
                    {modeStats.percentile != null
                      ? `${modeStats.percentile} %`
                      : 'Not enough games played'}
                  </p>
                  <p className="text-slate-400">Percentile</p>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold">
                    {modeStats.rank ?? 'Not enough games played'}
                  </p>
                  <p className="text-slate-400">Rank</p>
                </div>
              </div>

              {/* Chart.js Stacked Bar */}
              <PerformanceBar
                wins={modeStats.stat.count.win}
                losses={modeStats.stat.count.loss}
                draws={modeStats.stat.count.draw || 0}
              />

              {/* Label Row for Numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 text-center mt-2 text-xs sm:text-sm md:text-base gap-y-2">
                <p>
                  Games: <span className="font-semibold">{modeStats.stat.count.all}</span>
                </p>
                <p>
                  Wins: <span className="font-semibold">{modeStats.stat.count.win}</span>
                </p>
                <p>
                  Losses: <span className="font-semibold">{modeStats.stat.count.loss}</span>
                </p>
                <p>
                  Draws: <span className="font-semibold">{modeStats.stat.count.draw ?? '0'}</span>
                </p>
              </div>
            </div>
          )}

        </div>

        </>
      )}
    </div>
  );
}

export default ChessTab;


