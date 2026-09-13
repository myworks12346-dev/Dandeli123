import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenAuth: () => void;
  onOpenPartner: () => void;
  onOpenSupport: () => void;
  onOpenManagerDashboard?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAuth,
  onOpenPartner,
  onOpenSupport,
  onOpenManagerDashboard,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isLight } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? isLight
              ? 'bg-[#faf8f5]/95 backdrop-blur-md py-3 border-b border-[#e5dcce] shadow-sm text-[#211e1b]'
              : 'bg-[#0d0c0b]/90 backdrop-blur-md py-3 border-b border-[#25211c]/60 shadow-lg text-[#e8e4dc]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Logo Badge - Centered on Mobile */}
          <a
            id="brand-logo"
            href="#"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 group flex items-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div
              className={`border px-3 py-1.5 rounded-sm shadow-md flex flex-col items-center justify-center text-center backdrop-blur-sm transition-colors duration-300 ${
                isLight && isScrolled
                  ? 'border-[#9c7d49]/80 bg-[#fbf9f5]'
                  : 'border-[#bfa068]/80 bg-[#12100d]/90'
              }`}
            >
              <span
                className={`font-serif text-[11px] sm:text-xs tracking-[0.22em] font-semibold uppercase leading-none ${
                  isLight && isScrolled ? 'text-[#1c1917]' : 'text-[#f0e8dc]'
                }`}
              >
                Dandile
              </span>
              <span className="font-serif italic text-base sm:text-[16px] text-[#c9a66b] tracking-wider leading-tight">
                tours
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center gap-6 text-[12px] font-normal tracking-wide transition-colors ${
              isScrolled && isLight ? 'text-[#423d36]' : 'text-[#d8d2c7]'
            }`}
          >
            <a
              id="header-phone-link"
              href="tel:+919175357845"
              className={`flex items-center gap-1.5 transition-colors ${
                isScrolled && isLight
                  ? 'text-[#211e1b] hover:text-[#9c7d49]'
                  : 'text-[#e5dfd5] hover:text-[#c9a66b]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#c9a66b]" />
              <span>
                Call to Book{' '}
                <strong
                  className={`font-semibold ${
                    isScrolled && isLight ? 'text-[#1c1917]' : 'text-white'
                  }`}
                >
                  +91 9175357845
                </strong>
              </span>
            </a>

            <button
              id="header-partner-btn"
              onClick={onOpenPartner}
              className={`transition-colors cursor-pointer ${
                isScrolled && isLight ? 'hover:text-[#9c7d49]' : 'hover:text-[#c9a66b]'
              }`}
            >
              Partner with Us
            </button>

            <button
              id="header-support-btn"
              onClick={onOpenSupport}
              className={`transition-colors cursor-pointer ${
                isScrolled && isLight ? 'hover:text-[#9c7d49]' : 'hover:text-[#c9a66b]'
              }`}
            >
              Customer support
            </button>

            <a
              id="header-visit-elivaas"
              href="#the-prive-selection"
              className={`transition-colors ${
                isScrolled && isLight ? 'hover:text-[#9c7d49]' : 'hover:text-[#c9a66b]'
              }`}
            >
              Visit ELIVAAS
            </a>

            {/* Theme Toggle Button (Desktop) */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
              title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
              className={`p-2 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center ${
                isScrolled && isLight
                  ? 'border-[#dfd5c6] bg-black/5 text-[#211e1b] hover:bg-[#9c7d49]/15 hover:text-[#9c7d49]'
                  : 'border-[#b89a62]/40 bg-[#12100d]/60 text-[#c9a66b] hover:bg-[#b89a62]/20 hover:text-white'
              }`}
            >
              {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>

            <button
              id="header-login-btn"
              onClick={onOpenAuth}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer shadow-sm ${
                isScrolled && isLight
                  ? 'border border-[#9c7d49] text-[#1c1917] hover:bg-[#9c7d49] hover:text-white'
                  : 'border border-[#b89a62] text-[#f2ede4] hover:bg-[#b89a62] hover:text-[#0f0e0c]'
              }`}
            >
              Log In / Sign Up
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 ml-auto">
            {/* Quick Mobile Theme Toggle */}
            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isScrolled && isLight
                  ? 'text-[#211e1b] hover:text-[#9c7d49]'
                  : 'text-[#e8e4dc] hover:text-[#c9a66b]'
              }`}
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className={`p-2 focus:outline-none ${
                isScrolled && isLight
                  ? 'text-[#211e1b] hover:text-[#9c7d49]'
                  : 'text-[#e8e4dc] hover:text-[#c9a66b]'
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className={`fixed inset-0 z-50 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn ${
            isLight ? 'bg-[#faf8f5]/95 text-[#211e1b]' : 'bg-[#0d0c0b]/95 text-[#e8e4dc]'
          }`}
        >
          <div
            className={`flex items-center justify-between border-b pb-4 ${
              isLight ? 'border-[#e4dcd0]' : 'border-[#2a2620]'
            }`}
          >
            <div
              className={`border px-3 py-1.5 rounded-sm flex flex-col items-center ${
                isLight ? 'border-[#9c7d49]/80 bg-white' : 'border-[#bfa068]/80 bg-[#12100d]'
              }`}
            >
              <span
                className={`font-serif text-xs tracking-[0.22em] font-semibold uppercase leading-none ${
                  isLight ? 'text-[#1c1917]' : 'text-[#f0e8dc]'
                }`}
              >
                Dandile
              </span>
              <span className="font-serif italic text-[10px] text-[#c9a66b] tracking-wider leading-tight">
                tours
              </span>
            </div>
            <button
              id="close-mobile-menu"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 ${isLight ? 'text-[#615a51] hover:text-black' : 'text-[#b0a89d] hover:text-white'}`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 py-4 text-base tracking-wide">
            <a
              href="tel:+919175357845"
              className={`flex items-center gap-3 text-[#c9a66b] py-2 border-b ${
                isLight ? 'border-[#eee8de]' : 'border-[#1f1b16]'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 9175357845</span>
            </a>
            <a
              href="#the-prive-selection"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b transition-colors ${
                isLight
                  ? 'text-[#211e1b] hover:text-[#9c7d49] border-[#eee8de]'
                  : 'text-[#e8e4dc] hover:text-[#c9a66b] border-[#1f1b16]'
              }`}
            >
              The Privé Selection
            </a>
            <a
              href="#what-sets-prive-apart"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b transition-colors ${
                isLight
                  ? 'text-[#211e1b] hover:text-[#9c7d49] border-[#eee8de]'
                  : 'text-[#e8e4dc] hover:text-[#c9a66b] border-[#1f1b16]'
              }`}
            >
              What Sets Privé Apart
            </a>
            <a
              href="#spring-symphony"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b transition-colors ${
                isLight
                  ? 'text-[#211e1b] hover:text-[#9c7d49] border-[#eee8de]'
                  : 'text-[#e8e4dc] hover:text-[#c9a66b] border-[#1f1b16]'
              }`}
            >
              Spring Symphony
            </a>
            <a
              href="#prive-experiences"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b transition-colors ${
                isLight
                  ? 'text-[#211e1b] hover:text-[#9c7d49] border-[#eee8de]'
                  : 'text-[#e8e4dc] hover:text-[#c9a66b] border-[#1f1b16]'
              }`}
            >
              The Privé Experiences
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartner();
              }}
              className={`text-left py-2 border-b transition-colors ${
                isLight
                  ? 'text-[#211e1b] hover:text-[#9c7d49] border-[#eee8de]'
                  : 'text-[#e8e4dc] hover:text-[#c9a66b] border-[#1f1b16]'
              }`}
            >
              Partner with Us
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupport();
              }}
              className={`text-left py-2 border-b transition-colors ${
                isLight
                  ? 'text-[#211e1b] hover:text-[#9c7d49] border-[#eee8de]'
                  : 'text-[#e8e4dc] hover:text-[#c9a66b] border-[#1f1b16]'
              }`}
            >
              Customer Support
            </button>

            {/* Mobile Theme Switcher Row */}
            <div
              className={`flex items-center justify-between py-2 border-b ${
                isLight ? 'border-[#eee8de]' : 'border-[#1f1b16]'
              }`}
            >
              <span className="text-sm">Appearance</span>
              <div
                className={`flex items-center p-1 rounded-full border ${
                  isLight ? 'bg-[#eee8de] border-[#dfd5c6]' : 'bg-[#1a1714] border-[#2f2922]'
                }`}
              >
                <button
                  onClick={() => toggleTheme()}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    !isLight
                      ? 'bg-[#b89a62] text-black shadow-sm'
                      : 'text-[#6d665c]'
                  }`}
                >
                  <Moon className="w-3 h-3" />
                  <span>Dark</span>
                </button>
                <button
                  onClick={() => toggleTheme()}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    isLight
                      ? 'bg-[#9c7d49] text-white shadow-sm'
                      : 'text-[#9e9487]'
                  }`}
                >
                  <Sun className="w-3 h-3" />
                  <span>Light</span>
                </button>
              </div>
            </div>
          </div>

          <div
            className={`pt-4 border-t flex flex-col gap-3 ${
              isLight ? 'border-[#e4dcd0]' : 'border-[#2a2620]'
            }`}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-3 rounded-full bg-[#b89a62] text-[#0f0e0c] font-medium text-sm tracking-wide text-center"
            >
              Log In / Sign Up
            </button>
            <p className={`text-center text-xs ${isLight ? 'text-[#877e73]' : 'text-[#7d756b]'}`}>
              Where elegance is the only language
            </p>
          </div>
        </div>
      )}
    </>
  );
};
