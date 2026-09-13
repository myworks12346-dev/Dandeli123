import React from 'react';
import { MessageCircle, Phone, PhoneCall, BarChart3 } from 'lucide-react';

interface FloatingButtonsProps {
  onOpenContact: () => void;
  onOpenManagerDashboard?: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({
  onOpenContact,
  onOpenManagerDashboard,
}) => {
  return (
    <div
      id="floating-contact-controls"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3"
    >
      {/* Manager Dashboard Floating Bypass Button */}
      {onOpenManagerDashboard && (
        <button
          id="floating-manager-btn"
          onClick={onOpenManagerDashboard}
          aria-label="Open Manager Dashboard"
          title="Open Manager Dashboard"
          className="relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#8a5d2b] via-[#b8854c] to-[#d4aa73] text-white flex items-center justify-center shadow-2xl hover:shadow-[0_4px_24px_rgba(184,133,76,0.55)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-[#f0d4a8]/30"
        >
          <BarChart3 className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>

          {/* Hover Tooltip */}
          <span className="absolute right-full mr-2.5 px-2.5 py-1 rounded-lg bg-[#161310] text-white text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-[#383025]">
            Manager Desk
          </span>
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/919175357845?text=Hello%2C%20I%20am%20interested%20in%20inquiring%20about%20Dandeli%20Tours%20packages."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <div className="relative flex items-center justify-center pointer-events-none">
          <MessageCircle className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-white text-white" />
          <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#25D366] fill-[#25D366] absolute -rotate-12" />
        </div>
      </a>

      {/* Call / Contact Button */}
      <a
        id="floating-email-btn"
        href="tel:+919175357845"
        aria-label="Call Concierge"
        title="Call Concierge"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#831428] hover:bg-[#991730] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <PhoneCall className="w-5 h-5 text-white" />
      </a>
    </div>
  );
};

