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
      console.log(accountData);

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
      className="text-black p-6 rounded-2xl shadow-lg"
      style={{
        background:
          'linear-gradient(90deg,rgba(107, 79, 58, 1) 0%, rgba(196, 164, 132, 1) 89%)',
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
            colors={['#000000', '#6B5439', '#3E2723', '#6B5439', '#000000']}
            showBorder={false}
            className="custom-class text-3xl font-bold mb-8 text-center slide-in-bottom"
          >
            Chess Stats
          </GradientText>

          {/* Top Row - Icon + User Info */}
          <div className="flex items-center justify-between mb-6 w-full gap-4">

            {/* Left */}
            <div className="flex items-center gap-4 min-w-[200px] slide-in-left">
              <SiLichess className="w-16 h-16" />
              <div>
                <p className="text-lg font-semibold"><a href='https://lichess.org/@/iKedy' target='_blank'>{account?.username}</a></p>
                <p className="text-lg text-black">Lichess</p>
              </div>
            </div>

            {/* Middle */}
            <div className="flex-1 text-center slide-in-bottom">
              <p className="text-xl font-semibold whitespace-nowrap">
                2024 Penant B Grade Board 2 Winner
              </p>
            </div>

            {/* Right */}
            <div className="text-right min-w-[220px] slide-in-right">
              <p className="text-base">
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
              <p className="text-base">
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
          <div className="flex justify-around text-4xl mb-2 slide-in-top">
            <GiBulletBill title="Bullet" className={selectedMode === 'bullet' ? 'text-white' : ''}/>
            <AiFillFire title="Blitz" className={selectedMode === 'blitz' ? 'text-white' : ''} />
            <LuRabbit title="Rapid" className={selectedMode === 'rapid' ? 'text-white' : ''} />
          </div>

          {/* Ratings Row */}
          <div className="flex justify-around text-md font-semibold mb-6 slide-in-top">
            <p className={selectedMode === 'bullet' ? 'text-white' : ''}>Bullet: {account?.perfs?.bullet?.rating || 'N/A'}</p>
            <p className={selectedMode === 'blitz' ? 'text-white' : ''}>Blitz: {account?.perfs?.blitz?.rating || 'N/A'}</p>
            <p className={selectedMode === 'rapid' ? 'text-white' : ''}>Rapid: {account?.perfs?.rapid?.rating || 'N/A'}</p>
          </div>

          {/* Dropdown and Mode Stats */}
          <div className="mt-4">

          {/* Dropdown */}
          <FormControl variant="outlined" className="fade-in-fwd">
            <InputLabel id="lichess-mode-label">View Stats:</InputLabel>
            <Select
              labelId="lichess-mode-label"
              id="lichess-mode"
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              label="View Stats:"
              size="small"
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
            <div className="mt-6 p-4 rounded-xl bg-opacity-20 shadow-md text-black">
              <p className="font-bold text-lg capitalize mb-4">{selectedMode} Stats</p>

              {/* Rating, Percentile, Progress */}
              <div className="grid grid-cols-3 gap-4 text-center text-sm sm:text-base">
                <div>
                  <p className="text-lg font-semibold">{(modeStats.perf.glicko.rating.toString()).substring(0,4)}</p>
                  <p className="text-black">Rating</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{modeStats.percentile != null ? `${modeStats.percentile} %` : 'Not enough games played'}</p>
                  <p className="text-black">Percentile</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{modeStats.rank ?? 'Not enough games played'}</p>
                  <p className="text-black">Rank</p>
                </div>
              </div>

              {/* Chart.js Stacked Bar */}
              <PerformanceBar
                wins={modeStats.stat.count.win}
                losses={modeStats.stat.count.loss}
                draws={modeStats.stat.count.draw || 0}
              />
              {/* Label Row for Numbers */}
              <div className="grid grid-cols-4 text-center mt-2 text-sm sm:text-base">
                <p>Games: <span className='font-semibold'>{modeStats.stat.count.all}</span></p>
                <p>Wins: <span className='font-semibold'>{modeStats.stat.count.win}</span></p>
                <p>Losses: <span className='font-semibold'>{modeStats.stat.count.loss}</span></p>
                <p>Draws: <span className='font-semibold'>{modeStats.stat.count.draw ?? '0'}</span></p>
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


