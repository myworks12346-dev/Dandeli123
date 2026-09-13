import React, { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { StoryItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface StorySectionProps {
  stories: StoryItem[];
  onPlayStory: (story: StoryItem) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ stories, onPlayStory }) => {
  const [activeDot, setActiveDot] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isLight } = useTheme();

  const dots = [0, 1, 2, 3, 4];

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmt = dir === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmt, behavior: 'smooth' });
    }
    setActiveDot((prev) =>
      dir === 'left' ? Math.max(0, prev - 1) : Math.min(dots.length - 1, prev + 1)
    );
  };

  return (
    <section id="every-stay-has-a-story" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* Centered Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className={`font-serif text-2xl sm:text-3xl tracking-wide font-normal ${
          isLight ? 'text-[#9c7d49]' : 'text-[#c8a974]'
        }`}>
          Every stay has a story
        </h2>
        <p className={`text-xs sm:text-sm mt-1.5 font-normal tracking-wide ${
          isLight ? 'text-[#5e574d]' : 'text-[#9c958b]'
        }`}>
          Hear What Makes Every Stay Truly Unforgettable
        </p>
      </div>

      {/* Story Cards Carousel */}
      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
      >
        {stories.slice(0, 3).map((story) => {
          let badgeBg = 'bg-[#18291f] text-[#4ade80] border-[#22543d]';
          if (story.category === 'Vacation Mode') {
            badgeBg = 'bg-[#0f2930] text-[#38bdf8] border-[#164e63]';
          } else if (story.category === 'Happiness') {
            badgeBg = 'bg-[#291e13] text-[#fbbf24] border-[#78350f]';
          }

          return (
            <div
              key={story.id}
              onClick={() => onPlayStory(story)}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-center group cursor-pointer"
            >
              <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border ${
                isLight ? 'bg-[#ebe4d8] border-[#e2d8ca]' : 'bg-[#161412] border-[#2b2620]'
              }`}>
                {/* Image */}
                <img
                  src={story.imageUrl}
                  alt={story.celebrity}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

                {/* Top Badge & Villa Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span
                    className={`text-[10px] uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full border ${badgeBg}`}
                  >
                    {story.category}
                  </span>
                  {story.villaName && (
                    <span className="text-[10px] text-[#dfd8cc] bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md truncate max-w-[170px]">
                      {story.villaName}
                    </span>
                  )}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c8a974]/80 group-hover:border-[#c8a974] transition-all duration-300 shadow-lg">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wider uppercase">
                    {story.celebrity}
                  </h3>
                  <p className="text-xs text-[#dcd6ca] mt-1 leading-snug line-clamp-2">
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8">
        <button
          onClick={() => handleScroll('left')}
          aria-label="Previous story"
          className={`transition-colors p-1 cursor-pointer ${
            isLight ? 'text-[#61594f] hover:text-[#1c1917]' : 'text-[#888177] hover:text-[#f3efe8]'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {dots.map((d, index) => (
            <button
              key={d}
              onClick={() => setActiveDot(index)}
              aria-label={`Slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === index
                  ? isLight ? 'w-3.5 h-1.5 bg-[#9c7d49]' : 'w-3.5 h-1.5 bg-[#c8a974]'
                  : isLight ? 'w-1.5 h-1.5 bg-[#dfd5c6] hover:bg-[#b0a594]' : 'w-1.5 h-1.5 bg-[#3b362f] hover:bg-[#5f574b]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => handleScroll('right')}
          aria-label="Next story"
          className={`transition-colors p-1 cursor-pointer ${
            isLight ? 'text-[#61594f] hover:text-[#1c1917]' : 'text-[#888177] hover:text-[#f3efe8]'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
