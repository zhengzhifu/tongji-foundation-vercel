import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-tf-footer text-white py-10 md:py-12">
      <div className="container-tf">
        <div className="flex flex-col items-center text-center">
          {/* Foundation Name */}
          <h3 className="font-serif text-xl md:text-2xl tracking-wider mb-4">
            TONGJI FOUNDATION
          </h3>

          {/* Address */}
          <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{t('footer.address')}</span>
          </div>

          {/* Hosted by */}
          <p className="text-white/60 text-sm mb-6">{t('footer.hosted')}</p>

          {/* Divider */}
          <div className="w-24 h-px bg-white/20 mb-6" />

          {/* Copyright */}
          <p className="text-white/50 text-xs">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
