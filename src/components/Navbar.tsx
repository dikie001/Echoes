import {
  Book,
  FileText,
  Heart,
  Home,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useThemeStore } from "../store/ThemeStore";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // ZUSTAND STATES
  const { theme, themeTextColors, navbarText, setNavbarText,bgThemeColors } = useThemeStore();
  // COMMON STATES
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(navbarText);
  }, [navbarText]);

  const links = [
    { to: "/", icon: Home, text: "Home" },
    { to: "/quotes", icon: Book, text: "Quotes" },
    { to: "/stories", icon: FileText, text: "Stories" },
    { to: "/favourites", icon: Heart, text: "Favourites" },
    { to: "/settings", icon: Settings, text: "Setings" },
    { to: "/login", icon: User, text: "Login" },
  ];
  return (
    <div className={`${bgThemeColors[theme]}  border-b border-gray-700 fixed w-full z-60`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-400">{navbarText}</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ">
            {links.map((link) => {
              return (
                <div className={`px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200`}>
                  <a
                    key={link.to}
                    onClick={() => setNavbarText(link.text)}
                    href={link.to}
                    className={`flex items-center gap-2 text-sm font-medium ${themeTextColors[theme]}`}
                  >
                    <span>{link.text}</span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-300 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden ">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.to}
                  onClick={() => {
                    link.text === "Home"
                      ? setNavbarText("Echoes")
                      : setNavbarText(link.text);
                    navigate(link.to);
                  }}
                  className={`flex w-full items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${themeTextColors[theme]}`}
                >
                  <Icon size={18} />
                  <span>{link.text}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
