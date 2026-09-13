import { Property, FeatureItem, SpotlightItem, StoryItem, ExperienceItem } from '../types';

export const priveProperties: Property[] = [
  {
    id: 'student-package',
    name: 'Student Package',
    location: 'Kali Riverbank, Dandeli',
    duration: '1 Night / 2days Package',
    meals: '3 Meals - Lunch, Dinner, Breakfast',
    activities: 'Water Activities - River Boating, River Kayaking, Zorbing, Swimming',
    guests: 4,
    beds: 4,
    baths: 2,
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788986059/74737e30-fd39-4582-8f37-dfee078098aa.png',
    pricePerNight: '₹1,499',
    rating: 4.94,
    tag: 'Special Student Discount',
    badge: 'Adventure Special',
    inclusions: [
      '1 Night / 2 Days Resort / Tent Stay',
      '3 Nutritious Meals (Buffet Lunch, Dinner & Breakfast)',
      'Water Activities: River Boating & River Kayaking',
      'Natural River Swimming with Life Jackets',
      'Evening Campfire with Music & Group Games',
      'Guided Morning Jungle & River Walk'
    ]
  },
  {
    id: 'group-package',
    name: 'Group Package',
    location: 'Bison River Forest, Dandeli',
    duration: '1 Night / 2days Package',
    meals: '3 Meals - Lunch, Dinner, Breakfast',
    activities: 'Water Activities - River Boating, Kayaking, Swimming, Campfire & Music',
    guests: 6,
    beds: 6,
    baths: 4,
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990060/16cad5ab-9ffe-413a-b792-867032abb2d3.png',
    pricePerNight: '₹1,899',
    rating: 4.98,
    tag: 'Best for Friends & Corporates',
    badge: 'Most Popular',
    inclusions: [
      '1 Night / 2 Days Deluxe Cottage / Villa Stay',
      '3 Grand Meals (Unlimited Buffet Lunch, Dinner & Breakfast)',
      'Water Activities: Kali River Boating, Kayaking & Jacuzzi Bath',
      'Evening Bonfire with DJ Music Setup',
      'Rain Dance, Archery & Volleyball',
      'Sightseeing Assistance for Syntheri Rocks & Supa Dam'
    ]
  },
  {
    id: 'family-package',
    name: 'Family Package',
    location: 'Hornbill Sanctuary Estate, Dandeli',
    duration: '1 Night / 2days Package',
    meals: '3 Meals - Lunch, Dinner, Breakfast',
    activities: 'Water Activities - River Boating, River Kayaking, Nature Walk, Sightseeing',
    guests: 4,
    beds: 3,
    baths: 3,
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990118/af4c0a2b-298d-4821-8646-fc325c884a10.png',
    pricePerNight: '₹2,499',
    rating: 4.96,
    tag: 'Safe & Serene Forest Estate',
    badge: 'Family Favorite',
    inclusions: [
      '1 Night / 2 Days Premium Family Cottage Stay',
      '3 Freshly Prepared Homestyle Meals (Lunch, Dinner, Breakfast)',
      'Safe Guided River Boating & Kayaking with Instructor',
      'Kids Play Zone & Swimming Pool Access',
      'Hornbill Bird Watching & Forest Canopy Walk',
      'Private Family Campfire & Evening High Tea'
    ]
  },
  {
    id: 'couple-package',
    name: 'Couple Package',
    location: 'Riverview Treehouses, Dandeli',
    duration: '1 Night / 2days Package',
    meals: '3 Meals - Lunch, Dinner, Breakfast',
    activities: 'Water Activities - River Boating, Kayaking, Swimming, Candlelight Dinner',
    guests: 2,
    beds: 1,
    baths: 1,
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989830/84aece0b-ced0-4594-89d9-afd465f38c98.png',
    pricePerNight: '₹4,999',
    rating: 4.99,
    tag: 'Private Romantic Forest Escape',
    badge: 'Romantic Getaway',
    inclusions: [
      '1 Night / 2 Days Luxury Private Riverview Cottage / Treehouse',
      '3 Curated Gourmet Meals with Candlelight Dinner Experience',
      'Couple Kayaking & Private River Boat Cruise',
      'Complimentary Sunset Mocktails & Evening High Tea',
      'Cozy Riverside Campfire Setup',
      'Free Early Check-in / Late Check-out (subject to availability)'
    ]
  }
];

