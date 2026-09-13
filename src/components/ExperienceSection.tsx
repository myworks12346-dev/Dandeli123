import React, { useState } from 'react';
import { Camera, MapPin, Sparkles, X, ChevronLeft, ChevronRight, Maximize2, Share2, Compass } from 'lucide-react';
import { ExperienceItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  onSelectExperience: (exp: ExperienceItem) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  onSelectExperience,
}) => {
  const { isLight } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'river' | 'jungle' | 'stays' | 'dining'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Gallery' },
    { id: 'river', label: 'River & Rapids' },
    { id: 'jungle', label: 'Jungle & Wildlife' },
    { id: 'stays', label: 'Stays & Stargazing' },
    { id: 'dining', label: 'Campfire & Dining' },
  ] as const;

  const filteredExperiences = selectedCategory === 'all'
    ? experiences
    : experiences.filter((e) => e.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredExperiences.length - 1));
    }
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredExperiences.length - 1 ? prev + 1 : 0));
    }
  };

  const activeItem = lightboxIndex !== null ? filteredExperiences[lightboxIndex] : null;

  return (
    <section id="gallery-and-experiences" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-5">
        <div className="max-w-2xl">
          <div className={`text-xs font-semibold tracking-wider uppercase mb-1.5 flex items-center gap-1.5 ${
            isLight ? 'text-[#b8854c]' : 'text-[#d4aa73]'
          }`}>
            <Camera className="w-3.5 h-3.5" />
            <span>Moments Captured in Dandeli</span>
          </div>
          <h2 className={`font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight font-normal ${
            isLight ? 'text-[#1c1917]' : 'text-[#f6f2ec]'
          }`}>
            Gallery & Experiences
          </h2>
          <p className={`text-xs sm:text-sm mt-2 font-normal leading-relaxed tracking-normal ${
            isLight ? 'text-[#5e574d]' : 'text-[#a69e92]'
          }`}>
            A visual tapestry of roaring rapids, misty canopy sunrises, crackling campfire nights, and untouched forest escapes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-medium px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#b8854c] text-white shadow-md shadow-[#b8854c]/20 scale-102'
                    : isLight
                    ? 'bg-[#ede6da] text-[#5c5446] hover:bg-[#e2d8c7] hover:text-[#1c1917]'
                    : 'bg-[#1e1a16] text-[#b0a89a] hover:bg-[#2b251f] hover:text-[#f3efe8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid (Bento / Masonry Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
        {filteredExperiences.map((exp, idx) => {
          // Dynamic bento layout spans
          const isLargeCard = idx === 0 || (idx === 3 && filteredExperiences.length > 4);
          const colSpanClass = isLargeCard
            ? 'lg:col-span-7 aspect-[16/11] sm:aspect-[16/10]'
            : 'lg:col-span-5 aspect-[16/10] sm:aspect-[4/3]';

          return (
            <div
              key={exp.id}
              onClick={() => handleOpenLightbox(idx)}
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border ${colSpanClass} ${
                isLight ? 'bg-[#ebe4d8] border-[#e2d8ca]' : 'bg-[#161412] border-[#2b2620]'
              }`}
            >
              {/* Image */}
              <img
                src={exp.imageUrl}
                alt={exp.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Dynamic Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/40 transition-colors" />

              {/* Tag / Location Pill Top Left */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 z-10">
                {exp.tag && (
                  <span className="bg-black/60 backdrop-blur-md border border-white/20 text-[#ffdf99] text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#ffd074]" />
                    {exp.tag}
                  </span>
                )}
              </div>

              {/* Expand Icon Button Top Right */}
              <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:text-[#c8a974] hover:bg-black/80">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Content Bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10">
                {exp.location && (
                  <div className="text-[10px] sm:text-[11px] text-[#ded7cb] flex items-center gap-1 mb-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#c8a974] shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                )}
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-white font-medium group-hover:text-[#ffd68f] transition-colors line-clamp-1">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#ded7cb] mt-1 line-clamp-2 leading-relaxed opacity-90">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activeItem && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-xl animate-fadeIn"
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#ffd68f] hover:bg-black transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrevLightbox}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#ffd68f] hover:bg-black/90 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextLightbox}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#ffd68f] hover:bg-black/90 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl overflow-hidden bg-[#12100e] border border-[#3b3329] shadow-2xl flex flex-col"
          >
            {/* Image Stage */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain sm:object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>

            {/* Caption & Actions Footer */}
            <div className="p-5 sm:p-6 bg-[#181512] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#2e271e]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  {activeItem.tag && (
                    <span className="bg-[#b8854c]/80 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full">
                      {activeItem.tag}
                    </span>
                  )}
                  {activeItem.location && (
                    <span className="text-xs text-[#cfc7ba] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#c8a974]" />
                      {activeItem.location}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#ded7cb] mt-1 max-w-xl leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
                <button
                  onClick={() => {
                    handleCloseLightbox();
                    onSelectExperience(activeItem);
                  }}
                  className="bg-[#b8854c] hover:bg-[#c9945a] text-white text-xs sm:text-sm px-5 py-2.5 rounded-full font-semibold shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Book This Experience</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

