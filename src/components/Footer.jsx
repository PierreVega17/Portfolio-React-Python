import { Terminal, Github, Linkedin } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function Footer() {
  const { language } = useStore();
  const t = translations[language].footer;

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d141c] py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded bg-primary/20 text-primary flex items-center justify-center">
            <Terminal size={14} />
          </div>
          <span className="font-display font-bold text-slate-900 dark:text-white">Jean Pierre Galarreta</span>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/PierreVega17" className="text-slate-500 hover:text-primary transition-colors" aria-label="GitHub"   target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jean-pierre-galarreta-vega/" className="text-slate-500 hover:text-primary transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Jean Pierre Galarreta. {t.rights}
        </p>
      </div>
    </footer>
  );
}
