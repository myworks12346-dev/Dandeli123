import React, { useState } from 'react';
import { X, Check, Star, Users, Bed, Bath, MapPin, Phone, ShieldCheck, Play, Pause } from 'lucide-react';
import { Property, StoryItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ModalsProps {
  selectedProperty: Property | null;
  onCloseProperty: () => void;
  selectedStory: StoryItem | null;
  onCloseStory: () => void;
  isAuthOpen: boolean;
  onCloseAuth: () => void;
  isPartnerOpen: boolean;
  onClosePartner: () => void;
  isReserveOpen: boolean;
  onCloseReserve: () => void;
  isContactOpen: boolean;
  onCloseContact: () => void;
  searchFilter: { destination: string; checkIn: string; checkOut: string; guests: number } | null;
  onClearSearchFilter: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  selectedProperty,
  onCloseProperty,
  selectedStory,
  onCloseStory,
  isAuthOpen,
  onCloseAuth,
  isPartnerOpen,
  onClosePartner,
  isReserveOpen,
  onCloseReserve,
  isContactOpen,
  onCloseContact,
  searchFilter,
  onClearSearchFilter,
}) => {
  const { isLight } = useTheme();
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('login');
  const [partnerSuccess, setPartnerSuccess] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [reserveSuccess, setReserveSuccess] = useState(false);

  return (
    <>
      {/* Property Booking & Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border transition-colors ${
            isLight ? 'bg-white border-[#dfd5c6] text-[#1c1917]' : 'bg-[#141210] border-[#383228] text-[#e8e4dc]'
          }`}>
            <button
              onClick={onCloseProperty}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-[#dfd9ce] hover:text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full bg-[#1c1915]">
              <img
                src={selectedProperty.imageUrl}
                alt={selectedProperty.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#ffdf99] font-bold bg-[#b8854c]/90 px-3 py-1 rounded-full border border-white/20 shadow-sm inline-block mb-1.5">
                  {selectedProperty.badge || 'Dandeli Curated Package'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {selectedProperty.name}
                </h2>
                <p className="text-xs text-[#d5cebf] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#e5b36e]" />
                  {selectedProperty.location}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
              {/* Package or Property Key Details */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b gap-3 ${
                isLight ? 'border-[#e8dfd2]' : 'border-[#29241d]'
              }`}>
                {selectedProperty.duration || selectedProperty.meals ? (
                  <div className="space-y-1.5">
                    {selectedProperty.duration && (
                      <div className="text-xs sm:text-sm font-semibold text-[#b8854c] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#b8854c]"></span>
                        {selectedProperty.duration}
                      </div>
                    )}
                    {selectedProperty.meals && (
                      <div className={`text-xs ${isLight ? 'text-[#474037]' : 'text-[#d0cac0]'}`}>
                        🍽️ {selectedProperty.meals}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={`flex items-center gap-4 text-xs sm:text-sm ${
                    isLight ? 'text-[#474037]' : 'text-[#d0cac0]'
                  }`}>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#9c7d49]" />
                      {selectedProperty.guests} Guests
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-[#9c7d49]" />
                      {selectedProperty.beds} Bedrooms
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-[#9c7d49]" />
                      {selectedProperty.baths} Bathrooms
                    </span>
                  </div>
                )}

                {selectedProperty.pricePerNight && (
                  <div className="sm:text-right">
                    <span className={`text-xs ${isLight ? 'text-[#807669]' : 'text-[#8f887e]'}`}>Starting from</span>
                    <div className={`font-serif text-xl font-bold ${isLight ? 'text-[#1c1917]' : 'text-[#f0ebe3]'}`}>
                      {selectedProperty.pricePerNight} <span className={`text-xs font-sans font-normal ${isLight ? 'text-[#807669]' : 'text-[#8f887e]'}`}>{selectedProperty.duration ? '/ person' : '/ night'}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Inclusions / Activities Breakdown */}
              {selectedProperty.activities && (
                <div className={`mt-4 p-3.5 rounded-2xl border ${
                  isLight ? 'bg-[#faf6f0] border-[#ebe1d2]' : 'bg-[#1a1713] border-[#2e2820]'
                }`}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#b8854c] mb-1.5 flex items-center gap-1.5">
                    <span>Included Water Activities & Experiences</span>
                  </h4>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-[#3d372e]' : 'text-[#d4cdbf]'}`}>
                    {selectedProperty.activities}
                  </p>
                </div>
              )}

              {selectedProperty.inclusions && selectedProperty.inclusions.length > 0 && (
                <div className="mt-4">
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                    isLight ? 'text-[#5e5548]' : 'text-[#a9a193]'
                  }`}>
                    Package Highlights & Inclusions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProperty.inclusions.map((inc, i) => (
                      <div key={i} className={`flex items-start gap-2 text-xs ${
                        isLight ? 'text-[#433c32]' : 'text-[#cfc8bc]'
                      }`}>
                        <Check className="w-3.5 h-3.5 text-[#b8854c] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProperty.amenities && selectedProperty.amenities.length > 0 && (
                <div className="mt-4">
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                    isLight ? 'text-[#5e5548]' : 'text-[#a9a193]'
                  }`}>
                    Room Amenities & Inclusions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProperty.amenities.map((amenity, i) => (
                      <div key={i} className={`flex items-start gap-2 text-xs ${
                        isLight ? 'text-[#433c32]' : 'text-[#cfc8bc]'
                      }`}>
                        <Check className="w-3.5 h-3.5 text-[#b8854c] shrink-0 mt-0.5" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {bookingSuccess ? (
                <div className="my-6 p-4 rounded-xl bg-[#14261b] border border-[#2d6a45] text-center">
                  <Check className="w-8 h-8 text-[#4ade80] mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-[#f0fdf4]">Dandeli Package Inquiry Received</h4>
                  <p className="text-xs text-[#bbf7d0] mt-1">
                    Our Dandeli Tours specialist will call you shortly with your customized quote and booking confirmation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBookingSuccess(true);
                  }}
                  className="mt-5 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className={`text-[11px] uppercase tracking-wider block mb-1 font-medium ${
                        isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                      }`}>Your Name</label>
                      <input
                        required
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                          isLight
                            ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#b8854c]'
                            : 'bg-[#1d1a16] border-[#383229] text-[#f0ebe3] focus:border-[#c9a66b]'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`text-[11px] uppercase tracking-wider block mb-1 font-medium ${
                        isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                      }`}>Phone / WhatsApp</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                          isLight
                            ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#b8854c]'
                            : 'bg-[#1d1a16] border-[#383229] text-[#f0ebe3] focus:border-[#c9a66b]'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href="tel:+919175357845"
                      className={`inline-flex items-center gap-1.5 text-xs hover:underline ${
                        isLight ? 'text-[#b8854c]' : 'text-[#d4aa73]'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Direct call: +91 9175357845
                    </a>

                    <button
                      type="submit"
                      className="bg-[#b8854c] hover:bg-[#c9945a] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      Book This Package
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Story Video Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#141210] border border-[#383228] rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={onCloseStory}
              aria-label="Close story"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-[#dfd9ce] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[9/16] max-h-[75vh] w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src={selectedStory.imageUrl}
                alt={selectedStory.celebrity}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/40" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#c8a974] bg-black/60 px-2.5 py-1 rounded-full border border-[#c8a974]/30">
                  {selectedStory.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mt-2">
                  {selectedStory.celebrity}
                </h3>
                {selectedStory.villaName && (
                  <p className="text-xs text-[#c8a974] font-medium mt-0.5">
                    {selectedStory.villaName}
                  </p>
                )}
                <p className="text-xs text-[#ded8cd] mt-2 leading-relaxed">
                  "{selectedStory.description}"
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#999285]">
                  <span>ELIVAAS Privé Signature Guest Series</span>
                  <button
                    onClick={onCloseStory}
                    className="text-[#c8a974] hover:underline"
                  >
                    Done Watching
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal (Log In / Sign Up) */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`relative w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border ${
            isLight ? 'bg-white border-[#dfd5c6] text-[#1c1917]' : 'bg-[#141210] border-[#383228] text-[#e8e4dc]'
          }`}>
            <button
              onClick={onCloseAuth}
              aria-label="Close auth modal"
              className={`absolute top-4 right-4 p-2 rounded-full ${
                isLight ? 'text-[#807669] hover:text-[#1c1917]' : 'text-[#8f887f] hover:text-white'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-block border border-[#bfa068]/80 bg-[#12100d] px-3 py-1.5 rounded-sm mb-3">
                <span className="font-serif text-xs tracking-[0.22em] font-semibold text-[#f0e8dc] uppercase leading-none block">
                  Dandile
                </span>
                <span className="font-serif italic text-[10px] text-[#c9a66b] tracking-wider leading-tight">
                  tours
                </span>
              </div>
              <h3 className={`font-serif text-2xl font-normal ${isLight ? 'text-[#1c1917]' : 'text-[#f3eee7]'}`}>
                {authTab === 'login' ? 'Welcome Back' : 'Join Privé Privileges'}
              </h3>
              <p className={`text-xs mt-1 ${isLight ? 'text-[#6b6255]' : 'text-[#9c958b]'}`}>
                Access bespoke concierge reservations and membership perks.
              </p>
            </div>

            <div className={`flex border-b mb-5 ${isLight ? 'border-[#e8dfd2]' : 'border-[#29241d]'}`}>
              <button
                onClick={() => setAuthTab('login')}
                className={`flex-1 py-2 text-xs font-medium tracking-wide transition-colors ${
                  authTab === 'login'
                    ? isLight ? 'text-[#9c7d49] border-b-2 border-[#9c7d49]' : 'text-[#c8a974] border-b-2 border-[#c8a974]'
                    : isLight ? 'text-[#807669] hover:text-[#1c1917]' : 'text-[#8f887f] hover:text-[#ded8ce]'
                }`}
              >
                Log In
              </button>
              <button
                onClick={() => setAuthTab('signup')}
                className={`flex-1 py-2 text-xs font-medium tracking-wide transition-colors ${
                  authTab === 'signup'
                    ? isLight ? 'text-[#9c7d49] border-b-2 border-[#9c7d49]' : 'text-[#c8a974] border-b-2 border-[#c8a974]'
                    : isLight ? 'text-[#807669] hover:text-[#1c1917]' : 'text-[#8f887f] hover:text-[#ded8ce]'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Signed in successfully! Welcome to ELIVAAS Privé.');
                onCloseAuth();
              }}
              className="space-y-3.5"
            >
              <div>
                <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                  isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                }`}>Mobile Number or Email</label>
                <input
                  required
                  type="text"
                  placeholder="+91 or name@luxury.com"
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none border ${
                    isLight
                      ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                      : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                  }`}
                />
              </div>

              <div>
                <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                  isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                }`}>Password / Passcode</label>
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none border ${
                    isLight
                      ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                      : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 mt-2 rounded-full bg-[#c8a974] text-[#0d0c0b] text-xs font-semibold tracking-wide hover:bg-[#d8b984] transition-all shadow-md"
              >
                {authTab === 'login' ? 'Continue' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Partner with Us Modal */}
      {isPartnerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border ${
            isLight ? 'bg-white border-[#dfd5c6] text-[#1c1917]' : 'bg-[#141210] border-[#383228] text-[#e8e4dc]'
          }`}>
            <button
              onClick={onClosePartner}
              aria-label="Close partner modal"
              className={`absolute top-4 right-4 p-2 rounded-full ${
                isLight ? 'text-[#807669] hover:text-[#1c1917]' : 'text-[#8f887f] hover:text-white'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className={`font-serif text-2xl font-normal ${isLight ? 'text-[#9c7d49]' : 'text-[#c8a974]'}`}>
              Partner Your Villa with ELIVAAS
            </h3>
            <p className={`text-xs mt-1.5 leading-relaxed ${isLight ? 'text-[#6b6255]' : 'text-[#9c958b]'}`}>
              Monetize and entrust your prime holiday home to India’s most discerning luxury hospitality team.
            </p>

            {partnerSuccess ? (
              <div className="my-6 p-4 rounded-xl bg-[#14261b] border border-[#2d6a45] text-center">
                <Check className="w-7 h-7 text-[#4ade80] mx-auto mb-1.5" />
                <h4 className="text-sm font-semibold text-[#f0fdf4]">Partnership Application Submitted</h4>
                <p className="text-xs text-[#bbf7d0] mt-1">
                  Our portfolio director will schedule a private villa inspection and revenue assessment.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPartnerSuccess(true);
                }}
                className="mt-5 space-y-3.5"
              >
                <div>
                  <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                    isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                  }`}>Owner Name</label>
                  <input
                    required
                    placeholder="Full name"
                    className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                      isLight
                        ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                        : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                    }`}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                      isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                    }`}>Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91..."
                      className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                        isLight
                          ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                          : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                      isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                    }`}>Property Location</label>
                    <input
                      required
                      placeholder="e.g. Goa, Kasauli, Alibaug"
                      className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                        isLight
                          ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                          : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                    isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                  }`}>Villa Description & Bedrooms</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 5-BHK private infinity pool estate..."
                    className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                      isLight
                        ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                        : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#c8a974] text-[#0d0c0b] text-xs font-semibold hover:bg-[#d8b984] transition-all shadow-md"
                >
                  Submit Villa for Curation
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Reserve Membership Modal */}
      {isReserveOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`relative w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border ${
            isLight ? 'bg-white border-[#dfd5c6] text-[#1c1917]' : 'bg-[#141210] border-[#383228] text-[#e8e4dc]'
          }`}>
            <button
              onClick={onCloseReserve}
              aria-label="Close reserve modal"
              className={`absolute top-4 right-4 p-2 rounded-full ${
                isLight ? 'text-[#807669] hover:text-[#1c1917]' : 'text-[#8f887f] hover:text-white'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <span className={`text-[10px] uppercase tracking-[0.25em] font-semibold ${
              isLight ? 'text-[#9c7d49]' : 'text-[#c8a974]'
            }`}>
              ELIVAAS RESERVE
            </span>
            <h3 className={`font-serif text-2xl font-normal mt-1 ${isLight ? 'text-[#1c1917]' : 'text-white'}`}>
              Unlock Tiered Privileges
            </h3>
            <p className={`text-xs mt-1.5 leading-relaxed ${isLight ? 'text-[#6b6255]' : 'text-[#9c958b]'}`}>
              Earn status on every stay, complimentary airport transfers, curated wine tastings, and priority reservations.
            </p>

            {reserveSuccess ? (
              <div className="my-6 p-4 rounded-xl bg-[#14261b] border border-[#2d6a45] text-center">
                <Check className="w-7 h-7 text-[#4ade80] mx-auto mb-1.5" />
                <h4 className="text-sm font-semibold text-[#f0fdf4]">Welcome to ELIVAAS RESERVE</h4>
                <p className="text-xs text-[#bbf7d0] mt-1">
                  Your Blue Tier membership ID and welcome benefits have been issued.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReserveSuccess(true);
                }}
                className="mt-5 space-y-3.5"
              >
                <div>
                  <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                    isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                  }`}>Full Name</label>
                  <input
                    required
                    placeholder="Your legal name"
                    className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                      isLight
                        ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                        : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                    }`}
                  />
                </div>
                <div>
                  <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                    isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                  }`}>Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="concierge@luxury.com"
                    className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                      isLight
                        ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                        : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-2.5 rounded-full text-xs font-semibold transition-all shadow-md ${
                    isLight
                      ? 'bg-[#1c1917] text-white hover:bg-[#332e2a]'
                      : 'bg-white text-[#12110e] hover:bg-[#e8e4dc]'
                  }`}
                >
                  Activate Blue Membership
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Concierge / Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`relative w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border ${
            isLight ? 'bg-white border-[#dfd5c6] text-[#1c1917]' : 'bg-[#141210] border-[#383228] text-[#e8e4dc]'
          }`}>
            <button
              onClick={onCloseContact}
              aria-label="Close contact modal"
              className={`absolute top-4 right-4 p-2 rounded-full ${
                isLight ? 'text-[#807669] hover:text-[#1c1917]' : 'text-[#8f887f] hover:text-white'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className={`font-serif text-2xl font-normal ${isLight ? 'text-[#9c7d49]' : 'text-[#c8a974]'}`}>
              Private Concierge Desk
            </h3>
            <p className={`text-xs mt-1 leading-relaxed ${isLight ? 'text-[#6b6255]' : 'text-[#9c958b]'}`}>
              Available 24/7 for bespoke itinerary planning, private dining, or customized inquiries.
            </p>

            {contactSuccess ? (
              <div className="my-6 p-4 rounded-xl bg-[#14261b] border border-[#2d6a45] text-center">
                <Check className="w-7 h-7 text-[#4ade80] mx-auto mb-1.5" />
                <h4 className="text-sm font-semibold text-[#f0fdf4]">Message Dispatched</h4>
                <p className="text-xs text-[#bbf7d0] mt-1">
                  Our private client advisor will respond promptly via your preferred channel.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSuccess(true);
                }}
                className="mt-5 space-y-3.5"
              >
                <div>
                  <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                    isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                  }`}>Your Name</label>
                  <input
                    required
                    placeholder="Guest name"
                    className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                      isLight
                        ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                        : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                    }`}
                  />
                </div>
                <div>
                  <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                    isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                  }`}>Email or Phone</label>
                  <input
                    required
                    placeholder="Contact info"
                    className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                      isLight
                        ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                        : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                    }`}
                  />
                </div>
                <div>
                  <label className={`text-[10px] uppercase tracking-wider block mb-1 ${
                    isLight ? 'text-[#6b6255]' : 'text-[#8e877e]'
                  }`}>How can we assist you?</label>
                  <textarea
                    rows={3}
                    placeholder="Special requests, custom dates, chef requirements..."
                    className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none border ${
                      isLight
                        ? 'bg-[#fcf9f5] border-[#d8cdbc] text-[#1c1917] focus:border-[#9c7d49]'
                        : 'bg-[#1c1916] border-[#352f26] text-[#f0ebe3] focus:border-[#c8a974]'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#c8a974] text-[#0d0c0b] text-xs font-semibold hover:bg-[#d8b984] transition-all shadow-md"
                >
                  Send to Concierge
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Search Filter Notification Toast / Banner */}
      {searchFilter && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 bg-[#1e1a15] border border-[#c8a974]/50 text-[#f0ede6] px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3 text-xs animate-bounce">
          <span>
            Filtering by: <strong className="text-[#c8a974]">{searchFilter.destination}</strong> ({searchFilter.guests} {searchFilter.guests === 1 ? 'Guest' : 'Guests'})
          </span>
          <button
            onClick={onClearSearchFilter}
            className="text-[#9e968b] hover:text-white underline text-[11px]"
          >
            Reset
          </button>
        </div>
      )}
    </>
  );
};
