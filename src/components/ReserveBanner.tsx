import React from 'react';
import { Shield, Sparkles, Diamond, Gem, Award, Star } from 'lucide-react';

interface ReserveBannerProps {
  onJoin: () => void;
}

export const ReserveBanner: React.FC<ReserveBannerProps> = ({ onJoin }) => {
  return (
    <section id="elivaas-reserve" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl border border-[#383229] bg-gradient-to-br from-[#151310] via-[#181512] to-[#12100d] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
        {/* Subtle background ambient glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#c8a974]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#4a72b0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & 5 Tier Gem Badges */}
          <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#2d2821] pb-6 lg:pb-0 lg:pr-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9e968b] font-medium">
              Join
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-medium text-white tracking-wide leading-tight mt-1">
              ELIVAAS RESERVE <br />
              <span className="font-normal text-[#dfd9ce]">Program</span>
            </h2>

            {/* 5 Luxury Tier Badges */}
            <div className="flex items-center gap-2.5 sm:gap-3 mt-6 sm:mt-8 flex-wrap">
              {/* Blue Sapphire Tier */}
              <div
                title="Blue Tier"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#11243b] border border-[#3b82f6]/70 flex items-center justify-center shadow-lg shadow-blue-900/30 group hover:scale-110 transition-transform cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#60a5fa]" />
              </div>

              {/* Silver Platinum Tier */}
              <div
                title="Silver Tier"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1e2024] border border-[#cbd5e1]/70 flex items-center justify-center shadow-lg group hover:scale-110 transition-transform cursor-pointer"
              >
                <Star className="w-4 h-4 text-[#e2e8f0]" />
              </div>

              {/* Gold Star Tier */}
              <div
                title="Gold Tier"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2a2012] border border-[#eab308]/80 flex items-center justify-center shadow-lg shadow-amber-900/40 group hover:scale-110 transition-transform cursor-pointer"
              >
                <Award className="w-4 h-4 text-[#facc15]" />
              </div>

              {/* Purple Amethyst Tier */}
              <div
                title="Platinum Amethyst"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#24122e] border border-[#a855f7]/70 flex items-center justify-center shadow-lg shadow-purple-900/30 group hover:scale-110 transition-transform cursor-pointer"
              >
                <Diamond className="w-4 h-4 text-[#c084fc]" />
              </div>

              {/* Ruby Diamond Tier */}
              <div
                title="Privé Royal Ruby"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2b101b] border border-[#ec4899]/70 flex items-center justify-center shadow-lg shadow-pink-900/30 group hover:scale-110 transition-transform cursor-pointer"
              >
                <Gem className="w-4 h-4 text-[#f472b6]" />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & White CTA Button */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            <p className="text-xs sm:text-[13px] text-[#b4ada1] leading-relaxed max-w-md font-normal">
              Every journey with ELIVAAS comes with rewards. Sign in or join to unlock
              your Blue Membership and enjoy exclusive offers, perks, and curated experiences.
            </p>

            <button
              id="reserve-join-btn"
              onClick={onJoin}
              className="mt-6 bg-white hover:bg-[#e8e4dc] text-[#141210] font-medium text-xs sm:text-[13px] px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] cursor-pointer"
            >
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
