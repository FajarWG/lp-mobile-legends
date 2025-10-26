import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function HeroHeader() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/wallpaper.jpg')",
            backgroundPosition: "center 30%",
          }}
        />

        <div className="absolute inset-0 bg-(--ml-dark-500)/40" />
        <div className="absolute inset-0 bg-linear-to-b from-(--ml-dark-500)/50 via-(--ml-navy-500)/25 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-(--ml-navy-500)/60 via-(--ml-navy-500)/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-br from-(--ml-primary-900)/15 via-transparent to-(--ml-primary-800)/10" />

        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl bg-(--ml-cyan-500)/8"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl bg-(--ml-primary-500)/8"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.08, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl bg-(--ml-accent-500)/6"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <section className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-8">
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
                    className="text-lg text-gray-200 max-w-xl drop-shadow-md"
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
                  className="flex items-center gap-4 pt-2"
                >
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
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="relative flex justify-center items-center"
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-(--ml-primary-500)/20 to-(--ml-accent-500)/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="/kalea.png"
                    alt="Hero Kalea"
                    className="relative z-10 w-full h-auto max-w-2xl drop-shadow-2xl"
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
