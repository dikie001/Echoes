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
  // THEME
  theme: Theme;
  setTheme: (theme: Theme) => void;
  bgThemeColors: Record<Theme, string>; // mapping of theme
  textThemeColors: Record<Theme, string>;
  navbarText: string;
  setNavbarText: (navbarText: string) => void;
  cardThemeColors: Record<Theme, string>;
  buttonThemeColors: Record<Theme, string>;
  subTextThemeColors: Record<Theme, string>;

  // STATE
  choice: string;
  setChoice: (choice: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  // THEME
  theme: "dark", // default
  setTheme: (theme) => set({ theme }),

  // NAVBAR TEXT
  navbarText: "Echoes",
  setNavbarText: (navbarText) => set({ navbarText }),

  // STATE 
  choice: "",
  setChoice: (choice) => set({ choice }),

  //BG THEME COLORS
  bgThemeColors: {
    light: "bg-white text-black",
    dark: "bg-black text-white",
    fancy:
      " bg-gradient-to-bl from-cyan-600 via-purple-700 to-blue-600 text-white",
    solarized: "bg-teal-950 text-slate-600", // dark teal + muted text
    cyberpunk: "bg-gray-950 text-fuchsia-500", // near black + neon purple
    forest: "bg-green-950 text-lime-400", // deep green + lime text
    ocean: "bg-blue-950 text-cyan-300", // navy + cyan text
    dracula: "bg-zinc-900 text-purple-300", // dark gray + soft purple
  },
  //TEXT THEME COLORS
  textThemeColors: {
    light: "black",
    dark: "white",
    fancy: "white",
    solarized: "#657b83",
    cyberpunk: "#ff00ff",
    forest: "#9acd32",
    ocean: "#7fdbff",
    dracula: "#bd93f9",
  },

  // SUBTEXT THEME COLORS
  subTextThemeColors: {
    light: "text-gray-600", // softer black
    dark: "text-gray-300", // softer white
    fancy: "text-gray-200", // muted white
    solarized: "text-slate-400", // muted solarized tone
    cyberpunk: "text-pink-400", // softer neon
    forest: "text-lime-400", // softer lime
    ocean: "text-cyan-300", // softer cyan
    dracula: "text-purple-400", // softer purple
  },

  // CARD THEME COLORS
  cardThemeColors: {
    light: "bg-gray-100 text-black shadow-lg",
    dark: "bg-zinc-900 text-white shadow-lg",
    fancy:
      "bg-gradient-to-tr from-purple-700 via-blue-600 to-cyan-600 text-white shadow-xl",
    solarized: "bg-teal-900 text-slate-200 shadow-md",
    cyberpunk:
      "bg-black text-fuchsia-400 border border-fuchsia-600 shadow-fuchsia-800/40 shadow-lg",
    forest: "bg-[#043d1d] text-lime-300 shadow-lg",
    ocean: "bg-blue-900 text-cyan-200 shadow-lg",
    dracula: "bg-zinc-800 text-purple-200 shadow-lg",
  },

  // BUTTON THEME COLORS
  buttonThemeColors: {
    light:
      "bg-white text-black border border-gray-300 hover:bg-gray-100 active:scale-95",
    dark: "bg-black text-white border border-gray-700 hover:bg-zinc-800 active:scale-95",
    fancy:
      "bg-gradient-to-r from-cyan-600 via-purple-700 to-blue-600 text-white hover:opacity-90 active:scale-95",
    solarized:
      "bg-teal-950 text-slate-200 border border-slate-600 hover:bg-teal-900 active:scale-95",
    cyberpunk:
      "bg-fuchsia-700 text-black border border-fuchsia-400 hover:bg-fuchsia-600 active:scale-95 active:shadow-[0_0_10px_#f0f] transition",
    forest:
      "bg-green-950 text-lime-300 border border-lime-600 hover:bg-green-900 active:scale-95",
    ocean:
      "bg-blue-950 text-cyan-200 border border-cyan-500 hover:bg-blue-900 active:scale-95",
    dracula:
      "bg-zinc-900 text-purple-300 border border-purple-500 hover:bg-zinc-800 active:scale-95",
  },
}));
