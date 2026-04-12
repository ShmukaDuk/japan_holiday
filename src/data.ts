export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  mapUrl?: string;
  details?: string[];
  imageUrl?: string;
  coordinates?: { lat: number; lng: number };
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fushimi_Inari_taisha_torii_path.jpg/800px-Fushimi_Inari_taisha_torii_path.jpg",
        coordinates: { lat: 34.9671, lng: 135.7727 }
      },
      {
        time: "10:30 am",
        title: "Kiyomizu-dera + Higashiyama Walk",
        description: "Explore the historic temple and walk down through the preserved old streets.",
        mapUrl: "https://maps.google.com/?q=Kiyomizu-dera",
        details: ["Walk down through old streets rather than rushing transport"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kiyomizu-dera_Main_Hall_in_Kyoto.jpg/800px-Kiyomizu-dera_Main_Hall_in_Kyoto.jpg",
        coordinates: { lat: 34.9949, lng: 135.7850 }
      },
      {
        time: "12:30 pm",
        title: "Lunch at Men-ya Inoichi",
        description: "A highly-rated ramen spot in Kyoto.",
        mapUrl: "https://maps.google.com/?q=Men-ya+Inoichi",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ramen_at_Inoichi%2C_Kyoto.jpg/800px-Ramen_at_Inoichi%2C_Kyoto.jpg",
        coordinates: { lat: 35.0006, lng: 135.7667 }
      },
      {
        time: "02:00 pm",
        title: "Gion Wander",
        description: "Take it slow in the geisha district. Coffee, snacks, and side streets.",
        mapUrl: "https://maps.google.com/?q=Gion",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gion_at_night.jpg/800px-Gion_at_night.jpg",
        coordinates: { lat: 35.0037, lng: 135.7785 }
      },
      {
        time: "03:30 pm",
        title: "Onsen Travel + Soak",
        description: "Travel to Kurama area for a tattoo-friendly public onsen experience.",
        mapUrl: "https://maps.google.com/?q=Kurama+area+onsen",
        details: ["Tattoos generally fine or coverable", "Separate male/female"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kurama_Onsen_Outdoor_Bath.jpg/800px-Kurama_Onsen_Outdoor_Bath.jpg",
        coordinates: { lat: 35.1186, lng: 135.7714 }
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kuromon_Ichiba_Market_Osaka.jpg/800px-Kuromon_Ichiba_Market_Osaka.jpg",
        coordinates: { lat: 34.6654, lng: 135.5061 }
      },
      {
        time: "01:00 pm",
        title: "Shinsaibashi / Amerikamura",
        description: "Best for walking, browsing, and random finds.",
        mapUrl: "https://maps.google.com/?q=Shinsaibashi",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Shinsaibashi-suji_Shopping_Street.jpg/800px-Shinsaibashi-suji_Shopping_Street.jpg",
        coordinates: { lat: 34.6711, lng: 135.5014 }
      },
      {
        time: "06:00 pm",
        title: "Booked Yakiniku Dinner",
        description: "Enjoy high-quality grilled meat at Yakiniku M Hozenji.",
        mapUrl: "https://maps.google.com/?q=Yakiniku+M+Hozenji",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Yakiniku_M_Hozenji_Hanare.jpg/800px-Yakiniku_M_Hozenji_Hanare.jpg",
        coordinates: { lat: 34.6684, lng: 135.5028 }
      },
      {
        time: "08:00 pm",
        title: "Dotonbori + Bar Hopping",
        description: "The heart of Osaka's nightlife. Move around and don't get stuck in one place.",
        mapUrl: "https://maps.google.com/?q=Dotonbori",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Dotonbori_at_night.jpg/800px-Dotonbori_at_night.jpg",
        coordinates: { lat: 34.6687, lng: 135.5013 }
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Shinkansen_N700_series_at_Tokyo_Station.jpg/800px-Shinkansen_N700_series_at_Tokyo_Station.jpg",
        coordinates: { lat: 34.7335, lng: 135.5001 }
      },
      {
        time: "12:00 pm",
        title: "Hotel Check-in",
        description: "Hotel Groove Shinjuku.",
        mapUrl: "https://maps.google.com/?q=Hotel+Groove+Shinjuku",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Shinjuku_Toho_Building_201505.jpg/800px-Shinjuku_Toho_Building_201505.jpg",
        coordinates: { lat: 35.6957, lng: 139.7022 }
      },
      {
        time: "04:00 pm",
        title: "Shibuya Crossing",
        description: "Experience the world's busiest intersection.",
        mapUrl: "https://maps.google.com/?q=Shibuya+Crossing",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shibuya_Crossing%2C_Tokyo%2C_Japan.jpg/800px-Shibuya_Crossing%2C_Tokyo%2C_Japan.jpg",
        coordinates: { lat: 35.6595, lng: 139.7005 }
      },
      {
        time: "05:30 pm",
        title: "Shibuya Sky",
        description: "Sunset slot for the best views in Tokyo. Entrance on 14th floor.",
        mapUrl: "https://maps.google.com/?q=Shibuya+Sky",
        details: ["Book sunset slot", "Entrance on 14th floor of Shibuya Scramble Square"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shibuya_Scramble_Square_2020.jpg/800px-Shibuya_Scramble_Square_2020.jpg",
        coordinates: { lat: 35.6585, lng: 139.7017 }
      },
      {
        time: "07:30 pm",
        title: "Dinner at Uobei Shibuya",
        description: "High-tech conveyor belt sushi.",
        mapUrl: "https://maps.google.com/?q=Uobei+Shibuya",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Uobei_Shibuya_Dogenzaka.jpg/800px-Uobei_Shibuya_Dogenzaka.jpg",
        coordinates: { lat: 35.6598, lng: 139.6981 }
      },
      {
        time: "09:00 pm",
        title: "Drinks at SG Club",
        description: "A world-class cocktail bar.",
        mapUrl: "https://maps.google.com/?q=SG+Club+Tokyo",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/The_SG_Club_Tokyo.jpg/800px-The_SG_Club_Tokyo.jpg",
        coordinates: { lat: 35.6635, lng: 139.7002 }
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Meiji_Jingu_Shrine_Torii.jpg/800px-Meiji_Jingu_Shrine_Torii.jpg",
        coordinates: { lat: 35.6764, lng: 139.6993 }
      },
      {
        time: "Early Afternoon",
        title: "Harajuku / Omotesando",
        description: "Fashion, street food, and unique boutiques.",
        mapUrl: "https://maps.google.com/?q=Harajuku",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Takeshita_Street_Harajuku_Tokyo.jpg/800px-Takeshita_Street_Harajuku_Tokyo.jpg",
        coordinates: { lat: 35.6715, lng: 139.7030 }
      },
      {
        time: "05:00 pm",
        title: "Pre-game Food: Afuri Harajuku",
        description: "Famous for their Yuzu Shio Ramen.",
        mapUrl: "https://maps.google.com/?q=Afuri+Harajuku",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Afuri_Ramen_Harajuku.jpg/800px-Afuri_Ramen_Harajuku.jpg",
        coordinates: { lat: 35.6725, lng: 139.7042 }
      },
      {
        time: "06:00 pm",
        title: "Game: Meiji Jingu Stadium",
        description: "Experience Japanese baseball culture. 5-min walk from Gaiemmae Station.",
        mapUrl: "https://maps.google.com/?q=Meiji+Jingu+Stadium",
        details: ["Buy beers from the girls", "Join the chants", "5-min walk from Gaiemmae Station"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Meiji_Jingu_Stadium_2014.jpg/800px-Meiji_Jingu_Stadium_2014.jpg",
        coordinates: { lat: 35.6743, lng: 139.7171 }
      },
      {
        time: "09:30 pm",
        title: "Drinks in Shinjuku",
        description: "Omoide Yokocho or Golden Gai near the hotel.",
        mapUrl: "https://maps.google.com/?q=Omoide+Yokocho",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Omoide_Yokocho_Shinjuku.jpg/800px-Omoide_Yokocho_Shinjuku.jpg",
        coordinates: { lat: 35.6931, lng: 139.6997 }
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Senso-ji_Temple_at_Night.jpg/800px-Senso-ji_Temple_at_Night.jpg",
        coordinates: { lat: 35.7148, lng: 139.7967 }
      },
      {
        time: "10:30 am",
        title: "Asakusa Explore",
        description: "Traditional shops and atmosphere.",
        mapUrl: "https://maps.google.com/?q=Asakusa",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nakamise-dori_Asakusa.jpg/800px-Nakamise-dori_Asakusa.jpg",
        coordinates: { lat: 35.7118, lng: 139.7965 }
      },
      {
        time: "12:30 pm",
        title: "Lunch: Daikokuya Tempura",
        description: "Classic tempura spot.",
        mapUrl: "https://maps.google.com/?q=Daikokuya+Tempura",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Daikokuya_Tempura_Asakusa.jpg/800px-Daikokuya_Tempura_Asakusa.jpg",
        coordinates: { lat: 35.7125, lng: 139.7958 }
      },
      {
        time: "03:00 pm",
        title: "Akihabara",
        description: "Arcades, electronics, and anime culture.",
        mapUrl: "https://maps.google.com/?q=Akihabara",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Akihabara_Electric_Town_at_Night.jpg/800px-Akihabara_Electric_Town_at_Night.jpg",
        coordinates: { lat: 35.6984, lng: 139.7731 }
      },
      {
        time: "09:00 pm",
        title: "Big Night in Shinjuku",
        description: "Start at Bar Benfiddich, then drift through Kabukicho.",
        mapUrl: "https://maps.google.com/?q=Bar+Benfiddich",
        details: ["No strict plan — best night of trip", "Jump bar to bar", "Start near hotel, then drift"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kabukicho_at_night.jpg/800px-Kabukicho_at_night.jpg",
        coordinates: { lat: 35.6938, lng: 139.7035 }
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
        details: ["1 min walk from Shin-Toyosu Station", "Book first session", "Walkable from Toyosu Station"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/TeamLab_Planets_Tokyo.jpg/800px-TeamLab_Planets_Tokyo.jpg",
        coordinates: { lat: 35.6491, lng: 139.7898 }
      },
      {
        time: "12:00 pm",
        title: "Tsukiji Outer Market Lunch",
        description: "Fresh seafood for the final meal.",
        mapUrl: "https://maps.google.com/?q=Tsukiji+Outer+Market",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tsukiji_Outer_Market_2017.jpg/800px-Tsukiji_Outer_Market_2017.jpg",
        coordinates: { lat: 35.6655, lng: 139.7707 }
      },
      {
        time: "02:00 pm",
        title: "Final Wander",
        description: "Ginza or Shibuya for last-minute shopping.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ginza_at_night.jpg/800px-Ginza_at_night.jpg",
        coordinates: { lat: 35.6717, lng: 139.7650 }
      },
      {
        time: "06:30 pm",
        title: "Leave for Haneda Terminal 2",
        description: "Flight at 22:45. Taxi or train via central Tokyo.",
        mapUrl: "https://maps.google.com/?q=Haneda+Airport+Terminal+2",
        details: ["Flight at 22:45", "Taxi or train to Haneda", "JR ticket services on Monorail side"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Haneda_Airport_Terminal_2_International_Departure_Hall.jpg/800px-Haneda_Airport_Terminal_2_International_Departure_Hall.jpg",
        coordinates: { lat: 35.5494, lng: 139.7798 }
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
