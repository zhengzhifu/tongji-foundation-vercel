import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const toggleLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language || 'en';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-tf-border'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="container-tf h-16 flex items-center justify-between">
        {/* Logo + Text */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <img
            src="/images/logo.png"
            alt="Tongji Foundation"
            className={`h-10 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-150'}`}
          />
          <span
            className={`font-serif text-base md:text-lg font-semibold tracking-wide transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            TONGJI FOUNDATION
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className={`text-sm font-medium uppercase tracking-wider transition-colors hover:opacity-70 ${
              scrolled ? 'text-tf-text' : 'text-white'
            }`}
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection('programs')}
            className={`text-sm font-medium uppercase tracking-wider transition-colors hover:opacity-70 ${
              scrolled ? 'text-tf-text' : 'text-white'
            }`}
          >
            {t('nav.programs')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-sm font-medium uppercase tracking-wider transition-colors hover:opacity-70 ${
              scrolled ? 'text-tf-text' : 'text-white'
            }`}
          >
            {t('nav.contact')}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={() => toggleLang('en')}
              className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                currentLang.startsWith('en')
                  ? 'bg-primary text-white'
                  : scrolled
                  ? 'text-tf-text hover:bg-gray-100'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {t('language.en')}
            </button>
            <button
              onClick={() => toggleLang('fr')}
              className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                currentLang.startsWith('fr')
                  ? 'bg-primary text-white'
                  : scrolled
                  ? 'text-tf-text hover:bg-gray-100'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {t('language.fr')}
            </button>
          </div>

          {/* Donate Button */}
          <a
            href="https://dons.fondationdefrance.org/tongji_foundation/~mon-don"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            {t('nav.donate')}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${scrolled ? 'text-tf-text' : 'text-white'}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-tf-border shadow-lg">
          <div className="container-tf py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-tf-text font-medium py-2"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-left text-tf-text font-medium py-2"
            >
              {t('nav.programs')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-tf-text font-medium py-2"
            >
              {t('nav.contact')}
            </button>
            <div className="flex items-center gap-2 py-2">
              <button
                onClick={() => toggleLang('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded ${
                  currentLang.startsWith('en')
                    ? 'bg-primary text-white'
                    : 'text-tf-text bg-gray-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => toggleLang('fr')}
                className={`px-3 py-1.5 text-sm font-medium rounded ${
                  currentLang.startsWith('fr')
                    ? 'bg-primary text-white'
                    : 'text-tf-text bg-gray-100'
                }`}
              >
                FR
              </button>
            </div>
            <a
              href="https://dons.fondationdefrance.org/tongji_foundation/~mon-don"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center text-sm mt-2"
            >
              {t('nav.donate')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
