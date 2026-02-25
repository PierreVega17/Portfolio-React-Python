import { Grid, Code2, Terminal, Database, LayoutTemplate, Eye, ExternalLink, Github, Mail } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';

const projectImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDoT55oyVQz917RV0TFnWlky8lVksNwmjQB7SRHjG3NryYCaw5ncSQXLdp-MTIRqKQu-jrzxN7PLfvzXkQwQdiQSN2a909hzNDf7DaXe0VD0Zd-ra0x9fQJSk14BZmGsHXrBfbHY2F9ypBqKNPMPrNHMPFo2PhYrKxEeKZ0QnjA5QNVz7Ir9MKwxm2iPJ9sHVeLWtJE6I0HoWrzub19r4o-yHzAwX5BNjlr5KXyrpoq6hzbpnCSS-arZMsZzC6qNFAJcQx9oYy6dhg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDmNrPFRkkOtdv6zdJxdtGwrdlTHH3w1aL40_SmzMJ2jGAtvvFS9e392_rkftN-0SiVxojpCWJlA8enOdCWf3v8kILNVF8ev5xxPHiCI2triO8-tpvSC7YzfbQ4fgbT7JVh7GqIlEydsS3OO5hKUzbhUicger7odBoAvQQVLidlASJDqIVuSykXmGZjWSvmy9KY9hHSOt_U_ePGbpg0ya9LXfTK8XRcyi653Z5Kx0dW0z-TxUVCMaYluU7hb0JjRjkM19fyiv33GFc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMAoCvTkVtaG3jQEPaoP32pB6Xte7HgNR4wRwE-YGQ9HYCGqQDUucyyCPI8px3qOFe7jp_8eVcM9TAly0Qa0yJZRvtEWKvt8ITnVLaT8incAJJKmXZQUMSI0vFirxQjq0HxHjvnpjbz48oO8KFAXIF9Ra0QSTwqBC3d3OCLuXX_mPZCLY_ngoQbYMBS6vRf7D08Aspce0lLt0dPGvjgV2osJh0Dm_UciIU-zi8-p7pJtQYKSSk6D9OBdYx0aWFpzmBHzjXps2JfHo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_4V3u93mECfWbYFgkwcHer7pE8GS-5CsN27zqUa-SlQYsSMjySTwuPvlGZWaL_RJ1gwILXeYFYnhrM1nAD9gd4iTKG3Jwv1D6J37GUa1cWh5hnjTTzrARCLhQEc3jwVTBlM_FO1iGE_HpuubpQRBhpS1U-Znmbn2VGhEJjdGP1eL6F33vnteufgAIkNddgE3fHAEkK57scncSaQP2DzaOMxfwsCBf8JPjDH4Wh9c_IhwfCb99pKm142iX1Q_BHmc9Uj4i1OMenEM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7eoE4pAop-6U3lB0ybOgaLFkVCn3PhHsd_-bAPhseDQSyVjg4aJaiqyKt5ihxg2_8z36119XViNIXr8-IuSP6WNNYAr6Ud5F8oigb38lonuncKBvrPFIDQvrwKO8qY930dx_LtHx7YGWp0xJ9NrSTRaVcG4qH1GB-MaT7SgutF9rsSm7AGrLM4zDiQ5QzhFD2PdKQaDRqqUTUi7rV56n1An53TR-8Lrgk_ose5byTWww-s3W1dFyD7SmH1KvC8S0lilCb1G7dyE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBFJh57ogEjBmWRtCnbduxi1p48UGPLeOczdx3lTGPWiKTk7-n_brkFMTp_SuzAUl0359R-DtjyjmU7XzN8KmmaWnGjNOXmZK3qXvGYms_NXGd43cx9tthV_JtIlIURuvtqRn1q_tGJ0ZCCiq8uZ0wVkncG56wHaIOjdythoJKFDfxCtBvBrDFzFTB9TkDQPJJSkZbN0ZIiCTSs_065n-RKcYcftM3d3WqdrO7VTpogziZR4Z69vqc5yGqWRnNuVxQ7vEbDFIBxZQs",
];

const projectTags = [
  ["React", "Redux", "MUI"],
  ["Node.js", "Express", "MongoDB"],
  ["Python", "Flask", "PostgreSQL"],
  ["React", "Next.js", "Tailwind"],
  ["D3.js", "React", "API"],
  ["Socket.io", "React", "Node"],
];

const projectIcons = [
  [<Code2 size={18} key="react" />, <Database size={18} key="db" />],
  [<Database size={18} key="node" />, <Database size={18} key="mongo" />],
  [<Terminal size={18} key="python" />, <Database size={18} key="sql" />],
  [<LayoutTemplate size={18} key="next" />, <LayoutTemplate size={18} key="tailwind" />],
  [<Code2 size={18} key="d3" />, <Code2 size={18} key="api" />],
  [<Terminal size={18} key="socket" />, <Database size={18} key="node" />],
];

export function Projects() {
  const { language } = useStore();
  const t = translations[language].projects;

  const projects = t.items.map((item, index) => ({
    ...item,
    image: projectImages[index],
    tags: projectTags[index],
    icons: projectIcons[index],
  }));

  return (
    <div className="flex flex-col gap-6 px-6 py-12 md:px-10 md:py-16 max-w-[1200px] mx-auto w-full">
      <div className="flex flex-col gap-3 max-w-3xl">
        <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
          {t.title}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-normal max-w-2xl">
          {t.subtitle}
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4 hover:opacity-90 transition-opacity">
          <Grid size={20} className="text-white" />
          <p className="text-white text-sm font-medium leading-normal">{t.all}</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 px-4 transition-colors group">
          <Code2 size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-primary" />
          <p className="text-slate-700 dark:text-slate-300 group-hover:text-primary text-sm font-medium leading-normal">React</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 px-4 transition-colors group">
          <Terminal size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-primary" />
          <p className="text-slate-700 dark:text-slate-300 group-hover:text-primary text-sm font-medium leading-normal">Python</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 px-4 transition-colors group">
          <Database size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-primary" />
          <p className="text-slate-700 dark:text-slate-300 group-hover:text-primary text-sm font-medium leading-normal">Node.js</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 px-4 transition-colors group">
          <LayoutTemplate size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-primary" />
          <p className="text-slate-700 dark:text-slate-300 group-hover:text-primary text-sm font-medium leading-normal">UI/UX</p>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {projects.map((project, index) => (
          <div key={index} className="group flex flex-col gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
            <div
              className="w-full aspect-video bg-cover bg-center rounded-lg overflow-hidden relative"
              style={{ backgroundImage: `url("${project.image}")` }}
            >
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/90" title="View Code">
                  <Code2 size={20} />
                </button>
                <button className="bg-white text-slate-900 p-2 rounded-full hover:bg-slate-100" title="Live Preview">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">{project.title}</h3>
                <div className="flex gap-1 text-primary">{project.icons}</div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm font-semibold">
                  <ExternalLink size={18} />
                  {t.liveDemo}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm font-semibold">
                  <Github size={18} />
                  {t.github}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="pt-12">
        <div className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-8 md:p-12 text-center border border-slate-200 dark:border-slate-700 shadow-xl">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {t.ctaTitle}
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
              {t.ctaDesc}
            </p>
          </div>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all hover:scale-105 shadow-lg shadow-primary/25">
            <Mail size={20} />
            <span className="truncate">{t.contactMe}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
