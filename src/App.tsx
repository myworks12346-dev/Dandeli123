import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertySection } from './components/PropertySection';
import { FeatureSection } from './components/FeatureSection';
import { SpotlightSection } from './components/SpotlightSection';
import { StorySection } from './components/StorySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Modals } from './components/Modals';
import { ManagerDashboard } from './components/ManagerDashboard';
import { useTheme } from './context/ThemeContext';

import {
  priveProperties,
  springProperties,
  featureItems,
  spotlightItems,
  storyItems,
  experienceItems,
} from './data/mockData';
import { Property, StoryItem, ExperienceItem, FeatureItem } from './types';

export default function App() {
  const { isLight } = useTheme();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isManagerDashboardOpen, setIsManagerDashboardOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState<{
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  } | null>(null);

  const handleSearch = (filters: {
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => {
    setSearchFilter(filters);
    // Smooth scroll down to the villas
    const element = document.getElementById('the-dandeli-collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectExperience = (exp: ExperienceItem) => {
    setIsContactOpen(true);
  };

  const handleSelectFeature = (item: FeatureItem) => {
    setIsContactOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
      isLight
        ? 'bg-[#f7f4ee] text-[#1c1917] selection:bg-[#9c7d49]/30 selection:text-black'
        : 'bg-[#0b0a09] text-[#e8e4dc] selection:bg-[#c8a974]/30 selection:text-white'
    }`}>
      {/* 1. Header (Sticky/Transparent with Brand Logo and Navigation) */}
      <Header
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenPartner={() => setIsPartnerOpen(true)}
        onOpenSupport={() => setIsContactOpen(true)}
        onOpenManagerDashboard={() => setIsManagerDashboardOpen(true)}
      />

      {/* Main Page Flow Matching Reference Exactly */}
      <main className="flex-1 w-full overflow-x-hidden pb-16 md:pb-0">
        {/* 2. Hero Section */}
        <Hero onSearch={handleSearch} />

        {/* 3. The Dandeli Collection (Packages & Escapes) */}
        <PropertySection
          id="the-dandeli-collection"
          category="The Dandeli Collection"
          title="Your escape, your way."
          subtitle="Whether you're chasing adventure, looking for a quiet weekend in the forest, or planning a memorable trip with friends and family, our curated Dandeli experiences make it simple to discover more and worry less."
          actionText="Explore Packages"
          properties={priveProperties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onViewAll={() => {
            const el = document.getElementById('experiences-activities');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Experiences Worth Remembering (Activities & Adventures) */}
        <SpotlightSection items={spotlightItems} />

        {/* 5. What Sets Privé Apart */}
        <FeatureSection
          items={featureItems}
          onSelectFeature={handleSelectFeature}
        />

        {/* 6. Hotel Rooms & Stays */}
        <PropertySection
          id="hotel-rooms-and-stays"
          category="Handcrafted Dandeli Retreats"
          title="Hotel Rooms & Stays"
          subtitle="Wake up to birdsong, river breezes, and the tranquil serenity of Dandeli's untouched forests"
          actionText="Explore All Rooms"
          properties={springProperties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onViewAll={() => {
            const el = document.getElementById('what-sets-prive-apart');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8. Every Stay Has a Story */}
        <StorySection
          stories={storyItems}
          onPlayStory={(story) => setSelectedStory(story)}
        />

        {/* 9. Gallery & Experiences */}
        <ExperienceSection
          experiences={experienceItems}
          onSelectExperience={handleSelectExperience}
        />

        {/* 10. Contact Us & Booking Desk */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating Contact Buttons */}
      <FloatingButtons
        onOpenContact={() => setIsContactOpen(true)}
        onOpenManagerDashboard={() => setIsManagerDashboardOpen(true)}
      />

      {/* 13. Mobile Bottom Navigation (Only in Mobile View) */}
      <MobileBottomNav
        onOpenPartner={() => setIsPartnerOpen(true)}
        onOpenEvents={() => setIsReserveOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenManagerDashboard={() => setIsManagerDashboardOpen(true)}
      />

      {/* 14. Travel Manager Control Center Dashboard */}
      <ManagerDashboard
        isOpen={isManagerDashboardOpen}
        onClose={() => setIsManagerDashboardOpen(false)}
      />

      {/* 14. Interactive Modals */}
      <Modals
        selectedProperty={selectedProperty}
        onCloseProperty={() => setSelectedProperty(null)}
        selectedStory={selectedStory}
        onCloseStory={() => setSelectedStory(null)}
        isAuthOpen={isAuthOpen}
        onCloseAuth={() => setIsAuthOpen(false)}
        isPartnerOpen={isPartnerOpen}
        onClosePartner={() => setIsPartnerOpen(false)}
        isReserveOpen={isReserveOpen}
        onCloseReserve={() => setIsReserveOpen(false)}
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
        searchFilter={searchFilter}
        onClearSearchFilter={() => setSearchFilter(null)}
      />
    </div>
  );
}
