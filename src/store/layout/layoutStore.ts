import { create } from 'zustand';

type LayoutState = {
  isSidebarOpen: boolean;
    toggleSidebar: () => void;
  setIsSidebarOpen: (isOpen: boolean) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setIsSidebarOpen: (isOpen: boolean) => set({ isSidebarOpen: isOpen })
}));