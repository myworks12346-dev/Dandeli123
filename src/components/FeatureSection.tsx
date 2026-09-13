import React from 'react';
import { Compass, HeartHandshake, Trees, Waves, Utensils, BedDouble, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { FeatureItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface FeatureSectionProps {
  items?: FeatureItem[];
  onSelectFeature?: (item: FeatureItem) => void;
}

export const FeatureSection: React.FC<FeatureSectionProps> = () => {
  const { isLight } = useTheme();

  const tripTypes = [
    { label: 'Student Trips', icon: Users },
    { label: 'Group Adventures', icon: Compass },
    { label: 'Family Holidays', icon: HeartHandshake },
    { label: 'Couple Escapes', icon: Sparkles },
  ];

  const valuePillars = [
    {
      icon: BedDouble,
      title: 'Comfortable Stays',
      desc: 'Riverside resorts, wooden chalets & canopy treehouses',
    },
    {
      icon: Utensils,
      title: 'Delicious Meals',
      desc: 'Authentic Malnad flavours, buffet feasts & live evening BBQ',
    },
    {
      icon: Waves,
      title: 'River Adventures',
      desc: 'Whitewater rafting, dawn kayaking, coracle rides & river crossing',
    },
    {
      icon: Trees,
      title: 'Immersive Experiences',
      desc: 'Open jeep wildlife safaris, jungle treks & starlit campfires',
    },
  ];

  return (
    <section id="what-sets-prive-apart" className="py-14 sm:py-22 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* Editorial Header Block */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight ${
          isLight ? 'text-[#1c1917]' : 'text-[#f6f2ec]'
        }`}>
          Why Choose Us?
        </h2>

        {/* Lead Quote */}
        <p className={`font-serif italic text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed font-normal ${
          isLight ? 'text-[#856434]' : 'text-[#d6b27e]'
        }`}>
          “Dandeli is more than a destination — it's an experience.”
        </p>

        {/* Narrative Description */}
        <div className={`mt-5 space-y-3.5 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto ${
          isLight ? 'text-[#4d463b]' : 'text-[#beb5a7]'
        }`}>
          <p>
            Surrounded by lush forests, the <strong>Kali River</strong> and the beauty of Karnataka's <strong>Western Ghats</strong>, Dandeli is where adventure and nature come together.
          </p>
          <p>
            At <strong>Dandeli Tours</strong>, we make your getaway effortless. From comfortable stays and delicious meals to river adventures and immersive experiences, we bring everything together so you can spend less time planning and more time making memories.
          </p>
        </div>

        {/* Trip Types Pill Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <span className={`text-[11px] font-semibold uppercase tracking-wider mr-1 ${
            isLight ? 'text-[#847969]' : 'text-[#8e8578]'
          }`}>
            Tailored For:
          </span>
          {tripTypes.map((trip) => {
            const Icon = trip.icon;
            return (
              <div
                key={trip.label}
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all ${
                  isLight
                    ? 'bg-white border-[#e0d6c5] text-[#2c261e] shadow-sm hover:border-[#b8854c]'
                    : 'bg-[#181410] border-[#2e261e] text-[#e2dcd2] hover:border-[#d4aa73]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#b8854c]" />
                <span>{trip.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4 Value Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
        {valuePillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isLight
                  ? 'bg-white border-[#e8dfcf] shadow-sm'
                  : 'bg-[#15120f] border-[#2c251d]'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#b8854c]/15 text-[#b8854c] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className={`font-serif text-base sm:text-lg font-medium mb-1.5 ${
                isLight ? 'text-[#1c1917]' : 'text-[#f5efe7]'
              }`}>
                {pillar.title}
              </h3>
              <p className={`text-xs leading-relaxed ${
                isLight ? 'text-[#61594e]' : 'text-[#a29a8d]'
              }`}>
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer Statement */}
      <div className={`mt-6 pt-6 border-t text-center max-w-2xl mx-auto ${
        isLight ? 'border-[#e6decb] text-[#5c5446]' : 'border-[#262018] text-[#a49c8f]'
      }`}>
        <p className="text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#b8854c] shrink-0" />
          <span>Whether it's a student trip, group adventure, family holiday or couple escape, we're here to make your Dandeli experience one worth remembering.</span>
        </p>
      </div>
    </section>
  );
};

