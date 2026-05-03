import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Award, BookOpen, Calculator, Video, ChevronUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Winner {
  name: string;
  institution: string;
  title: string;
  bio: string;
  photo: string;
  initials: string;
}

const winnersData: Record<string, Winner[]> = {
  '2025': [
    {
      name: 'Suliana Manley',
      institution: 'EPFL',
      title: '',
      bio: '',
      photo: '/images/suliana-manley.png',
      initials: 'SM',
    },
    {
      name: 'Ying Wang',
      institution: 'Tongji University',
      title: '',
      bio: '',
      photo: '/images/ying-wang.png',
      initials: 'YW',
    },
  ],
  '2024': [
    {
      name: 'Leonide Ylenia Randrianarisoa',
      institution: 'University of Toamasina, Madagascar',
      title: '',
      bio: '',
      photo: '/images/leonide-randrianarisoa.png',
      initials: 'LR',
    },
    {
      name: 'Xiuyun Liu',
      institution: 'Tianjin University',
      title: '',
      bio: '',
      photo: '/images/xiuyun-liu.png',
      initials: 'XL',
    },
  ],
  '2023': [
    {
      name: 'Xiaoying Zhuang',
      institution: 'Leibniz University Hannover & Tongji University',
      title: '',
      bio: '',
      photo: '/images/xiaoying-zhuang.png',
      initials: 'XZ',
    },
    {
      name: 'Patricia Crifo',
      institution: 'Ecole Polytechnique',
      title: '',
      bio: '',
      photo: '/images/patricia-crifo.png',
      initials: 'PC',
    },
  ],
};

const programs = [
  {
    key: 'qidiAward',
    icon: Award,
    hasWinners: true,
  },
  {
    key: 'ihes',
    icon: BookOpen,
    hasWinners: false,
  },
  {
    key: 'chern',
    icon: Award,
    hasWinners: false,
  },
  {
    key: 'idm',
    icon: Calculator,
    hasWinners: false,
  },
  {
    key: 'girlsMaths',
    icon: Video,
    hasWinners: false,
  },
];

export default function Programs() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();
  const [expandedProgram, setExpandedProgram] = useState<string | null>('qidiAward');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [expandedWinner, setExpandedWinner] = useState<string | null>(null);

  const toggleProgram = (key: string) => {
    setExpandedProgram(expandedProgram === key ? null : key);
  };

  const toggleWinner = (key: string) => {
    setExpandedWinner(expandedWinner === key ? null : key);
  };

  const years = ['2025', '2024', '2023'];
  const currentWinners = winnersData[selectedYear] || [];

  return (
    <section id="programs" className="section-padding bg-tf-bg-alt">
      <div className="container-tf">
        {/* Section Header */}
        <div ref={ref} className={`text-center mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-serif text-3xl md:text-4xl text-tf-text mb-2">
            {t('programs.title')}
          </h2>
          <p className="text-tf-text-secondary text-lg">{t('programs.subtitle')}</p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        {/* Programs List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isExpanded = expandedProgram === program.key;
            const isQidi = program.key === 'qidiAward';

            return (
              <motion.div
                key={program.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-card overflow-hidden"
              >
                {/* Program Header */}
                <button
                  onClick={() => toggleProgram(program.key)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-light rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg md:text-xl text-tf-text">
                      {t(`programs.${program.key}.title`)}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-tf-text-muted transition-transform flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-2">
                        <p className="text-tf-text-secondary leading-relaxed mb-4">
                          {t(`programs.${program.key}.description`)}
                        </p>

                        {/* Qidi Award Winners */}
                        {isQidi && (
                          <div className="mt-6">
                            {/* Year Selector */}
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-sm text-tf-text-muted font-medium">
                                {t('programs.qidiAward.yearLabel')}:
                              </span>
                              <div className="flex gap-1">
                                {years.map((year) => (
                                  <button
                                    key={year}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedYear(year);
                                      setExpandedWinner(null);
                                    }}
                                    className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                                      selectedYear === year
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-tf-text hover:bg-gray-200'
                                    }`}
                                  >
                                    {year}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Winners Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {currentWinners.map((winner, wIndex) => {
                                const winnerKey = `${selectedYear}-${winner.name}`;
                                const isWinnerExpanded = expandedWinner === winnerKey;
                                return (
                                  <motion.div
                                    key={winnerKey}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: wIndex * 0.1 }}
                                    className="bg-tf-bg-alt rounded-lg p-4"
                                  >
                                    <button
                                      onClick={() => toggleWinner(winnerKey)}
                                      className="w-full text-left"
                                    >
                                      <div className="flex gap-4">
                                        {/* Photo */}
                                        <div className="flex-shrink-0">
                                          <img
                                            src={winner.photo}
                                            alt={winner.name}
                                            className="w-20 h-24 md:w-24 md:h-28 object-cover rounded-lg"
                                            onError={(e) => {
                                              const target = e.target as HTMLImageElement;
                                              target.style.display = 'none';
                                            }}
                                          />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-serif text-base md:text-lg text-tf-text font-medium">
                                            {winner.name}
                                          </h4>
                                          {winner.institution && (
                                            <p className="text-sm text-primary font-medium mt-0.5">
                                              {winner.institution}
                                            </p>
                                          )}
                                          <div className="flex items-center gap-1 mt-2 text-tf-text-muted">
                                            <span className="text-xs">
                                              {isWinnerExpanded ? 'Show less' : 'Read more'}
                                            </span>
                                            {isWinnerExpanded ? (
                                              <ChevronUp className="w-3 h-3" />
                                            ) : (
                                              <ChevronDown className="w-3 h-3" />
                                            )}
                                          </div>
                                        </div>
                                      </div>

                                      {/* Expandable Bio */}
                                      <AnimatePresence>
                                        {isWinnerExpanded && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                          >
                                            <div className="pt-3 mt-3 border-t border-tf-border">
                                              <p className="text-sm text-tf-text-secondary leading-relaxed whitespace-pre-line">
                                                {t(`winners.${selectedYear}.winner${wIndex + 1}.bio`)}
                                              </p>
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </button>
                                  </motion.div>
                                );
                              })}
                            </div>

                            {/* Learn More Link for 2023 */}
                            {selectedYear === '2023' && (
                              <a
                                href="https://mp.weixin.qq.com/s/W8lbJXF45AJj2UHwJwXoOA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:underline"
                              >
                                {t('programs.qidiAward.learnMore')}
                                <ChevronDown className="w-4 h-4 -rotate-90" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
