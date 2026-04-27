import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Donate() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-20 bg-primary-light">
      <div
        ref={ref}
        className={`container-tf text-center scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="font-serif text-2xl md:text-3xl text-tf-text mb-3">
          {t('donate.title')}
        </h2>
        <p className="text-tf-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
          {t('donate.description')}
        </p>
        <a
          href="https://dons.fondationdefrance.org/tongji_foundation/~mon-don"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary gap-2"
        >
          <Heart className="w-4 h-4" />
          {t('donate.button')}
        </a>
      </div>
    </section>
  );
}
