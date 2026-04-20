import { useRef, useState } from 'react';
import { Mail, Linkedin, MessageSquare, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../i18n/translations';
import emailjs from '@emailjs/browser';

export function Contact() {
  const { language } = useStore();
  const t = translations[language].contact;
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');

    // Keys from environment variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.init(PUBLIC_KEY);

    // Get data from the form
    const formData = new FormData(form.current);
    const templateParams = {
      name: formData.get('nombre'),     // To satisfy {{name}}
      nombre: formData.get('nombre'),   // To satisfy {{nombre}}
      email: formData.get('email'),     // To satisfy {{email}}
      title: formData.get('title'),     // To satisfy {{title}}
      mensaje: formData.get('mensaje'), // To satisfy {{mensaje}}
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((result) => {
        setFormState('success');
        e.target.reset();
        setTimeout(() => setFormState('idle'), 5000);
      }, (error) => {
        console.error('EmailJS Error:', error);
        setFormState('idle');
        const errorMsg = error?.text || error?.message || 'Check console for details';
        alert(`Error sending message: ${errorMsg}. Please check your EmailJS configuration.`);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="size-5" />,
      label: t.emailLabel,
      value: t.emailValue,
      link: `mailto:${t.emailValue}`,
      color: 'blue'
    },
    {
      icon: <Linkedin className="size-5" />,
      label: t.linkedinLabel,
      value: t.linkedinValue,
      link: `https://linkedin.com/in/${t.linkedinValue}`,
      color: 'blue'
    },
    {
      icon: <MessageCircle className="size-5" />,
      label: t.whatsappLabel,
      value: t.whatsappValue,
      link: `https://wa.me/51946375251`,
      color: 'green'
    },
    {
      icon: <MapPin className="size-5" />,
      label: t.locationLabel,
      value: t.locationValue,
      link: null,
      color: 'slate'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          {t.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white dark:bg-[#151e29] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-8">
              {t.infoTitle}
            </h2>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className={`mt-1 size-10 rounded-xl flex items-center justify-center transition-colors ${
                    info.color === 'blue' ? 'bg-primary/10 text-primary' : 
                    info.color === 'green' ? 'bg-green-500/10 text-green-500' : 
                    'bg-slate-500/10 text-slate-500'
                  }`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-900 dark:text-white font-medium hover:text-primary transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="mt-10 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <p className="text-sm font-semibold text-primary">
                {t.availabilityValue}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <form 
            ref={form}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#151e29] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
          >
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {t.formTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.nameLabel}
                </label>
                <input
                  required
                  name="nombre"
                  type="text"
                  placeholder={t.namePlaceholder}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.emailLabelField}
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {t.subjectLabel}
              </label>
              <input
                required
                name="title"
                type="text"
                placeholder={t.subjectPlaceholder}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {t.messageLabel}
              </label>
              <textarea
                required
                name="mensaje"
                rows={4}
                placeholder={t.messagePlaceholder}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState !== 'idle'}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
            >
              {formState === 'sending' ? (
                <>
                  <div className="size-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  {t.sendingButton}
                </>
              ) : formState === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  {t.successMessage}
                </>
              ) : (
                <>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {t.sendButton}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
