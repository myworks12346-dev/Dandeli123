import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BookingSearch } from './BookingSearch';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSearch: (filters: { destination: string; checkIn: string; checkOut: string; guests: number }) => void;
  onExplore?: () => void;
  onPlanTrip?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const { isLight } = useTheme();
  const { t } = useLanguage();

  const handleExplorePackages = () => {
    const el = document.getElementById('the-dandeli-collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[100svh] min-h-screen w-full flex flex-col justify-between pt-20 sm:pt-28 md:pt-32 pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:pb-12 md:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      {/* 1. Full-bleed Background Video Canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://res.cloudinary.com/joyorpxh/image/upload/v1788986666/dandeli_rafting_4k.png"
          className="w-full h-full object-cover object-center scale-[1.02] filter contrast-[1.05] brightness-[0.82] transition-all duration-700"
        >
          <source
            src="https://res.cloudinary.com/fuqocwx8/video/upload/v1789283058/watermark-removed_jovl9p.mp4"
            type="video/mp4"
          />
          {/* Fallback authentic photography if video playback fails */}
          <img
            src="https://res.cloudinary.com/joyorpxh/image/upload/v1788986666/dandeli_rafting_4k.png"
            alt="Thrilling white water rafting adventure on Kali River in Dandeli"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </video>

        {/* 2. Subtle Atmospheric Dark Overlays to ensure maximum text readability while keeping the video vibrant */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isLight
              ? 'bg-gradient-to-t from-black/80 via-black/35 to-black/60'
              : 'bg-gradient-to-t from-[#0b0a09]/95 via-[#0b0a09]/45 to-black/70'
          }`}
        />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/65" />
      </div>

      {/* 3. Main Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto pt-2 sm:pt-8 pb-2 sm:pb-4">
        {/* Primary Headline */}
        <h1
          id="hero-heading"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight sm:tracking-wide leading-[1.15] sm:leading-[1.1] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        >
          {t('escapeIntoWild')}
        </h1>

        {/* Supporting Description */}
        <p
          id="hero-subtitle"
          className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal tracking-wide px-2 sm:px-0 text-[#e6dfd3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          {t('heroSubtitle')}
        </p>

        {/* Explore Packages CTA Button */}
        <div className="mt-5 sm:mt-8 flex justify-center">
          <button
            id="hero-explore-cta"
            onClick={handleExplorePackages}
            className="group px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#b8854c] via-[#c9945a] to-[#d6aa75] hover:from-[#c9945a] hover:to-[#e0b885] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_8px_25px_rgba(184,133,76,0.45)] hover:shadow-[0_12px_32px_rgba(184,133,76,0.6)] hover:scale-105 active:scale-98 transition-all duration-300 flex items-center gap-2.5 cursor-pointer border border-[#f5ddb8]/30"
          >
            <span>{t('explorePackages')}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* 4. Booking Search Bar layered cleanly in lower hero with upward offset */}
      <div className="relative z-10 mt-3 sm:mt-8 w-full max-w-5xl mx-auto">
        <BookingSearch onSearch={onSearch} />
      </div>
    </section>
  );
};