export const springProperties: Property[] = [
  {
    id: 'luxury-treehouse-room',
    name: 'Elevated River Treehouse',
    location: 'Kali River Canopy, Dandeli',
    guests: 2,
    beds: 1,
    baths: 1,
    roomType: 'Luxury Treehouse',
    viewType: 'River & Forest Canopy View',
    tag: 'Private Jacuzzi • Wooden Sundeck',
    badge: 'Canopy View',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991704/dandeli_cottage_4K_faithful.jpg',
    pricePerNight: '₹6,500',
    rating: 4.98,
    amenities: [
      'King Size Teakwood Bed',
      'Private Open-Air Jacuzzi on Deck',
      'Panoramic Kali River & Forest View',
      'Complimentary Gourmet Buffet Breakfast',
      'Silent Split AC & Fast WiFi',
      'Rainforest Glass Shower with Organic Toiletries'
    ]
  },
  {
    id: 'kali-riverfront-suite',
    name: 'Kali Riverfront Glass Suite',
    location: 'Kali Riverside, Dandeli',
    guests: 3,
    beds: 1,
    baths: 1,
    roomType: 'Waterfront Suite',
    viewType: 'Direct Riverfront View',
    tag: 'Plunge Pool • Floor-to-Ceiling Glass',
    badge: 'Best Seller',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991654/dandeli_pool_cottages_4K_faithful.jpg',
    pricePerNight: '₹5,200',
    rating: 4.96,
    amenities: [
      'Floor-to-Ceiling Riverfront Glass Wall',
      'Private Outdoor Plunge Pool',
      'King Bed with Ergonomic Memory Foam',
      'Complimentary High Tea & Cookies',
      'Espresso Machine & Mini Bar',
      'Direct Access to Kali River Boardwalk'
    ]
  },
  {
    id: 'heritage-jungle-villa',
    name: 'Heritage Teakwood Cottage',
    location: 'Hornbill Forest Reserve, Dandeli',
    guests: 4,
    beds: 2,
    baths: 2,
    roomType: 'Cottage & Villa',
    viewType: 'Ancient Forest Garden View',
    tag: 'Private Garden • Forest Hammock',
    badge: 'Forest Retreat',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991789/dandeli_resort_cabins_4K_faithful.jpg',
    pricePerNight: '₹4,800',
    rating: 4.94,
    amenities: [
      'Two Spacious Handcrafted Wooden Bedrooms',
      'Private Veranda with Forest Hammock',
      'Garden Patio with Night Lighting',
      'Buffet Breakfast & Dinner Package Options',
      'Artisanal Bergamot Herbal Toiletries',
      'Evening Bonfire by the Cottage'
    ]
  },
  {
    id: 'deluxe-safari-room',
    name: 'Deluxe Safari Forest Room',
    location: 'Wildwoods Sanctuary, Dandeli',
    guests: 2,
    beds: 1,
    baths: 1,
    roomType: 'Deluxe Forest Room',
    viewType: 'Wildlife Sanctuary View',
    tag: 'Private Balcony • Climate Control',
    badge: 'Popular Choice',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991896/dandeli_bedroom_4K_faithful.jpg',
    pricePerNight: '₹3,600',
    rating: 4.92,
    amenities: [
      'Plush King Bed with Premium Linens',
      'Private Balcony overlooking Bird Habitat',
      'Climate Control Air Conditioning',
      'Complimentary Country Breakfast',
      'Spacious Modern Bathroom with Hot Shower',
      '24/7 Room Service & Concierge'
    ]
  },
  {
    id: 'private-pool-sanctuary',
    name: 'Riverbank Private Pool Villa',
    location: 'Kali Riverside, Dandeli',
    guests: 4,
    beds: 2,
    baths: 2,
    roomType: 'Private Pool Villa',
    viewType: 'Infinity Pool & River View',
    tag: 'Private Infinity Pool • Butler Service',
    badge: 'Ultra Luxury',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788992010/dandeli_pool_deck_4K_faithful.jpg',
    pricePerNight: '₹8,500',
    rating: 4.99,
    amenities: [
      'Private Temperature-Controlled Infinity Pool',
      'Two Master Suites with Walk-in Wardrobes',
      'Dedicated Villa Host & Butler Service',
      'All Meals Included with Live BBQ Setup',
      'Private Riverside Sunset Deck with Firepit',
      'Handcrafted Luxury Soaking Tub'
    ]
  },
  {
    id: 'hornbill-canopy-chalet',
    name: 'Hornbill Nesting Chalet',
    location: 'Canopy Reserve, Dandeli',
    guests: 3,
    beds: 2,
    baths: 1,
    roomType: 'Wooden Chalet',
    viewType: 'Hornbill Canopy Corridor',
    tag: 'Stargazing Attic • Wraparound Deck',
    badge: 'Nature Sanctuary',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991817/dandeli_cottages_night_4K_faithful.jpg',
    pricePerNight: '₹4,200',
    rating: 4.95,
    amenities: [
      'Cozy Wooden Chalet with Stargazing Loft Bed',
      'High-Power Bird Watching Binoculars in Room',
      'Wraparound Forest Porch with Teak Armchairs',
      'Nutritious Organic Breakfast Included',
      'Natural Springwater Hot Shower',
      'Guided Morning Forest Walk Included'
    ]
  }
];

