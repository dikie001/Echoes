import {
  Bookmark,
  Copy,
  Filter,
  Heart,
  Quote,
  Share
} from "lucide-react";
import React from "react";
import Navbar from "../components/Navbar";
import "../global.css";
import { useThemeStore } from "../store/ThemeStore";

const QuotesPage: React.FC = () => {
  const {
    theme,
    bgThemeColors,
    cardThemeColors,
    textThemeColors,
    subTextThemeColors,
    buttonThemeColors,
  } = useThemeStore();

  const categories = [
    "all",
    "inspiration",
    "wisdom",
    "love",
    "success",
    "life",
    "philosophy",
  ];

  const quotes = [
    {
      id: 1,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "success",
      tags: ["work", "passion", "success"],
      likes: 1247,
      bookmarks: 523,
    },
    {
      id: 2,
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      category: "inspiration",
      tags: ["opportunity", "challenges", "growth"],
      likes: 892,
      bookmarks: 431,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      inspiration: "bg-blue-900/30 text-blue-300",
      wisdom: "bg-purple-900/30 text-purple-300",
      love: "bg-red-900/30 text-red-300",
      success: "bg-green-900/30 text-green-300",
      life: "bg-yellow-900/30 text-yellow-300",
      philosophy: "bg-indigo-900/30 text-indigo-300",
    };
    return colors[category] || "bg-gray-900/30 text-gray-300";
  };

  const borderColor = theme === "light" ? "border-gray-200" : "border-white/10";
  const chipBase =
    theme === "light"
      ? "bg-gray-200 text-gray-800"
      : "bg-white/5 text-gray-300";
  const tagBase =
    theme === "light"
      ? "bg-gray-100 text-gray-800"
      : "bg-white/5 text-gray-300";

  return (
    <div className={`min-h-screen ${bgThemeColors[theme]}`}>
      <Navbar />
   

      {/* Filters */}
      <section className={` ${borderColor} px-4 py-4 pt-22`}>
        <div className={`scrollbar scrollbar-${theme}  flex items-center space-x-2 max-w-7xl mx-auto overflow-x-auto`}>
          <Filter
            size={20}
            className={`${subTextThemeColors[theme]} mr-2 flex-shrink-0`}
          />
          {categories.map((category) => (
            <span
              key={category}
              className={`px-4 py-2 rounded-xl text-sm font-medium ${chipBase}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          ))}
        </div>
      </section>

      {/* Quotes */}
      <main className="max-w-7xl mx-auto px-4 py-2 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {quotes.map((quote) => (
          <article
            key={quote.id}
            className={`${cardThemeColors[theme]} rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all`}
          >
            <div className="flex items-start justify-between mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                  quote.category
                )}`}
              >
                {quote.category}
              </span>
              <div
                className={`flex items-center space-x-2 ${subTextThemeColors[theme]}`}
              >
                <Copy size={18} />
                <Share size={18} />
              </div>
            </div>

            <div className="mb-6">
              <Quote className="text-blue-400 mb-3" size={24} />
              <blockquote
                className={`${textThemeColors[theme]} leading-relaxed text-base mb-4`}
              >
                "{quote.text}"
              </blockquote>
              <div className="text-right">
                <cite
                  className={`${buttonThemeColors[theme]} font-medium not-italic`}
                >
                  — {quote.author}
                </cite>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {quote.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${tagBase} px-2 py-1 rounded-lg text-xs`}
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div
              className={`flex items-center justify-between border-t ${borderColor} pt-4 text-sm ${subTextThemeColors[theme]}`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Heart size={18} /> <span>{quote.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bookmark size={18} /> <span>{quote.bookmarks}</span>
                </div>
              </div>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </article>
        ))}
      </main>

      {/* Quote of the Day */}
      <aside
        className={`${cardThemeColors[theme]} border-t ${borderColor} px-4 py-8`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3
            className={`${textThemeColors[theme]} text-xl font-semibold mb-4`}
          >
            Quote of the Day
          </h3>
          <blockquote
            className={`${subTextThemeColors[theme]} text-2xl font-light mb-4 italic`}
          >
            "The journey of a thousand miles begins with one step."
          </blockquote>
          <cite
            className={`${buttonThemeColors[theme]} font-medium not-italic`}
          >
            — Lao Tzu
          </cite>
        </div>
      </aside>
    </div>
  );
};

export default QuotesPage;
