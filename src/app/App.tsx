import { useState, useEffect } from 'react';
import shivaImage from '../assets/godsfavoritearts-shiva-8797743_1920.jpg';

export default function App() {
  const [count, setCount] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);
  const [totalMalas, setTotalMalas] = useState(0);
  const [totalNaam, setTotalNaam] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);
  const maxCount = 108;

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCount = localStorage.getItem('naamCount');
    const savedMalas = localStorage.getItem('totalMalas');
    const savedNaam = localStorage.getItem('totalNaam');
    
    if (savedCount) setCount(parseInt(savedCount));
    if (savedMalas) setTotalMalas(parseInt(savedMalas));
    if (savedNaam) setTotalNaam(parseInt(savedNaam));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('naamCount', count.toString());
    localStorage.setItem('totalMalas', totalMalas.toString());
    localStorage.setItem('totalNaam', totalNaam.toString());
  }, [count, totalMalas, totalNaam]);

  // Handle completion and auto-reset
  useEffect(() => {
    if (count === maxCount) {
      setIsCompleting(true);
      
      // After 2 seconds, increment mala count and reset
      const timer = setTimeout(() => {
        setTotalMalas(totalMalas + 1);
        setCount(0);
        setIsCompleting(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [count, maxCount, totalMalas]);

const handleReset = () => {
  setCount(0);
  setTotalNaam(0);
  setTotalMalas(0);
  setIsGlowing(false);

  localStorage.removeItem('naamCount');
  localStorage.removeItem('totalMalas');
  localStorage.removeItem('totalNaam');
};
const handleTap = () => {
  if (count < maxCount) {
    setCount(prev => prev + 1);
    setTotalNaam(prev => prev + 1);
    setIsGlowing(true);

    setTimeout(() => {
      setIsGlowing(false);
    }, 300);
  }
};
  const progress = (count / maxCount) * 360;
  const isComplete = count >= maxCount;

  return (
 <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Shiva Watermark Background */}
<div
  className="absolute inset-0 bg-center bg-cover pointer-events-none"
  style={{
backgroundImage: `linear-gradient(rgba(15,5,25,0.9), rgba(25,10,40,0.8)), url(${shivaImage})`,    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
/>
      
      {/* Decorative Rudraksh Mala Illustration - Left */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-1/4 flex items-center justify-center transition-all duration-300 ${
          isGlowing ? 'opacity-60' : 'opacity-20'
        } hover:opacity-30`}
        style={{
          filter: isGlowing ? 'drop-shadow(0 0 20px rgba(255, 165, 100, 0.8)) drop-shadow(0 0 40px rgba(255, 140, 60, 0.6))' : 'none',
          transition: 'filter 0.3s ease, opacity 0.3s ease'
        }}
      >
        <svg viewBox="0 0 200 800" className="w-full h-full">
          {/* Draw mala beads in a vertical chain */}
          {[...Array(9)].map((_, i) => {
            const y = 50 + i * 85;
            return (
              <g key={i}>
                {/* Connecting thread */}
                {i < 8 && (
                  <line 
                    x1="100" 
                    y1={y + 30} 
                    x2="100" 
                    y2={y + 55} 
                    stroke="#d4a574" 
                    strokeWidth="3"
                    opacity="0.7"
                  />
                )}
                {/* Rudraksh bead */}
                <circle 
                  cx="100" 
                  cy={y} 
                  r="25" 
                  fill="#5d3a1a"
                  stroke="#8b6536"
                  strokeWidth="2"
                />
                {/* Mukhi lines */}
                {[...Array(5)].map((_, j) => (
                  <line
                    key={j}
                    x1="100"
                    y1={y - 20}
                    x2="100"
                    y2={y + 20}
                    stroke="#3d2610"
                    strokeWidth="2"
                    opacity="0.6"
                    transform={`rotate(${j * 36} 100 ${y})`}
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Decorative Rudraksh Mala Illustration - Right */}
      <div 
        className={`absolute right-0 top-0 bottom-0 w-1/4 flex items-center justify-center transition-all duration-300 ${
          isGlowing ? 'opacity-60' : 'opacity-20'
        } hover:opacity-30`}
        style={{
          filter: isGlowing ? 'drop-shadow(0 0 20px rgba(255, 165, 100, 0.8)) drop-shadow(0 0 40px rgba(255, 140, 60, 0.6))' : 'none',
          transition: 'filter 0.3s ease, opacity 0.3s ease'
        }}
      >
        <svg viewBox="0 0 200 800" className="w-full h-full">
          {/* Draw mala beads in a vertical chain */}
          {[...Array(9)].map((_, i) => {
            const y = 50 + i * 85;
            return (
              <g key={i}>
                {/* Connecting thread */}
                {i < 8 && (
                  <line 
                    x1="100" 
                    y1={y + 30} 
                    x2="100" 
                    y2={y + 55} 
                    stroke="#d4a574" 
                    strokeWidth="3"
                    opacity="0.7"
                  />
                )}
                {/* Rudraksh bead */}
                <circle 
                  cx="100" 
                  cy={y} 
                  r="25" 
                  fill="#5d3a1a"
                  stroke="#8b6536"
                  strokeWidth="2"
                />
                {/* Mukhi lines */}
                {[...Array(5)].map((_, j) => (
                  <line
                    key={j}
                    x1="100"
                    y1={y - 20}
                    x2="100"
                    y2={y + 20}
                    stroke="#3d2610"
                    strokeWidth="2"
                    opacity="0.6"
                    transform={`rotate(${j * 36} 100 ${y})`}
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Central Title */}
      <div className="mb-12 text-center z-10">
        <h1 
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300 mb-2"
          style={{ 
            textShadow: '0 0 30px rgba(255,200,100,0.5), 0 0 60px rgba(255,165,0,0.3)',
            fontFamily: 'Georgia, serif',
            letterSpacing: '0.05em'
          }}
        >
          Naam Counter
        </h1>
        <p className="text-orange-200/80 text-lg tracking-widest">
          108 Mala Meditation
        </p>
        {isComplete && (
  <p className="mt-1 text-orange-300 text-sm tracking-wider animate-fade-in">
    ✨ 108 Complete ✨
  </p>
)}
      </div>

      {/* Counter Display */}
      <div className="mb-8 z-10">
  <div 
    className={`text-7xl font-bold transition-all duration-300 ${
      isComplete ? 'text-yellow-300 scale-110' : 'text-white'
    }`}
    style={{ 
      textShadow: isComplete
        ? '0 0 25px rgba(255,215,100,0.9), 0 0 60px rgba(255,165,0,0.6)'
        : '0 0 20px rgba(255,150,150,0.6), 0 0 40px rgba(255,100,100,0.4)',
      fontFamily: 'system-ui, sans-serif'
    }}
  >
    {isComplete ? `✨ ${count} ✨` : count}
  </div>
</div>

    

      {/* Tap Button with Progress Ring */}
      <div className="relative mb-6 z-10 flex items-center justify-center">
        {/* Subtle Background Pulse on Completion */}
        {isCompleting && (
          <div 
            className="absolute w-56 h-56 rounded-full bg-orange-400/10 animate-ping pointer-events-none"
            style={{
              animationDuration: '300ms',
              animationIterationCount: '1'
            }}
          />
        )}

        {/* Progress Ring */}
        <svg className="absolute w-[160px] h-[160px]" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="rgba(255,100,100,0.2)"
            strokeWidth="8"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 70}`}
            strokeDashoffset={`${2 * Math.PI * 70 * (1 - progress / 360)}`}
            strokeLinecap="round"
            className={isComplete ? 'animate-pulse' : ''}
            style={{ 
              transition: 'stroke-dashoffset 0.3s ease',
              filter: isComplete ? 'drop-shadow(0 0 8px rgba(255,107,107,0.6)) drop-shadow(0 0 12px rgba(255,140,107,0.4))' : 'none'
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="100%" stopColor="#ffa07a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Tap Button */}
        <button
          onClick={handleTap}
          disabled={count >= maxCount}
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#ff9a8b] to-[#ff6b6b] 
                     text-white text-xl font-semibold
                     shadow-[0_8px_32px_rgba(255,107,107,0.4),0_16px_48px_rgba(255,107,107,0.2),inset_0_-4px_8px_rgba(0,0,0,0.2)]
                     hover:shadow-[0_12px_40px_rgba(255,107,107,0.5),0_20px_56px_rgba(255,107,107,0.3),inset_0_-4px_8px_rgba(0,0,0,0.2)]
                     active:scale-95 transition-all duration-200
                     disabled:opacity-70 disabled:cursor-not-allowed
                     border-t-2 border-[#ffb3a7]"
          style={{
            boxShadow: isComplete 
              ? '0 12px 40px rgba(255,107,107,0.7), 0 20px 56px rgba(255,107,107,0.5), inset 0 -4px 8px rgba(0,0,0,0.2)' 
              : undefined
          }}
        >
          Tap
        </button>
      </div>
{/* Reset Button */}
<div className="mt-8 z-10">
  <button
    onClick={handleReset}
    className="px-6 py-2 rounded-full
               bg-orange-400/20 text-orange-200
               border border-orange-300/30
               backdrop-blur-sm
               hover:bg-orange-400/30
               active:scale-95
               transition-all duration-200"
  >
    Reset
  </button>
</div>
      {/* Lifetime Stats Section */}
      <div className="mt-12 z-10 flex flex-col items-center">
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-orange-300/30 to-transparent mb-4" />
        
        <div className="flex gap-12 text-center">
          <div className="flex flex-col items-center">
            <p className="text-orange-200/50 text-xs tracking-wide mb-1 uppercase" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em' }}>
              Total Malas Completed
            </p>
            <p className="text-orange-300/90 text-2xl font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
              {totalMalas}
            </p>
          </div>
          
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-orange-300/20 to-transparent" />
          
          <div className="flex flex-col items-center">
            <p className="text-orange-200/50 text-xs tracking-wide mb-1 uppercase" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em' }}>
              Total Naam Taken
            </p>
            <p className="text-orange-300/90 text-2xl font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
              {totalNaam.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
{/* Signature */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
  <p
    className="text-orange-200/60 text-sm"
    style={{
  fontFamily: '"Kite One", sans-serif',
  letterSpacing: '0.05em'
}}
  >
    With love from Gurjot
  </p>
</div>
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}