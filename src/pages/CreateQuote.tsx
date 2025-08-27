import { Plus, Quote, Save, Sparkles, Tag, User } from "lucide-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useThemeStore } from "../store/ThemeStore";

interface QuoteFormData {
  quote: string;
  author: string;
  category: string;
  tags: string[];
}

const AddQuotePage: React.FC = () => {
    const {
    theme,
    bgThemeColors,
    cardThemeColors,
    textThemeColors,
    subTextThemeColors,
    buttonThemeColors,
  } = useThemeStore();
  const [formData, setFormData] = useState<QuoteFormData>({
    quote: "",
    author: "",
    category: "",
    tags: [],
  });
  const [tagInput, setTagInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Inspirational",
    "Motivational",
    "Life",
    "Love",
    "Success",
    "Wisdom",
    "Happiness",
    "Philosophy",
    "Leadership",
    "Creativity",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Quote submitted:", formData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className={`min-h-screen ${bgThemeColors[theme]}`}>
  <Navbar/>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Quote Input */}
          <div
            className={`rounded-2xl p-8 shadow-sm border border-gray-700 ${cardThemeColors[theme]}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-5 h-5 text-indigo-500" />
              <h2 className={`text-xl font-semibold ${textThemeColors[theme]}`}>
                The Quote
              </h2>
            </div>

            <div className="relative">
              <textarea
                name="quote"
                value={formData.quote}
                onChange={handleInputChange}
                placeholder="Enter the quote here..."
                rows={6}
                className={`w-full px-4 py-4 rounded-xl focus:border-blue-400 focus:outline-none transition-all resize-none text-lg leading-relaxed ${bgThemeColors[theme]} ${textThemeColors[theme]} border border-gray-700`}
                required
              />
              <div
                className={`absolute bottom-3 right-3 text-sm ${subTextThemeColors[theme]}`}
              >
                {formData.quote.length}/500
              </div>
            </div>
          </div>

          {/* Author & Category */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Author */}
            <div
              className={`rounded-2xl p-6 shadow-sm border border-gray-700 ${cardThemeColors[theme]}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-purple-500" />
                <h3
                  className={`text-lg font-semibold ${textThemeColors[theme]}`}
                >
                  Author
                </h3>
              </div>

              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Author name"
                className={`w-full px-4 py-3 rounded-2xl focus:border-blue-400  focus:outline-none transition-all border border-gray-700 ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
                required
              />
            </div>

            {/* Category */}
            <div
              className={`rounded-2xl p-6 shadow-sm border border-gray-700 ${cardThemeColors[theme]}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Tag className="w-5 h-5 text-emerald-500" />
                <h3
                  className={`text-lg font-semibold ${textThemeColors[theme]}`}
                >
                  Category
                </h3>
              </div>

              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl focus:border-blue-400 focus:outline-none transition-all border border-gray-700 ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tags */}
          <div
            className={`rounded-2xl p-6 shadow-sm border border-gray-700 ${cardThemeColors[theme]}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-5 h-5 text-orange-500" />
              <h3 className={`text-lg font-semibold ${textThemeColors[theme]}`}>
                Tags
              </h3>
              <span className={`text-sm ${subTextThemeColors[theme]}`}>
                (Optional)
              </span>
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addTag())
                }
                placeholder="Add a tag..."
                className={`flex-1 px-4 py-3 rounded-2xl focus:border-blue-400 focus:outline-none transition-all border border-gray-700 ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
              />
              <button
                type="button"
                onClick={addTag}
                className={`px-4 py-2 rounded-2xl flex justify-center items-center gap-2  font-medium ${buttonThemeColors[theme]}`}
              >
               <Plus size={20}/> Add
              </button>
            </div>

            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border border-gray-700 ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold hover:opacity-80"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${buttonThemeColors[theme]}`}
            >
              <Save className="w-5 h-5" />
              {isSubmitting ? "Saving Quote..." : "Save Quote"}
            </button>
          </div>
        </form>

        {/* Preview Card */}
        {formData.quote && (
          <div className="mt-12">
            <h3
              className={`text-xl font-semibold mb-4 flex items-center gap-2 ${textThemeColors[theme]}`}
            >
              <Sparkles className="w-5 h-5 text-indigo-500" />
              Preview
            </h3>

            <div
              className={`rounded-2xl p-8 relative overflow-hidden ${bgThemeColors[theme]}`}
            >
              <div className="relative z-10">
                <Quote className="w-8 h-8 mb-4 opacity-80" />
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  "{formData.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <cite className="text-lg opacity-90">
                    — {formData.author || "Unknown Author"}
                  </cite>
                  {formData.category && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium border border-gray-700">
                      {formData.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddQuotePage;
