import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, Calendar as CalendarIcon, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BookingSearchProps {
  onSearch: (filters: { destination: string; checkIn: string; checkOut: string; guests: number }) => void;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const BookingSearch: React.FC<BookingSearchProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState('Dandeli, Karnataka');
  const [isDestOpen, setIsDestOpen] = useState(false);
  
  // Date state
  const [checkInDate, setCheckInDate] = useState<Date | null>(() => {
    // Default to upcoming weekend or tomorrow
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d;
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarFocus, setCalendarFocus] = useState<'checkIn' | 'checkOut'>('checkIn');
  
  // Current visible month
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const [guests, setGuests] = useState(2);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const { isLight } = useTheme();

  const searchContainerRef = useRef<HTMLDivElement>(null);

  const destinations = [
    'Dandeli, Karnataka',
    'Kali River Sanctuary, Dandeli',
    'Bison River Wilderness, Dandeli',
    'Hornbill Forest Canopy, Dandeli',
    'Syntheri Rocks Valley, Dandeli',
    'Kulgi Wildlife Zone, Dandeli',
    'Ganeshgudi Rapids, Dandeli',
    'Anshi National Park Foothills'
  ];

  // Close popups on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDestOpen(false);
        setIsCalendarOpen(false);
        setIsGuestsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDateDisplay = (date: Date | null) => {
    if (!date) return '';
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()].slice(0, 3);
    return `${day} ${month}`;
  };

  const formatFullDateDisplay = (date: Date | null) => {
    if (!date) return 'Select date';
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()].slice(0, 3);
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleSearchClick = () => {
    onSearch({
      destination: destination || 'Dandeli, Karnataka',
      checkIn: checkInDate ? formatFullDateDisplay(checkInDate) : 'Flexible',
      checkOut: checkOutDate ? formatFullDateDisplay(checkOutDate) : 'Flexible',
      guests
    });
  };

  // Calendar Day Generation helpers
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (date: Date) => {
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    if (calendarFocus === 'checkIn') {
      setCheckInDate(targetDate);
      if (!checkOutDate || checkOutDate <= targetDate) {
        const nextDay = new Date(targetDate);
        nextDay.setDate(targetDate.getDate() + 2);
        setCheckOutDate(nextDay);
      }
      setCalendarFocus('checkOut');
    } else {
      if (checkInDate && targetDate <= checkInDate) {
        setCheckInDate(targetDate);
        const nextDay = new Date(targetDate);
        nextDay.setDate(targetDate.getDate() + 1);
        setCheckOutDate(nextDay);
        setCalendarFocus('checkOut');
      } else {
        setCheckOutDate(targetDate);
      }
    }
  };

  const isSameDay = (d1: Date | null, d2: Date | null) => {
    if (!d1 || !d2) return false;
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const isDayInRange = (date: Date) => {
    if (!checkInDate || !checkOutDate) return false;
    const time = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    const inTime = new Date(checkInDate.getFullYear(), checkInDate.getMonth(), checkInDate.getDate()).getTime();
    const outTime = new Date(checkOutDate.getFullYear(), checkOutDate.getMonth(), checkOutDate.getDate()).getTime();
    return time > inTime && time < outTime;
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return target.getTime() < today.getTime();
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Quick preset shortcuts
  const applyPreset = (type: 'thisWeekend' | 'nextWeekend' | 'nextWeek') => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (type === 'thisWeekend') {
      const day = today.getDay();
      const distToFri = (5 - day + 7) % 7 || 7;
      const fri = new Date(today);
      fri.setDate(today.getDate() + distToFri);
      const sun = new Date(fri);
      sun.setDate(fri.getDate() + 2);
      setCheckInDate(fri);
      setCheckOutDate(sun);
      setCurrentMonth(new Date(fri.getFullYear(), fri.getMonth(), 1));
    } else if (type === 'nextWeekend') {
      const day = today.getDay();
      const distToFri = (5 - day + 7) % 7 + 7;
      const fri = new Date(today);
      fri.setDate(today.getDate() + distToFri);
      const sun = new Date(fri);
      sun.setDate(fri.getDate() + 2);
      setCheckInDate(fri);
      setCheckOutDate(sun);
      setCurrentMonth(new Date(fri.getFullYear(), fri.getMonth(), 1));
    } else if (type === 'nextWeek') {
      const start = new Date(today);
      start.setDate(today.getDate() + 7);
      const end = new Date(start);
      end.setDate(start.getDate() + 4);
      setCheckInDate(start);
      setCheckOutDate(end);
      setCurrentMonth(new Date(start.getFullYear(), start.getMonth(), 1));
    }
  };

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return null;
    const diffTime = checkOutDate.getTime() - checkInDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : null;
  };

  const nights = calculateNights();

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysCount = getDaysInMonth(year, month);
  const startDay = getFirstDayOfMonth(year, month);

  return (
    <div ref={searchContainerRef} className="relative w-full max-w-4xl mx-auto z-30 px-2 sm:px-0">
      {/* Search Bar Container - Responsive Capsule */}
      <div
        id="booking-search-bar"
        className={`w-full backdrop-blur-xl rounded-2xl md:rounded-full p-3 sm:p-2 sm:pl-6 sm:pr-2.5 shadow-2xl flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 gap-2.5 md:gap-0 border ${
          isLight
            ? 'bg-white/95 hover:bg-white border-[#dfd5c6] text-[#1c1917]'
            : 'bg-[#12100d]/90 hover:bg-[#12100d]/95 border-white/20 text-white'
        }`}
      >
        {/* Destination Field */}
        <div
          id="search-destination-trigger"
          className="relative flex-1 px-2.5 sm:px-3 py-1 cursor-pointer text-left group flex items-center justify-between"
          onClick={() => {
            setIsDestOpen(!isDestOpen);
            setIsCalendarOpen(false);
            setIsGuestsOpen(false);
          }}
        >
          <div className="min-w-0 flex-1">
            <div className={`text-[10px] sm:text-[11px] font-medium tracking-wide whitespace-nowrap ${
              isLight ? 'text-[#7d7363]' : 'text-white/75'
            }`}>
              Where are you going?
            </div>
            <div className={`text-xs sm:text-[14px] font-bold truncate mt-0.5 ${
              isLight ? 'text-[#1c1917]' : 'text-white'
            }`}>
              {destination || 'Dandeli, Karnataka'}
            </div>
          </div>
          <ChevronDown
            className={`w-4 h-4 shrink-0 ml-2 transition-transform duration-200 ${
              isDestOpen ? 'rotate-180' : ''
            } ${isLight ? 'text-[#7d7363]' : 'text-white/60'}`}
          />

          {/* Destination Dropdown */}
          {isDestOpen && (
            <div
              className={`absolute left-0 top-full mt-3 w-full md:w-72 rounded-2xl p-2 shadow-2xl z-50 text-left border backdrop-blur-xl ${
                isLight
                  ? 'bg-white border-[#dfd5c6] text-[#1c1917]'
                  : 'bg-[#181512] border-[#38332c] text-[#dcd7cd]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`text-[10px] uppercase px-3 py-2 font-semibold tracking-wider ${
                isLight ? 'text-[#8c7f6e]' : 'text-[#a3998b]'
              }`}>
                Popular Dandeli Destinations
              </div>
              {destinations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => {
                    setDestination(loc);
                    setIsDestOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 text-xs rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    destination === loc
                      ? isLight ? 'bg-[#b8854c]/15 text-[#b8854c] font-semibold' : 'bg-[#b8854c]/25 text-[#f0e8dc] font-semibold'
                      : isLight
                      ? 'text-[#2e2924] hover:bg-[#f6f2ec] hover:text-[#9c7d49]'
                      : 'text-[#dcd7cd] hover:bg-[#221f1c] hover:text-[#c9a66b]'
                  }`}
                >
                  <span>{loc}</span>
                  {destination === loc && <Check className="w-4 h-4 text-[#b8854c]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Horizontal Divider */}
        <div className={`h-[1px] w-full md:hidden ${isLight ? 'bg-[#dfd5c6]' : 'bg-white/15'}`} />

        {/* Desktop Vertical Divider */}
        <div className={`hidden md:block h-7 sm:h-8 w-[1px] mx-1 sm:mx-2.5 shrink-0 ${
          isLight ? 'bg-[#dfd5c6]' : 'bg-white/20'
        }`} />

        {/* Row 2 on Mobile, Inline on Desktop */}
        <div className="flex items-center justify-between md:contents w-full">
          {/* Dates Sub-Group */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* Check-In Button */}
            <button
              type="button"
              id="search-checkin-trigger"
              className={`px-2 sm:px-3 py-1 text-left cursor-pointer min-w-[75px] sm:min-w-[105px] rounded-xl transition-all ${
                isCalendarOpen && calendarFocus === 'checkIn'
                  ? isLight ? 'bg-[#b8854c]/15 ring-1 ring-[#b8854c]' : 'bg-[#b8854c]/25 ring-1 ring-[#b8854c]'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
              onClick={() => {
                setCalendarFocus('checkIn');
                setIsCalendarOpen(true);
                setIsDestOpen(false);
                setIsGuestsOpen(false);
              }}
            >
              <div className={`text-[10px] sm:text-[11px] font-medium tracking-wide whitespace-nowrap ${
                isLight ? 'text-[#7d7363]' : 'text-white/75'
              }`}>
                Check-in
              </div>
              <div className={`text-xs sm:text-[14px] font-bold mt-0.5 truncate flex items-center gap-1 ${
                checkInDate
                  ? isLight ? 'text-[#1c1917]' : 'text-white'
                  : isLight ? 'text-[#8c8172]' : 'text-white/70'
              }`}>
                <CalendarIcon className="w-3.5 h-3.5 text-[#b8854c] shrink-0 inline md:hidden" />
                <span>{checkInDate ? formatDateDisplay(checkInDate) : 'Select date'}</span>
              </div>
            </button>

            {/* Arrow between dates */}
            <div className={`px-0.5 shrink-0 ${isLight ? 'text-[#8c8172]' : 'text-white/60'}`}>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
            </div>

            {/* Check-Out Button */}
            <button
              type="button"
              id="search-checkout-trigger"
              className={`px-2 sm:px-3 py-1 text-left cursor-pointer min-w-[75px] sm:min-w-[105px] rounded-xl transition-all ${
                isCalendarOpen && calendarFocus === 'checkOut'
                  ? isLight ? 'bg-[#b8854c]/15 ring-1 ring-[#b8854c]' : 'bg-[#b8854c]/25 ring-1 ring-[#b8854c]'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
              onClick={() => {
                setCalendarFocus('checkOut');
                setIsCalendarOpen(true);
                setIsDestOpen(false);
                setIsGuestsOpen(false);
              }}
            >
              <div className={`text-[10px] sm:text-[11px] font-medium tracking-wide whitespace-nowrap ${
                isLight ? 'text-[#7d7363]' : 'text-white/75'
              }`}>
                Check-out
              </div>
              <div className={`text-xs sm:text-[14px] font-bold mt-0.5 truncate flex items-center gap-1 ${
                checkOutDate
                  ? isLight ? 'text-[#1c1917]' : 'text-white'
                  : isLight ? 'text-[#8c8172]' : 'text-white/70'
              }`}>
                <CalendarIcon className="w-3.5 h-3.5 text-[#b8854c] shrink-0 inline md:hidden" />
                <span>{checkOutDate ? formatDateDisplay(checkOutDate) : 'Select date'}</span>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className={`h-7 sm:h-8 w-[1px] mx-1 sm:mx-2.5 shrink-0 ${isLight ? 'bg-[#dfd5c6]' : 'bg-white/20'}`} />

          {/* Guests Field */}
          <div
            id="search-guests-trigger"
            className="relative px-2 sm:px-3 py-1 cursor-pointer text-left group min-w-[65px] sm:min-w-[95px]"
            onClick={() => {
              setIsGuestsOpen(!isGuestsOpen);
              setIsDestOpen(false);
              setIsCalendarOpen(false);
            }}
          >
            <div className={`text-[10px] sm:text-[11px] font-medium tracking-wide whitespace-nowrap ${
              isLight ? 'text-[#7d7363]' : 'text-white/75'
            }`}>
              Guests
            </div>
            <div className={`text-xs sm:text-[14px] font-bold mt-0.5 whitespace-nowrap ${
              isLight ? 'text-[#1c1917]' : 'text-white'
            }`}>
              {guests} {guests === 1 ? 'Guest' : 'Guests'}
            </div>

            {/* Guests Selector Dropdown */}
            {isGuestsOpen && (
              <div
                className={`absolute right-0 top-full mt-3 w-56 rounded-2xl p-4 shadow-2xl z-50 text-left border backdrop-blur-xl ${
                  isLight
                    ? 'bg-white border-[#dfd5c6] text-[#1c1917]'
                    : 'bg-[#181512] border-[#38332c] text-[#dfd9ce]'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between py-1">
                  <div>
                    <span className="text-xs font-semibold block">Total Guests</span>
                    <span className="text-[10px] text-[#8c7f6e] block">Ages 2 and above</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-semibold cursor-pointer transition-colors ${
                        isLight
                          ? 'border-[#d0c6b6] text-[#1c1917] hover:bg-[#f5f1eb]'
                          : 'border-[#443e36] text-white hover:bg-[#221f1c]'
                      }`}
                    >
                      -
                    </button>
                    <span className={`text-sm font-bold w-4 text-center ${isLight ? 'text-[#1c1917]' : 'text-white'}`}>{guests}</span>
                    <button
                      type="button"
                      onClick={() => setGuests(guests + 1)}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-semibold cursor-pointer transition-colors ${
                        isLight
                          ? 'border-[#d0c6b6] text-[#1c1917] hover:bg-[#f5f1eb]'
                          : 'border-[#443e36] text-white hover:bg-[#221f1c]'
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGuestsOpen(false)}
                  className="w-full mt-3 py-2 bg-[#b8854c] hover:bg-[#c9945a] text-white text-xs font-semibold rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Apply Guests
                </button>
              </div>
            )}
          </div>

          {/* Search Action Button */}
          <div className="pl-1 sm:pl-2 shrink-0">
            <button
              id="hero-search-submit"
              onClick={handleSearchClick}
              aria-label="Search villas"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#b8854c] hover:bg-[#c9945a] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.2]" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Calendar Popover */}
      {isCalendarOpen && (
        <div
          id="booking-calendar-popover"
          className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[94vw] max-w-sm sm:max-w-md rounded-2xl p-4 sm:p-5 shadow-2xl z-50 border backdrop-blur-2xl transition-all duration-200 ${
            isLight
              ? 'bg-white/98 border-[#dfd5c6] text-[#1c1917]'
              : 'bg-[#161310]/98 border-[#3d362d] text-[#f4efe8]'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Month Navigation & Close */}
          <div className="flex items-center justify-between pb-3 border-b border-inherit">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-[#b8854c]" />
              <span className="font-serif font-semibold text-base sm:text-lg">
                {MONTH_NAMES[month]} {year}
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={prevMonth}
                aria-label="Previous month"
                className={`p-2 rounded-full hover:bg-neutral-500/15 cursor-pointer transition-colors ${
                  isLight ? 'text-[#1c1917]' : 'text-white'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextMonth}
                aria-label="Next month"
                className={`p-2 rounded-full hover:bg-neutral-500/15 cursor-pointer transition-colors ${
                  isLight ? 'text-[#1c1917]' : 'text-white'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsCalendarOpen(false)}
                aria-label="Close calendar"
                className={`p-2 ml-1 rounded-full hover:bg-neutral-500/15 cursor-pointer transition-colors ${
                  isLight ? 'text-[#7d7363]' : 'text-white/60'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="flex items-center gap-1.5 my-3 overflow-x-auto pb-1 text-[11px]">
            <button
              type="button"
              onClick={() => applyPreset('thisWeekend')}
              className={`px-2.5 py-1 rounded-full border whitespace-nowrap cursor-pointer transition-colors ${
                isLight ? 'border-[#dfd5c6] hover:bg-[#f6f2ec] text-[#4d4439]' : 'border-white/15 hover:bg-white/10 text-white/80'
              }`}
            >
              This Weekend
            </button>
            <button
              type="button"
              onClick={() => applyPreset('nextWeekend')}
              className={`px-2.5 py-1 rounded-full border whitespace-nowrap cursor-pointer transition-colors ${
                isLight ? 'border-[#dfd5c6] hover:bg-[#f6f2ec] text-[#4d4439]' : 'border-white/15 hover:bg-white/10 text-white/80'
              }`}
            >
              Next Weekend
            </button>
            <button
              type="button"
              onClick={() => applyPreset('nextWeek')}
              className={`px-2.5 py-1 rounded-full border whitespace-nowrap cursor-pointer transition-colors ${
                isLight ? 'border-[#dfd5c6] hover:bg-[#f6f2ec] text-[#4d4439]' : 'border-white/15 hover:bg-white/10 text-white/80'
              }`}
            >
              Next Week (4N)
            </button>
          </div>

          {/* Active selection indicator banner */}
          <div className="flex items-center justify-between mb-3 text-xs bg-neutral-500/10 p-2 rounded-xl">
            <div className="flex items-center gap-2 flex-1">
              <button
                type="button"
                onClick={() => setCalendarFocus('checkIn')}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-all ${
                  calendarFocus === 'checkIn'
                    ? 'bg-[#b8854c] text-white font-bold shadow-sm'
                    : isLight ? 'text-[#5e5344] hover:bg-white/50' : 'text-white/70 hover:bg-white/10'
                }`}
              >
                In: {checkInDate ? formatDateDisplay(checkInDate) : 'Select'}
              </button>
              <span className="text-xs text-[#b8854c] font-bold">→</span>
              <button
                type="button"
                onClick={() => setCalendarFocus('checkOut')}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-all ${
                  calendarFocus === 'checkOut'
                    ? 'bg-[#b8854c] text-white font-bold shadow-sm'
                    : isLight ? 'text-[#5e5344] hover:bg-white/50' : 'text-white/70 hover:bg-white/10'
                }`}
              >
                Out: {checkOutDate ? formatDateDisplay(checkOutDate) : 'Select'}
              </button>
            </div>
            {nights && (
              <span className="text-[11px] font-semibold text-[#b8854c] bg-[#b8854c]/10 px-2 py-0.5 rounded-full">
                {nights} {nights === 1 ? 'Night' : 'Nights'}
              </span>
            )}
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {DAYS_SHORT.map((day) => (
              <div
                key={day}
                className={`text-[11px] font-bold tracking-wider py-1 ${
                  isLight ? 'text-[#8c7f6e]' : 'text-[#9e9485]'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Empty slots before first day */}
            {Array.from({ length: startDay }).map((_, idx) => (
              <div key={`empty-${idx}`} className="h-9" />
            ))}

            {/* Month Days */}
            {Array.from({ length: daysCount }).map((_, idx) => {
              const dayNum = idx + 1;
              const date = new Date(year, month, dayNum);
              const past = isPastDate(date);
              const isCheckIn = isSameDay(date, checkInDate);
              const isCheckOut = isSameDay(date, checkOutDate);
              const inRange = isDayInRange(date);

              return (
                <button
                  key={`day-${dayNum}`}
                  type="button"
                  disabled={past}
                  onClick={() => handleDateClick(date)}
                  className={`h-9 w-full rounded-xl text-xs font-semibold flex items-center justify-center transition-all cursor-pointer relative ${
                    past
                      ? 'opacity-20 cursor-not-allowed text-inherit'
                      : isCheckIn || isCheckOut
                      ? 'bg-[#b8854c] text-white font-bold shadow-md scale-105 z-10'
                      : inRange
                      ? isLight ? 'bg-[#b8854c]/20 text-[#1c1917] rounded-none' : 'bg-[#b8854c]/30 text-white rounded-none'
                      : isLight
                      ? 'hover:bg-[#f4efe8] text-[#1c1917]'
                      : 'hover:bg-white/15 text-[#f4efe8]'
                  }`}
                >
                  {dayNum}
                </button>
              );
            })}
          </div>

          {/* Footer with Clear and Apply buttons */}
          <div className="mt-4 pt-3 border-t border-inherit flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => {
                setCheckInDate(null);
                setCheckOutDate(null);
                setCalendarFocus('checkIn');
              }}
              className={`hover:underline cursor-pointer font-medium ${
                isLight ? 'text-[#7d7363]' : 'text-white/60'
              }`}
            >
              Clear dates
            </button>
            <button
              type="button"
              onClick={() => setIsCalendarOpen(false)}
              className="px-5 py-2 rounded-xl bg-[#b8854c] hover:bg-[#c9945a] text-white font-semibold transition-all shadow-md cursor-pointer"
            >
              Apply Selection
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
