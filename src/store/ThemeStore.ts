import { create } from "zustand";

type Theme =
  | "light"
  | "dark"
  | "fancy"
  | "solarized"
  | "cyberpunk"
  | "forest"
  | "ocean"
  | "dracula";

type TextColorsTypes =
  | "light"
  | "dark"
  | "fancy"
  | "solarized"
  | "cyberpunk"
  | "forest"
  | "ocean"
  | "dracula";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  bgThemeColors: Record<Theme, string>; // mapping of theme 
  themeTextColors: Record<TextColorsTypes, string>;
  navbarText: string;
  setNavbarText: (navbarText: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  // THEME
  theme: "dark", // default
  setTheme: (theme) => set({ theme }),

  // NAVBAR TEXT
  navbarText: "Echoes",
  setNavbarText: (navbarText) => set({ navbarText }),

  //BG THEME COLORS
  bgThemeColors: {
    light: "bg-white text-black",
    dark: "bg-gray-900 text-gray-100",
    fancy: "bg-fdf0ff text-[#8a2be2]",
    solarized: "bg-fdf6e3 text-[#657b83]",
    cyberpunk: "bg-[#0f0f1c] text-[#ff00ff]",
    forest: "bg-[#0b3d2e] text-[#9acd32]",
    ocean: "bg-[#001f3f] text-[#7fdbff]",
    dracula: "bg-[#282a36] text-[#bd93f9]",
  },
  //TEXT THEME COLORS
  themeTextColors: {
    light: "#000000",
    dark: "#f5f5f5",
    fancy: "#8a2be2",
    solarized: "#657b83",
    cyberpunk: "#ff00ff",
    forest: "#9acd32",
    ocean: "#7fdbff",
    dracula: "#bd93f9",
  },
}));
