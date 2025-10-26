import { motion } from "framer-motion";
import { Eye, ChevronRight } from "lucide-react";

export default function NewsSection() {
  const tabs = ["Untukmu", "Patch", "Event", "Esports", "Buletin"];
  const activeTab = "Untukmu";

  const news = [
    {
      id: 1,
      title: "Cara Mendapatkan Skin & Item Eksklusif The Aspirants",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/11bfb8e1b4cb6b792d84662fdd2dacd0.jpg",
      views: 15681,
      date: "2025-09-30 15:00:00",
      tag: null,
      size: "large",
    },
    {
      id: 2,
      title: "Panduan Revamp Alice",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/8e5eba7bdc92b949c5dad86e1794533c.jpg",
      views: 9336,
      date: "2025-09-15 15:00:00",
      tag: "Panduan",
      size: "small",
    },
    {
      id: 3,
      title: "GAMBAR PANJANG PANDUAN OBSIDIA",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/ed7e5a22c1233b4c501b0d5860d99a5b.png",
      views: 13151,
      date: "2025-09-15 15:00:00",
      tag: "Panduan",
      size: "large",
    },
    {
      id: 4,
      title: "Panduan Lanjutan Zetian",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/6a694277d239b1685235dc84301ec9e5.jpg",
      views: 29312,
      date: "2025-06-18 15:00:00",
      tag: "Panduan",
      size: "small",
    },
    {
      id: 5,
      title: "Panduan Event Metro Zero",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/24bb5823540011688d32b0d8670ce6b9.jpg",
      views: 65983,
      date: "2025-08-06 15:00:00",
      tag: null,
      size: "large",
    },
    {
      id: 6,
      title: "1.9.90 PERSETUJUAN PENGGUNA",
      image:
        "	https://akmweb.youngjoygame.com/web/gms/image/65ecdd972cca4c4082d27e63e1053193.jpg",
      views: 64875,
      date: "2025-06-18 15:00:00",
      tag: "Patch",
      size: "large",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-(--ml-primary-500) to-(--ml-accent-500) rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white">INFORMASI</h2>
          </div>
          <motion.button
            className="ml-auto flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            whileHover={{ x: 5 }}
          >
            <span className="text-lg">LAINNYA</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="flex gap-6 mb-8 border-b border-white/10">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`pb-3 px-2 text-base font-medium transition-colors relative ${
                tab === activeTab
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab}
              {tab === activeTab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-(--ml-primary-500) to-(--ml-accent-500)"
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                item.size === "large" ? "col-span-1" : "col-span-1"
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                {item.tag && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-md">
                    <span className="text-white text-xs font-medium">
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-(--ml-accent-400) transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-colors group-hover:border-(--ml-accent-500)/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
