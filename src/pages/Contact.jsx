import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

export function Contact() {
  const { language } = useStore();
  const t = translations[language].contact;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-8">{t.title}</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mb-8">{t.subtitle}</p>
      <form className="max-w-xl flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            {t.name}
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            {t.email}
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            {t.message}
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white transition-all hover:bg-blue-600 mt-2"
        >
          {t.send}
        </button>
      </form>
    </div>
  );
}
