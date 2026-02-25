import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X, Moon, Sun } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function Navbar() {
  const {
    isDarkMode,
    toggleDarkMode,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    language,
    toggleLanguage,
  } = useStore();
  const location = useLocation();
  const t = translations[language].nav;

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `text-sm font-medium leading-normal transition-colors ${
      isActive(path)
        ? 'text-primary'
        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary">
              <Terminal size={20} />
            </div>
            <h1 className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.brand}
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClass('/')}>{t.home}</Link>
            <Link to="/projects" className={linkClass('/projects')}>{t.projects}</Link>
            <Link to="/about" className={linkClass('/about')}>{t.about}</Link>
            <Link to="/contact" className={linkClass('/contact')}>{t.contact}</Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <span className={language === 'en' ? 'text-primary' : 'text-slate-400'}>EN</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className={language === 'es' ? 'text-primary' : 'text-slate-400'}>ES</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="hidden md:inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
              {t.hireMe}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary bg-slate-50 dark:bg-slate-800/50' : 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
              onClick={closeMobileMenu}
            >
              {t.home}
            </Link>
            <Link
              to="/projects"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projects') ? 'text-primary bg-slate-50 dark:bg-slate-800/50' : 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
              onClick={closeMobileMenu}
            >
              {t.projects}
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-primary bg-slate-50 dark:bg-slate-800/50' : 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
              onClick={closeMobileMenu}
            >
              {t.about}
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-primary bg-slate-50 dark:bg-slate-800/50' : 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
              onClick={closeMobileMenu}
            >
              {t.contact}
            </Link>
            <button className="w-full mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-blue-600">
              {t.hireMe}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
