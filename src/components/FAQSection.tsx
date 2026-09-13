import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageCircle, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const defaultFaqs: FAQItem[] = [
  {
    id: '1',
    category: 'Activities & Safety',
    question: 'When is the best time for Whitewater Rafting and Water Sports in Dandeli?',
    answer: 'White-water rafting and river sports on the Kali River are active from October through May when water flow is regulated by Supa Dam releases. Grade II and Grade III+ rapids offer exhilarating experiences. Certified river guides supervise all sessions with high-buoyancy jackets and helmets.'
  },
  {
    id: '2',
    category: 'Activities & Safety',
    question: 'Are river rafting and kayaking safe for non-swimmers and children?',
    answer: 'Yes! Non-swimmers can safely enjoy short-run rafting (2-3 km), coracle boat rides, kayaking, and river crossing. Every single guest is fitted with international-standard safety gear, and experienced rescue paddle crews accompany every boat.'
  },
  {
    id: '3',
    category: 'Stays & Amenities',
    question: 'What types of accommodations are available in Dandeli?',
    answer: 'We feature riverside luxury resorts, elevated canopy treehouses, forest wooden chalets, family homestays, and safari tented camps. All stays include complimentary 3-course buffet meals, starlit campfire evenings, and swimming pool access.'
  },
  {
    id: '4',
    category: 'Stays & Amenities',
    question: 'Are meals and evening campfires included in the packages?',
    answer: 'Yes! All Dandeli Tours packages are all-inclusive with South Indian, North Indian, and authentic Karnataka Malnad buffet meals (breakfast, lunch, dinner), plus live evening BBQ during campfires.'
  },
  {
    id: '5',
    category: 'Bookings & Transport',
    question: 'Do you offer customized group discounts for college trips or corporate retreats?',
    answer: 'Absolutely! We specialize in custom itineraries for college groups, family reunions, and corporate team-building retreats. We offer dedicated AC transport buses, campfire music setups, and group discounts. Call +91 9175357845 for bulk quotes.'
  },
  {
    id: '6',
    category: 'Bookings & Transport',
    question: 'What is the booking deposit and cancellation policy?',
    answer: 'You can confirm your trip with a 30% advance deposit. Full refunds are provided for cancellations made 7+ days prior to arrival. Date modifications are allowed free of charge based on availability.'
  },
  {
    id: '7',
    category: 'Bookings & Transport',
    question: 'How do I reach Dandeli by train, road, or flight?',
    answer: 'Dandeli is well connected by road from Hubli (75 km), Belagavi (90 km), and Goa (100 km). Nearest railway stations are Londa Junction (36 km) and Alnavar (32 km). Our office at K.C Circle, opp. IOC pump provides pick-up & drop cab services.'
  },
  {
    id: '8',
    category: 'Jungle Safari',
    question: 'How do open Jeep Safaris in Dandeli Wildlife Sanctuary work?',
    answer: 'Safaris operate in official Forest Department open 4x4 jeeps with registered naturalists. Morning slots run 6:00 AM - 8:00 AM and evening slots 4:00 PM - 6:00 PM. We recommend booking permits through our travel desk in advance.'
  }
];

interface FAQSectionProps {
  id?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ id = 'faqs' }) => {
  const { isLight } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('1');

  const categories = ['All', 'Activities & Safety', 'Stays & Amenities', 'Bookings & Transport', 'Jungle Safari'];

  const filteredFaqs = activeCategory === 'All'
    ? defaultFaqs
    : defaultFaqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (faqId: string) => {
    setOpenFaqId(prev => prev === faqId ? null : faqId);
  };

  return (
    <section
      id={id}
      className={`py-14 sm:py-20 transition-colors duration-300 relative ${
        isLight ? 'bg-[#f7f4ee] text-[#1c1917]' : 'bg-[#0d0b09] text-[#e8e4dc]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider mb-4 border shadow-xs ${
            isLight ? 'bg-[#eee7d8] border-[#dfd5c2] text-[#855f2d]' : 'bg-[#1a1714] border-[#2e2820] text-[#d4aa73]'
          }`}>
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className={`font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight ${
            isLight ? 'text-[#1c1917]' : 'text-white'
          }`}>
            Frequently Asked Questions
          </h2>

          <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${
            isLight ? 'text-[#5e5548]' : 'text-[#a8a092]'
          }`}>
            Everything you need to know about Kali River rafting safety, resort bookings, jungle safaris, and reaching Dandeli.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? isLight
                    ? 'bg-[#1c1917] text-white shadow-sm'
                    : 'bg-[#c9a66b] text-[#0d0c0b] font-semibold shadow-sm'
                  : isLight
                    ? 'bg-[#eee7db] text-[#524a3e] hover:bg-[#e4dacb] border border-[#ded5c6]'
                    : 'bg-[#171411] text-[#b0a89a] hover:bg-[#211d18] border border-[#26211b]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isLight
                      ? 'bg-[#ffffff] border-[#c9a66b] shadow-md'
                      : 'bg-[#15120e] border-[#b8854c] shadow-lg'
                    : isLight
                      ? 'bg-[#eee8dc]/70 border-[#ded5c6] hover:bg-[#eee8dc]'
                      : 'bg-[#110f0d] border-[#221d18] hover:bg-[#181512]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                      isOpen
                        ? 'bg-[#b8854c] text-white font-bold'
                        : isLight ? 'bg-[#e2d8c7] text-[#6b6051]' : 'bg-[#221e18] text-[#8c8273]'
                    }`}>
                      {faq.category}
                    </span>
                    <h3 className={`font-medium text-sm sm:text-base leading-snug transition-colors ${
                      isOpen
                        ? isLight ? 'text-[#1c1917]' : 'text-white'
                        : isLight ? 'text-[#2e2924]' : 'text-[#ded8cc]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-full transition-transform duration-300 ${
                    isOpen
                      ? 'rotate-180 bg-[#b8854c]/15 text-[#b8854c]'
                      : isLight ? 'text-[#827766]' : 'text-[#8a8072]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t transition-all ${
                    isLight ? 'border-[#f2ebd9] text-[#4a4237]' : 'border-[#221d18] text-[#c4bcad]'
                  }`}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className={`mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl border text-center relative overflow-hidden ${
          isLight
            ? 'bg-[#ebe4d6] border-[#dacdb9]'
            : 'bg-[#14110e] border-[#29231c]'
        }`}>
          <div className="relative z-10 max-w-lg mx-auto">
            <h4 className={`font-serif text-lg sm:text-xl font-medium mb-1.5 ${
              isLight ? 'text-[#1c1917]' : 'text-white'
            }`}>
              Still Have Questions or Special Requests?
            </h4>
            <p className={`text-xs sm:text-sm mb-5 ${
              isLight ? 'text-[#615748]' : 'text-[#a89f91]'
            }`}>
              Our local Dandeli travel specialists are ready to help customize your stays, activities, and transport 7 days a week.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919175357845"
                className="px-5 py-2.5 rounded-full bg-[#1c1917] hover:bg-[#b8854c] text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 9175357845</span>
              </a>

              <a
                href="https://wa.me/919175357845?text=Hi%20Dandeli%20Tours,%20I%20have%20a%20question%20about%20packages"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="mailto:dandelitours@gmail.com"
                className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 border transition-all ${
                  isLight
                    ? 'border-[#c2b5a1] bg-white text-[#1c1917] hover:bg-[#f2ece1]'
                    : 'border-[#3a3227] bg-[#1e1a15] text-white hover:bg-[#29231d]'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>dandelitours@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
