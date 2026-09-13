export interface Property {
  id: string;
  name: string;
  location: string;
  guests: number;
  beds?: number;
  baths?: number;
  imageUrl: string;
  pricePerNight?: string;
  rating?: number;
  featured?: boolean;
  duration?: string;
  meals?: string;
  activities?: string;
  tag?: string;
  badge?: string;
  inclusions?: string[];
  roomType?: string;
  viewType?: string;
  amenities?: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  isCenter?: boolean;
}

export interface SpotlightItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
  badgeType?: 'gold' | 'red' | 'teal' | 'emerald' | 'amber';
  duration?: string;
  tag?: string;
}

export interface DandeliActivityItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
  category?: string;
  tag?: string;
}

export interface StoryItem {
  id: string;
  celebrity: string;
  category: string;
  villaName?: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  aspect?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isLarge?: boolean;
  category?: 'all' | 'river' | 'jungle' | 'stays' | 'dining';
  tag?: string;
  location?: string;
}
