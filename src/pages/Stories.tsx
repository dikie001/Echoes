import {
  Bookmark,
  BookOpen,
  Clock,
  Eye,
  Filter,
  Heart,
  User,
} from "lucide-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../global.css";
import { useThemeStore } from "../store/ThemeStore";

const StoriesPage: React.FC = () => {
  const {
    theme,
    bgThemeColors,
    cardThemeColors,
    textThemeColors,
    subTextThemeColors,
    buttonThemeColors,
  } = useThemeStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const categories = [
    "all",
    "fantasy",
    "mystery",
    "romance",
    "thriller",
    "sci-fi",
    "drama",
  ];

  const stories = [
    {
      id: 1,
      title: "The Whispers of Elderwood",
      author: "Sarah Chen",
      excerpt:
        "In the heart of the ancient forest, where shadows dance with secrets and the trees remember every soul who has walked beneath their boughs, Maya discovered that some stories are written in the language of the wind...",
      category: "fantasy",
      readTime: "25 min",
      words: 4200,
      views: 1847,
      likes: 234,
      bookmarks: 89,
      publishedDate: "2024-03-15",
      tags: ["magic", "forest", "adventure"],
      isBookmarked: false,
      isLiked: false,
    },
    {
      id: 2,
      title: "Digital Ghosts",
      author: "Marcus Rivera",
      excerpt:
        "When Elena inherited her grandmother's old computer, she never expected to find messages from someone who had been dead for twenty years. The cursor blinked steadily as words appeared on the screen, telling a story that shouldn't exist...",
      category: "mystery",
      readTime: "18 min",
      words: 3100,
      views: 2156,
      likes: 298,
      bookmarks: 156,
      publishedDate: "2024-03-12",
      tags: ["supernatural", "technology", "family"],
      isBookmarked: true,
      isLiked: false,
    },
  ];

  const borderColor = theme === "light" ? "border-gray-200" : "border-white/10";
  const chipBase =
    theme === "light"
      ? "bg-gray-200 text-gray-800"
      : "bg-white/5 text-gray-300";
  const tagBase =
    theme === "light"
      ? "bg-gray-100 text-gray-800"
      : "bg-white/5 text-gray-300";

  // Handle category selection
  const handleCategory = (params: string) => {
    setActiveCategory(params);
    console.log(params);
  };

  return (
    <div className={`min-h-screen ${bgThemeColors[theme]}`}>
      <Navbar />

      {/* Categories (static chips) */}
      <section className={` ${borderColor} px-4 py-4 pt-20 `}>
        <div
          className={`scrollbar scrollbar-${theme} max-w-7xl mx-auto flex items-center space-x-3 overflow-x-auto`}
        >
          <Filter
            size={20}
            className={`${subTextThemeColors[theme]} mr-2 flex-shrink-0`}
          />{" "}
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <span
                key={category}
                onClick={() => handleCategory(category)}
                className={`${isActive && "ring-2 "} px-4 py-2 cursor-pointer shadow-lg rounded-xl text-sm font-medium whitespace-nowrap ${chipBase}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            );
          })}
        </div>
      </section>

      {/* Stories Grid */}
      <main className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {stories.map((story) => (
            <article
              key={story.id}
              className={`${cardThemeColors[theme]} rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group`}
            >
              {/* Story Header */}
              <div className={`p-6 border-b ${borderColor}`}>
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      story.category === "fantasy"
                        ? "bg-purple-900/30 text-purple-300"
                        : story.category === "mystery"
                        ? "bg-red-900/30 text-red-300"
                        : story.category === "romance"
                        ? "bg-pink-900/30 text-pink-300"
                        : story.category === "thriller"
                        ? "bg-orange-900/30 text-orange-300"
                        : story.category === "sci-fi"
                        ? "bg-blue-900/30 text-blue-300"
                        : "bg-green-900/30 text-green-300"
                    }`}
                  >
                    {story.category}
                  </span>

                  <div className="flex items-center space-x-2">
                    <div
                      className={
                        story.isLiked
                          ? "text-red-400"
                          : subTextThemeColors[theme]
                      }
                    >
                      <Heart size={18} />
                    </div>
                    <div
                      className={
                        story.isBookmarked
                          ? "text-blue-400"
                          : subTextThemeColors[theme]
                      }
                    >
                      <Bookmark size={18} />
                    </div>
                  </div>
                </div>

                <h2
                  className={`${textThemeColors[theme]} text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors`}
                >
                  {story.title}
                </h2>

                <div
                  className={`flex items-center ${subTextThemeColors[theme]} text-sm mb-4`}
                >
                  <User size={14} className="mr-1" />
                  <span className="mr-4">{story.author}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{story.readTime}</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <p
                  className={`${subTextThemeColors[theme]} leading-relaxed mb-4 line-clamp-4`}
                >
                  {story.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${tagBase} px-2 py-1 rounded-lg text-xs`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div
                  className={`flex items-center justify-between text-sm ${subTextThemeColors[theme]} border-t ${borderColor} pt-4`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {story.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {story.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <BookOpen size={14} className="mr-1" />
                      {story.words.toLocaleString()} words
                    </span>
                  </div>
                  <span>
                    {new Date(story.publishedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More (static) */}
        <div className="text-center mt-12">
          <button
            className={`${buttonThemeColors[theme]} px-8 py-3 rounded-2xl font-medium transition-colors`}
          >
            Load More Stories
          </button>
        </div>
      </main>
    </div>
  );
};

export default StoriesPage;
