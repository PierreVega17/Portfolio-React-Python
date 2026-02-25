import { create } from 'zustand';

const initDarkMode = () => {
    const isDark = true; // default dark
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    return isDark;
};

export const useStore = create((set) => ({
    isDarkMode: initDarkMode(),
    toggleDarkMode: () =>
        set((state) => {
            const newMode = !state.isDarkMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return { isDarkMode: newMode };
        }),

    isMobileMenuOpen: false,
    toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    closeMobileMenu: () => set({ isMobileMenuOpen: false }),

    language: 'en',
    toggleLanguage: () =>
        set((state) => ({ language: state.language === 'en' ? 'es' : 'en' })),
}));
