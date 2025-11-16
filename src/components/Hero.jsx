import { ArrowRight, Search } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

export function Hero() {
    const [searchFocused, setSearchFocused] = useState(false);
    const ref = useRef(null);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 120]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden">
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                style={{ y }}
                className="absolute inset-0 h-full w-full object-cover scale-110"
                animate={{ scale: 1.15 }}
                transition={{ duration: 25, ease: "easeOut" }}
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </motion.video>

            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/60 mix-blend-overlay" />

            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto">
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-heading drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] leading-tight"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-white">Discover</span>
                    <span className="block font-bold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#FF6F61] to-[#FF9F9F] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                        Your Next Journey
                    </span>
                </motion.h1>

                <motion.p
                    className="text-[#f5f5f5] text-lg md:text-xl max-w-xl font-light mt-6 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Cinematic travel experiences curated for dreamers, explorers, and storytellers.
                </motion.p>

                <motion.div
                    className="w-full max-w-3xl mt-10"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <div
                        className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl transition-all ${searchFocused ? "ring-4 ring-[#FF4D00]/40" : ""}`}
                    >
                        <div className="flex items-center px-6 py-4">
                            <Search size={24} className="text-white/70 mr-4" />
                            <input
                                type="text"
                                placeholder="Search destinations..."
                                className="flex-1 bg-transparent text-white/90 placeholder-white/50 outline-none text-lg"
                                onFocus={() => setSearchFocused(true)}
                                onBlur={() => setSearchFocused(false)}
                                aria-label="Search destinations"
                            />
                            <button
                                className="ml-4 bg-[#FF4D00] hover:bg-[#e24300] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                                aria-label="Explore destinations"
                            >
                                Explore
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
