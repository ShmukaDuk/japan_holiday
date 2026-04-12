/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ExternalLink, 
  Plane, 
  Info,
  Menu,
  X,
  CheckCircle2,
  Zap,
  Home,
  Navigation,
  Camera
} from "lucide-react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { itinerary, reservationStrategy, DayPlan, ItineraryItem } from "./data";

const NavItem: React.FC<{ 
  id: string;
  label: string;
  theme: string;
  isActive: boolean; 
  onClick: () => void;
  icon?: React.ReactNode;
}> = ({ 
  label, 
  theme, 
  isActive, 
  onClick,
  icon
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 flex items-center gap-3 group ${
      isActive 
        ? "bg-white text-[#4A4A4A] shadow-[0_8px_20px_rgba(159,122,234,0.1)] border border-[#D6BCFA]/30" 
        : "text-[#4A4A4A]/60 hover:text-[#4A4A4A] hover:bg-white/50"
    }`}
  >
    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? "bg-[#9F7AEA] text-white" : "bg-white/50 text-[#4A4A4A]/40 group-hover:bg-white"}`}>
      {icon || <div className="w-2 h-2 rounded-full bg-current" />}
    </div>
    <div className="flex flex-col overflow-hidden">
      <span className="text-sm font-bold tracking-tight">{label}</span>
      <span className="text-[10px] uppercase tracking-widest opacity-60 truncate">{theme}</span>
    </div>
  </button>
);

