import React, { type Dispatch, type SetStateAction } from "react";
import { X, BookOpen, Quote } from "lucide-react";
import { useThemeStore } from "../store/ThemeStore";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  showChoiceModal: boolean;
  setShowChoiceModal: Dispatch<SetStateAction<boolean>>;
}

const ChoiceModal: React.FC<ModalProps> = ({
  showChoiceModal,
  setShowChoiceModal,
}) => {
  if (!showChoiceModal) return null;
  const navigate = useNavigate();

  const {
    bgThemeColors,
    buttonThemeColors,
    textThemeColors,
    theme,
    subTextThemeColors,
    setNavbarText,
    setChoice,
  } = useThemeStore();

  // Handle Selection of choice
  const HandleSelect = (params: "novels" | "quotes") => {
    setChoice(params);
    setShowChoiceModal(false);
    if (params === "novels") {
      setNavbarText("Add New Novel");
      navigate('/create-story')
    } else if (params === "quotes") {
      setNavbarText("Add New Quote");
      navigate('/create-quote')
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setShowChoiceModal(false)}
      />

      {/* Modal Container */}
      <div
        className={`relative z-10 w-full max-w-md transform animate-in fade-in-0 zoom-in-95 duration-300 ${bgThemeColors[theme]} rounded-3xl shadow-2xl border border-white/10`}
      >
        {/* Header Section */}
        <div className="relative px-8 pt-8 pb-2">
          <button
            onClick={() => setShowChoiceModal(false)}
            className={`absolute top-6 right-6 p-2 rounded-full transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${textThemeColors[theme]} hover:scale-110`}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <h2 className={`text-2xl font-bold mb-2 ${textThemeColors[theme]}`}>
              What would you like to add?
            </h2>
            <p className={`text-base ${subTextThemeColors[theme]}`}>
              Choose your content type to get started
            </p>
          </div>
        </div>

        {/* Choice Cards */}
        <div className="px-8 pb-8 pt-4">
          <div className="grid gap-4">
            <button
              className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/20 ${buttonThemeColors[theme]}`}
              onClick={() => HandleSelect("novels")}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl bg-white/10 transition-transform group-hover:scale-110 ${textThemeColors[theme]}`}
                >
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-lg font-semibold mb-1 ${textThemeColors[theme]}`}
                  >
                    Add a Novel
                  </h3>
                  <p className={`text-sm font-medium ${subTextThemeColors[theme]}`}>
                    Share your favorite book with the community
                  </p>
                </div>
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/20 ${buttonThemeColors[theme]}`}
              onClick={() => HandleSelect("quotes")}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl bg-white/10 transition-transform group-hover:scale-110 ${textThemeColors[theme]}`}
                >
                  <Quote className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-lg font-semibold mb-1 ${textThemeColors[theme]}`}
                  >
                    Add a Quote
                  </h3>
                  <p className={`text-sm ${subTextThemeColors[theme]}`}>
                    Inspire others with meaningful words
                  </p>
                </div>
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceModal;
