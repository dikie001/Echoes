import React, { useState } from "react";
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
  Check,
} from "lucide-react";

interface QuoteData {
  id: number;
  text: string;
  author: string;
  category: string;
  tags: string[];
  likes: number;
  bookmarks: number;
  isLiked: boolean;
  isBookmarked: boolean;
  source?: string;
  addedDate: string;
}

const QuotesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [copiedQuoteId, setCopiedQuoteId] = useState<number | null>(null);

  const categories = [
    "all",
    "inspiration",
    "wisdom",
    "love",
    "success",
    "life",
    "philosophy",
  ];

  const quotes: QuoteData[] = [
    {
      id: 1,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "success",
      tags: ["work", "passion", "success"],
      likes: 1247,
      bookmarks: 523,
      isLiked: true,
      isBookmarked: false,
      source: "Stanford Commencement Speech, 2005",
      addedDate: "2024-03-15",
    },
    {
      id: 2,
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      category: "inspiration",
      tags: ["opportunity", "challenges", "growth"],
      likes: 892,
      bookmarks: 431,
      isLiked: false,
      isBookmarked: true,
      addedDate: "2024-03-14",
    },
    {
      id: 3,
      text: "Life is what happens to you while you're busy making other plans.",
      author: "John Lennon",
      category: "life",
      tags: ["life", "planning", "mindfulness"],
      likes: 2156,
      bookmarks: 876,
      isLiked: true,
      isBookmarked: true,
      source: "Beautiful Boy (Darling Boy)",
      addedDate: "2024-03-13",
    },
    {
      id: 4,
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
      category: "wisdom",
      tags: ["action", "timing", "wisdom"],
      likes: 1543,
      bookmarks: 692,
      isLiked: false,
      isBookmarked: false,
      addedDate: "2024-03-12",
    },
    {
      id: 5,
      text: "Love all, trust a few, do wrong to none.",
      author: "William Shakespeare",
      category: "love",
      tags: ["love", "trust", "compassion"],
      likes: 967,
      bookmarks: 384,
      isLiked: false,
      isBookmarked: true,
      source: "All's Well That Ends Well",
      addedDate: "2024-03-11",
    },
    {
      id: 6,
      text: "The unexamined life is not worth living.",
      author: "Socrates",
      category: "philosophy",
      tags: ["self-reflection", "wisdom", "philosophy"],
      likes: 1834,
      bookmarks: 945,
      isLiked: true,
      isBookmarked: false,
      addedDate: "2024-03-10",
    },
    {
      id: 7,
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
      category: "inspiration",
      tags: ["authenticity", "individuality", "self"],
      likes: 2341,
      bookmarks: 1123,
      isLiked: false,
      isBookmarked: false,
      addedDate: "2024-03-09",
    },
    {
      id: 8,
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "success",
      tags: ["persistence", "courage", "resilience"],
      likes: 1678,
      bookmarks: 734,
      isLiked: true,
      isBookmarked: true,
      addedDate: "2024-03-08",
    },
  ];

  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || quote.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyQuote = async (quote: QuoteData) => {
    try {
      await navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
      setCopiedQuoteId(quote.id);
      setTimeout(() => setCopiedQuoteId(null), 2000);
    } catch (err) {
      console.error("Failed to copy quote:", err);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      inspiration: "bg-blue-900/30 text-blue-300",
      wisdom: "bg-purple-900/30 text-purple-300",
      love: "bg-red-900/30 text-red-300",
      success: "bg-green-900/30 text-green-300",
      life: "bg-yellow-900/30 text-yellow-300",
      philosophy: "bg-indigo-900/30 text-indigo-300",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-900/30 text-gray-300"
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button className="text-gray-300 hover:text-blue-300 mr-4 md:hidden">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-100">Quotes</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all flex items-center">
              <Plus size={20} className="mr-2" />
              Add Quote
            </button>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search quotes, authors, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-700 text-gray-100 pl-10 pr-4 py-2 rounded-xl border border-gray-600 focus:border-blue-400 focus:outline-none w-64 md:w-80"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Filters & Controls */}
      <section className="bg-gray-800 border-b border-gray-700 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Categories */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Filter className="text-gray-400 mr-2 flex-shrink-0" size={20} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-2">
              <button className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 py-2 rounded-lg font-medium transition-all flex items-center">
                <Shuffle className="mr-2" size={18} />
                Random
              </button>
              <div className="flex bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "text-gray-300"
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Display */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}
        >
          {filteredQuotes.map((quote) => (
            <article
              key={quote.id}
              className={`bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all group ${
                viewMode === "list" ? "p-8" : "p-6"
              }`}
            >
              {/* Quote Header */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                    quote.category
                  )}`}
                >
                  {quote.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleCopyQuote(quote)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    title="Copy quote"
                  >
                    {copiedQuoteId === quote.id ? (
                      <Check size={18} />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                  <button
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    title="Share"
                  >
                    <Share size={18} />
                  </button>
                </div>
              </div>

              {/* Quote Content */}
              <div className="mb-6">
                <Quote className="text-blue-400 mb-3" size={24} />
                <blockquote
                  className={`text-gray-200 leading-relaxed mb-4 ${
                    viewMode === "list" ? "text-lg" : "text-base"
                  }`}
                >
                  "{quote.text}"
                </blockquote>
                <div className="text-right">
                  <cite className="text-blue-400 font-medium not-italic">
                    — {quote.author}
                  </cite>
                  {quote.source && (
                    <p className="text-gray-400 text-sm mt-1">{quote.source}</p>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {quote.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded-lg text-xs hover:bg-gray-600 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Quote Actions & Stats */}
              <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                <div className="flex items-center space-x-4">
                  <button
                    className={`flex items-center space-x-1 transition-colors ${
                      quote.isLiked
                        ? "text-red-400"
                        : "text-gray-400 hover:text-red-400"
                    }`}
                  >
                    <Heart
                      size={18}
                      fill={quote.isLiked ? "currentColor" : "none"}
                    />
                    <span className="text-sm">{quote.likes}</span>
                  </button>
                  <button
                    className={`flex items-center space-x-1 transition-colors ${
                      quote.isBookmarked
                        ? "text-blue-400"
                        : "text-gray-400 hover:text-blue-400"
                    }`}
                  >
                    <Bookmark
                      size={18}
                      fill={quote.isBookmarked ? "currentColor" : "none"}
                    />
                    <span className="text-sm">{quote.bookmarks}</span>
                  </button>
                </div>
                <span className="text-gray-500 text-xs">
                  {new Date(quote.addedDate).toLocaleDateString()}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-8 py-3 rounded-2xl font-medium transition-colors">
            Load More Quotes
          </button>
        </div>
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
