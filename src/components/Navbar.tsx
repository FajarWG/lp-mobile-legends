import { Globe, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const menuItems = [
    { href: "#news", label: "News" },
    { href: "#hero", label: "Hero" },
    { href: "#videos", label: "Videos" },
    { href: "#esports", label: "Esports" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/MobileLegendsGame", icon: Facebook },
    { href: "https://twitter.com/MobileLegendsOL", icon: Twitter },
    { href: "https://www.instagram.com/mobilelegendsgame", icon: Instagram },
    {
      href: "https://www.youtube.com/c/MobileLegendsOfficialYT",
      icon: Youtube,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto p-4 ">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://akmweb.youngjoygame.com/web/gms/image/d24e0caa1d6ffacceac10e06c4b7663c.png"
              alt="Mobile Legends"
              className="h-10 w-auto"
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
            </motion.button>

            <div className="flex items-center space-x-3 border-l border-white/20 pl-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
            >
              <Button variant={"outline"} size={"lg"}>
                Login
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
}
