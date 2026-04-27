import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[520px] md:h-[580px] flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Tongji Foundation"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white pb-16 px-4">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-tight mb-4 max-w-4xl mx-auto">
          {t('hero.title')}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() =>
          document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
