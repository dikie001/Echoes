import React from "react";
import {
  Search,
  Filter,
  Heart,
  Bookmark,
  Share,
  Copy,
  ArrowLeft,
  Quote,
  Shuffle,
  Plus,
} from "lucide-react";
import Navbar from "../components/Navbar";

const QuotesPage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <Navbar/>
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-2">
 
        <div className="max-w-7xl mx-auto relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search quotes, authors, tags..."
            className="bg-gray-700 text-gray-100 pl-10 pr-4 py-2 rounded-xl border border-gray-600 w-full md:w-80"
          />
        </div>
      </header>

      {/* Filters */}
      <section className="bg-gray-800 border-b border-gray-700 px-4 py-4">
        <div className="flex items-center space-x-2 max-w-7xl mx-auto overflow-x-auto">
          <Filter size={20} className="text-gray-400 mr-2 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Quotes */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {quotes.map((quote) => (
          <article
            key={quote.id}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                  quote.category
                )}`}
              >
                {quote.category}
              </span>
              <div className="flex items-center space-x-2 text-gray-400">
                <Copy size={18} />
                <Share size={18} />
              </div>
            </div>

            <div className="mb-6">
              <Quote className="text-blue-400 mb-3" size={24} />
              <blockquote className="text-gray-200 leading-relaxed text-base mb-4">
                "{quote.text}"
              </blockquote>
              <div className="text-right">
                <cite className="text-blue-400 font-medium not-italic">
                  — {quote.author}
                </cite>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {quote.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded-lg text-xs hover:bg-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-gray-700 pt-4 text-gray-400 text-sm">
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
      <aside className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-gray-700 px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Quote of the Day
          </h3>
          <blockquote className="text-2xl font-light text-gray-200 mb-4 italic">
            "The journey of a thousand miles begins with one step."
          </blockquote>
          <cite className="text-blue-400 font-medium">— Lao Tzu</cite>
        </div>
      </aside>
    </div>
  );
};

export default QuotesPage;
