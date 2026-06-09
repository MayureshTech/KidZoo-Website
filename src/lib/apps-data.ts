export interface AppData {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  color: string;
  lightColor: string;
  slug: string;
  downloadLink: string | null;
  appStoreLink: string | null;
  hasScreenshots: boolean;
  isPlaceholder: boolean;
  logoPath?: string;
  teaserFeatures?: string[];
}

export const apps: AppData[] = [
  {
    id: "playdates",
    name: "KidZoo Playdates",
    shortName: "Playdates",
    description: "Set up playdates for your children in 30 seconds.",
    longDescription: "KidZoo is a mobile application that helps parents set up playdates for their children very easily. With KidZoo, you don't need to call or text multiple people to find a playdate for your child. All their availability is right there, so you can save hours of back and forth messaging and just set a playdate in 30 seconds.",
    color: "#E83E8C",
    lightColor: "#FDE8F2",
    slug: "/playdates",
    downloadLink: "https://play.google.com/store/apps/details?id=com.kidzoo.kidzoo&pcampaignid=web_share",
    appStoreLink: null,
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/playdates.png",
    teaserFeatures: [
      "Set a playdate in 30 seconds",
      "See who's available right now",
      "Connect with school friends",
      "Safe & secure for families",
    ],
  },
  {
    id: "events",
    name: "KidZoo Events",
    shortName: "Events",
    description: "Discover family events happening near you — sports, arts, festivals, and more.",
    longDescription: "KidZoo Events helps you find all the family events happening near you so that you and your children can go and have fun every weekend with different activities. You can find a diverse range of events all in one place, making it easy to search for events according to your preferences, location, cost, time, and date.",
    color: "#D946EF",
    lightColor: "#FAE8FD",
    slug: "/events",
    downloadLink: null,
    appStoreLink: "https://apps.apple.com/us/app/kidzoo-events/id6478120509",
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/events.svg",
    teaserFeatures: [
      "Find events near you with map",
      "Filter by age, location, cost, type",
      "Save events to 'My Events'",
      "Get notified about upcoming events",
    ],
  },
  {
    id: "camp",
    name: "KidZoo Camp",
    shortName: "Camp",
    description: "Find summer camps for kids aged 1-17 — arts, sports, STEM, swimming, and more.",
    longDescription: "KidZoo Camp helps parents find summer camps for their kids, including activities like Arts & Crafts, Outdoor Nature trips, Music, Swimming, Cooking, Sports, STEM, and Performing Arts. See recommended camps based on your interests and easily search with filters for age, grade, camp type, location, distance, price range, and activity type.",
    color: "#8B5CF6",
    lightColor: "#F3E8FF",
    slug: "/camp",
    downloadLink: null,
    appStoreLink: "https://apps.apple.com/us/app/kidzoo-camp/id6499356358",
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/camp.png",
    teaserFeatures: [
      "Find camps near your home location",
      "Filter by age, type, price, distance",
      "Save camps and view seat availability",
      "See discounts and last day to register",
    ],
  },
  {
    id: "activities",
    name: "KidZoo Activities",
    shortName: "Activities",
    description: "Find awesome activities for kids — sports, arts, coding, music, science, and more.",
    longDescription: "KidZoo Activities is your go-to for finding awesome activities for kids in your city. Search by subject, location, age, or grade. From sports to performing arts, language skills, theater, drama, science, coding, math, music, and outdoor events — find exactly what your child is passionate about.",
    color: "#06B6D4",
    lightColor: "#E0F7FA",
    slug: "/activities",
    downloadLink: null,
    appStoreLink: "https://apps.apple.com/us/app/kidzoo-activities/id6479528738",
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/activities.png",
    teaserFeatures: [
      "Search by subject, age, grade, location",
      "Filter by distance and activity type",
      "No upfront payment to register",
      "Wide range: sports, arts, STEM, music",
    ],
  },
  {
    id: "market",
    name: "KidZoo Market",
    shortName: "Market",
    description: "Buy and sell baby products in your community — clothes, toys, strollers, car seats, and more.",
    longDescription: "Welcome to the Kidzoo Market App—your go-to spot for buying and selling baby products! Whether you want to clear out your home by selling unused or gently used baby items, or you're a parent searching for affordable, high-quality products for your little one, Kidzoo Marketplace is here to help. Our app makes buying and selling baby products easy, safe, and convenient.",
    color: "#14B8A6",
    lightColor: "#CCFBF1",
    slug: "/market",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/market.png",
    teaserFeatures: [
      "Buy & sell baby products locally",
      "Filter by category, price, condition",
      "Message sellers directly",
      "Send offers and save listings",
    ],
  },
  {
    id: "childcare",
    name: "KidZoo ChildCare",
    shortName: "ChildCare",
    description: "Find trusted babysitters and childcare providers nearby.",
    longDescription: "Finding babysitting jobs in your area is super easy with the Kidzoo Sitters app. Browse available babysitting gigs, track applications, and communicate directly with parents. Find jobs that match your pricing and availability.",
    color: "#10B981",
    lightColor: "#D1FAE5",
    slug: "/childcare",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/childcare.png",
    teaserFeatures: [
      "Search for babysitting jobs nearby",
      "Track applications effortlessly",
      "Communicate directly with parents",
      "Set your hourly rate & availability",
    ],
  },
  {
    id: "venues",
    name: "KidZoo Venues",
    shortName: "Venues",
    description: "Find and book the perfect party venue for your celebration.",
    longDescription: "Kidzoo Venue is an app for finding and booking the perfect party site! Whether you're planning a birthday bash, a family reunion, or any other celebration, Venue makes it easy to find a location that fits your budget and preferences.",
    color: "#6366F1",
    lightColor: "#E0E7FF",
    slug: "/venues",
    downloadLink: null,
    appStoreLink: "https://apps.apple.com/us/app/kidzoo-venues/id6554000842",
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/venues.png",
    teaserFeatures: [
      "Search venues by budget, capacity, location",
      "View vendor portfolios with photos",
      "Message vendors directly",
      "Book venues for any occasion",
    ],
  },
  {
    id: "parties",
    name: "KidZoo Parties",
    shortName: "Parties",
    description: "Plan unforgettable birthday parties and celebrations.",
    longDescription: "KidZoo Parties is an app for finding and booking the perfect party site! Whether you're planning a birthday bash, a family reunion, or any other celebration, Parties makes it easy to find a location that fits your budget and preferences.",
    color: "#EC4899",
    lightColor: "#FCE7F3",
    slug: "/parties",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/parties.png",
    teaserFeatures: [
      "Search party venues by budget & capacity",
      "View vendor portfolios with photos",
      "Message vendors directly",
      "Book complete party packages",
    ],
  },
  {
    id: "photos",
    name: "KidZoo Photos",
    shortName: "Photos",
    description: "Find and book professional photographers for kids' parties and events.",
    longDescription: "KidZoo Photos App is an easy way to find and book professional photographers for kids' parties and events. Search by budget and theme, view portfolios, and book talented photographers who specialize in capturing precious moments.",
    color: "#8B5CF6",
    lightColor: "#EDE9FE",
    slug: "/photos",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/photos.png",
    teaserFeatures: [
      "Search photographers by budget & theme",
      "View portfolios and sample photos",
      "Book directly through the app",
      "Chat with photographers",
    ],
  },
  {
    id: "cakes",
    name: "KidZoo Cakes",
    shortName: "Cakes",
    description: "Order custom cakes and treats from local bakers.",
    longDescription: "KidZoo Cakes makes it easy to find and order custom cakes, cupcakes, and treats from talented local bakers. Browse designs, customize flavors, and make every celebration sweeter.",
    color: "#F97316",
    lightColor: "#FFEDD5",
    slug: "/cakes",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: true,
    isPlaceholder: false,
    logoPath: "/images/logos/cakes.png",
    teaserFeatures: [
      "Browse bakeries by theme & budget",
      "View portfolios with photos",
      "Track your cake orders",
      "Write reviews for bakeries",
    ],
  },
];

export const getAppBySlug = (slug: string): AppData | undefined => {
  return apps.find((app) => app.slug === slug);
};

export const getAppById = (id: string): AppData | undefined => {
  return apps.find((app) => app.id === id);
};

export const placeholderApps = apps.filter((app) => app.isPlaceholder);
export const realApps = apps.filter((app) => !app.isPlaceholder);
