import { create } from "zustand";

interface AppState {
  activeSection: string;
  isAsideOpen: boolean;
  theme: string;
  toggleTheme: (theme: string) => void;
  toggleAside: () => void;
  setActiveSection: (section: string) => void;
}

export const useAppState = create<AppState>((set) => ({
  activeSection: "pokemons",
  isAsideOpen: true,
  theme: "light",
  toggleTheme: (theme: string) => set({ theme }),
  toggleAside: () => set((state) => ({ isAsideOpen: !state.isAsideOpen })),
  setActiveSection: (section: string) => set({ activeSection: section }),
}));
