import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="section-padding bg-white"
    >
      <div
        ref={ref}
        className={`container-tf text-center scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Foundation Logo/Name */}
        <div className="mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-wider uppercase mb-2">
            Tongji Foundation
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-base md:text-lg text-tf-text leading-relaxed">
            <strong className="font-medium">{t('about.description1')}</strong>
          </p>

          <p className="text-base text-tf-text-secondary leading-relaxed">
            {t('about.description2')}
          </p>

          <p className="text-base text-tf-text-secondary leading-relaxed">
            {t('about.description3')}
          </p>
        </div>
      </div>
    </section>
  );
}
