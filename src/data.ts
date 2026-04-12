export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  mapUrl?: string;
  details?: string[];
  imageSeed?: string;
}

export interface DayPlan {
  id: string;
  day: string;
  theme: string;
  items: ItineraryItem[];
}

export const itinerary: DayPlan[] = [
  {
    id: "monday",
    day: "Monday",
    theme: "Kyoto: Culture + Onsen",
    items: [
      {
        time: "07:30 am",
        title: "Fushimi Inari Taisha",
        description: "Go early to beat the crowds and get the best photos of the thousands of torii gates.",
        mapUrl: "https://maps.google.com/?q=Fushimi+Inari+Taisha",
        details: ["Beat crowds + best photos", "Time here: 1.5–2 hrs (don't rush)"],
        imageSeed: "kyoto-shrine"
      },
      {
        time: "10:30 am",
        title: "Kiyomizu-dera + Higashiyama Walk",
        description: "Explore the historic temple and walk down through the preserved old streets.",
        mapUrl: "https://maps.google.com/?q=Kiyomizu-dera",
        details: ["Walk down through old streets rather than rushing transport"],
        imageSeed: "kyoto-temple"
      },
      {
        time: "12:30 pm",
        title: "Lunch at Men-ya Inoichi",
        description: "A highly-rated ramen spot in Kyoto.",
        mapUrl: "https://maps.google.com/?q=Men-ya+Inoichi",
        imageSeed: "ramen"
      },
      {
        time: "02:00 pm",
        title: "Gion Wander",
        description: "Take it slow in the geisha district. Coffee, snacks, and side streets.",
        mapUrl: "https://maps.google.com/?q=Gion",
        imageSeed: "gion"
      },
      {
        time: "03:30 pm",
        title: "Onsen Travel + Soak",
        description: "Travel to Kurama area for a tattoo-friendly public onsen experience.",
        mapUrl: "https://maps.google.com/?q=Kurama+area+onsen",
        details: ["Tattoos generally fine or coverable", "Separate male/female"],
        imageSeed: "onsen"
      },
      {
        time: "07:30 pm",
        title: "Dinner",
        description: "Keep it flexible. Eat wherever looks strong near where you finish.",
        imageSeed: "japanese-dinner"
      }
    ]
  },
  {
    id: "tuesday",
    day: "Tuesday",
    theme: "Osaka: Food + Chaos Night",
    items: [
      {
        time: "10:00 am",
        title: "Kuromon Market",
        description: "A snack crawl through Osaka's famous 'Kitchen of Japan'.",
        mapUrl: "https://maps.google.com/?q=Kuromon+Market",
        details: ["Wagyu skewers", "Tuna", "Uni"],
        imageSeed: "market-food"
      },
      {
        time: "01:00 pm",
        title: "Shinsaibashi / Amerikamura",
        description: "Best for walking, browsing, and random finds.",
        mapUrl: "https://maps.google.com/?q=Shinsaibashi",
        imageSeed: "osaka-street"
      },
      {
        time: "06:00 pm",
        title: "Booked Yakiniku Dinner",
        description: "Enjoy high-quality grilled meat at Yakiniku M Hozenji.",
        mapUrl: "https://maps.google.com/?q=Yakiniku+M+Hozenji",
        imageSeed: "yakiniku"
      },
      {
        time: "08:00 pm",
        title: "Dotonbori + Bar Hopping",
        description: "The heart of Osaka's nightlife. Move around and don't get stuck in one place.",
        mapUrl: "https://maps.google.com/?q=Dotonbori",
        imageSeed: "dotonbori"
      }
    ]
  },
  {
    id: "wednesday",
    day: "Wednesday",
    theme: "Bullet Train to Tokyo + Shibuya Night",
    items: [
      {
        time: "Morning",
        title: "Shin-Osaka to Tokyo by Nozomi",
        description: "Aim to reach the station 20 mins early. Sit on the right for a Mt Fuji chance.",
        details: ["Right-hand side for Mt Fuji", "Forward large bags if possible"],
        imageSeed: "shinkansen"
      },
      {
        time: "12:00 pm",
        title: "Hotel Check-in",
        description: "Hotel Groove Shinjuku.",
        mapUrl: "https://maps.google.com/?q=Hotel+Groove+Shinjuku",
        imageSeed: "hotel-shinjuku"
      },
      {
        time: "04:00 pm",
        title: "Shibuya Crossing",
        description: "Experience the world's busiest intersection.",
        mapUrl: "https://maps.google.com/?q=Shibuya+Crossing",
        imageSeed: "shibuya-crossing"
      },
      {
        time: "05:30 pm",
        title: "Shibuya Sky",
        description: "Sunset slot for the best views in Tokyo. Entrance on 14th floor.",
        mapUrl: "https://maps.google.com/?q=Shibuya+Sky",
        details: ["Book sunset slot", "Entrance on 14th floor of Shibuya Scramble Square"],
        imageSeed: "tokyo-view"
      },
      {
        time: "07:30 pm",
        title: "Dinner at Uobei Shibuya",
        description: "High-tech conveyor belt sushi.",
        mapUrl: "https://maps.google.com/?q=Uobei+Shibuya",
        imageSeed: "sushi"
      },
      {
        time: "09:00 pm",
        title: "Drinks at SG Club",
        description: "A world-class cocktail bar.",
        mapUrl: "https://maps.google.com/?q=SG+Club+Tokyo",
        imageSeed: "cocktail-bar"
      }
    ]
  },
  {
    id: "thursday",
    day: "Thursday",
    theme: "Meiji Shrine + Harajuku + Baseball",
    items: [
      {
        time: "Late Morning",
        title: "Meiji Shrine",
        description: "A peaceful forest shrine in the middle of the city.",
        mapUrl: "https://maps.google.com/?q=Meiji+Shrine",
        imageSeed: "shrine-forest"
      },
      {
        time: "Early Afternoon",
        title: "Harajuku / Omotesando",
        description: "Fashion, street food, and unique boutiques.",
        mapUrl: "https://maps.google.com/?q=Harajuku",
        imageSeed: "harajuku"
      },
      {
        time: "05:00 pm",
        title: "Pre-game Food: Afuri Harajuku",
        description: "Famous for their Yuzu Shio Ramen.",
        mapUrl: "https://maps.google.com/?q=Afuri+Harajuku",
        imageSeed: "yuzu-ramen"
      },
      {
        time: "06:00 pm",
        title: "Game: Meiji Jingu Stadium",
        description: "Experience Japanese baseball culture. 5-min walk from Gaiemmae Station.",
        mapUrl: "https://maps.google.com/?q=Meiji+Jingu+Stadium",
        details: ["Buy beers from the girls", "Join the chants"],
        imageSeed: "baseball-stadium"
      },
      {
        time: "09:30 pm",
        title: "Drinks in Shinjuku",
        description: "Omoide Yokocho or Golden Gai near the hotel.",
        mapUrl: "https://maps.google.com/?q=Omoide+Yokocho",
        imageSeed: "shinjuku-alley"
      }
    ]
  },
  {
    id: "friday",
    day: "Friday",
    theme: "Old Tokyo + Weird Tokyo + Big Night",
    items: [
      {
        time: "08:30 am",
        title: "Senso-ji",
        description: "Tokyo's oldest temple. Go early.",
        mapUrl: "https://maps.google.com/?q=Senso-ji",
        imageSeed: "sensoji"
      },
      {
        time: "10:30 am",
        title: "Asakusa Explore",
        description: "Traditional shops and atmosphere.",
        mapUrl: "https://maps.google.com/?q=Asakusa",
        imageSeed: "asakusa"
      },
      {
        time: "12:30 pm",
        title: "Lunch: Daikokuya Tempura",
        description: "Classic tempura spot.",
        mapUrl: "https://maps.google.com/?q=Daikokuya+Tempura",
        imageSeed: "tempura"
      },
      {
        time: "03:00 pm",
        title: "Akihabara",
        description: "Arcades, electronics, and anime culture.",
        mapUrl: "https://maps.google.com/?q=Akihabara",
        imageSeed: "akihabara"
      },
      {
        time: "09:00 pm",
        title: "Big Night in Shinjuku",
        description: "Start at Bar Benfiddich, then drift through Kabukicho.",
        mapUrl: "https://maps.google.com/?q=Bar+Benfiddich",
        details: ["No strict plan — best night of trip", "Jump bar to bar"],
        imageSeed: "kabukicho"
      }
    ]
  },
  {
    id: "saturday",
    day: "Saturday",
    theme: "teamLab + Final Hours + Haneda",
    items: [
      {
        time: "09:00 am",
        title: "teamLab Planets",
        description: "Immersive digital art experience. Book the first session.",
        mapUrl: "https://maps.google.com/?q=teamLab+Planets",
        details: ["1 min walk from Shin-Toyosu Station", "Book first session"],
        imageSeed: "teamlab"
      },
      {
        time: "12:00 pm",
        title: "Tsukiji Outer Market Lunch",
        description: "Fresh seafood for the final meal.",
        mapUrl: "https://maps.google.com/?q=Tsukiji+Outer+Market",
        imageSeed: "tsukiji"
      },
      {
        time: "02:00 pm",
        title: "Final Wander",
        description: "Ginza or Shibuya for last-minute shopping.",
        imageSeed: "ginza"
      },
      {
        time: "06:30 pm",
        title: "Leave for Haneda Terminal 2",
        description: "Flight at 22:45. Taxi or train via central Tokyo.",
        mapUrl: "https://maps.google.com/?q=Haneda+Airport+Terminal+2",
        imageSeed: "airport"
      }
    ]
  }
];

export const reservationStrategy = [
  { item: "Hotel Groove Shinjuku", status: "Book Now" },
  { item: "Thursday Baseball (Meiji Jingu)", status: "Book Now" },
  { item: "Saturday teamLab Planets", status: "Book Now" },
  { item: "Wednesday Shibuya Sky", status: "Book Now" },
  { item: "Tuesday Osaka Yakiniku", status: "Book Now" },
  { item: "Shinkansen to Tokyo", status: "Book 1-3 Days Ahead" },
  { item: "Most Lunches", status: "Wing It" },
  { item: "Kyoto/Tokyo Ramen", status: "Wing It" },
  { item: "Shinjuku Drinks", status: "Wing It" },
];