export const featureItems: FeatureItem[] = [
  {
    id: 'comfortable-stays',
    title: 'Comfortable Stays',
    subtitle: 'Riverside Cottages & Treehouses',
    description: 'Wake up to morning mist and birdsong in handpicked riverside resorts and cozy wooden chalets.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991498/dandeli_pool_resort_4K_faithful.jpg',
    isCenter: false
  },
  {
    id: 'delicious-meals',
    title: 'Delicious Meals',
    subtitle: 'Authentic Local Flavours & BBQ',
    description: 'Wholesome Malnad meals, fresh river delicacies, hot evening snacks, and starlit live grills.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991124/3d3247ad-0c0e-47eb-8273-2caf778a50b4.png',
    isCenter: true
  },
  {
    id: 'river-adventures',
    title: 'River Adventures',
    subtitle: 'Rafting, Safaris & Kayaking',
    description: 'Conquer the untamed Kali River rapids and explore deep Western Ghats wildlife corridors.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989218/d2ce9490-3b38-45f2-883e-101f102eb22b.png',
    isCenter: false
  }
];

export const spotlightItems: SpotlightItem[] = [
  {
    id: 'white-water-rafting',
    badge: 'Thrilling Adventure',
    badgeType: 'gold',
    tag: 'Grade 3 Rapids',
    duration: '2-3 Hours',
    title: 'White Water Rafting',
    description: 'Navigate the rapids of the Kali River and experience Dandeli at full speed.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988699/134030b2-8ca1-4608-bb48-f2a0955637e8.png'
  },
  {
    id: 'river-swimming',
    badge: 'Natural Jacuzzi',
    badgeType: 'teal',
    tag: 'All Ages',
    duration: '1-2 Hours',
    title: 'River Swimming',
    description: 'Cool off in the refreshing waters surrounded by nature.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788987205/bcc42f39-3865-4d9f-916f-7115ae8f818b.png'
  },
  {
    id: 'jungle-walk',
    badge: 'Flora & Fauna',
    badgeType: 'emerald',
    tag: 'Guided Trek',
    duration: '2 Hours',
    title: 'Jungle Walk',
    description: "Discover the sights, sounds and hidden beauty of Dandeli's forests.",
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988151/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png'
  },
  {
    id: 'kayaking',
    badge: 'Solo & Tandem',
    badgeType: 'gold',
    tag: 'Scenic Waters',
    duration: '1 Hour',
    title: 'Kayaking',
    description: 'Paddle your way through the calm and wild waters of Dandeli.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788986693/32919f44-58d9-431a-8790-7b1d932b816b.png'
  },
  {
    id: 'river-crossing',
    badge: 'High Adrenaline',
    badgeType: 'red',
    tag: 'Aerial Zipline',
    duration: '45 Mins',
    title: 'River Crossing',
    description: 'Challenge yourself and experience the river from a completely different perspective.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988964/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png'
  },
  {
    id: 'river-boating',
    badge: 'Serene Cruise',
    badgeType: 'teal',
    tag: 'Coracle / Safari',
    duration: '1 Hour',
    title: 'River Boating',
    description: 'Take a slower route and enjoy Dandeli from the water.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990374/14fb0c52-22f0-4dcd-aa71-9135236cb1d5.png'
  },
  {
    id: 'cycling',
    badge: 'Eco Expedition',
    badgeType: 'emerald',
    tag: 'Forest Trail',
    duration: '1.5 Hours',
    title: 'Cycling',
    description: 'Explore the quieter side of Dandeli on two wheels.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988547/0bde2276-0e07-4d43-91d6-e0d764720c1d.png'
  },
  {
    id: 'zorbing',
    badge: 'Fun & Laughter',
    badgeType: 'amber',
    tag: 'Popular Favorite',
    duration: '30 Mins',
    title: 'Zorbing',
    description: 'Add a little fun, laughter and adventure to your getaway.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989050/84d548e8-afb5-43c4-b753-e88ee97be27f.png'
  }
];

