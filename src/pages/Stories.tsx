import React from "react";
import {
  Filter,
  BookOpen,
  Clock,
  User,
  Heart,
  Bookmark,
  ArrowLeft,
  Eye,
} from "lucide-react";
import { useThemeStore } from "../store/ThemeStore";
import Navbar from "../components/Navbar";
import "../global.css";

const StoriesPage: React.FC = () => {
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
    {
      id: 3,
      title: "The Art of Letting Go",
      author: "Amelia Foster",
      excerpt:
        "Coffee shops have a way of holding onto memories. Emma sat in the same corner booth where she'd spent countless hours with David, watching steam rise from her cup like the ghosts of conversations past...",
      category: "romance",
      readTime: "12 min",
      words: 2400,
      views: 3421,
      likes: 567,
      bookmarks: 203,
      publishedDate: "2024-03-10",
      tags: ["love", "heartbreak", "healing"],
      isBookmarked: false,
      isLiked: true,
    },
    {
      id: 4,
      title: "Project Mindbridge",
      author: "Dr. Alex Kim",
      excerpt:
        "The neural interface was supposed to revolutionize human communication. Instead, it opened a door to something that had been waiting in the spaces between thoughts, something that understood the human mind better than humans themselves...",
      category: "sci-fi",
      readTime: "35 min",
      words: 6800,
      views: 1234,
      likes: 445,
      bookmarks: 267,
      publishedDate: "2024-03-08",
      tags: ["AI", "consciousness", "future"],
      isBookmarked: true,
      isLiked: true,
    },
    {
      id: 5,
      title: "The Night Shift",
      author: "Jamie Torres",
      excerpt:
        "Security guard wasn't supposed to be a dangerous job. But when the cameras started showing things that weren't there during the day, and the elevator began stopping at floors that didn't exist, Thomas realized his building harbored secrets worth killing for...",
      category: "thriller",
      readTime: "28 min",
      words: 4900,
      views: 1987,
      likes: 387,
      bookmarks: 145,
      publishedDate: "2024-03-05",
      tags: ["suspense", "corporate", "paranormal"],
      isBookmarked: false,
      isLiked: false,
    },
    {
      id: 6,
      title: "Letters to Tomorrow",
      author: "Isabella Santos",
      excerpt:
        "Every year on her birthday, Grandma Rose had written a letter to her future self. Now, at ninety-three, she was finally ready to read them all. Each envelope held a different woman's dreams, fears, and hopes across decades of living...",
      category: "drama",
      readTime: "22 min",
      words: 3800,
      views: 2876,
      likes: 723,
      bookmarks: 412,
      publishedDate: "2024-03-02",
      tags: ["family", "aging", "wisdom"],
      isBookmarked: true,
      isLiked: true,
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

  return (
    <div className={`min-h-screen ${bgThemeColors[theme]}`}>
      <Navbar />

      {/* Categories (static chips) */}
      <section className={` ${borderColor} px-4 py-4 pt-24 `}>
        <div
          className={`scrollbar scrollbar-${theme} max-w-7xl mx-auto flex items-center space-x-3 overflow-x-auto`}
        >
          <Filter
            size={20}
            className={`${subTextThemeColors[theme]} mr-2 flex-shrink-0`}
          />{" "}
          {categories.map((c) => (
            <span
              key={c}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${chipBase}`}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </span>
          ))}
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
