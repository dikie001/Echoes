import { BookOpen, Heart, Quote } from "lucide-react";
import React from "react";
import Navbar from "../components/Navbar";
import { useThemeStore } from "../store/ThemeStore";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const {
    theme,
    bgThemeColors,
    cardThemeColors,
    textThemeColors,
    subTextThemeColors,
    buttonThemeColors,
  } = useThemeStore();
  const navigate = useNavigate();

  const featuredQuotes = [
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      text: "Life is what happens to you while you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
  ];

  const stories = [
    {
      title: "The Mountain's Echo",
      excerpt:
        "She stood at the edge of the cliff, her voice carrying across the vast canyon below. Each word returned to her transformed, carrying the weight of ancient wisdom...",
      readTime: "5 min read",
    },
    {
      title: "Digital Memories",
      excerpt:
        "In a world where memories could be stored like files, Sarah discovered that some echoes of the past were better left unheard...",
      readTime: "8 min read",
    },
    {
      title: "The Last Library",
      excerpt:
        "When books began to disappear from the world, Marcus became the keeper of stories, preserving them in the only place they could survive—human memory...",
      readTime: "12 min read",
    },
  ];

  return (
    <div className={`min-h-screen ${bgThemeColors[theme]}`}>
      <Navbar />

      {/* Hero Section */}
      <section className={`px-4 ${bgThemeColors[theme]}`}>
        <div className="max-w-4xl mx-auto text-center pt-20 md:pt-24">
          <p
            className={`${subTextThemeColors[theme]} text-xl md:text-2xl mb-6 max-w-2xl mx-auto`}
          >
            Discover, collect, and share the quotes and stories that resonate
            with your soul
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate("/stories")}
              className={`${buttonThemeColors[theme]} px-8 cursor-pointer py-4 rounded-2xl text-lg font-semibold shadow-lg transition-all`}
            >
              Explore Stories
            </button>
            <button
              onClick={() => navigate("/trivia")}
              className="bg-gray-600 hover:bg-gray-500 cursor-pointer text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Try Trivia
            </button>
          </div>
        </div>
      </section>

      {/* Featured Quotes Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${textThemeColors[theme]}`}
          >
            Featured Quotes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredQuotes.map((quote, index) => (
              <div
                key={index}
                className={`${cardThemeColors[theme]} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer`}
              >
                <Quote className="text-blue-400 mb-4" size={24} />
                <p className={`${subTextThemeColors[theme]} mb-4 italic`}>
                  "{quote.text}"
                </p>
                <p className="text-blue-400 text-sm font-medium">
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Preview Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${textThemeColors[theme]}`}
          >
            Latest Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`${cardThemeColors[theme]} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer`}
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="text-blue-400 mr-2" size={20} />
                  <span className={`${subTextThemeColors[theme]} text-sm`}>
                    {story.readTime}
                  </span>
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${textThemeColors[theme]}`}
                >
                  {story.title}
                </h3>
                <p className={`${subTextThemeColors[theme]} leading-relaxed`}>
                  {story.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Favorites Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${textThemeColors[theme]}`}
          >
            Your Favorites
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className={`${cardThemeColors[theme]} p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer`}
              >
                <Heart className="text-blue-400" size={32} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className={`${subTextThemeColors[theme]}`}>
              Start favoriting quotes and stories to see them here
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${cardThemeColors[theme]} border-t border-white/20 py-12 px-4`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Echoes</h3>
              <p className={`${subTextThemeColors[theme]}`}>
                © 2024 Echoes. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className={`${subTextThemeColors[theme]} hover:text-blue-300`}
              >
                Privacy
              </a>
              <a
                href="#"
                className={`${subTextThemeColors[theme]} hover:text-blue-300`}
              >
                Terms
              </a>
              <a
                href="#"
                className={`${subTextThemeColors[theme]} hover:text-blue-300`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
