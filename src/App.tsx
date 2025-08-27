import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "./auth/AuthPage";
import CreateStoryForm from "./pages/CreateStory";
import HomePage from "./pages/HomePage";
import QuotesPage from "./pages/Quotes";
import SettingsPage from "./pages/Settingsx";
import TriviaPage from "./pages/Trivia";
import { useEffect } from "react";
import { useThemeStore } from "./store/ThemeStore";

type Theme =
  | "light"
  | "dark"
  | "fancy"
  | "solarized"
  | "cyberpunk"
  | "forest"
  | "ocean"
  | "dracula";

const App = () => {
  const { setTheme } = useThemeStore();
  useEffect(() => {
    const currentTheme = localStorage.getItem("echoes-theme");
    if (currentTheme) {
      setTheme(currentTheme as Theme);
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/trivia" element={<TriviaPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/create-story" element={<CreateStoryForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
