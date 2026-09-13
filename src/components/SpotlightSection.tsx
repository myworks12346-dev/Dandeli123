import React, { useState, useRef } from 'react';
import { 
  Waves, 
  Compass, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Trees, 
  Navigation, 
  Bike, 
  Zap, 
  Check, 
  Phone, 
  X,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SpotlightItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface SpotlightSectionProps {
  items: SpotlightItem[];
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({ items }) => {
  const { isLight } = useTheme();
  const [activeFilter, setActiveFilter] = useState<'all' | 'water' | 'forest' | 'adventure'>('all');
  const [selectedActivity, setSelectedActivity] = useState<SpotlightItem | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter activities based on tab
  const filteredItems = items.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'water') {
      return ['white-water-rafting', 'river-swimming', 'kayaking', 'river-boating'].includes(item.id);
    }
    if (activeFilter === 'forest') {
      return ['jungle-walk', 'cycling'].includes(item.id);
    }
    if (activeFilter === 'adventure') {
      return ['white-water-rafting', 'river-crossing', 'zorbing', 'kayaking'].includes(item.id);
    }
    return true;
  });

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  const getActivityIcon = (id: string) => {
    switch (id) {
      case 'white-water-rafting':
        return <Waves className="w-3.5 h-3.5 text-[#b8854c]" />;
      case 'river-swimming':
        return <Waves className="w-3.5 h-3.5 text-[#38bdf8]" />;
      case 'jungle-walk':
        return <Trees className="w-3.5 h-3.5 text-[#10b981]" />;
      case 'kayaking':
        return <Navigation className="w-3.5 h-3.5 text-[#b8854c]" />;
      case 'river-crossing':
        return <Zap className="w-3.5 h-3.5 text-[#f59e0b]" />;
      case 'river-boating':
        return <Compass className="w-3.5 h-3.5 text-[#06b6d4]" />;
      case 'cycling':
        return <Bike className="w-3.5 h-3.5 text-[#10b981]" />;
      case 'zorbing':
        return <Sparkles className="w-3.5 h-3.5 text-[#f43f5e]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#b8854c]" />;
    }
  };

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setSelectedActivity(null);
    }, 2800);
  };

  return (
    <section id="experiences-activities" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-3 border bg-[#b8854c]/10 border-[#b8854c]/30 text-[#b8854c]">
            <Sparkles className="w-3 h-3" />
            <span>Experiences Worth Remembering</span>
          </div>

          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight tracking-tight ${
            isLight ? 'text-[#1c1917]' : 'text-[#f5f1eb]'
          }`}>
            Do more than visit Dandeli.
          </h2>

          <p className={`text-sm sm:text-base mt-3 font-normal leading-relaxed ${
            isLight ? 'text-[#5e564a]' : 'text-[#a9a193]'
          }`}>
            The best memories aren't made by ticking places off a list. They're made when you're in the middle of something unforgettable.
          </p>
        </div>

        {/* Filter Pills & Navigation Controls */}
        <div className="flex items-center gap-3 self-start md:self-end flex-wrap">
          <div className={`flex flex-wrap gap-1.5 p-1 rounded-full border ${
            isLight ? 'bg-[#f4efe8] border-[#e5dcce]' : 'bg-[#181512] border-[#29241e]'
          }`}>
            {[
              { id: 'all', label: 'All' },
              { id: 'water', label: 'River & Water' },
              { id: 'forest', label: 'Jungle & Trails' },
              { id: 'adventure', label: 'Adrenaline' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id as any);
                  setTimeout(checkScroll, 150);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#b8854c] text-white shadow-sm font-semibold'
                    : isLight
                      ? 'text-[#6b6255] hover:text-[#1c1917]'
                      : 'text-[#9c958a] hover:text-[#f3efe8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Carousel Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'bg-white border-[#ded4c5] text-[#2c2720] hover:bg-[#f3ede3] disabled:opacity-30 disabled:cursor-not-allowed'
                  : 'bg-[#1e1b17] border-[#362f26] text-[#e8e2d8] hover:bg-[#2b2620] disabled:opacity-30 disabled:cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'bg-white border-[#ded4c5] text-[#2c2720] hover:bg-[#f3ede3] disabled:opacity-30 disabled:cursor-not-allowed'
                  : 'bg-[#1e1b17] border-[#362f26] text-[#e8e2d8] hover:bg-[#2b2620] disabled:opacity-30 disabled:cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedActivity(item)}
              className={`flex-shrink-0 w-[84vw] max-w-[320px] sm:w-[320px] lg:w-[340px] snap-center sm:snap-start group/card rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 transition-all duration-300 shadow-sm border flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 ${
                isLight
                  ? 'bg-white border-[#e5dcce] hover:border-[#b8854c]/60 hover:shadow-xl'
                  : 'bg-[#141210] border-[#26211a] hover:border-[#b8854c]/60 hover:shadow-2xl'
              }`}
            >
              <div>
                {/* Image Frame with Aspect Ratio */}
                <div className={`relative aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden border shadow-inner ${
                  isLight ? 'bg-[#ebe4d8] border-[#e2d8ca]' : 'bg-[#1a1714] border-[#28241f]'
                }`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/card:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                  {/* Top Badge */}
                  {item.badge && (
                    <div className="absolute top-2.5 left-2.5 bg-[#b8854c]/90 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-white/20">
                      {getActivityIcon(item.id)}
                      <span>{item.badge}</span>
                    </div>
                  )}

                  {/* Duration / Tag Overlay at Bottom */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between items-center">
                    {item.duration && (
                      <span className="bg-black/75 backdrop-blur-md border border-white/15 rounded-full px-2.5 py-0.5 text-[10px] text-[#ebe6de] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#c8a974]" />
                        <span>{item.duration}</span>
                      </span>
                    )}
                    {item.tag && (
                      <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-3.5 px-1">
                  <h3 className={`font-serif text-lg font-medium transition-colors leading-snug ${
                    isLight
                      ? 'text-[#1c1917] group-hover/card:text-[#b8854c]'
                      : 'text-[#f5f1eb] group-hover/card:text-[#d4aa73]'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs mt-1.5 leading-relaxed line-clamp-2 ${
                    isLight ? 'text-[#61594e]' : 'text-[#a29a8d]'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Action Link */}
              <div className={`mt-4 pt-3 border-t flex items-center justify-between px-1 ${
                isLight ? 'border-[#eee6d8]' : 'border-[#26211a]'
              }`}>
                <span className={`text-[11px] font-medium ${
                  isLight ? 'text-[#827768]' : 'text-[#8a8276]'
                }`}>
                  Dandeli Wild Safari
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#b8854c] group-hover/card:translate-x-0.5 transition-transform">
                  <span>Book Slot</span>
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Mobile Scroll Buttons on Hover */}
        <div className="flex sm:hidden justify-center items-center gap-3 mt-4">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`p-2 rounded-full border transition-all ${
              isLight
                ? 'bg-white border-[#ded4c5] text-[#2c2720] disabled:opacity-30'
                : 'bg-[#1e1b17] border-[#362f26] text-[#e8e2d8] disabled:opacity-30'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className={`text-[11px] ${isLight ? 'text-[#7d7364]' : 'text-[#9c9384]'}`}>
            Swipe to explore activities
          </span>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`p-2 rounded-full border transition-all ${
              isLight
                ? 'bg-white border-[#ded4c5] text-[#2c2720] disabled:opacity-30'
                : 'bg-[#1e1b17] border-[#362f26] text-[#e8e2d8] disabled:opacity-30'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Activity Booking / Details Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className={`relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border ${
            isLight ? 'bg-[#fcfaf7] border-[#e6decf]' : 'bg-[#161412] border-[#2e2820]'
          }`}>
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[16/9] w-full">
              <img
                src={selectedActivity.imageUrl}
                alt={selectedActivity.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#ffdf99] font-bold bg-[#b8854c]/90 px-3 py-1 rounded-full border border-white/20 inline-block mb-1.5">
                  {selectedActivity.badge || 'Dandeli Adventure'}
                </span>
                <h3 className="font-serif text-2xl text-white font-medium">
                  {selectedActivity.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className={`text-sm leading-relaxed mb-4 ${
                isLight ? 'text-[#474036]' : 'text-[#d2cbbe]'
              }`}>
                {selectedActivity.description}
              </p>

              <div className={`p-3.5 rounded-2xl border mb-5 flex items-center justify-between text-xs ${
                isLight ? 'bg-[#f4efe8] border-[#e2d8ca] text-[#554d42]' : 'bg-[#1d1a16] border-[#312a21] text-[#c7bfb1]'
              }`}>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#b8854c]" />
                  <span>Duration: <strong>{selectedActivity.duration || '1-2 Hours'}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                  <span>Certified Instructors & Gear Included</span>
                </div>
              </div>

              {inquirySubmitted ? (
                <div className="p-4 rounded-xl bg-[#14261b] border border-[#2d6a45] text-center">
                  <h4 className="text-sm font-semibold text-[#f0fdf4]">Slot Reserved!</h4>
                  <p className="text-xs text-[#bbf7d0] mt-1">
                    Our Dandeli activity coordinator will message you with time slot options and instructions.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      required
                      placeholder="Your Name"
                      className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                        isLight
                          ? 'bg-white border-[#d8cdbc] text-[#1c1917] focus:border-[#b8854c]'
                          : 'bg-[#201c18] border-[#383229] text-[#f0ebe3] focus:border-[#b8854c]'
                      }`}
                    />
                    <input
                      required
                      type="tel"
                      placeholder="WhatsApp Number"
                      className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                        isLight
                          ? 'bg-white border-[#d8cdbc] text-[#1c1917] focus:border-[#b8854c]'
                          : 'bg-[#201c18] border-[#383229] text-[#f0ebe3] focus:border-[#b8854c]'
                      }`}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href="tel:+919175357845"
                      className={`inline-flex items-center gap-1.5 text-xs hover:underline ${
                        isLight ? 'text-[#b8854c]' : 'text-[#d4aa73]'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Instant Support: +91 9175357845
                    </a>

                    <button
                      type="submit"
                      className="bg-[#b8854c] hover:bg-[#c9945a] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      Book This Activity
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

