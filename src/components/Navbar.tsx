import {
  Book,
  FileText,
  Heart,
  Home,
  Menu,
  Pen,
  Plus,
  Settings,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useThemeStore } from "../store/ThemeStore";
import { useNavigate } from "react-router-dom";
import ChoiceModal from "../modals/ChoiceModal";

const Navbar = () => {
  // ZUSTAND STATES
  const { theme, textThemeColors, navbarText, setNavbarText, bgThemeColors } =
    useThemeStore();
  // COMMON STATES
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChoiceModal, setShowChoiceModal] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(navbarText);
  }, [navbarText]);

  const links = [
    { to: "/", icon: Home, text: "Home" },
    { to: "/stories", icon: FileText, text: "Novels" },
    { to: "/addNew", icon: Plus, text: "Add New" },
    { to: "/quotes", icon: Book, text: "Quotes" },
    { to: "/favourites", icon: Heart, text: "Favourites" },
    { to: "/settings", icon: Settings, text: "Setings" },
    { to: "/login", icon: User, text: "Login" },
  ];
  return (
    <div
      className={`${bgThemeColors[theme]}  border-b border-white/10 shadow fixed w-full z-60`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1
              onClick={() => navigate("/")}
              className={` text-2xl cursor-pointer font-bold ${textThemeColors}`}
            >
              {navbarText}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ">
            {links.map((link) => {
              const navbarText = link.text === "Home" ? "Echoes" : link.text;

              return (
                <div
                  className={`px-3 py-2 rounded  transition-colors duration-200 ${textThemeColors[theme]} `}
                >
                  <button
                    key={link.to}
                    onClick={() => {
                      if (link.to === "/addNew") {
                        setShowChoiceModal(true);
                      } else {
                        navigate(link.to);
                      }
                      setNavbarText(navbarText);
                    }}
                    className={`flex items-center cursor-pointer text-sm font-medium hover:ring-2 p-2 px-3 rounded-xl }`}
                  >
                    <span>{link.text}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-300 p-2 cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out md:hidden z-40
    ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 ${
            bgThemeColors[theme]
          } left-0 z-50 w-80 transform  shadow-xl transition-transform duration-300 ease-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav
            className="flex h-full flex-col p-4"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {links.map((link) => {
                const Icon = link.icon;
                const navbarText = link.text === "Home" ? "Echoes" : link.text;

                return (
                  <button
                    key={link.to}
                    onClick={() => {
                      if (link.to === "/addNew") {
                        setShowChoiceModal(true);
                      } else {
                        navigate(link.to);
                      }
                      setNavbarText(navbarText);
                      setIsMenuOpen(false);
                    }}
                    className={`group flex w-full items-center cursor-pointer gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 focus:ring-2  focus:ring-offse-2 ${textThemeColors[theme]} hover:ring`}
                  >
                    <Icon size={18} className="flex-shrink-0" />
                    <span className="truncate">{link.text}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
      {/* MODALS */}
      {showChoiceModal && (
        <ChoiceModal
          setShowChoiceModal={setShowChoiceModal}
          showChoiceModal={showChoiceModal}
        />
      )}
    </div>
  );
};

export default Navbar;
