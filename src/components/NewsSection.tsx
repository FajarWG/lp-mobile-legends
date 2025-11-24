import { motion } from "framer-motion";
import { Eye, ChevronRight } from "lucide-react";

export default function NewsSection() {
  const tabs = ["For You", "Patch Notes", "Events", "Esports", "Community"];
  const activeTab = "For You";

  const news = [
    {
      id: 1,
      title: "Get The Aspirants Exclusive Skins & Items Now!",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/11bfb8e1b4cb6b792d84662fdd2dacd0.jpg",
      views: 15681,
      date: "Sep 30, 2025",
      tag: "Event",
      size: "large",
    },
    {
      id: 2,
      title: "Alice Revamp Guide: Dominate the Midlane",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/8e5eba7bdc92b949c5dad86e1794533c.jpg",
      views: 9336,
      date: "Sep 15, 2025",
      tag: "Guide",
      size: "small",
    },
    {
      id: 3,
      title: "Obsidia Complete Mastery Guide",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/ed7e5a22c1233b4c501b0d5860d99a5b.png",
      views: 13151,
      date: "Sep 15, 2025",
      tag: "Guide",
      size: "large",
    },
    {
      id: 4,
      title: "Zetian Advanced Gameplay Tactics",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/6a694277d239b1685235dc84301ec9e5.jpg",
      views: 29312,
      date: "Jun 18, 2025",
      tag: "Guide",
      size: "small",
    },
    {
      id: 5,
      title: "Metro Zero Event: All You Need to Know",
      image:
        "https://akmweb.youngjoygame.com/web/gms/image/24bb5823540011688d32b0d8670ce6b9.jpg",
      views: 65983,
      date: "Aug 06, 2025",
      tag: "Event",
      size: "large",
    },
    {
      id: 6,
      title: "Patch 1.9.90: User Agreement Updates",
      image:
        "	https://akmweb.youngjoygame.com/web/gms/image/65ecdd972cca4c4082d27e63e1053193.jpg",
      views: 64875,
      date: "Jun 18, 2025",
      tag: "Patch",
      size: "large",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
       {/* Background Elements */}
       {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tight italic">LATEST NEWS</h2>
              <p className="text-gray-400 text-sm mt-1">Stay updated with the Land of Dawn</p>
            </div>
          </div>
          
          <motion.button
            className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-bold text-white tracking-wide">VIEW ALL</span>
            <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                tab === activeTab
                  ? "text-white border-white border-2"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab === activeTab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-white-400 to-white-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/50 transition-colors duration-500"
            >
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-3">
                   {item.tag && (
                    <span className="px-3 py-1 bg-white text-white-400 text-xs font-bold rounded-lg border border-white backdrop-blur-md">
                      {item.tag}
                    </span>
                  )}
                  <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white leading-tight mb-4 group-hover:text-white-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform duration-300 text-white flex items-center gap-1">
                    Read More <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
