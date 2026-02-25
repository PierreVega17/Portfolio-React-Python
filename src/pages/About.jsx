import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function About() {
  const { language } = useStore();
  const t = translations[language].about;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-8">{t.title}</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">{t.desc}</p>
    </div>
  );
}
