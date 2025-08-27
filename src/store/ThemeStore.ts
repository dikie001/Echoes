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

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  bgThemes: Record<Theme, string>; // mapping of theme → Tailwind classes
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark", // default
  setTheme: (theme) => set({ theme }),
  bgThemes: {
    light: "bg-white text-black",
    dark: "bg-gray-900 text-gray-100",
    fancy: "bg-fdf0ff text-[#8a2be2]",
    solarized: "bg-fdf6e3 text-[#657b83]",
    cyberpunk: "bg-[#0f0f1c] text-[#ff00ff]",
    forest: "bg-[#0b3d2e] text-[#9acd32]",
    ocean: "bg-[#001f3f] text-[#7fdbff]",
    dracula: "bg-[#282a36] text-[#bd93f9]",
  },
}));
