import React, { useState } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Clock,
  User,
  Heart,
  Bookmark,
  ArrowLeft,
  Eye,
} from "lucide-react";

const StoriesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const categories = [
    "all",
    "fantasy",
    "mystery",
    "romance",
    "thriller",
    "sci-fi",
    "drama",
  ];
  const sortOptions = ["newest", "popular", "longest", "shortest"];

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

  const filteredStories = stories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button className="text-gray-300 hover:text-blue-300 mr-4 md:hidden">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-100">Stories</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search stories, authors, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-700 text-gray-100 pl-10 pr-4 py-2 rounded-xl border border-gray-600 focus:border-blue-400 focus:outline-none w-64 md:w-80"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
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

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-700 text-gray-100 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400 text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <article
              key={story.id}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              {/* Story Header */}
              <div className="p-6 border-b border-gray-700">
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
                    <button
                      className={`hover:scale-110 transition-transform ${
                        story.isLiked
                          ? "text-red-400"
                          : "text-gray-400 hover:text-red-400"
                      }`}
                    >
                      <Heart
                        size={18}
                        fill={story.isLiked ? "currentColor" : "none"}
                      />
                    </button>
                    <button
                      className={`hover:scale-110 transition-transform ${
                        story.isBookmarked
                          ? "text-blue-400"
                          : "text-gray-400 hover:text-blue-400"
                      }`}
                    >
                      <Bookmark
                        size={18}
                        fill={story.isBookmarked ? "currentColor" : "none"}
                      />
                    </button>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-300 transition-colors">
                  {story.title}
                </h2>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <User size={14} className="mr-1" />
                  <span className="mr-4">{story.author}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{story.readTime}</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed mb-4 line-clamp-4">
                  {story.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded-lg text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {story.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {story.likes}
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

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-8 py-3 rounded-2xl font-medium transition-colors">
            Load More Stories
          </button>
        </div>
      </main>
    </div>
  );
};

export default StoriesPage;
