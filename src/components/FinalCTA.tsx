import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface FinalCTAProps {
  onPlanStay: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onPlanStay }) => {
  const { isLight } = useTheme();

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className={`rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl border transition-colors ${
        isLight
          ? 'bg-white border-[#dfd5c6] text-[#1c1917] shadow-sm'
          : 'bg-[#12100d] border-[#332c23] text-[#e8e4dc]'
      }`}>
        <h2 className={`font-serif text-2xl sm:text-3xl font-normal tracking-wide ${
          isLight ? 'text-[#9c7d49]' : 'text-[#c8a974]'
        }`}>
          Let Us Curate Your Escape
        </h2>

        <div className={`mt-4 sm:mt-5 space-y-3 max-w-4xl text-xs sm:text-[13px] leading-relaxed ${
          isLight ? 'text-[#5e574d]' : 'text-[#9e968b]'
        }`}>
          <p>
            ELIVAAS privé is crafted for those who seek more than just a stay. Whether you're looking to explore our most exclusive villas or design a fully personalised experience, we're here to assist, discreetly, thoughtfully, and completely.
          </p>
          <p>
            Our expert concierge team will guide you every step of the way, from selecting handpicked retreats to designing uniquely yours itineraries.
          </p>
        </div>

        <div className="mt-6 sm:mt-8">
          <button
            id="final-cta-plan-stay"
            onClick={onPlanStay}
            className={`text-xs font-medium px-6 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-sm border ${
              isLight
                ? 'border-[#9c7d49] text-[#9c7d49] hover:bg-[#9c7d49] hover:text-white'
                : 'border-[#443e36] hover:border-[#c8a974] text-[#dfd9ce] hover:text-[#c8a974]'
            }`}
          >
            Plan Your Stay
          </button>
        </div>
      </div>
    </section>
  );
};
