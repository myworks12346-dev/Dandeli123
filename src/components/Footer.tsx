import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, HelpCircle, ChevronDown, MapPin, Star, Navigation, Clock, Globe, Phone, Share2, ExternalLink, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isLight } = useTheme();
  const [openFaqId, setOpenFaqId] = useState<string | null>('1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedLink, setCopiedLink] = useState(false);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Dandeli+Tours+K.C+circle+opp+ioc+pump+Dandeli+Karnataka+581325";

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(googleMapsUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const faqs = [
    {
      id: '1',
      category: 'Rafting & Safety',
      question: 'When is the best time for Whitewater Rafting in Dandeli?',
      answer: 'White-water rafting and river sports on the Kali River are open from October through May when water flow is regulated by Supa Dam releases. Grade II and Grade III+ rapids offer thrilling experiences for beginners and experts alike.'
    },
    {
      id: '2',
      category: 'Rafting & Safety',
      question: 'Are river activities safe for non-swimmers and kids?',
      answer: 'Yes! Non-swimmers can safely enjoy short-run rafting (2-3 km), coracle boat rides, kayaking, and river crossing. Certified river guides supervise all sessions with high-buoyancy life jackets and helmets.'
    },
    {
      id: '3',
      category: 'Stays & Resort',
      question: 'What stays are included in Dandeli Tours packages?',
      answer: 'We offer riverside luxury resorts, canopy treehouses, rustic forest wooden chalets, homestays, and safari tented camps. All stays include complimentary 3-course buffet meals, campfire, and pool access.'
    },
    {
      id: '4',
      category: 'Stays & Resort',
      question: 'Are meals and evening campfires included in the tour packages?',
      answer: 'Yes! All Dandeli Tours packages come with all-inclusive meal plans serving South Indian, North Indian, and authentic Karnataka Malnad cuisine, plus live evening campfires with BBQ.'
    },
    {
      id: '5',
      category: 'Bookings & Transport',
      question: 'Do you offer custom group discounts for student or corporate trips?',
      answer: 'Yes, we specialize in college group trips, corporate retreats, and family vacations. We provide private AC buses, campfire setups, and custom itineraries. Call +91 9175357845 for bulk quotes.'
    },
    {
      id: '6',
      category: 'Bookings & Transport',
      question: 'How do I reach Dandeli and where is your office located?',
      answer: 'Dandeli is 75 km from Hubli and 90 km from Belagavi. Our main office is located at K.C Circle, opp. IOC pump, Dandeli, Karnataka 581325. We provide pick-up & drop cabs from nearby stations and airports.'
    }
  ];

  const categories = ['All', 'Rafting & Safety', 'Stays & Resort', 'Bookings & Transport'];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => prev === id ? null : id);
  };

  return (
    <footer id="main-footer" className={`relative border-t pt-12 pb-8 overflow-hidden text-left transition-colors duration-300 ${
      isLight ? 'bg-[#eee9df] border-[#ded5c6] text-[#2c2824]' : 'bg-[#0c0a08] border-[#1e1a15] text-[#e8e4dc]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Mark & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-current/10">
          <div>
            <div className="inline-flex flex-col">
              <span className={`font-serif text-2xl sm:text-3xl tracking-[0.15em] font-light ${
                isLight ? 'text-[#1c1917]' : 'text-[#f4efe8]'
              }`}>
                dandeli tours
              </span>
              <span className={`text-[8px] sm:text-[9px] uppercase tracking-[0.25em] font-medium mt-0.5 ${
                isLight ? 'text-[#827869]' : 'text-[#8e8578]'
              }`}>
                KALI RIVER & WILDLIFE EXPERIENCES
              </span>
            </div>
            <p className={`text-xs mt-2 max-w-lg ${isLight ? 'text-[#5c5446]' : 'text-[#9c9385]'}`}>
              K.C Circle, opp. IOC pump, Dandeli, Karnataka 581325 | Phone: +91 9175357845 | Email: dandelitours@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-xs font-medium uppercase tracking-wider ${isLight ? 'text-[#7d7363]' : 'text-[#8e8578]'}`}>
              Follow Us:
            </span>
            <div className={`flex items-center gap-3 ${isLight ? 'text-[#6e6659]' : 'text-[#948b7f]'}`}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`transition-colors ${isLight ? 'hover:text-[#9c7d49]' : 'hover:text-[#c8a974]'}`}>
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`transition-colors ${isLight ? 'hover:text-[#9c7d49]' : 'hover:text-[#c8a974]'}`}>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={`transition-colors ${isLight ? 'hover:text-[#9c7d49]' : 'hover:text-[#c8a974]'}`}>
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQs & Google Maps Location Section */}
        <div id="faqs" className="mb-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold mb-1 ${
                isLight ? 'text-[#855f2d]' : 'text-[#d4aa73]'
              }`}>
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Need Assistance & Directions?</span>
              </div>
              <h3 className={`font-serif text-xl sm:text-2xl font-normal ${
                isLight ? 'text-[#1c1917]' : 'text-white'
              }`}>
                Frequently Asked Questions & Location
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? isLight
                        ? 'bg-[#1c1917] text-white shadow-xs'
                        : 'bg-[#c9a66b] text-[#0d0c0b] font-semibold'
                      : isLight
                        ? 'bg-[#e2d8c7]/60 text-[#4d4538] hover:bg-[#e2d8c7] border border-[#d6ccbb]'
                        : 'bg-[#161310] text-[#9e9688] hover:bg-[#1f1b16] border border-[#26201a]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col (7 cols): FAQ Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-xl border transition-all duration-200 ${
                      isOpen
                        ? isLight
                          ? 'bg-white border-[#b8854c] shadow-xs'
                          : 'bg-[#14110e] border-[#b8854c] shadow-xs'
                        : isLight
                          ? 'bg-[#e5dccf]/40 border-[#dcd3c4] hover:bg-[#e5dccf]'
                          : 'bg-[#120f0d]/60 border-[#221d18] hover:bg-[#15120f]'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className={`font-medium text-xs sm:text-sm leading-snug ${
                        isOpen
                          ? isLight ? 'text-[#1c1917]' : 'text-white'
                          : isLight ? 'text-[#2e2924]' : 'text-[#ded8cc]'
                      }`}>
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#b8854c]' : 'text-[#8e8578]'
                      }`} />
                    </button>

                    {isOpen && (
                      <div className={`px-3.5 sm:px-4 pb-3.5 text-xs leading-relaxed border-t pt-2.5 ${
                        isLight ? 'border-[#f2ebd9] text-[#524a3e]' : 'border-[#221d18] text-[#bebaaf]'
                      }`}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Col (5 cols): Google Maps Dandeli Location Card */}
            <div className="lg:col-span-5">
              <div className={`rounded-2xl border overflow-hidden shadow-lg transition-all ${
                isLight ? 'bg-white border-[#dfd4c3]' : 'bg-[#14110e] border-[#2c251e]'
              }`}>
                {/* Header Bar */}
                <div className={`p-4 border-b flex items-center justify-between ${
                  isLight ? 'bg-[#faf6f0] border-[#eee6d8]' : 'bg-[#1a1612] border-[#28221a]'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#ea4335]/15 text-[#ea4335] flex items-center justify-center font-bold text-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${
                          isLight ? 'text-[#1c1917]' : 'text-white'
                        }`}>
                          Google Maps
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#ea4335] text-white font-medium">
                          Verified
                        </span>
                      </div>
                      <span className={`text-[11px] block ${isLight ? 'text-[#7e7465]' : 'text-[#9c9386]'}`}>
                        Tour Agency in Dandeli
                      </span>
                    </div>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-[#4285f4] hover:bg-[#3367d6] text-white text-[11px] font-medium flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Navigation className="w-3 h-3 fill-white" />
                    <span>Directions</span>
                  </a>
                </div>

                {/* Embedded Interactive Map Frame */}
                <div className="relative w-full h-48 bg-[#e5e3df] overflow-hidden">
                  <iframe
                    title="Dandeli Tours Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.528345712134!2d74.6180!3d15.2425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf2f4585555555%3A0x1!2sDandeli%20Tours!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[20%] opacity-90 hover:opacity-100 transition-opacity"
                  ></iframe>

                  {/* Map Pin Overlay Banner */}
                  <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-black/85 backdrop-blur-md text-white flex items-center justify-between gap-2 shadow-md">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded-full bg-[#ea4335] text-white flex items-center justify-center shrink-0">
                        <MapPin className="w-3 h-3" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold truncate">Dandeli Tours (ದಾಂಡೇಲಿ ಟೂರ್ಸ್)</p>
                        <p className="text-[9px] text-gray-300 truncate">K.C Circle, opp. IOC pump</p>
                      </div>
                    </div>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-md bg-[#c9a66b] text-[#0d0c0b] text-[10px] font-bold shrink-0 hover:bg-[#d8b57a] transition-colors"
                    >
                      Open Maps
                    </a>
                  </div>
                </div>

                {/* Business Info Details */}
                <div className="p-4 space-y-3.5 text-xs">
                  {/* Rating Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-current/10">
                    <div>
                      <h4 className={`font-serif text-base font-bold ${isLight ? 'text-[#1c1917]' : 'text-white'}`}>
                        Dandeli Tours <span className="text-xs font-normal text-[#8e8578]">(ದಾಂಡೇಲಿ ಟೂರ್ಸ್)</span>
                      </h4>
                      <p className={`text-[11px] ${isLight ? 'text-[#7e7465]' : 'text-[#9c9386]'}`}>
                        Tour Agency · Dandeli, Karnataka
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-1 bg-[#fff8e7] dark:bg-[#221c13] px-2 py-0.5 rounded-md border border-[#f0c14b]/30">
                        <span className="font-bold text-[#d97706] text-xs">4.4</span>
                        <div className="flex text-[#f59e0b]">
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current" />
                          <Star className="w-3 h-3 fill-current opacity-40" />
                        </div>
                      </div>
                      <span className={`text-[10px] block mt-0.5 ${isLight ? 'text-[#7e7465]' : 'text-[#8e8578]'}`}>
                        (110 Google Reviews)
                      </span>
                    </div>
                  </div>

                  {/* List items */}
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#ea4335] shrink-0 mt-0.5" />
                      <div>
                        <span className={`font-medium block ${isLight ? 'text-[#1c1917]' : 'text-white'}`}>
                          K.C circle, opp. ioc pump, Dandeli, Karnataka 581325
                        </span>
                        <span className="text-[10px] text-[#8e8578] font-mono">
                          Plus Code: 6JWF+9Q Dandeli, Karnataka
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#16a34a] shrink-0" />
                      <span className={`text-xs ${isLight ? 'text-[#3d372e]' : 'text-[#cfc7b8]'}`}>
                        <strong className="text-[#16a34a]">Opens 7:00 AM</strong> · Mon - Sun
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#b8854c] shrink-0" />
                      <a
                        href="tel:+919175357845"
                        className={`font-semibold hover:underline ${
                          isLight ? 'text-[#1c1917] hover:text-[#b8854c]' : 'text-white hover:text-[#d4aa73]'
                        }`}
                      >
                        091753 57845 (+91 9175357845)
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-[#3b82f6] shrink-0" />
                      <a
                        href="https://dandelitours.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3b82f6] hover:underline flex items-center gap-1 font-medium"
                      >
                        dandelitours.in
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Quick Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl bg-[#4285f4] hover:bg-[#3367d6] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 fill-white" />
                      <span>Get Directions</span>
                    </a>

                    <button
                      onClick={handleShare}
                      className={`px-3 py-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                        copiedLink
                          ? 'bg-[#25d366] text-white border-[#25d366]'
                          : isLight
                            ? 'bg-[#f4efe6] border-[#dfd5c6] text-[#2c2824] hover:bg-[#eae3d5]'
                            : 'bg-[#1f1a14] border-[#2a231b] text-[#e8e4dc] hover:bg-[#28221b]'
                      }`}
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Giant Watermark Text */}
        <div className="relative mt-8 sm:mt-12 overflow-hidden flex justify-center pointer-events-none select-none">
          <span className={`font-serif text-[90px] sm:text-[150px] md:text-[200px] lg:text-[240px] font-light tracking-widest leading-none ${
            isLight ? 'text-black/[0.035]' : 'text-[#f0e8dc]/[0.025]'
          }`}>
            dandeli
          </span>
        </div>

        {/* Bottom Legal Line */}
        <div className={`mt-4 pt-6 border-t flex flex-col sm:flex-row items-center justify-between text-[11px] gap-3 ${
          isLight ? 'border-[#dfd5c6] text-[#787063]' : 'border-[#1c1814] text-[#6d665b]'
        }`}>
          <p>© Copyright Dandeli Tours & Adventure Hub. All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <a href="#contact-us" className={`transition-colors ${isLight ? 'hover:text-[#9c7d49]' : 'hover:text-[#c8a974]'}`}>Contact Us</a>
            <span>|</span>
            <a href="#faqs" className={`transition-colors ${isLight ? 'hover:text-[#9c7d49]' : 'hover:text-[#c8a974]'}`}>FAQs & Location</a>
            <span>|</span>
            <a href="#" className={`transition-colors ${isLight ? 'hover:text-[#9c7d49]' : 'hover:text-[#c8a974]'}`}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

