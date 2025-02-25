import { create } from "zustand";
import type { User } from "../types/user";

interface AppState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  login: (_user) => set({ user: _user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
  isLoggedIn: false,
}));