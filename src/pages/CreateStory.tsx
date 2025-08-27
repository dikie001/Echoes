import { BookOpen, Image, Link, Plus, Type, X } from "lucide-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useThemeStore } from "../store/ThemeStore";

const CreateStoryForm: React.FC = () => {
  const {
    theme,
    bgThemeColors,
    cardThemeColors,
    buttonThemeColors,
    textThemeColors,
    subTextThemeColors,
  } = useThemeStore();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    category: "fantasy",
    tags: [] as string[],
    readTime: "",
    coverImage: "",
    isPublished: false,
    allowComments: true,
  });

  const [currentTag, setCurrentTag] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const categories = [
    "fantasy",
    "mystery",
    "romance",
    "thriller",
    "sci-fi",
    "drama",
    "adventure",
    "horror",
    "comedy",
    "historical",
    "biography",
    "poetry",
  ];

  // Handle input change and update
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "content") {
      const words = (value as string)
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
      setWordCount(words.length);
    }
  };

  // Handle Tag Creation
  const addTag = () => {
    if (
      currentTag.trim() &&
      !formData.tags.includes(currentTag.trim().toLowerCase())
    ) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim().toLowerCase()],
      }));
      setCurrentTag("");
    }
  };

  // HAndle Tag Removal
  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className={`min-h-screen ${bgThemeColors[theme]} `}>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 ">
            <div className={`${cardThemeColors[theme]}   rounded-2xl p-6`}>
              <div
                className={`flex items-center space-x-4 text-sm ${subTextThemeColors[theme]} justify-end`}
              >
                <span className="flex items-center">
                  <Type className="mr-1" size={16} />
                  {wordCount} words
                </span>
              </div>
              <label
                className={`block ${subTextThemeColors[theme]} text-sm font-medium mb-3`}
              >
                Story Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className={`w-full px-4 py-3 rounded-2xl focus:border-blue-400  focus:outline-none transition-all border border-gray-700 ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
                placeholder="Enter your story title..."
              />
              <div className="flex items-center justify-between mb-3 ">
                <label
                  className={`${subTextThemeColors[theme]} text-sm font-medium mt-4`}
                >
                  Story Content
                </label>
              </div>
              <textarea
                value={formData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                className={`w-full border-gray-700  px-4 py-4 rounded-2xl border focus:border-blue-400  focus:outline-none resize-none transition-colors leading-relaxed ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
                rows={20}
                placeholder="Once upon a time..."
              />
              <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-700">
                <button className="p-2 hover:bg-opacity-20 rounded-lg transition-all">
                  <Type size={18} />
                </button>
                <button className="p-2 hover:bg-opacity-20 rounded-lg transition-all">
                  <Image size={18} />
                </button>
                <button className="p-2 hover:bg-opacity-20 rounded-lg transition-all">
                  <Link size={18} />
                </button>
                <div className="flex-1" />
                <span className={`text-xs ${subTextThemeColors[theme]}`}>
                  Tip: Use markdown for formatting
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className={`${cardThemeColors[theme]} p-6 rounded-2xl`}>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2 text-blue-400" size={20} />
                Story Details
              </h3>

              {/* Category */}
              <div className="mb-4">
                <label
                  className={`block ${subTextThemeColors[theme]} text-sm font-medium mb-2`}
                >
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className={`w-full px-4 py-3 rounded-2xl focus:border-blue-400  focus:outline-none transition-all border border-gray-700 ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <label
                  className={`block ${subTextThemeColors[theme]} text-sm font-medium mb-2`}
                >
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-xl text-sm flex items-center"
                    >
                      #{tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 hover:text-red-400"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`w-full px-4 py-3 rounded-l-2xl focus:border-blue-400  focus:outline-none transition-all border border-gray-700 ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
                    placeholder="Add a tag..."
                  />
                  <button
                    onClick={addTag}
                    className={`${buttonThemeColors[theme]} px-3 flex justify-center items-center gap-2 rounded-r-2xl`}
                  >
                    <Plus size={18} className={`${textThemeColors[theme]}`} />{" "}
                    Add
                  </button>
                </div>
              </div>

              {/* Excerpt */}
              <div className="mb-4">
                <label
                  className={`block ${subTextThemeColors[theme]} text-sm font-medium mb-2`}
                >
                  Excerpt (Optional)
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  className={`w-full px-4 py-3 rounded-2xl focus:border-blue-400  focus:outline-none transition-all border border-gray-700 resize-none ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
                  rows={3}
                  placeholder="Brief description of your story..."
                />
              </div>

              {/* Cover Image */}
              <div className="mb-6">
                <label
                  className={`block ${subTextThemeColors[theme]} text-sm font-medium mb-2`}
                >
                  Cover Image URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.coverImage}
                  onChange={(e) =>
                    handleInputChange("coverImage", e.target.value)
                  }
                  className={`w-full px-4 py-3 rounded-2xl focus:border-blue-400  focus:outline-none transition-all border border-gray-700 ${bgThemeColors[theme]} ${textThemeColors[theme]}`}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Preview */}
            <div className={`${cardThemeColors[theme]} p-6 rounded-2xl`}>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                Story Preview
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className={subTextThemeColors[theme]}>Word Count:</span>
                  <span className={textThemeColors[theme]}>{wordCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className={subTextThemeColors[theme]}>Category:</span>
                  <span className={`${textThemeColors[theme]} capitalize`}>
                    {formData.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={subTextThemeColors[theme]}>Tags:</span>
                  <span className={textThemeColors[theme]}>
                    {formData.tags.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={subTextThemeColors[theme]}>Status:</span>
                  <span
                    className={
                      formData.isPublished
                        ? "text-green-400"
                        : "text-yellow-400"
                    }
                  >
                    {formData.isPublished ? "Published" : "Draft"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStoryForm;
