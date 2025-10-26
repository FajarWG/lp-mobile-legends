import HeroHeader from "./components/HeroHeader";
import NewsSection from "./components/NewsSection";
import HeroSelection from "./components/HeroSelection";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0e27] relative">
      <div className="fixed inset-0 z-0">
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
        <HeroHeader />
        <HeroSelection />
        <NewsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
