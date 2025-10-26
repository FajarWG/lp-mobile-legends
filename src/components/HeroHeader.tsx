import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Trophy, CreditCard, Gift, Palette } from "lucide-react";

export default function HeroHeader() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Navbar />

        <section className="pt-52 pb-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4"
                >
                  <motion.h1
                    className="text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-(--ml-cyan-400) via-(--ml-primary-400) to-(--ml-accent-500)"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    JOIN THE BATTLE
                  </motion.h1>
                  <motion.p
                    className="text-3xl text-white font-semibold drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    5v5 MOBA Action on Mobile
                  </motion.p>
                  <motion.p
                    className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Experience the ultimate multiplayer online battle arena.
                    Team up with friends, choose your hero, and dominate the
                    battlefield!
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-center gap-4">
                    <motion.a
                      href="#"
                      className="text-white hover:text-blue-400"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src="https://akmweb.youngjoygame.com/web/gms/image/464414253065cb437d74b31d60083013.png"
                        alt="App Store"
                        className="h-12"
                      />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-white hover:text-blue-400"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src="https://akmweb.youngjoygame.com/web/gms/image/0a868da9764348ad28cd4e440a034631.png"
                        alt="Google Play"
                        className="h-12"
                      />
                    </motion.a>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 max-w-4xl mx-auto">
                    {[
                      {
                        title: "Peringkat Hero",
                        subtitle: "Peringkat kekuatan Hero",
                        icon: Trophy,
                      },
                      {
                        title: "Pembayaran",
                        subtitle: "Metode Top Up",
                        icon: CreditCard,
                      },
                      {
                        title: "Penukaran",
                        subtitle: "Tukar hadiah Game",
                        icon: Gift,
                      },
                      {
                        title: "Fan Art",
                        subtitle: "Desain ciptaan Player",
                        icon: Palette,
                      },
                    ].map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + 1.3,
                          }}
                          className="group cursor-pointer"
                        >
                          <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10">
                              <Icon
                                className="w-6 h-6 text-white"
                                strokeWidth={1.5}
                              />
                            </div>
                            <div className="text-center">
                              <h3 className="text-xs font-semibold text-white">
                                {feature.title}
                              </h3>
                              <p className="text-[10px] text-gray-400">
                                {feature.subtitle}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
