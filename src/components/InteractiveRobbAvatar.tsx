import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Eye } from 'lucide-react';

interface InteractiveRobbAvatarProps {
  className?: string;
  showHatchedBackdrop?: boolean;
}

export const InteractiveRobbAvatar: React.FC<InteractiveRobbAvatarProps> = ({
  className = '',
  showHatchedBackdrop = true,
}) => {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isWinking, setIsWinking] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isSurprised, setIsSurprised] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const avatarRef = useRef<HTMLDivElement>(null);

  // Track mouse coordinates relative to avatar center
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarRef.current) return;
      const rect = avatarRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2 - 20;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Limit pupil radius to max 6px
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = 300;
      const factor = Math.min(distance / maxDistance, 1);
      const angle = Math.atan2(deltaY, deltaX);

      const maxPupilOffset = 6.5;
      const pupilX = Math.cos(angle) * factor * maxPupilOffset;
      const pupilY = Math.sin(angle) * factor * maxPupilOffset;

      setPupilOffset({ x: pupilX, y: pupilY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Automatic gentle natural blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 160);
      }
    }, 4200);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleClick = () => {
    setInteractionCount((prev) => prev + 1);
    setIsWinking(true);
    setIsSurprised(true);
    setTimeout(() => setIsWinking(false), 600);
    setTimeout(() => setIsSurprised(false), 900);
  };

  return (
    <div
      ref={avatarRef}
      id="jv-interactive-avatar"
      onClick={handleClick}
      className={`relative select-none cursor-pointer group flex items-center justify-center ${className}`}
      title="Click JV for an interactive wink!"
    >
      {/* Hatched Background Rectangle (from Screen 1) */}
      {showHatchedBackdrop && (
        <div
          className="absolute -right-6 top-1/4 w-[110%] h-[55%] bg-hatched border border-primary/20 -z-10 rounded-sm pointer-events-none transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(14, 165, 233, 0.15) 5px, rgba(14, 165, 233, 0.15) 6px)',
          }}
        />
      )}

      {/* Floating Sparkle / Status Pill */}
      <div className="absolute -top-3 right-6 bg-[#ffffff] border border-primary px-2.5 py-0.5 rounded-full text-[10px] font-mono text-primary flex items-center gap-1 shadow-sm opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1">
        <Sparkles className="w-3 h-3 text-secondary-container" />
        <span>product engineer</span>
      </div>

      {/* SVG Vector Illustrated Robb */}
      <svg
        viewBox="0 0 400 480"
        className="w-full max-w-[420px] h-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cyan Fill Gradients and Highlights */}
          <linearGradient id="hairFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
          <linearGradient id="shirtFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
          <linearGradient id="faceShade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f7f9fb" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* --- SHIRT & SHOULDERS --- */}
        <path
          d="M100 440 C120 370 140 340 180 340 L220 340 C260 340 280 370 300 440 C280 470 120 470 100 440 Z"
          fill="url(#shirtFill)"
          stroke="#3525cd"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Shirt Collar detail */}
        <path
          d="M165 340 C175 375 225 375 235 340"
          stroke="#3525cd"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* --- NECK --- */}
        <path
          d="M170 290 L170 345 C185 350 215 350 230 345 L230 290 Z"
          fill="#f7f9fb"
          stroke="#3525cd"
          strokeWidth="3.5"
        />
        {/* Neck Shadow Line */}
        <path
          d="M185 315 C195 322 205 322 215 315"
          stroke="#3525cd"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* --- HEAD BASE & JAW --- */}
        <path
          d="M150 160 C140 210 145 280 200 310 C255 280 260 210 250 160 C245 120 155 120 150 160 Z"
          fill="url(#faceShade)"
          stroke="#3525cd"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* --- EARS --- */}
        {/* Left Ear */}
        <g>
          <path
            d="M148 190 C130 190 130 235 150 235"
            fill="#ffffff"
            stroke="#3525cd"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M143 205 C138 212 144 220 148 220"
            stroke="#3525cd"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        {/* Right Ear */}
        <g>
          <path
            d="M252 190 C270 190 270 235 250 235"
            fill="#ffffff"
            stroke="#3525cd"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M257 205 C262 212 256 220 252 220"
            stroke="#3525cd"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* --- HAIR (Stylized Crest from Mockup) --- */}
        <g>
          <path
            d="M145 160 C140 100 170 60 220 60 C245 60 265 90 255 150 C240 135 230 135 210 145 C190 130 170 135 145 160 Z"
            fill="url(#hairFill)"
            stroke="#3525cd"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Hair spiky strokes */}
          <path
            d="M210 60 C225 45 245 65 240 85"
            stroke="#3525cd"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M235 75 C250 85 260 105 255 125"
            stroke="#3525cd"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* --- EYEBROWS --- */}
        {/* Left Eyebrow */}
        <path
          d={
            isSurprised
              ? 'M160 155 Q180 145 200 160'
              : 'M160 165 Q180 155 200 170'
          }
          stroke="#3525cd"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-200"
        />
        {/* Right Eyebrow */}
        <path
          d={
            isSurprised
              ? 'M210 160 Q230 145 250 155'
              : isWinking
              ? 'M210 170 Q230 175 250 172'
              : 'M210 170 Q230 155 250 165'
          }
          stroke="#3525cd"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-200"
        />

        {/* --- SPECTACLES / GLASSES FRAME (Iconic from Mockup) --- */}
        <g>
          {/* Glasses Left Frame */}
          <rect
            x="155"
            y="180"
            width="42"
            height="36"
            rx="8"
            fill="#ffffff"
            stroke="#3525cd"
            strokeWidth="3.5"
          />
          {/* Glasses Right Frame */}
          <rect
            x="213"
            y="180"
            width="42"
            height="36"
            rx="8"
            fill="#ffffff"
            stroke="#3525cd"
            strokeWidth="3.5"
          />
          {/* Glasses Bridge */}
          <path
            d="M197 192 C203 189 207 189 213 192"
            stroke="#3525cd"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Glasses Temples / Side frames */}
          <path
            d="M155 192 L140 188"
            stroke="#3525cd"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M255 192 L270 188"
            stroke="#3525cd"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        {/* --- EYES / PUPILS (Interactive tracking) --- */}
        {/* Left Eye */}
        {isBlinking ? (
          <path
            d="M165 198 Q176 204 187 198"
            stroke="#3525cd"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        ) : (
          <g transform={`translate(${pupilOffset.x}, ${pupilOffset.y})`}>
            <circle cx="176" cy="198" r="4.5" fill="#3525cd" />
            <circle cx="177.5" cy="196.5" r="1.5" fill="#ffffff" />
          </g>
        )}

        {/* Right Eye */}
        {isBlinking || isWinking ? (
          <path
            d="M223 198 Q234 204 245 198"
            stroke="#3525cd"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        ) : (
          <g transform={`translate(${pupilOffset.x}, ${pupilOffset.y})`}>
            <circle cx="234" cy="198" r="4.5" fill="#3525cd" />
            <circle cx="235.5" cy="196.5" r="1.5" fill="#ffffff" />
          </g>
        )}

        {/* --- NOSE WITH CYAN HIGHLIGHT --- */}
        <g>
          {/* Nose shadow fill */}
          <path
            d="M200 190 L195 240 L210 240 Z"
            fill="#bae6fd"
            opacity="0.8"
          />
          {/* Nose line */}
          <path
            d="M198 190 L195 240 C202 245 208 244 212 238"
            stroke="#3525cd"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* --- MOUTH / SMILE & CHIN DETAIL --- */}
        <g>
          {/* Beard / Chin subtle patch from mockup */}
          <path
            d="M190 270 C190 260 210 260 210 270 C210 290 190 290 190 270 Z"
            fill="#bae6fd"
            opacity="0.85"
          />
          {/* Smile line */}
          <path
            d={
              isSurprised
                ? 'M188 266 Q200 278 212 266'
                : 'M188 268 Q200 276 212 268'
            }
            stroke="#3525cd"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>

      {/* Interactive Click Tip Overlay */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] text-[#464555] opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container-lowest px-2 py-0.5 border border-outline-variant rounded">
        {interactionCount === 0 ? '✦ Move cursor or click me' : `Winks: ${interactionCount}`}
      </div>
    </div>
  );
};
