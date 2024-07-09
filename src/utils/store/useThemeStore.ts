import { create } from 'zustand';

export interface ThemeStore {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Membuat store Zustand untuk tema
const useThemeStore = create<ThemeStore>((set) => {
  const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const initialTheme = storedTheme || 'light';

  return {
    theme: initialTheme,
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        return { theme: newTheme };
      }),
  };
});

export default useThemeStore;
