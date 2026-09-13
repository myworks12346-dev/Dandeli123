import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Bed, Bath, Heart, Clock, Utensils, Waves, ArrowRight, Sparkles } from 'lucide-react';
import { Property } from '../types';
import { useTheme } from '../context/ThemeContext';

interface PropertySectionProps {
  id: string;
  category?: string;
  title: string;
  subtitle: string;
  actionText: string;
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onViewAll?: () => void;
}

export const PropertySection: React.FC<PropertySectionProps> = ({
  id,
  category,
  title,
  subtitle,
  actionText,
  properties,
  onSelectProperty,
  onViewAll,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const { isLight } = useTheme();

  const toggleWishlist = (e: React.MouseEvent, propId: string) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [propId]: !prev[propId] }));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 380; // approximate card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      const newIndex =
        direction === 'left'
          ? Math.max(0, activeIndex - 1)
          : Math.min(properties.length - 1, activeIndex + 1);
      setActiveIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / 360);
      setActiveIndex(Math.min(properties.length - 1, Math.max(0, index)));
    }
  };

  return (
    <section id={id} className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-5">
        <div className="max-w-2xl">
          {category && (
            <div className={`text-xs font-semibold tracking-wider uppercase mb-1.5 ${
              isLight ? 'text-[#b8854c]' : 'text-[#d4aa73]'
            }`}>
              {category}
            </div>
          )}
          <h2 className={`font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight font-normal ${
            isLight ? 'text-[#1c1917]' : 'text-[#f6f2ec]'
          }`}>
            {title}
          </h2>
          <p className={`text-xs sm:text-sm mt-2 font-normal leading-relaxed tracking-normal ${
            isLight ? 'text-[#5e574d]' : 'text-[#a69e92]'
          }`}>
            {subtitle}
          </p>
        </div>

        {/* Action Button with Dandeli caramel gold color */}
        <button
          onClick={onViewAll}
          className="self-start sm:self-auto bg-[#b8854c] hover:bg-[#c9945a] text-white text-xs sm:text-sm px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer whitespace-nowrap"
        >
          {actionText}
        </button>
      </div>

      {/* Property/Package Cards Carousel Container */}
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {properties.map((prop) => {
            const isPackage = Boolean(prop.duration || prop.meals || prop.activities);

            return (
              <div
                key={prop.id}
                onClick={() => onSelectProperty(prop)}
                className={`flex-shrink-0 w-[84vw] max-w-[340px] sm:w-[360px] lg:w-[380px] snap-center sm:snap-start group/card cursor-pointer transition-all duration-300 hover:-translate-y-1.5 rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 border flex flex-col justify-between ${
                  isLight
                    ? 'bg-white border-[#e6decf] hover:border-[#b8854c]/50 shadow-sm hover:shadow-xl'
                    : 'bg-[#151310] border-[#29241e] hover:border-[#c9a66b]/50 shadow-sm hover:shadow-2xl'
                }`}
              >
                {/* Card Image Wrapper */}
                <div>
                  <div className={`relative aspect-[16/10.5] rounded-xl sm:rounded-2xl overflow-hidden border shadow-inner ${
                    isLight ? 'bg-[#ebe4d8] border-[#e2d8ca]' : 'bg-[#161412] border-[#27231e]'
                  }`}>
                    <img
                      src={prop.imageUrl}
                      alt={prop.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                    />

                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                    {/* Badge top-left */}
                    {prop.badge && (
                      <div className="absolute top-3 left-3 bg-[#b8854c]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-white/20">
                        <Sparkles className="w-3 h-3 text-[#ffecb3]" />
                        <span>{prop.badge}</span>
                      </div>
                    )}

                    {/* Wishlist Heart top-right */}
                    <button
                      onClick={(e) => toggleWishlist(e, prop.id)}
                      aria-label="Save to wishlist"
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white hover:text-[#c8a974] active:scale-90 transition-all cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          wishlist[prop.id] ? 'fill-[#c8a974] text-[#c8a974]' : 'text-white'
                        }`}
                      />
                    </button>

                    {/* Overlaid specs on Image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between items-center">
                      <div className="bg-black/75 backdrop-blur-md border border-white/15 rounded-full px-3 py-1 flex items-center gap-2 text-[10px] sm:text-[11px] text-[#ebe6de] shadow-md">
                        {isPackage ? (
                          <span className="flex items-center gap-1 font-medium text-[#ffd99f]">
                            <Clock className="w-3 h-3 text-[#c8a974] shrink-0" />
                            <span>{prop.duration || '1 Night / 2 Days'}</span>
                          </span>
                        ) : (
                          <>
                            <span className="flex items-center gap-1 shrink-0">
                              <Users className="w-3 h-3 text-[#c8a974] shrink-0" />
                              <span>{prop.guests} guests</span>
                            </span>
                            <span className="text-[#555047]">•</span>
                            <span className="flex items-center gap-1 shrink-0">
                              <Bed className="w-3 h-3 text-[#c8a974] shrink-0" />
                              <span>{prop.beds} beds</span>
                            </span>
                          </>
                        )}
                      </div>

                      {prop.pricePerNight && (
                        <div className="bg-[#b8854c] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
                          {prop.pricePerNight}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content Below Image */}
                  <div className="mt-3.5 px-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-serif text-lg sm:text-xl font-medium transition-colors line-clamp-1 ${
                        isLight
                          ? 'text-[#1c1917] group-hover/card:text-[#9c7d49]'
                          : 'text-[#f3efe8] group-hover/card:text-[#c8a974]'
                      }`}>
                        {prop.name}
                      </h3>
                    </div>

                    {/* Package or Room Highlights Breakdown */}
                    {isPackage ? (
                      <div className="mt-2.5 space-y-1.5 text-xs">
                        {prop.meals && (
                          <div className={`flex items-center gap-2 ${isLight ? 'text-[#4a4237]' : 'text-[#d6cebf]'}`}>
                            <Utensils className="w-3.5 h-3.5 text-[#b8854c] shrink-0" />
                            <span className="line-clamp-1 font-medium">{prop.meals}</span>
                          </div>
                        )}
                        {prop.activities && (
                          <div className={`flex items-start gap-2 ${isLight ? 'text-[#5e5548]' : 'text-[#b5ada0]'}`}>
                            <Waves className="w-3.5 h-3.5 text-[#b8854c] shrink-0 mt-0.5" />
                            <span className="line-clamp-2 leading-relaxed text-[11px] sm:text-xs">
                              {prop.activities}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mt-2 space-y-1">
                        {prop.tag && (
                          <div className={`text-[11px] font-medium flex items-center gap-1.5 ${
                            isLight ? 'text-[#b8854c]' : 'text-[#d4aa73]'
                          }`}>
                            <Sparkles className="w-3 h-3 shrink-0" />
                            <span className="line-clamp-1">{prop.tag}</span>
                          </div>
                        )}
                        <p className={`text-xs tracking-wide line-clamp-1 ${
                          isLight ? 'text-[#6e675d]' : 'text-[#8f887e]'
                        }`}>
                          {prop.location}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className={`mt-4 pt-3 border-t flex items-center justify-between gap-2 px-1 ${
                  isLight ? 'border-[#eee7da]' : 'border-[#26211a]'
                }`}>
                  <span className={`text-[11px] font-medium ${isLight ? 'text-[#857a6c]' : 'text-[#9e9587]'}`}>
                    {prop.location}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProperty(prop);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#b8854c] hover:bg-[#c9945a] text-white text-xs font-semibold shadow-sm hover:shadow transition-all group-hover/card:scale-102 cursor-pointer"
                  >
                    <span>View More</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Arrows & Indicators */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous villas"
            disabled={activeIndex === 0}
            className={`p-1.5 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer ${
              isLight ? 'text-[#61594f] hover:text-[#1c1917]' : 'text-[#9e968b] hover:text-[#f3efe8]'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination dots */}
          <div className="flex items-center gap-1.5">
            {properties.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: idx * 360,
                      behavior: 'smooth',
                    });
                    setActiveIndex(idx);
                  }
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? isLight ? 'w-4 bg-[#9c7d49]' : 'w-4 bg-[#c8a974]'
                    : isLight ? 'w-1.5 bg-[#dfd5c6] hover:bg-[#b0a594]' : 'w-1.5 bg-[#3d372f] hover:bg-[#6e6456]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            aria-label="Next villas"
            disabled={activeIndex >= properties.length - 1}
            className={`p-1.5 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer ${
              isLight ? 'text-[#61594f] hover:text-[#1c1917]' : 'text-[#9e968b] hover:text-[#f3efe8]'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
