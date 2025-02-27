import { create } from "zustand";
import type { User } from "../../types/user";

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

interface AuthActions {
setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  setUser: (_user) => set({ user: _user, isLoggedIn: !!_user }),
  isLoggedIn: false,
}));