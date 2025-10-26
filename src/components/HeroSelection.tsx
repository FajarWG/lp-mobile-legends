import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function HeroSelection() {
  const [selectedHero, setSelectedHero] = useState(0);

  const heroes = [
    {
      id: 1,
      name: "Obsidia",
      role: "Marksman",
      specialty: ["Finisher", "Damage"],
      description:
        "Diakui oleh Langit dan dicintai oleh rakyatnya, Ratu Kahyangan dari Cadia Riverlands naik takhta untuk membawa perdamaian ke dunia manusia.",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/9ea138369ca4a37b4806ac64998df054.webp",
      thumbnail:
        "https://akmweb.youngjoygame.com/web/gms/image/9ea138369ca4a37b4806ac64998df054.webp",
    },
    {
      id: 2,
      name: "Zetian",
      role: "Fighter",
      specialty: ["Charge", "Burst"],
      description:
        "Kaisar wanita yang gagah berani, menguasai seni bela diri kuno. Kombinasi kecepatan dan kekuatan menjadikannya petarung yang mematikan.",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/10cf23ade94859fd7f6a877c828c0131.webp",
      thumbnail:
        "https://akmweb.youngjoygame.com/web/gms/image/10cf23ade94859fd7f6a877c828c0131.webp",
    },
    {
      id: 3,
      name: "Kalea",
      role: "Mage",
      specialty: ["Burst", "Poke"],
      description:
        "Seorang penyihir muda yang menguasai sihir es dan petir. Dengan kekuatan elemen yang luar biasa, dia mampu menghancurkan musuh dari jarak jauh.",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/3a7693b9a565b4e1d67d57ae73eb5297.webp",
      thumbnail:
        "https://akmweb.youngjoygame.com/web/gms/image/3a7693b9a565b4e1d67d57ae73eb5297.webp",
    },
    {
      id: 4,
      name: "Zhuxin",
      role: "Support",
      specialty: ["Heal", "Control"],
      description:
        "Penjaga spiritual yang memiliki kemampuan penyembuhan dan kontrol crowd yang luar biasa. Kehadirannya di medan perang memberikan harapan bagi sekutunya.",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/adaf737c13d48204dc39f4b48de91ac8.webp",
      thumbnail:
        "https://akmweb.youngjoygame.com/web/gms/image/adaf737c13d48204dc39f4b48de91ac8.webp",
    },
  ];

  const currentHero = heroes[selectedHero];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedHero((prev) => (prev + 1) % heroes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroes.length]);

  return (
    <section className="relative py-24 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-widest">
                Choose Your
              </span>
              <h2 className="text-7xl font-black text-white mb-6 italic">
                HEROES
              </h2>
              <p className="text-gray-300 text-base leading-relaxed max-w-xl">
                Unleash your power on the battlefield — whether you strike from
                the shadows, defend your allies, or dominate the frontlines, the
                Land of Dawn awaits your legend.
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size={"lg"}>
                Show More
              </Button>
            </div>
          </div>

          <motion.div
            key={currentHero.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-(--ml-primary-500)/20 to-(--ml-accent-500)/20 rounded-full blur-3xl scale-75" />
            <div className="absolute -inset-4 bg-white/5 rounded-full" />

            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={currentHero.image}
                alt={currentHero.name}
                className="relative w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            <div className="absolute bottom-8 left-8 right-8">
              <motion.h3
                key={`name-${currentHero.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-black text-white italic mb-2"
              >
                {currentHero.name.toUpperCase()}
              </motion.h3>
              <motion.p
                key={`role-${currentHero.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-sm"
              >
                {currentHero.specialty.join(" • ")}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