const TimelineItem: React.FC<{ item: ItineraryItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-10 pb-12 last:pb-0 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-[15px] top-0 bottom-0 w-1 bg-[#D6BCFA]/40 rounded-full group-last:bg-transparent" />
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-4 border-[#D6BCFA] shadow-sm z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#9F7AEA]" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-[#9F7AEA] font-bold text-xs tracking-widest uppercase">
          <Clock size={14} />
          {item.time}
        </div>

        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white border border-[#D6BCFA]/10 rounded-[2rem] p-6 hover:shadow-xl hover:shadow-[#9F7AEA]/5 transition-all duration-500 cursor-pointer group/card"
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold tracking-tight text-[#4A4A4A] mb-2 group-hover/card:text-[#9F7AEA] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#4A4A4A]/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className={`mt-1 p-2 rounded-full bg-[#B2E2F2]/20 text-[#B2E2F2] transition-all duration-500 ${isOpen ? "rotate-180 bg-[#9F7AEA]/20 text-[#9F7AEA]" : ""}`}>
              <ChevronDown size={20} />
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-[#4A4A4A]/5 flex flex-col gap-6">
                  {item.imageUrl && (
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {item.details && (
                    <div className="space-y-3">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]/40 font-black">Key Details</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A]/80 bg-[#D6BCFA]/10 p-3 rounded-2xl">
                            <CheckCircle2 size={16} className="text-[#9F7AEA] shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.mapUrl && (
                    <a 
                      href={item.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#9F7AEA] text-white text-xs font-bold hover:bg-[#805AD5] transition-all shadow-lg shadow-[#9F7AEA]/30 group/link"
                    >
                      <MapPin size={14} />
                      Open in Google Maps
                      <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-all -translate-x-1 group-hover/link:translate-x-0" />
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const CustomMarker: React.FC<{ left?: number, top?: number, payload: any, onClick: (args: { payload: any }) => void }> = ({ left, top, payload, onClick }) => (
  <div 
    style={{ position: "absolute", left: (left || 0) - 15, top: (top || 0) - 30, cursor: "pointer" }}
    onClick={() => onClick({ payload })}
    className="group z-20"
  >
    <div className="w-8 h-8 bg-[#9F7AEA] rounded-full border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
      <MapPin size={14} className="text-white" />
    </div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50 border border-[#4A4A4A]/5">
      <p className="text-[10px] font-black text-[#9F7AEA] uppercase tracking-widest leading-none mb-1">{payload.day}</p>
      <p className="text-xs font-bold text-[#4A4A4A] leading-none">{payload.title}</p>
    </div>
  </div>
);

const RouteLine: React.FC<{ routeCoords: [number, number][], latLngToPixel?: (latLng: [number, number]) => [number, number] }> = ({ routeCoords, latLngToPixel }) => {
  if (!latLngToPixel) return null;
  const points = routeCoords.map(coord => latLngToPixel(coord).join(",")).join(" ");
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
      <polyline 
        points={points} 
        fill="none" 
        stroke="#9F7AEA" 
        strokeWidth="3" 
        strokeDasharray="8,8"
        strokeLinecap="round"
        className="animate-dash"
      />
    </svg>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showRoute, setShowRoute] = useState(false);

  const activeDay = itinerary.find(d => d.id === activeTab);

  const allDestinations = itinerary.flatMap(day => 
    day.items.filter(item => item.coordinates).map(item => ({
      ...item,
      day: day.day
    }))
  );

  const routeCoords: [number, number][] = allDestinations.map(d => [d.coordinates!.lat, d.coordinates!.lng]);

  return (
    <div className="min-h-screen bg-[#F9F5FF] text-[#4A4A4A] font-sans selection:bg-[#D6BCFA]/30">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#4A4A4A]/5 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#9F7AEA] flex items-center justify-center shadow-md shadow-[#9F7AEA]/20">
            <Plane size={18} className="text-white" />
          </div>
          <span className="font-bold tracking-tight text-[#4A4A4A]">Japan 2026</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-[#4A4A4A]/70 hover:text-[#4A4A4A]"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-0 z-40 lg:relative lg:z-0
          w-full lg:w-80 h-screen bg-white/50 backdrop-blur-md border-r border-[#4A4A4A]/5 p-6 flex flex-col gap-8
          transition-transform duration-500 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          <div className="hidden lg:flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#9F7AEA] flex items-center justify-center shadow-xl shadow-[#9F7AEA]/30">
              <Plane size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-[#4A4A4A]">Japan Trip</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]/40 font-bold">Johnny • Tess • Xavier</p>
            </div>
          </div>

          <nav className="flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#4A4A4A]/30 font-black mb-1 ml-4">Navigation</p>
            
            <NavItem 
              id="home"
              label="Home"
              theme="The Big Picture"
              isActive={activeTab === "home"}
              onClick={() => { setActiveTab("home"); setIsSidebarOpen(false); }}
              icon={<Home size={18} />}
            />

            <NavItem 
              id="strategy"
              label="Strategy"
              theme="Bookings & Tips"
              isActive={activeTab === "strategy"}
              onClick={() => { setActiveTab("strategy"); setIsSidebarOpen(false); }}
              icon={<Navigation size={18} />}
            />

            <div className="h-px bg-[#4A4A4A]/5 my-2 mx-4" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#4A4A4A]/30 font-black mb-1 ml-4">Daily Plans</p>
            
            {itinerary.map((day) => (
              <NavItem 
                key={day.id} 
                id={day.id}
                label={day.day}
                theme={day.theme}
                isActive={activeTab === day.id} 
                onClick={() => {
                  setActiveTab(day.id);
                  setIsSidebarOpen(false);
                }} 
              />
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-[#4A4A4A]/5">
            <div className="bg-white rounded-3xl p-4 flex items-center gap-3 shadow-sm border border-[#4A4A4A]/5">
              <div className="w-10 h-10 rounded-2xl bg-[#D6BCFA] flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/japan/100/100" alt="Profile" className="w-full h-full object-cover opacity-80" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#4A4A4A]">Johnny & Tess</p>
                <p className="text-[10px] text-[#4A4A4A]/40 font-medium">April 2026</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 h-screen overflow-y-auto pt-20 lg:pt-0 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl mx-auto px-6 py-12 lg:py-20"
            >
              {activeTab === "home" ? (
                <div className="space-y-12">
                  <header className="space-y-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D6BCFA]/20 text-[#9F7AEA] text-[10px] uppercase tracking-[0.2em] font-black">
                      <MapPin size={12} />
                      Interactive Map
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-[#4A4A4A]">The <span className="text-[#9F7AEA]">Grand</span> Tour</h2>
                    <p className="text-[#4A4A4A]/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                      From the ancient temples of Kyoto to the neon lights of Tokyo. Here is your entire journey at a glance.
                    </p>
                  </header>

                  <div className="bg-white border-8 border-white rounded-[3rem] shadow-2xl shadow-[#9F7AEA]/10 overflow-hidden h-[500px] relative group">
                    <Map 
                      defaultCenter={[35.3, 137.5]} 
                      defaultZoom={7}
                      provider={(x, y, z) => `https://a.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png`}
                    >
                      <ZoomControl />
                      {showRoute && <RouteLine routeCoords={routeCoords} />}

                      {allDestinations.map((dest, i) => (
                        <CustomMarker 
                          key={i}
                          anchor={[dest.coordinates!.lat, dest.coordinates!.lng]} 
                          payload={dest}
                          onClick={({ payload }) => alert(`${payload.day}: ${payload.title}`)}
                        />
                      ))}
                    </Map>
                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#4A4A4A]/5 shadow-xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#9F7AEA] flex items-center justify-center text-white">
                          <Navigation size={24} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-[#4A4A4A]">Route Overview</p>
                          <p className="text-xs text-[#4A4A4A]/50 font-medium">Kyoto → Osaka → Tokyo</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setShowRoute(!showRoute)}
                        className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                          showRoute 
                            ? "bg-[#9F7AEA] text-white shadow-lg shadow-[#9F7AEA]/30" 
                            : "bg-[#D6BCFA]/20 text-[#9F7AEA] hover:bg-[#D6BCFA]/30"
                        }`}
                      >
                        {showRoute ? "Hide Route" : "Route Overview"}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itinerary.map((day, i) => (
                      <div key={i} className="bg-white p-6 rounded-[2rem] border border-[#4A4A4A]/5 shadow-sm hover:shadow-md transition-all">
                        <p className="text-[10px] font-black text-[#9F7AEA] uppercase tracking-widest mb-2">{day.day}</p>
                        <h4 className="text-lg font-bold mb-3">{day.theme}</h4>
                        <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                          <img src={day.items[0].imageUrl} alt={day.day} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <button 
                          onClick={() => setActiveTab(day.id)}
                          className="w-full py-3 rounded-xl bg-[#D6BCFA]/10 text-[#9F7AEA] text-xs font-black uppercase tracking-widest hover:bg-[#D6BCFA]/20 transition-all"
                        >
                          View Day
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : activeTab === "strategy" ? (
                <div className="space-y-12">
                  <header className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D6BCFA]/20 text-[#9F7AEA] text-[10px] uppercase tracking-[0.2em] font-black">
                      <Zap size={12} />
                      Execution Guide
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-[#4A4A4A]">Booking <span className="text-[#9F7AEA]">Strategy</span></h2>
                    <p className="text-[#4A4A4A]/60 text-lg max-w-2xl font-medium leading-relaxed">
                      Don't leave it to chance. Here's how to handle the logistics like a pro.
                    </p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white border border-[#9F7AEA]/20 rounded-[3rem] p-10 space-y-8 shadow-xl shadow-[#9F7AEA]/5">
                      <div className="flex items-center gap-4 text-[#9F7AEA]">
                        <div className="w-12 h-12 rounded-2xl bg-[#9F7AEA]/10 flex items-center justify-center">
                          <CheckCircle2 size={28} />
                        </div>
                        <h3 className="text-2xl font-black">Book Now</h3>
                      </div>
                      <ul className="space-y-5">
                        {reservationStrategy.filter(s => s.status === "Book Now").map((s, i) => (
                          <li key={i} className="flex justify-between items-center group bg-[#F9F5FF] p-4 rounded-2xl border border-[#4A4A4A]/5">
                            <span className="font-bold text-[#4A4A4A]">{s.item}</span>
                            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#9F7AEA] text-white shadow-lg shadow-[#9F7AEA]/20">Priority</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-white border border-[#B2E2F2]/20 rounded-[3rem] p-10 space-y-8 shadow-xl shadow-[#B2E2F2]/5">
                        <div className="flex items-center gap-4 text-[#B2E2F2]">
                          <Clock size={28} />
                        </div>
                        <h3 className="text-2xl font-black">1–3 Days Ahead</h3>
                        <ul className="space-y-5">
                          {reservationStrategy.filter(s => s.status === "Book 1-3 Days Ahead").map((s, i) => (
                            <li key={i} className="flex justify-between items-center group bg-[#F9F5FF] p-4 rounded-2xl border border-[#4A4A4A]/5">
                              <span className="font-bold text-[#4A4A4A]">{s.item}</span>
                              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#B2E2F2] text-white">Soon</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#FDFD96]/20 border border-[#FDFD96]/40 rounded-[3rem] p-10 space-y-6">
                        <h3 className="text-2xl font-black flex items-center gap-3">
                          <Zap size={24} className="text-[#4A4A4A]/40" />
                          Wing It
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {reservationStrategy.filter(s => s.status === "Wing It").map((s, i) => (
                            <div key={i} className="px-5 py-3 rounded-2xl bg-white text-[#4A4A4A]/70 text-sm font-bold shadow-sm">
                              {s.item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#9F7AEA]/5 border border-[#9F7AEA]/10 rounded-[3rem] p-10 space-y-6">
                      <h3 className="text-2xl font-black flex items-center gap-3">
                        <Navigation size={24} className="text-[#9F7AEA]" />
                        Tokyo Train Logic
                      </h3>
                      <ul className="space-y-4">
                        <li className="bg-white p-4 rounded-2xl shadow-sm border border-[#4A4A4A]/5">
                          <p className="text-xs font-black text-[#9F7AEA] uppercase tracking-widest mb-1">Shinjuku → Shibuya</p>
                          <p className="text-sm font-bold">Straightforward JR move. Good for Wednesday night.</p>
                        </li>
                        <li className="bg-white p-4 rounded-2xl shadow-sm border border-[#4A4A4A]/5">
                          <p className="text-xs font-black text-[#9F7AEA] uppercase tracking-widest mb-1">Shinjuku → Stadium</p>
                          <p className="text-sm font-bold">Train toward Gaiemmae Station + 5-min walk.</p>
                        </li>
                        <li className="bg-white p-4 rounded-2xl shadow-sm border border-[#4A4A4A]/5">
                          <p className="text-xs font-black text-[#9F7AEA] uppercase tracking-widest mb-1">Shinjuku → teamLab</p>
                          <p className="text-sm font-bold">Train toward Shin-Toyosu Station. 1-min walk from there.</p>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#B2E2F2]/10 border border-[#B2E2F2]/20 rounded-[3rem] p-10 space-y-6">
                      <h3 className="text-2xl font-black flex items-center gap-3">
                        <Camera size={24} className="text-[#B2E2F2]" />
                        Screenshot Checklist
                      </h3>
                      <p className="text-sm text-[#4A4A4A]/60 font-medium">Capture these before you lose signal:</p>
                      <div className="grid grid-cols-1 gap-3">
                        {["Hotel Groove Shinjuku", "Meiji Jingu Stadium", "teamLab Planets", "Haneda Terminal 2"].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#4A4A4A]/5">
                            <CheckCircle2 size={18} className="text-[#B2E2F2]" />
                            <span className="text-sm font-bold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-16">
                  <header className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <span className="text-9xl font-black text-[#9F7AEA]/10 absolute -top-12 -left-8 pointer-events-none select-none">
                          {activeDay!.day.substring(0, 3).toUpperCase()}
                        </span>
                        <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-[#4A4A4A] relative z-10">
                          {activeDay!.day}
                        </h2>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                      <div className="flex items-center gap-3 px-5 py-2 rounded-2xl bg-[#D6BCFA]/20 text-[#9F7AEA]">
                        <Zap size={18} className="fill-current" />
                        <span className="uppercase tracking-[0.2em] text-xs font-black">{activeDay!.theme}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#4A4A4A]/40 font-bold">
                        <Calendar size={18} />
                        <span className="uppercase tracking-widest text-xs">April 2026</span>
                      </div>
                    </div>
                  </header>

                  <div className="space-y-4">
                    {activeDay!.items.map((item, index) => (
                      <TimelineItem key={index} item={item} index={index} />
                    ))}
                  </div>

                  {activeDay!.id === "saturday" && (
                    <div className="pt-12">
                      <div className="bg-white border-4 border-[#D6BCFA] rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-[#D6BCFA]/20">
                        <div className="w-24 h-24 rounded-[2rem] bg-[#D6BCFA] flex items-center justify-center shrink-0 shadow-lg shadow-[#D6BCFA]/40">
                          <CheckCircle2 size={48} className="text-[#9F7AEA]" />
                        </div>
                        <div className="text-center md:text-left space-y-4">
                          <h3 className="text-3xl font-black text-[#4A4A4A]">The Journey is <span className="text-[#9F7AEA]">Complete</span></h3>
                          <p className="text-[#4A4A4A]/60 text-lg font-medium leading-relaxed">
                            You've conquered Japan! From the quiet temples of Kyoto to the madness of Tokyo. Have a safe flight back from Haneda!
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D6BCFA;
          border-radius: 10px;
          border: 2px solid #F9F5FF;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9F7AEA;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -16;
          }
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
