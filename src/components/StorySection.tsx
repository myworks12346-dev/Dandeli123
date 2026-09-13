import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StoryItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface StorySectionProps {
  stories: StoryItem[];
  onPlayStory: (story: StoryItem) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ stories, onPlayStory }) => {
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isLight } = useTheme();

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector<HTMLElement>('[data-story-card]');
      const cardWidth = card ? card.offsetWidth + 20 : 320;
      const scrollAmt = dir === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmt, behavior: 'smooth' });
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll<HTMLElement>('[data-story-card]');
      if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        setActiveDot(index);
      }
    }
  };

  const handleContainerScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector<HTMLElement>('[data-story-card]');
      const cardWidth = card ? card.offsetWidth + 20 : 320;
      const currentIdx = Math.round(container.scrollLeft / cardWidth);
      setActiveDot(Math.max(0, Math.min(stories.length - 1, currentIdx)));
    }
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
        onScroll={handleContainerScroll}
        className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 scroll-smooth"
      >
        {stories.map((story) => (
          <div
            key={story.id}
            data-story-card
            onClick={() => onPlayStory(story)}
            className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] snap-center group cursor-pointer"
          >
            <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border ${
              isLight ? 'bg-[#ebe4d8] border-[#e2d8ca]' : 'bg-[#161412] border-[#2b2620]'
            }`}>
              {/* Clean Photo Image */}
              <img
                src={story.imageUrl}
                alt={story.celebrity || 'Dandeli story'}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8">
        <button
          onClick={() => handleScroll('left')}
          disabled={activeDot === 0}
          aria-label="Previous story"
          className={`p-2 rounded-full border transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
            isLight
              ? 'border-[#dfd5c6] text-[#61594f] hover:bg-[#f0e8dc] hover:text-[#1c1917]'
              : 'border-[#2c2620] text-[#a69e92] hover:bg-[#1f1b17] hover:text-[#f3efe8]'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to story ${index + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === index
                  ? isLight
                    ? 'w-5 h-2 bg-[#9c7d49]'
                    : 'w-5 h-2 bg-[#c8a974]'
                  : isLight
                    ? 'w-2 h-2 bg-[#dfd5c6] hover:bg-[#b0a594]'
                    : 'w-2 h-2 bg-[#3b362f] hover:bg-[#5f574b]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => handleScroll('right')}
          disabled={activeDot === stories.length - 1}
          aria-label="Next story"
          className={`p-2 rounded-full border transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
            isLight
              ? 'border-[#dfd5c6] text-[#61594f] hover:bg-[#f0e8dc] hover:text-[#1c1917]'
              : 'border-[#2c2620] text-[#a69e92] hover:bg-[#1f1b17] hover:text-[#f3efe8]'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
