import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Sparkles, Clock, ShieldCheck, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { isLight } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkInDate: '',
    guests: '2 Guests',
    stayType: 'Riverside Resort',
    experiences: [] as string[],
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const experienceOptions = [
    'River Rafting',
    'Kayaking & Zipline',
    'Jungle Jeep Safari',
    'Treehouse Stay',
    'Riverside Campfire',
    'Sightseeing & Trekking',
  ];

  const handleCheckboxToggle = (exp: string) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.includes(exp)
        ? prev.experiences.filter((item) => item !== exp)
        : [...prev.experiences, exp],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-us" className="py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
        <h2 className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight ${
          isLight ? 'text-[#1c1917]' : 'text-[#f6f2ec]'
        }`}>
          Contact Us & Plan Your Escape
        </h2>
        <p className={`text-xs sm:text-sm mt-2.5 leading-relaxed px-2 ${
          isLight ? 'text-[#5e574d]' : 'text-[#a69e92]'
        }`}>
          Have a query about river rafting, customized group packages, or luxury treehouses? Send us a message or call our local Dandeli experts directly.
        </p>
      </div>

      {/* 2-Column Contact Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Info & Guarantees */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          {/* Quick Contact Cards */}
          <div className={`p-4 sm:p-7 rounded-2xl sm:rounded-3xl border transition-colors ${
            isLight ? 'bg-white border-[#e6decb] shadow-sm' : 'bg-[#15120f] border-[#2c261e]'
          }`}>
            <h3 className={`font-serif text-lg sm:text-xl font-medium mb-3 sm:mb-4 ${
              isLight ? 'text-[#1c1917]' : 'text-[#f4efe8]'
            }`}>
              Direct Contact Desk
            </h3>

            <div className="space-y-2.5 sm:space-y-4">
              {/* Phone */}
              <a
                href="tel:+919175357845"
                className={`flex items-center sm:items-start gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl transition-colors group min-h-[52px] ${
                  isLight ? 'bg-[#faf6f0] sm:bg-transparent hover:bg-[#f6f1e8]' : 'bg-[#1a1612] sm:bg-transparent hover:bg-[#1f1a14]'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#b8854c]/15 text-[#b8854c] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`text-[10px] sm:text-[11px] uppercase tracking-wider block font-medium ${
                    isLight ? 'text-[#7d7364]' : 'text-[#8e8578]'
                  }`}>
                    Call for Instant Bookings
                  </span>
                  <span className={`text-sm sm:text-base font-semibold transition-colors block truncate ${
                    isLight ? 'text-[#1c1917] group-hover:text-[#b8854c]' : 'text-white group-hover:text-[#d4aa73]'
                  }`}>
                    +91 9175357845
                  </span>
                  <span className={`text-[10px] sm:text-[11px] block mt-0.5 ${isLight ? 'text-[#7e7465]' : 'text-[#9c9386]'}`}>
                    Mon - Sun: 7:00 AM - 10:30 PM
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919175357845?text=Hi%20Dandeli%20Tours,%20I%20want%20to%20inquire%20about%20packages"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center sm:items-start gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl transition-colors group min-h-[52px] ${
                  isLight ? 'bg-[#faf6f0] sm:bg-transparent hover:bg-[#f6f1e8]' : 'bg-[#1a1612] sm:bg-transparent hover:bg-[#1f1a14]'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#25d366]/15 text-[#25d366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`text-[10px] sm:text-[11px] uppercase tracking-wider block font-medium ${
                    isLight ? 'text-[#7d7364]' : 'text-[#8e8578]'
                  }`}>
                    WhatsApp Chat Support
                  </span>
                  <span className={`text-sm sm:text-base font-semibold transition-colors block truncate ${
                    isLight ? 'text-[#1c1917] group-hover:text-[#25d366]' : 'text-white group-hover:text-[#4ade80]'
                  }`}>
                    +91 9175357845
                  </span>
                  <span className={`text-[10px] sm:text-[11px] block mt-0.5 ${isLight ? 'text-[#7e7465]' : 'text-[#9c9386]'}`}>
                    Instant response within 5 minutes
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:dandelitours@gmail.com"
                className={`flex items-center sm:items-start gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl transition-colors group min-h-[52px] ${
                  isLight ? 'bg-[#faf6f0] sm:bg-transparent hover:bg-[#f6f1e8]' : 'bg-[#1a1612] sm:bg-transparent hover:bg-[#1f1a14]'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#b8854c]/15 text-[#b8854c] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`text-[10px] sm:text-[11px] uppercase tracking-wider block font-medium ${
                    isLight ? 'text-[#7d7364]' : 'text-[#8e8578]'
                  }`}>
                    Email Inquiries
                  </span>
                  <span className={`text-xs sm:text-sm font-semibold transition-colors block truncate ${
                    isLight ? 'text-[#1c1917] group-hover:text-[#b8854c]' : 'text-white group-hover:text-[#d4aa73]'
                  }`}>
                    dandelitours@gmail.com
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className={`flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl ${
                isLight ? 'bg-[#faf6ef]' : 'bg-[#1b1713]'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-[#b8854c]/15 text-[#b8854c] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`text-[10px] sm:text-[11px] uppercase tracking-wider block font-medium ${
                    isLight ? 'text-[#7d7364]' : 'text-[#8e8578]'
                  }`}>
                    Dandeli Tours Office
                  </span>
                  <span className={`text-xs leading-relaxed block mt-0.5 ${
                    isLight ? 'text-[#3d372e]' : 'text-[#cfc7b8]'
                  }`}>
                    K.C circle, opp. ioc pump, Dandeli, Karnataka 581325
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees Box */}
          <div className={`p-4 sm:p-5 rounded-2xl border ${
            isLight ? 'bg-[#faf6ef] border-[#e8dfcf]' : 'bg-[#181410] border-[#29231b]'
          }`}>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b8854c] shrink-0" />
                <span className={`font-medium text-[11px] sm:text-xs ${isLight ? 'text-[#3d372e]' : 'text-[#d8d0c2]'}`}>
                  Certified River Guides
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#b8854c] shrink-0" />
                <span className={`font-medium text-[11px] sm:text-xs ${isLight ? 'text-[#3d372e]' : 'text-[#d8d0c2]'}`}>
                  Instant Confirmation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b8854c] shrink-0" />
                <span className={`font-medium text-[11px] sm:text-xs ${isLight ? 'text-[#3d372e]' : 'text-[#d8d0c2]'}`}>
                  Best Price Guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#b8854c] shrink-0" />
                <span className={`font-medium text-[11px] sm:text-xs ${isLight ? 'text-[#3d372e]' : 'text-[#d8d0c2]'}`}>
                  Custom Group Deals
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Booking Form */}
        <div className="lg:col-span-7">
          <div className={`p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border transition-colors relative overflow-hidden ${
            isLight ? 'bg-white border-[#e6decb] shadow-xl' : 'bg-[#15120f] border-[#2c261e] shadow-2xl'
          }`}>
            {isSubmitted ? (
              <div className="py-8 sm:py-12 text-center space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1b4328] text-[#4ade80] flex items-center justify-center mx-auto mb-3 border border-[#2e6d42] animate-bounce">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className={`font-serif text-xl sm:text-3xl font-medium ${
                  isLight ? 'text-[#1c1917]' : 'text-white'
                }`}>
                  Inquiry Sent Successfully!
                </h3>
                <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed px-2 ${
                  isLight ? 'text-[#5a5246]' : 'text-[#b8b0a2]'
                }`}>
                  Thank you, <strong>{formData.name || 'Explorer'}</strong>! Our Dandeli travel specialist will contact you on <strong>{formData.phone || 'your phone'}</strong> with your customized package quote shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/919175357845?text=Hi%20Dandeli%20Tours,%20I%20just%20submitted%20an%20inquiry%20form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat Now on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        checkInDate: '',
                        guests: '2 Guests',
                        stayType: 'Riverside Resort',
                        experiences: [],
                        message: '',
                      });
                    }}
                    className={`w-full sm:w-auto px-6 py-3 rounded-xl border text-xs font-medium cursor-pointer transition-colors min-h-[44px] ${
                      isLight ? 'border-[#cfc4b2] text-[#423a2f] hover:bg-[#f6f0e4]' : 'border-[#443a2c] text-[#d4cdbf] hover:bg-[#1f1a14]'
                    }`}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-inherit gap-2">
                  <div>
                    <h3 className={`font-serif text-lg sm:text-2xl font-medium ${
                      isLight ? 'text-[#1c1917]' : 'text-[#f4efe8]'
                    }`}>
                      Get a Free Custom Quote
                    </h3>
                    <p className={`text-[11px] sm:text-xs mt-0.5 ${isLight ? 'text-[#7d7364]' : 'text-[#8e8578]'}`}>
                      Fill in your details for an instant itinerary
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#b8854c]/15 text-[#b8854c] shrink-0">
                    Quick 1-Min Form
                  </span>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className={`block text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-1 ${
                      isLight ? 'text-[#4e463a]' : 'text-[#a9a193]'
                    }`}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kulkarni"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all min-h-[44px] ${
                        isLight
                          ? 'bg-[#faf8f5] border-[#d8cfbe] text-[#1c1917] focus:border-[#b8854c] focus:ring-2 focus:ring-[#b8854c]/20'
                          : 'bg-[#1b1714] border-[#362e24] text-white focus:border-[#d4aa73] focus:ring-2 focus:ring-[#d4aa73]/20'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-1 ${
                      isLight ? 'text-[#4e463a]' : 'text-[#a9a193]'
                    }`}>
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all min-h-[44px] ${
                        isLight
                          ? 'bg-[#faf8f5] border-[#d8cfbe] text-[#1c1917] focus:border-[#b8854c] focus:ring-2 focus:ring-[#b8854c]/20'
                          : 'bg-[#1b1714] border-[#362e24] text-white focus:border-[#d4aa73] focus:ring-2 focus:ring-[#d4aa73]/20'
                      }`}
                    />
                  </div>
                </div>

                {/* Email & Check-in Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className={`block text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-1 ${
                      isLight ? 'text-[#4e463a]' : 'text-[#a9a193]'
                    }`}>
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all min-h-[44px] ${
                        isLight
                          ? 'bg-[#faf8f5] border-[#d8cfbe] text-[#1c1917] focus:border-[#b8854c] focus:ring-2 focus:ring-[#b8854c]/20'
                          : 'bg-[#1b1714] border-[#362e24] text-white focus:border-[#d4aa73] focus:ring-2 focus:ring-[#d4aa73]/20'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-1 ${
                      isLight ? 'text-[#4e463a]' : 'text-[#a9a193]'
                    }`}>
                      Expected Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkInDate}
                      onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                      className={`w-full px-3.5 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all min-h-[44px] ${
                        isLight
                          ? 'bg-[#faf8f5] border-[#d8cfbe] text-[#1c1917] focus:border-[#b8854c]'
                          : 'bg-[#1b1714] border-[#362e24] text-white focus:border-[#d4aa73]'
                      }`}
                    />
                  </div>
                </div>

                {/* Number of Guests & Preferred Stay */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className={`block text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-1 ${
                      isLight ? 'text-[#4e463a]' : 'text-[#a9a193]'
                    }`}>
                      Group / Guest Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className={`w-full px-3.5 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all cursor-pointer min-h-[44px] ${
                        isLight
                          ? 'bg-[#faf8f5] border-[#d8cfbe] text-[#1c1917] focus:border-[#b8854c]'
                          : 'bg-[#1b1714] border-[#362e24] text-white focus:border-[#d4aa73]'
                      }`}
                    >
                      <option value="1-2 Guests (Couple / Solo)">1 - 2 Guests (Couple / Solo)</option>
                      <option value="3-5 Guests (Small Family / Friends)">3 - 5 Guests (Family / Friends)</option>
                      <option value="6-10 Guests (Medium Group)">6 - 10 Guests (Medium Group)</option>
                      <option value="10-25 Guests (Large Corporate / Family)">10 - 25 Guests (Large Group)</option>
                      <option value="25+ Guests (College / Corporate Outing)">25+ Guests (Event / Outing)</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-1 ${
                      isLight ? 'text-[#4e463a]' : 'text-[#a9a193]'
                    }`}>
                      Preferred Accommodation
                    </label>
                    <select
                      value={formData.stayType}
                      onChange={(e) => setFormData({ ...formData, stayType: e.target.value })}
                      className={`w-full px-3.5 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all cursor-pointer min-h-[44px] ${
                        isLight
                          ? 'bg-[#faf8f5] border-[#d8cfbe] text-[#1c1917] focus:border-[#b8854c]'
                          : 'bg-[#1b1714] border-[#362e24] text-white focus:border-[#d4aa73]'
                      }`}
                    >
                      <option value="Riverside Resort">Kali Riverside Resort</option>
                      <option value="Luxury Treehouse">Luxury Canopy Treehouse</option>
                      <option value="Jungle Wooden Cottage">Jungle Wooden Cottage</option>
                      <option value="Riverside Camping & Tents">Riverside Camping Tents</option>
                      <option value="Private Pool Villa">Private Pool Villa</option>
                      <option value="Activities Only (No Stay)">Activities Only (Day Outing)</option>
                    </select>
                  </div>
                </div>

                {/* Experiences of Interest Checkboxes */}
                <div>
                  <label className={`block text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-1.5 ${
                    isLight ? 'text-[#4e463a]' : 'text-[#a9a193]'
                  }`}>
                    Activities You're Interested In
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {experienceOptions.map((exp) => {
                      const isChecked = formData.experiences.includes(exp);
                      return (
                        <button
                          key={exp}
                          type="button"
                          onClick={() => handleCheckboxToggle(exp)}
                          className={`text-[11px] font-medium p-2.5 sm:p-2 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer min-h-[40px] ${
                            isChecked
                              ? 'bg-[#b8854c]/15 border-[#b8854c] text-[#b8854c]'
                              : isLight
                              ? 'bg-[#faf8f5] border-[#e2dacb] text-[#554d40] hover:border-[#b8854c]'
                              : 'bg-[#1c1814] border-[#332a20] text-[#b0a89a] hover:border-[#d4aa73]'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-[#b8854c] border-[#b8854c] text-white' : 'border-inherit'
                          }`}>
                            {isChecked && <CheckCircle2 className="w-3 h-3" />}
                          </div>
                          <span className="line-clamp-1">{exp}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-1 ${
                    isLight ? 'text-[#4e463a]' : 'text-[#a9a193]'
                  }`}>
                    Special Requests / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about food preferences, pickup requirements, or custom budget expectations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-3 rounded-xl text-xs sm:text-sm border outline-none transition-all resize-none ${
                      isLight
                        ? 'bg-[#faf8f5] border-[#d8cfbe] text-[#1c1917] focus:border-[#b8854c]'
                        : 'bg-[#1b1714] border-[#362e24] text-white focus:border-[#d4aa73]'
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#b8854c] hover:bg-[#c9945a] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#b8854c]/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
                >
                  {isSubmitting ? (
                    <span>Sending your inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry & Get Free Custom Quote</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
