import { ArrowRight, Code2, Database, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';


export function Home() {
  const { language } = useStore();
  const t = translations[language].home;

  return (
    <>
      {/* Hero Section */}
      <section className="relative tech-grid-bg min-h-[600px] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Decorative gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-center">
            <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t.badge}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {t.heroTitle1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                {t.heroTitle2}
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-center">
              {t.heroDesc}{' '}
              <span className="text-slate-900 dark:text-white font-semibold">React</span>,{' '}
              <span className="text-slate-900 dark:text-white font-semibold">Python</span>, and{' '}
              <span className="text-slate-900 dark:text-white font-semibold">Node.js</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center mt-4">
              <Link to="/projects" className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer">
                {t.cta1}
              </Link>
              <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-8 text-base font-bold text-slate-900 dark:text-white transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                {t.cta2}
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-center gap-6 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display text-slate-900 dark:text-white">2+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{t.yearsExp}</span>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display text-slate-900 dark:text-white">15+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{t.projects}</span>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display text-slate-900 dark:text-white">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{t.techStack}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack / Expertise Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">{t.expertiseTitle}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">{t.expertiseDesc}</p>
            </div>
            <button className="text-primary font-bold hover:underline inline-flex items-center gap-1">
              <Link className="cursor-pointer" to="/about">{t.viewResume}</Link>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group p-6 rounded-2xl bg-white dark:bg-[#151e29] border border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="size-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <LayoutTemplate size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">{t.frontend.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{t.frontend.desc}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300">React</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300">JavaScript</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300">Tailwind</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-2xl bg-white dark:bg-[#151e29] border border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="size-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">{t.backend.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{t.backend.desc}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300">Node.js</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300">Python</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300">Express</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-2xl bg-white dark:bg-[#151e29] border border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="size-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">{t.database.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{t.database.desc}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300">PostgreSQL</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300">MongoDB</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300">SQLite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-10 text-base font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-primary/25">
            {t.sayHello}
          </Link>
        </div>
      </section>
    </>
  );
}
