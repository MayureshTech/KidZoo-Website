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
    appStoreLink: null,
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
    appStoreLink: null,
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
    appStoreLink: null,
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
    description: "Buy and sell gently used kids' items in your community.",
    longDescription: "Buy and sell gently used kids' items, toys, clothes, and gear in your trusted community. Connect with local parents and give pre-loved items a second life.",
    color: "#F59E0B",
    lightColor: "#FEF3C7",
    slug: "/market",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: false,
    isPlaceholder: true,
  },
  {
    id: "childcare",
    name: "KidZoo ChildCare",
    shortName: "ChildCare",
    description: "Find trusted babysitters and childcare providers nearby.",
    longDescription: "Find trusted babysitters, nannies, and childcare providers in your neighborhood. Read reviews, check availability, and book reliable care for your little ones.",
    color: "#10B981",
    lightColor: "#D1FAE5",
    slug: "/childcare",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: false,
    isPlaceholder: true,
  },
  {
    id: "venues",
    name: "KidZoo Venues",
    shortName: "Venues",
    description: "Discover kid-friendly venues and party places near you.",
    longDescription: "Discover kid-friendly venues, party places, playgrounds, and activity centers near you. Browse photos, read reviews, and book the perfect spot for your next outing.",
    color: "#6366F1",
    lightColor: "#E0E7FF",
    slug: "/venues",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: false,
    isPlaceholder: true,
  },
  {
    id: "parties",
    name: "KidZoo Parties",
    shortName: "Parties",
    description: "Plan unforgettable birthday parties and celebrations.",
    longDescription: "Plan unforgettable birthday parties and celebrations for your children. From theme ideas to vendor bookings, make every party a magical experience.",
    color: "#EC4899",
    lightColor: "#FCE7F3",
    slug: "/parties",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: false,
    isPlaceholder: true,
  },
  {
    id: "cakes",
    name: "KidZoo Cakes",
    shortName: "Cakes",
    description: "Order custom cakes and treats from local bakers.",
    longDescription: "Order custom cakes, cupcakes, and treats from talented local bakers. Browse designs, customize flavors, and make every celebration sweeter.",
    color: "#F97316",
    lightColor: "#FFEDD5",
    slug: "/cakes",
    downloadLink: null,
    appStoreLink: null,
    hasScreenshots: false,
    isPlaceholder: true,
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
