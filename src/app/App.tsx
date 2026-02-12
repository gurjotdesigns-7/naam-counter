import { useState } from 'react';
import shivaImage from 'figma:asset/c57638df14221ac249a2c7094af58482147cba8f.png';

export default function App() {
  const [count, setCount] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);
  const maxCount = 108;

  const handleTap = () => {
    if (count < maxCount) {
      setCount(count + 1);
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 300);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const progress = (count / maxCount) * 360;

  return (
    <div className="size-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2d1b4e] via-[#1f1335] to-[#0f0a1e] relative overflow-hidden">
      {/* Shiva Watermark Background */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-25 pointer-events-none"
        style={{ 
          backgroundImage: `url(${shivaImage})`,
          backgroundSize: 'cover',
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
      </div>

      {/* Counter Display */}
      <div className="mb-8 z-10">
        <div 
          className="text-7xl font-bold text-white"
          style={{ 
            textShadow: '0 0 20px rgba(255,150,150,0.6), 0 0 40px rgba(255,100,100,0.4)',
            fontFamily: 'system-ui, sans-serif'
          }}
        >
          {count}
        </div>
      </div>

      {/* Tap Button with Progress Ring */}
      <div className="relative mb-6 z-10 flex items-center justify-center">
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
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
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
                     disabled:opacity-50 disabled:cursor-not-allowed
                     border-t-2 border-[#ffb3a7]"
          style={{
            filter: count >= maxCount ? 'grayscale(0.3)' : 'none'
          }}
        >
          Tap
        </button>
      </div>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="text-white/60 hover:text-white/90 text-sm transition-colors duration-200 z-10"
      >
        Reset
      </button>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}