export const storyItems: StoryItem[] = [
  {
    id: 'divya-agarwal',
    celebrity: 'Divya Agarwal x ELIVAAS',
    category: 'Happiness',
    villaName: 'Villa Nimisha by ELIVAAS',
    description: 'Where time turns into lasting memories.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788989914/863b6a52-02b4-4c75-9c62-bb01bdf5033b.png',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-pool-at-sunset-41484-large.mp4'
  },
  {
    id: 'dolly-singh',
    celebrity: 'DOLLY SINGH',
    category: 'Sweet Nostalgia',
    villaName: 'Lakeview Manor by ELIVAAS',
    description: 'A stay that brought back the warmth of old times.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990227/a069f43c-a7ff-41ec-9d8f-c1b9ef865c5d.png',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-warm-cup-of-tea-in-front-of-a-fireplace-43187-large.mp4'
  },
  {
    id: 'krishna-mukherjee',
    celebrity: 'KRISHNA MUKHERJEE',
    category: 'Vacation Mode',
    villaName: 'Casa Ritzy by ELIVAAS',
    description: 'Escape, unwind, and live the moment.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988466/a85c46f0-7c48-47d8-9bed-5039272bad67.png',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-relaxing-on-the-edge-of-an-infinity-pool-42868-large.mp4'
  },
  {
    id: 'ananya-panday',
    celebrity: 'Sanya Malhotra x ELIVAAS',
    category: 'Serenity',
    villaName: 'Palm Breeze Villa by ELIVAAS',
    description: 'An idyllic weekend wrapped in pure nature and luxury.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788975527/ChatGPT_Image_Sep_9_2026_11_07_56_PM.png',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-pool-at-sunset-41484-large.mp4'
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'kali-rafting',
    title: 'Whitewater Rapids of Dandeli',
    description: 'Conquer thrilling Grade III & IV rapids as the roaring Kali River charges through rugged Western Ghats canyons.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990668/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
    isLarge: true,
    category: 'river',
    tag: 'Water Adventure',
    location: 'Kali River Rapids'
  },
  {
    id: 'bonfire',
    title: 'Riverside Campfire & Music',
    description: "Under starlit skies, gather 'round the warmth of crackling fires with acoustic melodies and stargazing.",
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788991421/dandeli_resort_pool_4K_faithful.jpg',
    isLarge: false,
    category: 'dining',
    tag: 'Starlit Evenings',
    location: 'Kali Riverbank'
  },
  {
    id: 'barbeque',
    title: 'Live Forest Barbecue',
    description: 'Smoky grills, seasoned skewers, and delectable regional spices prepared live under ancient teak canopies.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990882/dandeli_restaurant_8K_faithful_under10MB.jpg',
    isLarge: false,
    category: 'dining',
    tag: 'Live Grill & Feasts',
    location: 'Jungle Courtyard'
  },
  {
    id: 'jungle-safari',
    title: 'Dandeli Wildlife Jeep Safari',
    description: 'Open-top 4x4 safaris navigating deep bamboo thickets in search of hornbills, spotted deer, and black panthers.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788987633/dandeli_tiger_4K.png',
    isLarge: false,
    category: 'jungle',
    tag: 'Wildlife Trail',
    location: 'Dandeli Forest Reserve'
  },
  {
    id: 'river-kayak',
    title: 'Serene Dawn Kayaking',
    description: 'Paddle across tranquil mirror-like waters as dawn mist rises over the emerald Kali riverfront.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788986271/a85fe801-b402-4806-bace-1210b9be3bfc.png',
    isLarge: false,
    category: 'river',
    tag: 'Morning Paddle',
    location: 'Supari Island Waters'
  },
  {
    id: 'treehouse-sunset',
    title: 'Canopy Sunset Views',
    description: 'Elevated wooden observation decks offering panoramic golden hour views over untouched wilderness.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788990397/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
    isLarge: false,
    category: 'stays',
    tag: 'Golden Hour Retreat',
    location: 'Canopy Balconies'
  },
  {
    id: 'hornbill-birding',
    title: 'Hornbill Sanctuary Walks',
    description: 'Listen to distinct calls and photograph the majestic Great Indian Hornbill with local naturalist guides.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788987529/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    isLarge: false,
    category: 'jungle',
    tag: 'Birding & Nature',
    location: 'Hornbill Nesting Corridor'
  },
  {
    id: 'star-gazing',
    title: 'Deep Forest Stargazing',
    description: 'Zero light pollution unveils vibrant star constellations, satellite trails, and the Milky Way arc.',
    imageUrl: 'https://res.cloudinary.com/joyorpxh/image/upload/v1788988335/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
    isLarge: false,
    category: 'stays',
    tag: 'Night Sky Wonders',
    location: 'Riverbank Clearing'
  }
];

