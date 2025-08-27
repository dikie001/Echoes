import {
  ArrowLeft,
  Bell,
  Download,
  LogOut,
  Moon,
  Trash2,
  User,
} from "lucide-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useThemeStore } from "../store/ThemeStore";

type Theme =
  | "light"
  | "dark"
  | "fancy"
  | "solarized"
  | "cyberpunk"
  | "forest"
  | "ocean"
  | "dracula";

const SettingsPage: React.FC = () => {
  const { theme, bgThemeColors, setTheme } = useThemeStore();
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState("medium");

  const SettingsThemes: Theme[] = [
    "light",
    "dark",
    "fancy",
    "solarized",
    "cyberpunk",
    "forest",
    "ocean",
    "dracula",
  ];

  return (
    <div className={`${bgThemeColors[theme]} min-h-screen`}>
      <Navbar />

      {/* Settings Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 pt-24">
        <div className="space-y-8">
          {/* Account Section */}
          <section className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <User className="text-blue-400 mr-3" size={24} />
              <h2 className="text-xl font-semibold text-gray-100">Account</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-gray-100 font-medium">Profile</p>
                  <p className="text-gray-400 text-sm">
                    Manage your profile information
                  </p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-t border-gray-700">
                <div>
                  <p className="text-gray-100 font-medium">Email</p>
                  <p className="text-gray-400 text-sm">user@example.com</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">
                  Change
                </button>
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <Moon className="text-blue-400 mr-3" size={24} />
              <h2 className="text-xl font-semibold text-gray-100">
                Preferences
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-t border-gray-700">
                <div>
                  <p className="text-gray-100 font-medium">Theme</p>
                  <p className="text-gray-400 text-sm">
                    Choose a theme that suits you
                  </p>
                </div>
                <select
                  value={theme}
                  onChange={(e) => {
                    setTheme(e.target.value as Theme);
                    localStorage.setItem("echoes-theme", e.target.value)
                  }}
                  className="bg-gray-700 outline-0 text-gray-100 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400"
                >
                  {SettingsThemes.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </div>
              {/* FONT SIZE */}
              <div className="flex items-center justify-between py-3 border-t border-gray-700">
                <div>
                  <p className="text-gray-100 font-medium">Font Size</p>
                  <p className="text-gray-400 text-sm">
                    Adjust text size for reading
                  </p>
                </div>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="bg-gray-700 outline-0 text-gray-100 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <Bell className="text-blue-400 mr-3" size={24} />
              <h2 className="text-xl font-semibold text-gray-100">
                Notifications
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-gray-100 font-medium">
                    Push Notifications
                  </p>
                  <p className="text-gray-400 text-sm">
                    Get notified about new quotes and stories
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notifications ? "bg-blue-600" : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                      notifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-t border-gray-700">
                <div>
                  <p className="text-gray-100 font-medium">Email Updates</p>
                  <p className="text-gray-400 text-sm">
                    Receive weekly digest emails
                  </p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">
                  Configure
                </button>
              </div>
            </div>
          </section>

          {/* Data Section */}
          <section className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <Download className="text-blue-400 mr-3" size={24} />
              <h2 className="text-xl font-semibold text-gray-100">Data</h2>
            </div>
            <div className="space-y-4">
              <button className="flex items-center justify-between w-full py-3 hover:bg-gray-700 rounded-lg px-3 transition-colors">
                <div className="text-left">
                  <p className="text-gray-100 font-medium">Export Data</p>
                  <p className="text-gray-400 text-sm">
                    Download your quotes and stories
                  </p>
                </div>
                <Download className="text-gray-400" size={20} />
              </button>
              <button className="flex items-center justify-between w-full py-3 hover:bg-red-900/20 rounded-lg px-3 transition-colors border-t border-gray-700">
                <div className="text-left">
                  <p className="text-red-400 font-medium">Clear All Data</p>
                  <p className="text-gray-400 text-sm">
                    Remove all saved content
                  </p>
                </div>
                <Trash2 className="text-red-400" size={20} />
              </button>
            </div>
          </section>

          {/* Account Actions */}
          <section className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <button className="flex items-center justify-between w-full py-3 hover:bg-red-900/20 rounded-lg px-3 transition-colors">
              <div className="text-left">
                <p className="text-red-400 font-medium">Sign Out</p>
                <p className="text-gray-400 text-sm">
                  Sign out of your account
                </p>
              </div>
              <LogOut className="text-red-400" size={20} />
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
