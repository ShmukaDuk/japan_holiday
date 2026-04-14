export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  mapUrl?: string;
  details?: string[];
  imageUrl?: string;
  coordinates?: { lat: number; lng: number };
  tourismUrl?: string;
  wikiUrl?: string;
  history?: string;
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
        description: "Go early to beat the crowds and get the best photos of the thousands of torii gates. Fun Fact: There are over 10,000 torii gates here, all donated by individuals and companies!",
        mapUrl: "https://maps.google.com/?q=Fushimi+Inari+Taisha",
        details: ["Beat crowds + best photos", "Time here: 1.5–2 hrs (don't rush)"],
        imageUrl: "https://images.unsplash.com/photo-1624253321171-1be53e12f514?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.9671, lng: 135.7727 },
        tourismUrl: "https://www.japan-guide.com/e/e3915.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Fushimi_Inari-taisha",
        history: "Founded in 711 AD, Fushimi Inari is the head shrine of the god Inari. The torii gates are donated by businesses as Inari is seen as the patron of business and merchants."
      },
      {
        time: "10:30 am",
        title: "Kiyomizu-dera + Higashiyama Walk",
        description: "Explore the historic temple and walk down through the preserved old streets. Fun Fact: The main hall was built without using a single nail!",
        mapUrl: "https://maps.google.com/?q=Kiyomizu-dera",
        details: ["Walk down through old streets rather than rushing transport"],
        imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.9949, lng: 135.7850 },
        tourismUrl: "https://www.japan-guide.com/e/e3901.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Kiyomizu-dera",
        history: "Kiyomizu-dera was founded in 778 AD. The current buildings were constructed in 1633. The temple takes its name from the waterfall within the complex, which runs off the nearby hills."
      },
      {
        time: "12:30 pm",
        title: "Lunch at Men-ya Inoichi",
        description: "A highly-rated ramen spot in Kyoto. Fun Fact: They are famous for their incredibly clear and refined dashi-based broth.",
        mapUrl: "https://maps.google.com/?q=Men-ya+Inoichi",
        imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.0006, lng: 135.7667 },
        tourismUrl: "https://tabelog.com/en/kyoto/A2601/A260201/26022624/"
      },
      {
        time: "02:00 pm",
        title: "Gion Wander",
        description: "Take it slow in the geisha district. Coffee, snacks, and side streets. Fun Fact: Gion was originally developed to serve travelers visiting Yasaka Shrine.",
        mapUrl: "https://maps.google.com/?q=Gion",
        imageUrl: "https://images.unsplash.com/photo-1578469645742-46cae010e5d3?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.0037, lng: 135.7785 },
        tourismUrl: "https://www.japan-guide.com/e/e3902.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Gion",
        history: "Gion developed as a 'monzen-machi' (town in front of a gate) for Yasaka Shrine. By the 18th century, it became Kyoto's most exclusive geisha district."
      },
      {
        time: "03:30 pm",
        title: "Onsen Travel + Soak",
        description: "Travel to Kurama area for a tattoo-friendly public onsen experience. Fun Fact: Kurama is said to be the birthplace of Reiki healing!",
        mapUrl: "https://maps.google.com/?q=Kurama+area+onsen",
        details: ["Tattoos generally fine or coverable", "Separate male/female"],
        imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.1186, lng: 135.7714 },
        tourismUrl: "https://www.kurama-onsen.co.jp/index_e.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Kurama-dera"
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
        title: "Namba Yasaka Shrine",
        description: "Start the day at the 'Lion Shrine'. Fun Fact: The massive lion head stage is 12 meters tall and is believed to swallow evil spirits, leaving you with good luck for your trip!",
        mapUrl: "https://maps.google.com/?q=Namba+Yasaka+Shrine",
        details: ["Epic photo op", "15-min walk to Amerikamura"],
        imageUrl: "https://images.unsplash.com/photo-1621980303808-4903328229b1?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.6613, lng: 135.4964 },
        tourismUrl: "https://nambayasaka.jp/",
        wikiUrl: "https://en.wikipedia.org/wiki/Namba_Yasaka_Shrine",
        history: "While the shrine's origins are ancient, the famous lion head stage was built in 1974. It stands 12 meters tall and is a symbol of Namba's unique character."
      },
      {
        time: "11:00 am",
        title: "A Happy Pancake (Amerikamura)",
        description: "The perfect 'late breakfast'. These soufflé pancakes are legendary. Fun Fact: They open at 10:00 AM or 11:00 AM depending on the day, so 11:00 AM is the sweet spot to catch them fresh!",
        mapUrl: "https://maps.google.com/?q=A+Happy+Pancake+Shinsaibashi",
        details: ["Order the 'Happy Pancake' (original)", "Expect a 20-30 min wait"],
        imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.6715, lng: 135.4987 },
        tourismUrl: "https://magia.tokyo/shop/shinsaibashi",
        wikiUrl: "https://en.wikipedia.org/wiki/Amerikamura",
        history: "A Happy Pancake (Shiawase no Pancake) started in Omotesando, Tokyo, and quickly became a national sensation. Their Shinsaibashi location serves as a flagship for their fluffy, soufflé-style pancakes that have defined a new era of Japanese dessert culture."
      },
      {
        time: "12:30 pm",
        title: "Amerikamura Exploration",
        description: "Walk through the 'Triangle Park' and check out the vintage shops. Fun Fact: This area has been the center of Osaka's youth culture since the 1970s.",
        mapUrl: "https://maps.google.com/?q=Amerikamura",
        imageUrl: "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.6715, lng: 135.4987 },
        tourismUrl: "https://amerikamura.jp/",
        wikiUrl: "https://en.wikipedia.org/wiki/Amerikamura",
        history: "Amerikamura (American Village) emerged in the 1970s when warehouses were converted into shops selling imported American goods. It has since become Osaka's center for youth fashion and alternative culture."
      },
      {
        time: "01:30 pm",
        title: "Kuromon Market",
        description: "Switch to savory! A snack crawl through 'Osaka's Kitchen'. Fun Fact: Many of the shops here have been family-run for over three generations.",
        mapUrl: "https://maps.google.com/?q=Kuromon+Market",
        details: ["Wagyu skewers", "Fresh scallops"],
        imageUrl: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.6654, lng: 135.5061 },
        tourismUrl: "https://kuromon.com/en/",
        wikiUrl: "https://en.wikipedia.org/wiki/Kuromon_Ichiba_Market",
        history: "Kuromon Market started in 1902. It was originally called Enmyoji Market because of a nearby temple with a black gate ('Kuromon')."
      },
      {
        time: "03:30 pm",
        title: "Shinsaibashi-suji Shopping",
        description: "Walk off the food in the massive covered arcade. Fun Fact: Shinsaibashi-suji is one of the oldest and most representative shopping centers in Japan.",
        mapUrl: "https://maps.google.com/?q=Shinsaibashi-suji",
        imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.6711, lng: 135.5014 },
        tourismUrl: "https://www.japan-guide.com/e/e4002.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Shinsaibashi",
        history: "Shinsaibashi is named after the Shinsaibashi Bridge, built in 1622. The shopping arcade has been a commercial destination for nearly 400 years, evolving from traditional kimono shops to modern department stores."
      },
      {
        time: "06:00 pm",
        title: "Booked Yakiniku Dinner",
        description: "Enjoy high-quality grilled meat at Yakiniku M Hozenji. Fun Fact: Matsusaka beef is one of the 'Big Three' Wagyu beef types in Japan.",
        mapUrl: "https://maps.google.com/?q=Yakiniku+M+Hozenji",
        imageUrl: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.6684, lng: 135.5028 },
        tourismUrl: "https://www.m-kyoto.jp/hozenji_hanare/",
        history: "Yakiniku M Hozenji is located near the historic Hozenji Temple. The area is famous for its moss-covered Fudo Myoo statue and its narrow, atmospheric stone-paved alleys that evoke the feeling of old Osaka."
      },
      {
        time: "08:00 pm",
        title: "Den Den Town Exploration",
        description: "Osaka's answer to Akihabara. Perfect for tech, anime, and retro games. Fun Fact: The name 'Den Den' comes from 'Denki no machi' (Electric Town).",
        mapUrl: "https://maps.google.com/?q=Den+Den+Town",
        details: ["Super Potato for retro games", "Animate for anime goods", "Gachapon halls"],
        imageUrl: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.6595, lng: 135.5058 },
        tourismUrl: "https://osaka-info.jp/en/spot/den-den-town/",
        wikiUrl: "https://en.wikipedia.org/wiki/Nipponbashi",
        history: "Nipponbashi (Den Den Town) has been a commercial hub since the Edo period. After WWII, it transformed into a major center for radio and electronics parts, eventually evolving into the otaku and tech paradise it is today."
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
        description: "Aim to reach the station 20 mins early. Sit on the right for a Mt Fuji chance. Fun Fact: The Shinkansen is so punctual that the average delay is less than a minute!",
        details: ["Right-hand side for Mt Fuji", "Forward large bags if possible"],
        imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 34.7335, lng: 135.5001 },
        tourismUrl: "https://www.japan-guide.com/e/e2018.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Shinkansen"
      },
      {
        time: "12:00 pm",
        title: "Hotel Check-in",
        description: "Hotel Groove Shinjuku. Fun Fact: Shinjuku Station is the busiest railway station in the world, handling over 3.5 million passengers daily!",
        mapUrl: "https://maps.google.com/?q=Hotel+Groove+Shinjuku",
        imageUrl: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6957, lng: 139.7022 },
        tourismUrl: "https://www.panpacific.com/en/hotels-and-resorts/hotel-groove-shinjuku.html"
      },
      {
        time: "04:00 pm",
        title: "Shibuya Crossing",
        description: "Experience the world's busiest intersection. Fun Fact: Up to 3,000 people cross at the same time during peak hours!",
        mapUrl: "https://maps.google.com/?q=Shibuya+Crossing",
        imageUrl: "https://images.unsplash.com/photo-1555681962-37b0c334ad62?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6595, lng: 139.7005 },
        tourismUrl: "https://www.japan-guide.com/e/e3007.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Shibuya_Crossing",
        history: "Shibuya Crossing is the world's busiest pedestrian crossing. It has been a symbol of Tokyo's modernization since the Shibuya Station opened in 1885."
      },
      {
        time: "05:30 pm",
        title: "Shibuya Sky",
        description: "Sunset slot for the best views in Tokyo. Entrance on 14th floor. Fun Fact: You can see Mt. Fuji from the observation deck on a clear day!",
        mapUrl: "https://maps.google.com/?q=Shibuya+Sky",
        details: ["Book sunset slot", "Entrance on 14th floor of Shibuya Scramble Square"],
        imageUrl: "https://images.unsplash.com/photo-1536098565842-0310f2643f63?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6585, lng: 139.7017 },
        tourismUrl: "https://www.shibuya-scramble-square.com/sky/",
        wikiUrl: "https://en.wikipedia.org/wiki/Shibuya_Scramble_Square"
      },
      {
        time: "07:30 pm",
        title: "Dinner at Uobei Shibuya",
        description: "High-tech conveyor belt sushi. Fun Fact: Uobei uses a high-speed 'shinkansen' delivery system to bring sushi directly to your seat!",
        mapUrl: "https://maps.google.com/?q=Uobei+Shibuya",
        imageUrl: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6598, lng: 139.6981 },
        tourismUrl: "https://www.genkisushi.co.jp/en/"
      },
      {
        time: "09:00 pm",
        title: "Drinks at SG Club",
        description: "A world-class cocktail bar. Fun Fact: SG stands for 'Sip and Guzzle', reflecting the bar's two distinct floors and styles.",
        mapUrl: "https://maps.google.com/?q=SG+Club+Tokyo",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6635, lng: 139.7002 },
        tourismUrl: "https://sg-management.jp/"
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
        description: "A peaceful forest shrine in the middle of the city. Fun Fact: The forest surrounding the shrine consists of over 100,000 trees donated from all over Japan!",
        mapUrl: "https://maps.google.com/?q=Meiji+Shrine",
        imageUrl: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6764, lng: 139.6993 },
        tourismUrl: "https://www.japan-guide.com/e/e3002.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Meiji_Shrine",
        history: "Dedicated to Emperor Meiji and Empress Shoken, the shrine was completed in 1920. It was destroyed during WWII but rebuilt in 1958 with donations from the public."
      },
      {
        time: "Early Afternoon",
        title: "Harajuku / Omotesando",
        description: "Fashion, street food, and unique boutiques. Fun Fact: Harajuku is the center of Japan's most extreme teenage street fashions!",
        mapUrl: "https://maps.google.com/?q=Harajuku",
        imageUrl: "https://images.unsplash.com/photo-1506351421178-63b52a2d25a2?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6715, lng: 139.7030 },
        tourismUrl: "https://www.japan-guide.com/e/e3006.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Harajuku"
      },
      {
        time: "05:00 pm",
        title: "Pre-game Food: Afuri Harajuku",
        description: "Famous for their Yuzu Shio Ramen. Fun Fact: Afuri is named after Mt. Afuri, from which the water for their broth is sourced.",
        mapUrl: "https://maps.google.com/?q=Afuri+Harajuku",
        imageUrl: "https://images.unsplash.com/photo-1557872246-7a797e73bd35?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6725, lng: 139.7042 },
        tourismUrl: "https://afuri.com/english/"
      },
      {
        time: "06:00 pm",
        title: "Game: Meiji Jingu Stadium",
        description: "Experience Japanese baseball culture. 5-min walk from Gaiemmae Station. Fun Fact: This stadium is one of the few remaining where Babe Ruth actually played!",
        mapUrl: "https://maps.google.com/?q=Meiji+Jingu+Stadium",
        details: ["Buy beers from the girls", "Join the chants", "5-min walk from Gaiemmae Station"],
        imageUrl: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6743, lng: 139.7171 },
        tourismUrl: "http://www.jingu-stadium.com/english/",
        wikiUrl: "https://en.wikipedia.org/wiki/Meiji_Jingu_Stadium"
      },
      {
        time: "09:30 pm",
        title: "Drinks in Shinjuku",
        description: "Omoide Yokocho or Golden Gai near the hotel. Fun Fact: Omoide Yokocho is also known as 'Piss Alley', a nickname from its post-WWII origins.",
        mapUrl: "https://maps.google.com/?q=Omoide+Yokocho",
        imageUrl: "https://images.unsplash.com/photo-1590273466070-40c466b4432d?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6931, lng: 139.6997 },
        tourismUrl: "https://shinjuku-omoide.com/english/",
        wikiUrl: "https://en.wikipedia.org/wiki/Omoide_Yokoch%C5%8D"
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
        description: "Tokyo's oldest temple. Go early. Fun Fact: The temple was founded in 628 AD after two brothers fished a statue of Kannon out of the Sumida River!",
        mapUrl: "https://maps.google.com/?q=Senso-ji",
        imageUrl: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.7148, lng: 139.7967 },
        tourismUrl: "https://www.japan-guide.com/e/e3001.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Sens%C5%8D-ji",
        history: "Senso-ji is Tokyo's oldest temple, founded in 628 AD. Legend says two brothers found a statue of Kannon in the Sumida River and the temple was built to honor her."
      },
      {
        time: "10:30 am",
        title: "Asakusa Explore",
        description: "Traditional shops and atmosphere. Fun Fact: Nakamise-dori is one of the oldest shopping streets in Japan, dating back to the 17th century.",
        mapUrl: "https://maps.google.com/?q=Asakusa",
        imageUrl: "https://images.unsplash.com/photo-1584464431734-793549667793?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.7118, lng: 139.7965 },
        tourismUrl: "https://www.japan-guide.com/e/e3004.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Asakusa",
        history: "Asakusa was Tokyo's leading entertainment district for centuries. During the Edo period, it was the site of the city's largest pleasure district and remains a place where the atmosphere of 'Old Tokyo' is most palpable."
      },
      {
        time: "12:30 pm",
        title: "Lunch: Daikokuya Tempura",
        description: "Classic tempura spot. Fun Fact: They have been serving their famous dark-colored tempura since 1887!",
        mapUrl: "https://maps.google.com/?q=Daikokuya+Tempura",
        imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.7125, lng: 139.7958 },
        tourismUrl: "http://www.tempura.co.jp/english/",
        history: "Daikokuya Tempura has been serving its signature tempura since 1887. They are famous for their dark, rich sauce and traditional cooking methods that have remained unchanged for over a century."
      },
      {
        time: "03:00 pm",
        title: "Akihabara",
        description: "Arcades, electronics, and anime culture. Fun Fact: Akihabara gained its nickname 'Electric Town' after WWII as a major center for surplus radio parts.",
        mapUrl: "https://maps.google.com/?q=Akihabara",
        imageUrl: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6984, lng: 139.7731 },
        tourismUrl: "https://www.japan-guide.com/e/e3003.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Akihabara",
        history: "Akihabara gained its nickname 'Electric Town' after WWII when it became a major center for surplus radio parts. It later evolved into the global hub for anime, manga, and video game culture."
      },
      {
        time: "09:00 pm",
        title: "Big Night in Shinjuku",
        description: "Start at Bar Benfiddich, then drift through Kabukicho. Fun Fact: Bar Benfiddich's owner, Hiroyasu Kayama, grows many of his own herbs and spices on his family farm!",
        mapUrl: "https://maps.google.com/?q=Bar+Benfiddich",
        details: ["No strict plan — best night of trip", "Jump bar to bar", "Start near hotel, then drift"],
        imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6938, lng: 139.7035 },
        tourismUrl: "https://ameblo.jp/hiroyasu-kayama/",
        history: "Shinjuku's nightlife districts like Kabukicho and Golden Gai developed in the post-war era. Kabukicho was named after a theater that was never built, but the area instead grew into Japan's largest red-light and entertainment district."
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
        description: "Immersive digital art experience. Book the first session. Fun Fact: You actually have to take your shoes off and walk through water in some of the exhibits!",
        mapUrl: "https://maps.google.com/?q=teamLab+Planets",
        details: ["1 min walk from Shin-Toyosu Station", "Book first session", "Walkable from Toyosu Station"],
        imageUrl: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6491, lng: 139.7898 },
        tourismUrl: "https://planets.teamlab.art/tokyo/",
        wikiUrl: "https://en.wikipedia.org/wiki/TeamLab",
        history: "teamLab is an international art collective formed in 2001. teamLab Planets opened in Toyosu in 2018 as a temporary exhibition but has become a permanent fixture due to its popularity."
      },
      {
        time: "12:00 pm",
        title: "Tsukiji Outer Market Lunch",
        description: "Fresh seafood for the final meal. Fun Fact: While the inner wholesale market moved to Toyosu, the outer market remains a bustling food paradise!",
        mapUrl: "https://maps.google.com/?q=Tsukiji+Outer+Market",
        imageUrl: "https://images.unsplash.com/photo-1534251369789-5067c8b8602a?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6655, lng: 139.7707 },
        tourismUrl: "https://www.japan-guide.com/e/e3021.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Tsukiji_Outer_Market",
        history: "Tsukiji was built on reclaimed land in the 17th century. The wholesale market moved to Toyosu in 2018, but the outer market remains a vital part of Tokyo's food culture, serving as the city's 'public kitchen' for over 80 years."
      },
      {
        time: "02:00 pm",
        title: "Final Wander",
        description: "Ginza or Shibuya for last-minute shopping. Fun Fact: Ginza is named after the silver coin mint that was established there in 1612.",
        imageUrl: "https://images.unsplash.com/photo-1480796275306-24d9942a14fe?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.6717, lng: 139.7650 },
        tourismUrl: "https://www.japan-guide.com/e/e3005.html",
        wikiUrl: "https://en.wikipedia.org/wiki/Ginza",
        history: "Ginza has been Tokyo's most glamorous shopping district for over a century. After a massive fire in 1872, it was rebuilt with brick buildings in a Western style, making it a symbol of Japan's 'civilization and enlightenment'."
      },
      {
        time: "06:30 pm",
        title: "Leave for Haneda Terminal 2",
        description: "Flight at 22:45. Taxi or train via central Tokyo. Fun Fact: Haneda is consistently ranked as one of the cleanest and most punctual airports in the world!",
        mapUrl: "https://maps.google.com/?q=Haneda+Airport+Terminal+2",
        details: ["Flight at 22:45", "Taxi or train to Haneda", "JR ticket services on Monorail side"],
        imageUrl: "https://images.unsplash.com/photo-1570160897040-30430ef2015a?auto=format&fit=crop&w=800&q=80",
        coordinates: { lat: 35.5494, lng: 139.7798 },
        tourismUrl: "https://tokyo-haneda.com/en/",
        wikiUrl: "https://en.wikipedia.org/wiki/Haneda_Airport",
        history: "Haneda Airport opened in 1931. It was Tokyo's primary international airport until Narita opened in 1978. In recent years, it has regained its status as a major international hub, praised for its efficiency and proximity to the city center."
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
