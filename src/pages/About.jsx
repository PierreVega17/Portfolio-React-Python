import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import { Download } from 'lucide-react';

function InfiniteCarousel({ skills, reverse = false, color = 'primary' }) {
  const doubled = [...skills, ...skills];

  const colorMap = {
    primary: 'bg-primary/5 border-primary/20',
    green:   'bg-green-500/5 border-green-500/20',
    purple:  'bg-purple-500/5 border-purple-500/20',
  };

  const getIconUrl = (icon) => {
    if (icon.startsWith('http')) return icon;
    // Devicon mapping
    const slugs = {
      react: 'react/react-original.svg',
      javascript: 'javascript/javascript-original.svg',
      tailwindcss: 'tailwindcss/tailwindcss-original.svg',
      html5: 'html5/html5-original.svg',
      css3: 'css3/css3-original.svg',
      redux: 'redux/redux-original.svg',
      bootstrap: 'bootstrap/bootstrap-original.svg',
      materialui: 'materialui/materialui-original.svg',
      vitejs: 'vitejs/vitejs-original.svg',
      nodejs: 'nodejs/nodejs-original.svg',
      python: 'python/python-original.svg',
      express: 'express/express-original.svg',
      django: 'django/django-plain.svg',
      postgresql: 'postgresql/postgresql-original.svg',
      mongodb: 'mongodb/mongodb-original.svg',
      graphql: 'graphql/graphql-plain.svg',
      sqlite: 'sqlite/sqlite-original.svg',
      docker: 'docker/docker-original.svg',
      git: 'git/git-original.svg',
      github: 'github/github-original.svg',
      amazonwebservices: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
      xampp: 'xampp/xampp-original.svg',
      api: 'https://v1.indevana.com/wp-content/uploads/2023/11/api-icon.png'
    };
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slugs[icon] || icon}`;
  };

  return (
    <div className="relative overflow-hidden w-full py-4 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent pointer-events-none" />

      <div
        className={`flex gap-6 w-max ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center gap-3 w-32 h-32 rounded-2xl border ${colorMap[color]} bg-white dark:bg-[#151e29] shrink-0 select-none transition-all hover:scale-110 hover:border-primary/50 shadow-sm`}
          >
            <div className="size-14 flex items-center justify-center p-1">
              <img 
                src={getIconUrl(skill.icon)} 
                alt={skill.name} 
                className="w-full h-full object-contain filter dark:brightness-110"
                onError={(e) => {
                  e.target.src = 'https://cdn-icons-png.flaticon.com/512/25/25231.png'; // fallback
                }}
              />
            </div>
            <span className="text-xs font-bold text-center leading-tight px-2 text-slate-600 dark:text-slate-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  const { language } = useStore();
  const t = translations[language].about;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto space-y-20">

      {/* ── Bio Section ─────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
              {t.role}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {t.title}
            </h1>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {t.bio1}
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {t.bio2}
          </p>

          <a
            href="/CV_Jean_Pierre_Galarreta.pdf"
            download="CV_Jean_Pierre_Galarreta.pdf"
            className="self-start inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            <Download size={18} />
            {language === 'en' ? 'Download CV' : 'Descargar CV'}
          </a>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: '2+', label: t.yearsExp },
            { value: '15+', label: t.projects },
            { value: '20+', label: t.technologies },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-[#151e29] border border-slate-200 dark:border-slate-800 text-center hover:border-primary/50 transition-colors"
            >
              <span className="font-display text-4xl font-black text-primary">{stat.value}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-2 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}

          {/* Full-width decorative card */}
          <div className="col-span-3 p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/5 border border-primary/20 dark:border-primary/20">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                JP
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">Jean Pierre Galarreta</p>
                <p className="text-xs text-primary">Fullstack Developer</p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                <span className="text-xs text-green-400 font-medium">
                  {language === 'en' ? 'Available' : 'Disponible'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Carousels ─────────────────────────────── */}
      <section>
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
          {t.skillsTitle}
        </h2>

        <div className="flex flex-col gap-8">

          {/* Frontend */}
          <div className="rounded-2xl bg-white dark:bg-[#151e29] border border-slate-200 dark:border-slate-800 p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-sm">🖥️</span>
              </div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white">{t.frontend}</h3>
            </div>
            <InfiniteCarousel skills={t.frontendSkills} color="primary" />
          </div>

          {/* Backend */}
          <div className="rounded-2xl bg-white dark:bg-[#151e29] border border-slate-200 dark:border-slate-800 p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <span className="text-sm">⚙️</span>
              </div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white">{t.backend}</h3>
            </div>
            <InfiniteCarousel skills={t.backendSkills} reverse color="green" />
          </div>

          {/* DevOps */}
          <div className="rounded-2xl bg-white dark:bg-[#151e29] border border-slate-200 dark:border-slate-800 p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <span className="text-sm">🚀</span>
              </div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white">{t.devops}</h3>
            </div>
            <InfiniteCarousel skills={t.devopsSkills} color="purple" />
          </div>

        </div>
      </section>

    </div>
  );
}
