import React, { useState } from "react";
import {
  ArrowLeft,
  Save,
  Eye,
  Type,
  Hash,
  Clock,
  User,
  BookOpen,
  Plus,
  X,
  Image,
  Link,
} from "lucide-react";

const CreateStoryForm: React.FC = () => {
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
  const [previewMode, setPreviewMode] = useState(false);

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

  const estimateReadTime = (content: string) => {
    const words = content
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const readTimeMinutes = Math.max(1, Math.ceil(words / 200)); // 200 words per minute
    return `${readTimeMinutes} min read`;
  };

  const saveDraft = () => {
    console.log("Saving draft:", formData);
  };

  const publishStory = () => {
    console.log("Publishing story:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button className="text-gray-300 hover:text-blue-300 mr-4">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-100">
              Create New Story
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              {wordCount} words • {estimateReadTime(formData.content)}
            </div>
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 py-2 rounded-xl font-medium transition-all flex items-center"
            >
              <Eye className="mr-2" size={18} />
              Preview
            </button>
            <button
              onClick={saveDraft}
              className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 py-2 rounded-xl font-medium transition-all flex items-center"
            >
              <Save className="mr-2" size={18} />
              Save Draft
            </button>
            <button
              onClick={publishStory}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-all"
            >
              Publish
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Input */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <label className="block text-gray-300 text-sm font-medium mb-3">
                Story Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="w-full bg-gray-700 text-gray-100 px-4 py-3 rounded-xl border border-gray-600 focus:border-blue-400 focus:outline-none text-xl font-semibold transition-colors"
                placeholder="Enter your story title..."
              />
            </div>

            {/* Story Content */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <label className="text-gray-300 text-sm font-medium">
                  Story Content
                </label>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Type className="mr-1" size={16} />
                    {wordCount} words
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1" size={16} />
                    {estimateReadTime(formData.content)}
                  </span>
                </div>
              </div>
              <textarea
                value={formData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                className="w-full bg-gray-700 text-gray-100 px-4 py-4 rounded-xl border border-gray-600 focus:border-blue-400 focus:outline-none resize-none transition-colors leading-relaxed"
                rows={20}
                placeholder="Once upon a time..."
              />

              {/* Formatting Toolbar */}
              <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-700">
                <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-all">
                  <Type size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-all">
                  <Image size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-all">
                  <Link size={18} />
                </button>
                <div className="flex-1" />
                <span className="text-xs text-gray-500">
                  Tip: Use markdown for formatting
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Story Details */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2 text-blue-400" size={20} />
                Story Details
              </h3>

              {/* Category */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className="w-full bg-gray-700 text-gray-100 px-3 py-2 rounded-xl border border-gray-600 focus:border-blue-400 focus:outline-none"
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
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-lg text-sm flex items-center"
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
                    className="flex-1 bg-gray-700 text-gray-100 px-3 py-2 rounded-l-xl border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
                    placeholder="Add a tag..."
                  />
                  <button
                    onClick={addTag}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r-xl transition-all"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Excerpt */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Excerpt (Optional)
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  className="w-full bg-gray-700 text-gray-100 px-3 py-2 rounded-xl border border-gray-600 focus:border-blue-400 focus:outline-none text-sm resize-none"
                  rows={3}
                  placeholder="Brief description of your story..."
                />
              </div>

              {/* Cover Image */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Cover Image URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.coverImage}
                  onChange={(e) =>
                    handleInputChange("coverImage", e.target.value)
                  }
                  className="w-full bg-gray-700 text-gray-100 px-3 py-2 rounded-xl border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Publishing Options */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <User className="mr-2 text-blue-400" size={20} />
                Publishing Options
              </h3>

              {/* Publish Status */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.isPublished}
                    onChange={(e) =>
                      handleInputChange("isPublished", e.target.checked)
                    }
                    className="w-4 h-4 bg-gray-700 border border-gray-600 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="ml-2 text-gray-300 text-sm">
                    Publish immediately
                  </span>
                </label>
                <p className="text-gray-500 text-xs mt-1">
                  Story will be visible to all users
                </p>
              </div>

              {/* Comments */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.allowComments}
                    onChange={(e) =>
                      handleInputChange("allowComments", e.target.checked)
                    }
                    className="w-4 h-4 bg-gray-700 border border-gray-600 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="ml-2 text-gray-300 text-sm">
                    Allow comments
                  </span>
                </label>
                <p className="text-gray-500 text-xs mt-1">
                  Readers can leave feedback
                </p>
              </div>
            </div>

            {/* Story Stats Preview */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                Story Preview
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Word Count:</span>
                  <span className="text-gray-200">{wordCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Read Time:</span>
                  <span className="text-gray-200">
                    {estimateReadTime(formData.content)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-gray-200 capitalize">
                    {formData.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tags:</span>
                  <span className="text-gray-200">{formData.tags.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span
                    className={`${
                      formData.isPublished
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
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
