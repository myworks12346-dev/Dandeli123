import React, { useState, useEffect } from 'react';
import {
  Home,
  Palmtree,
  PhoneCall,
  MoreHorizontal,
  X,
  Waves,
  HelpCircle,
  MapPin,
  Handshake,
  Sparkles,
  Phone,
  MessageCircle,
  Sun,
  Moon,
  User,
  ChevronRight,
  BarChart3
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface MobileBottomNavProps {
  onOpenPartner?: () => void;
  onOpenEvents?: () => void;
  onOpenAuth?: () => void;
  onOpenManagerDashboard?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenPartner,
  onOpenEvents,
  onOpenAuth,
  onOpenManagerDashboard,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'packages' | 'contact' | 'more'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLight, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      const scrollPos = window.scrollY;
      const packagesEl = document.getElementById('the-dandeli-collection') || document.getElementById('the-prive-selection');
      const contactEl = document.getElementById('contact-us');

      if (contactEl && scrollPos >= contactEl.offsetTop - 350) {
        setActiveTab('contact');
      } else if (packagesEl && scrollPos >= packagesEl.offsetTop - 250) {
        setActiveTab('packages');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleHomeClick = () => {
    setActiveTab('home');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePackagesClick = () => {
    setActiveTab('packages');
    setIsMenuOpen(false);
    const el = document.getElementById('the-dandeli-collection') || document.getElementById('the-prive-selection');
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = () => {
    setActiveTab('contact');
    setIsMenuOpen(false);
    const el = document.getElementById('contact-us');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'tel:+919175357845';
    }
  };

  const handleMoreClick = () => {
    setActiveTab('more');
    setIsMenuOpen(true);
  };

  const handleNavToSection = (elementId: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Bottom Nav Bar */}
      <nav
        id="mobile-bottom-navigation"
        aria-label="Mobile Bottom Navigation"
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden backdrop-blur-xl border-t px-2 pt-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] transition-colors duration-300 ${
          isLight
            ? 'bg-[#fcfaf7]/95 border-[#e2d8ca] shadow-[0_-8px_25px_rgba(0,0,0,0.06)]'
            : 'bg-[#0d0b0a]/95 border-[#231f1a] shadow-[0_-8px_30px_rgba(0,0,0,0.8)]'
        }`}
      >
        <div className="grid grid-cols-4 items-center justify-around max-w-sm mx-auto">
          {/* 1. Home */}
          <button
            id="mobile-nav-home"
            onClick={handleHomeClick}
            aria-label="Home"
            className={`flex flex-col items-center justify-center py-1 px-2 transition-all duration-200 cursor-pointer ${
              activeTab === 'home' && !isMenuOpen
                ? isLight ? 'text-[#b8854c] scale-[1.05] font-semibold' : 'text-[#d4aa73] scale-[1.05] font-semibold'
                : isLight ? 'text-[#6e6557] hover:text-[#1c1917] active:scale-95' : 'text-[#ab977e] hover:text-[#d6c1a8] active:scale-95'
            }`}
          >
            <Home className="w-5 h-5 stroke-[1.8] mb-1" />
            <span className="text-[10px] tracking-tight truncate">Home</span>
          </button>

          {/* 2. Packages */}
          <button
            id="mobile-nav-packages"
            onClick={handlePackagesClick}
            aria-label="Packages"
            className={`flex flex-col items-center justify-center py-1 px-2 transition-all duration-200 cursor-pointer ${
              activeTab === 'packages' && !isMenuOpen
                ? isLight ? 'text-[#b8854c] scale-[1.05] font-semibold' : 'text-[#d4aa73] scale-[1.05] font-semibold'
                : isLight ? 'text-[#6e6557] hover:text-[#1c1917] active:scale-95' : 'text-[#ab977e] hover:text-[#d6c1a8] active:scale-95'
            }`}
          >
            <Palmtree className="w-5 h-5 stroke-[1.8] mb-1" />
            <span className="text-[10px] tracking-tight truncate">Packages</span>
          </button>

          {/* 3. Contact */}
          <button
            id="mobile-nav-contact"
            onClick={handleContactClick}
            aria-label="Contact Desk"
            className={`flex flex-col items-center justify-center py-1 px-2 transition-all duration-200 cursor-pointer ${
              activeTab === 'contact' && !isMenuOpen
                ? isLight ? 'text-[#b8854c] scale-[1.05] font-semibold' : 'text-[#d4aa73] scale-[1.05] font-semibold'
                : isLight ? 'text-[#6e6557] hover:text-[#1c1917] active:scale-95' : 'text-[#ab977e] hover:text-[#d6c1a8] active:scale-95'
            }`}
          >
            <PhoneCall className="w-5 h-5 stroke-[1.8] mb-1" />
            <span className="text-[10px] tracking-tight truncate">Contact</span>
          </button>

          {/* 4. More (Opens Full Menu) */}
          <button
            id="mobile-nav-more"
            onClick={handleMoreClick}
            aria-label="Open Full Menu"
            className={`flex flex-col items-center justify-center py-1 px-2 transition-all duration-200 cursor-pointer ${
              isMenuOpen
                ? isLight ? 'text-[#b8854c] scale-[1.05] font-semibold' : 'text-[#d4aa73] scale-[1.05] font-semibold'
                : isLight ? 'text-[#6e6557] hover:text-[#1c1917] active:scale-95' : 'text-[#ab977e] hover:text-[#d6c1a8] active:scale-95'
            }`}
          >
            <MoreHorizontal className="w-5 h-5 stroke-[1.8] mb-1" />
            <span className="text-[10px] tracking-tight truncate font-medium">More</span>
          </button>
        </div>
      </nav>

      {/* Full Menu Modal Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Full Menu Sheet Container */}
          <div
            className={`relative z-10 w-full max-h-[88vh] overflow-y-auto rounded-t-3xl border-t p-5 sm:p-6 shadow-2xl transition-all duration-300 ${
              isLight
                ? 'bg-[#fcfaf6] border-[#e8ded0] text-[#1c1917]'
                : 'bg-[#120f0d] border-[#29221b] text-[#f2ede4]'
            }`}
          >
            {/* Top Handle bar */}
            <div className="w-12 h-1 rounded-full bg-current/20 mx-auto mb-4" />

            {/* Header bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-current/10">
              <div>
                <span className="font-serif text-lg font-light tracking-widest block">dandeli tours</span>
                <span className={`text-[9px] uppercase tracking-widest block ${
                  isLight ? 'text-[#8c8273]' : 'text-[#9c9385]'
                }`}>
                  Explore & Adventure Hub
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Theme switch button */}
                <button
                  onClick={toggleTheme}
                  aria-label="Switch Theme"
                  className={`p-2 rounded-full border text-xs flex items-center justify-center cursor-pointer transition-colors ${
                    isLight
                      ? 'bg-[#eee6d8] border-[#dfd4c2] text-[#1c1917]'
                      : 'bg-[#1e1914] border-[#332b22] text-[#d4aa73]'
                  }`}
                >
                  {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close Menu"
                  className={`p-2 rounded-full border text-xs flex items-center justify-center cursor-pointer transition-colors ${
                    isLight
                      ? 'bg-[#eee6d8] border-[#dfd4c2] text-[#1c1917]'
                      : 'bg-[#1e1914] border-[#332b22] text-white'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Menu Links */}
            <div className="space-y-2.5 mb-6">
              <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                isLight ? 'text-[#8c8273]' : 'text-[#8e8578]'
              }`}>
                Navigation
              </span>

              {/* Home Link */}
              <button
                onClick={handleHomeClick}
                className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer text-left ${
                  isLight
                    ? 'bg-white border-[#e3d8c8] hover:bg-[#f5ebd9]'
                    : 'bg-[#191512] border-[#29221b] hover:bg-[#231d18]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#b8854c]/15 text-[#b8854c] flex items-center justify-center">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold">Home Section</h4>
                    <p className={`text-[10px] ${isLight ? 'text-[#786f61]' : 'text-[#9c9385]'}`}>
                      Welcome banner & search filters
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8c8273]" />
              </button>

              {/* Packages Link */}
              <button
                onClick={handlePackagesClick}
                className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer text-left ${
                  isLight
                    ? 'bg-white border-[#e3d8c8] hover:bg-[#f5ebd9]'
                    : 'bg-[#191512] border-[#29221b] hover:bg-[#231d18]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#b8854c]/15 text-[#b8854c] flex items-center justify-center">
                    <Palmtree className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold">Resorts & Stays</h4>
                    <p className={`text-[10px] ${isLight ? 'text-[#786f61]' : 'text-[#9c9385]'}`}>
                      River resorts, treehouses & family stays
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8c8273]" />
              </button>

              {/* Activities Link */}
              <button
                onClick={() => handleNavToSection('elivaas-spotlight')}
                className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer text-left ${
                  isLight
                    ? 'bg-white border-[#e3d8c8] hover:bg-[#f5ebd9]'
                    : 'bg-[#191512] border-[#29221b] hover:bg-[#231d18]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0284c7]/15 text-[#0284c7] flex items-center justify-center">
                    <Waves className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold">Adventure Activities</h4>
                    <p className={`text-[10px] ${isLight ? 'text-[#786f61]' : 'text-[#9c9385]'}`}>
                      Rafting, Jungle Safari, Kayaking & Zip-line
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8c8273]" />
              </button>

              {/* FAQs & Map Location Link */}
              <button
                onClick={() => handleNavToSection('faqs')}
                className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer text-left ${
                  isLight
                    ? 'bg-white border-[#e3d8c8] hover:bg-[#f5ebd9]'
                    : 'bg-[#191512] border-[#29221b] hover:bg-[#231d18]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ea4335]/15 text-[#ea4335] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold">FAQs & Google Maps Location</h4>
                    <p className={`text-[10px] ${isLight ? 'text-[#786f61]' : 'text-[#9c9385]'}`}>
                      Directions, office location & common Q&As
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8c8273]" />
              </button>

              {/* Contact Link */}
              <button
                onClick={handleContactClick}
                className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer text-left ${
                  isLight
                    ? 'bg-white border-[#e3d8c8] hover:bg-[#f5ebd9]'
                    : 'bg-[#191512] border-[#29221b] hover:bg-[#231d18]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#16a34a]/15 text-[#16a34a] flex items-center justify-center">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold">Contact & Booking Desk</h4>
                    <p className={`text-[10px] ${isLight ? 'text-[#786f61]' : 'text-[#9c9385]'}`}>
                      Inquire packages, group rates & cab pickup
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8c8273]" />
              </button>
            </div>

            {/* Quick Actions & Partners */}
            <div className="space-y-2.5 mb-6">
              <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                isLight ? 'text-[#8c8273]' : 'text-[#8e8578]'
              }`}>
                Management & Services
              </span>

              {onOpenManagerDashboard && (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenManagerDashboard();
                  }}
                  className="w-full p-3.5 mb-2 rounded-xl bg-gradient-to-r from-[#b8854c] to-[#9c6a32] text-white flex items-center justify-between shadow-md cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold">Manager Control Center</h4>
                      <p className="text-[10px] text-white/80">
                        View visitors, scroll depth & contacts to call
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/80" />
                </button>
              )}

              <div className="grid grid-cols-2 gap-2.5">
                {onOpenPartner && (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenPartner();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isLight
                        ? 'bg-[#f4eee4] border-[#e0d4c2] hover:bg-[#ebdcc8]'
                        : 'bg-[#1a1612] border-[#2d251d] hover:bg-[#251f1a]'
                    }`}
                  >
                    <Handshake className="w-4 h-4 text-[#b8854c] mb-1.5" />
                    <h5 className="text-xs font-semibold">Partner With Us</h5>
                    <p className={`text-[9px] ${isLight ? 'text-[#70675a]' : 'text-[#8e8578]'}`}>List your resort</p>
                  </button>
                )}

                {onOpenEvents && (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenEvents();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isLight
                        ? 'bg-[#f4eee4] border-[#e0d4c2] hover:bg-[#ebdcc8]'
                        : 'bg-[#1a1612] border-[#2d251d] hover:bg-[#251f1a]'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-[#b8854c] mb-1.5" />
                    <h5 className="text-xs font-semibold">VIP Experiences</h5>
                    <p className={`text-[9px] ${isLight ? 'text-[#70675a]' : 'text-[#8e8578]'}`}>Custom itineraries</p>
                  </button>
                )}
              </div>
            </div>

            {/* Direct Instant Contact Bar */}
            <div className="pt-2 border-t border-current/10 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919175357845"
                  className="py-2.5 px-3 rounded-xl bg-[#1c1917] hover:bg-[#b8854c] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us Now</span>
                </a>

                <a
                  href="https://wa.me/919175357845?text=Hi%20Dandeli%20Tours,%20I%20want%20to%20inquire%20about%20packages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {onOpenAuth && (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenAuth();
                  }}
                  className={`w-full py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isLight
                      ? 'border-[#c9a66b] text-[#1c1917] hover:bg-[#c9a66b]/15'
                      : 'border-[#c9a66b] text-white hover:bg-[#c9a66b]/20'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Log In / Sign Up</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
