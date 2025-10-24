import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              <a
                href="#news"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                News
              </a>
              <a
                href="#hero"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Hero
              </a>
              <a
                href="#videos"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Videos
              </a>
              <a
                href="#esports"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Esports
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://akmweb.youngjoygame.com/web/gms/image/d24e0caa1d6ffacceac10e06c4b7663c.png"
              alt="Mobile Legends"
              className="h-10 w-auto"
            />
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
            </button>
            <div className="flex space-x-2">
              <a href="#" className="text-white hover:text-blue-400">
                <img
                  src="https://akmweb.youngjoygame.com/web/gms/image/464414253065cb437d74b31d60083013.png"
                  alt="App Store"
                  className="h-8"
                />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <img
                  src="https://akmweb.youngjoygame.com/web/gms/image/0a868da9764348ad28cd4e440a034631.png"
                  alt="Google Play"
                  className="h-8"
                />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0e27] border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#news"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
            >
              NEWS
            </a>
            <a
              href="#hero"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
            >
              HERO
            </a>
            <a
              href="#videos"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
            >
              VIDEOS
            </a>
            <a
              href="#esports"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
            >
              ESPORTS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
