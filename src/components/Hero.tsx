import React from 'react';
import { BookingSearch } from './BookingSearch';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onSearch: (filters: { destination: string; checkIn: string; checkOut: string; guests: number }) => void;
  onExplore?: () => void;
  onPlanTrip?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const { isLight } = useTheme();

  return (
    <section
      id="hero-section"
      className={`relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] w-full flex flex-col justify-between pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 z-10 ${
        isLight ? 'bg-[#f4efe8]' : 'bg-[#0d0c0a]'
      }`}
    >
      {/* Background Image with Cinematic Luxury Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/joyorpxh/image/upload/v1788986666/dandeli_rafting_4k.png"
          alt="Thrilling white water rafting adventure on Kali River in Dandeli"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center scale-105 filter contrast-[1.08] transition-all duration-500 ${
            isLight ? 'brightness-[0.88]' : 'brightness-[0.72]'
          }`}
        />
        {/* Subtle Dark Vignette & Atmospheric Gradient Overlays */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            isLight
              ? 'bg-gradient-to-t from-[#f7f4ee] via-[#f7f4ee]/55 to-black/60'
              : 'bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/55 to-[#0b0a09]/80'
          }`}
        />
        <div className={`absolute inset-0 bg-radial-at-c from-transparent ${isLight ? 'via-black/10 to-black/40' : 'via-black/30 to-black/75'}`} />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto pt-4 sm:pt-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3 sm:mb-4 backdrop-blur-md border border-[#c9a66b]/40 bg-[#12100d]/70 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a66b] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#e5d5be]">
            WELCOME TO DANDELI
          </span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-heading"
          className={`font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight sm:tracking-wide leading-[1.2] sm:leading-[1.15] drop-shadow-md transition-colors ${
            isLight ? 'text-[#1c1917]' : 'text-[#f4efe8]'
          }`}
        >
          Where the Wild Feels Like Home.
        </h1>

        {/* Supporting text */}
        <p
          id="hero-subtitle"
          className={`mt-3.5 sm:mt-5 text-xs sm:text-sm md:text-[15px] max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal tracking-wide px-2 sm:px-0 drop-shadow-sm transition-colors ${
            isLight ? 'text-[#3d362e]' : 'text-[#b8b0a2]'
          }`}
        >
          Escape into the forests, rivers and untamed beauty of Dandeli.
          From thrilling adventures to peaceful stays, create a getaway that feels entirely yours.
        </p>
      </div>

      {/* Floating Booking Search Control at the Bottom */}
      <div className="relative z-10 mt-8 sm:mt-14 w-full">
        <BookingSearch onSearch={onSearch} />
      </div>
    </section>
  );
};
