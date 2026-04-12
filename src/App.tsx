/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronRight, 
  ExternalLink, 
  Plane, 
  Train, 
  Utensils, 
  Beer, 
  Camera, 
  Info,
  Menu,
  X,
  CheckCircle2,
  AlertCircle,
  Zap
} from "lucide-react";
import { itinerary, reservationStrategy, DayPlan, ItineraryItem } from "./data";

const NavItem = ({ 
  day, 
  isActive, 
  onClick 
}: { 
  day: DayPlan | { id: string, day: string, theme: string }; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
      isActive 
        ? "bg-white/10 text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
        : "text-white/50 hover:text-white hover:bg-white/5"
    }`}
  >
    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? "bg-orange-500 scale-125 shadow-[0_0_10px_rgba(249,115,22,0.5)]" : "bg-white/20 group-hover:bg-white/40"}`} />
    <div className="flex flex-col">
      <span className="text-sm font-medium tracking-tight">{day.day}</span>
      <span className="text-[10px] uppercase tracking-widest opacity-60 truncate max-w-[150px]">{day.theme}</span>
    </div>
  </button>
);

const TimelineItem = ({ item, index }: { item: ItineraryItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-last:bg-transparent" />
      
      {/* Timeline Dot */}
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] z-10" />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 text-orange-500/80 font-mono text-xs tracking-widest uppercase">
          <Clock size={12} />
          {item.time}
        </div>

        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer group/card"
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-light tracking-tight text-white mb-1 group-hover/card:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <button className={`mt-1 text-white/30 group-hover/card:text-white/60 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}>
              <ChevronDown size={20} />
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-6">
                  {item.imageSeed && (
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/${item.imageSeed}/800/450`} 
                        alt={item.title}
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  )}

                  {item.details && (
                    <div className="space-y-3">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">Key Details</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                            <div className="mt-1.5 w-1 h-1 rounded-full bg-orange-500 shrink-0" />
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
                      className="inline-flex items-center gap-2 text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors group/link"
                    >
                      <MapPin size={14} />
                      View on Google Maps
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

export default function App() {
  const [activeDayId, setActiveDayId] = useState("monday");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeDay = itinerary.find(d => d.id === activeDayId) || itinerary[0];

  const sidebarItems = [
    { id: "strategy", day: "Strategy", theme: "Reservations & Tips" },
    ...itinerary
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-bottom border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
            <Plane size={18} className="text-black" />
          </div>
          <span className="font-medium tracking-tight">Japan 2026</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-white/70 hover:text-white"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-0 z-40 lg:relative lg:z-0
          w-full lg:w-80 h-screen bg-[#0a0a0a] border-r border-white/5 p-6 flex flex-col gap-8
          transition-transform duration-500 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          <div className="hidden lg:flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <Plane size={22} className="text-black" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">Japan Adventure</h1>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Johnny • Tess • Xavier</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-2 ml-4">Itinerary</p>
            {sidebarItems.map((item) => (
              <NavItem 
                key={item.id} 
                day={item} 
                isActive={activeDayId === item.id} 
                onClick={() => {
                  setActiveDayId(item.id);
                  setIsSidebarOpen(false);
                }} 
              />
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/traveler/100/100" alt="Profile" className="w-full h-full object-cover opacity-80" />
              </div>
              <div>
                <p className="text-xs font-medium">Johnny & Tess</p>
                <p className="text-[10px] text-white/40">April 2026</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 h-screen overflow-y-auto pt-20 lg:pt-0 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDayId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-4xl mx-auto px-6 py-12 lg:py-20"
            >
              {activeDayId === "strategy" ? (
                <div className="space-y-12">
                  <header className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] uppercase tracking-widest font-bold">
                      <Zap size={10} />
                      Execution Plan
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-light tracking-tighter">Reservation <span className="text-orange-500 italic">Strategy</span></h2>
                    <p className="text-white/50 text-lg max-w-2xl font-light leading-relaxed">
                      The practical version: exact movement logic, what to book, and the key links you'll actually use.
                    </p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
                      <div className="flex items-center gap-3 text-orange-500">
                        <CheckCircle2 size={24} />
                        <h3 className="text-xl font-medium">Book Now</h3>
                      </div>
                      <ul className="space-y-4">
                        {reservationStrategy.filter(s => s.status === "Book Now").map((s, i) => (
                          <li key={i} className="flex justify-between items-center group">
                            <span className="text-white/80 group-hover:text-white transition-colors">{s.item}</span>
                            <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-orange-500/20 text-orange-400">Critical</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
                      <div className="flex items-center gap-3 text-blue-400">
                        <Clock size={24} />
                        <h3 className="text-xl font-medium">1–3 Days Ahead</h3>
                      </div>
                      <ul className="space-y-4">
                        {reservationStrategy.filter(s => s.status === "Book 1-3 Days Ahead").map((s, i) => (
                          <li key={i} className="flex justify-between items-center group">
                            <span className="text-white/80 group-hover:text-white transition-colors">{s.item}</span>
                            <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-blue-500/20 text-blue-400">Soon</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 md:col-span-2">
                      <div className="flex items-center gap-3 text-green-400">
                        <Zap size={24} />
                        <h3 className="text-xl font-medium">Wing It</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {reservationStrategy.filter(s => s.status === "Wing It").map((s, i) => (
                          <div key={i} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white/70 text-sm">
                            {s.item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-500/5 border border-orange-500/10 rounded-3xl p-8 space-y-4">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <Info size={20} className="text-orange-500" />
                      Pro Tips
                    </h3>
                    <ul className="space-y-3 text-white/60 text-sm">
                      <li className="flex gap-3">
                        <span className="text-orange-500">01.</span>
                        Use Google Maps for every train move.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-orange-500">02.</span>
                        Keep each day area-based. Do not zig-zag Tokyo.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-orange-500">03.</span>
                        Book Shibuya Sky and teamLab in advance or you risk annoying time slots.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-16">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-8xl lg:text-9xl font-black text-white/[0.03] absolute -top-4 -left-4 pointer-events-none select-none">
                        {activeDay.day.substring(0, 3).toUpperCase()}
                      </span>
                      <div className="relative">
                        <h2 className="text-5xl lg:text-7xl font-light tracking-tighter z-10 relative">
                          {activeDay.day}
                        </h2>
                        <div className="h-1 w-20 bg-orange-500 mt-2" />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap size={14} className="text-orange-500" />
                        <span className="uppercase tracking-widest text-xs font-semibold">{activeDay.theme}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={14} />
                        <span>April 2026</span>
                      </div>
                    </div>
                  </header>

                  <div className="space-y-2">
                    {activeDay.items.map((item, index) => (
                      <TimelineItem key={index} item={item} index={index} />
                    ))}
                  </div>

                  {activeDay.id === "saturday" && (
                    <div className="pt-12 border-t border-white/10">
                      <div className="bg-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                          <CheckCircle2 size={40} className="text-black" />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-2xl font-light mb-2">Proper Japan Trip <span className="text-orange-500 italic">Complete</span></h3>
                          <p className="text-white/50 text-sm leading-relaxed">
                            If you follow this exactly, you'll hit: Culture, Food, Nightlife, and Unique experiences. Have an amazing flight back!
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
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