export const footerData = {
  exploreVillas: [
    {
      state: 'Villas in Delhi NCR',
      cities: ['Delhi NCR', 'Deramandi', 'Faridabad', 'Gurugram', 'Manesar', 'Noida', 'Sonipat']
    },
    {
      state: 'Villas in Himachal Pradesh',
      cities: ['Dharamsala', 'Kasauli', 'Shimla']
    },
    {
      state: 'Villas in Maharashtra',
      cities: ['Alibaug', 'Igatpuri', 'Karjat', 'Lonavala', 'Nashik']
    },
    {
      state: 'Villas in Tamil Nadu',
      cities: ['Chennai', 'Mahabalipuram', 'Ooty']
    },
    {
      state: 'Villas in Kerala',
      cities: ['Alappuzha', 'Kochi', 'Munnar', 'Varkala']
    },
    {
      state: 'Villas in Rajasthan',
      cities: ['Alwar', 'Jaipur', 'Neemrana', 'Pushkar', 'Ranthambore', 'Udaipur']
    },
    {
      state: 'Villas in Uttarakhand',
      cities: ['Bhimtal', 'Dehradun', 'Jim Corbett', 'Mukteshwar', 'Mussoorie', 'Nainital', 'Ranikhet', 'Rishikesh']
    },
    {
      state: 'Villas in Karnataka',
      cities: ['Bengaluru', 'Coorg']
    },
    {
      state: 'Villas in Goa',
      cities: [
        'North Goa', 'Anjuna', 'Arpora', 'Ashwem', 'Assagao', 'Bardez', 
        'Calangute', 'Candolim', 'Morjim', 'Nerul', 'Pilerne', 'Saligao', 
        'Siolim', 'Vagator', 'South Goa', 'Dabolim', 'Majorda'
      ]
    },
    {
      state: 'Villas in Emirate of Dubai',
      cities: ['Dubai']
    }
  ],
  company: [
    'About Us',
    'Blogs',
    'Our Team',
    'Contact Us',
    'Press Release',
    'Partner with us',
    'Corporate Offsites',
    'Events',
    'Sitemap',
    'Careers'
  ]
};
