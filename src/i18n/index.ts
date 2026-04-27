import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About Us',
        programs: 'Programs',
        contact: 'Contact',
        donate: 'Donate Now',
      },
      hero: {
        title: 'Bridging France, Europe \u0026 China for a Sustainable Future',
        subtitle: 'Promoting cooperation in science, education, and culture',
      },
      about: {
        title: 'Tongji Foundation',
        description1: 'Tongji Foundation aims to promote cooperation between France (including French-speaking regions and countries), Europe, and China in areas where humanity faces a universal challenge.',
        description2: 'Tongji Foundation specifically supports projects addressing the challenges of global warming, energy transition, environmental protection, public health, food security, educational equality, and gender equality etc.',
        description3: 'It also seeks to encourage innovation and entrepreneurship and promote France\'s international influence in science and technology, education, and culture.',
      },
      programs: {
        title: 'Our Programs',
        subtitle: 'We Support',
        qidiAward: {
          title: 'Qidi Award',
          description: 'We help the Alumni of Tongji University in France and the Alumni of Tsinghua University in France to launch "Qidi Award" and support two outstanding female scientists and/or engineers with a prize of \u20ac5,000 per awardee since 2023.',
          yearLabel: 'Year',
          learnMore: 'Learn More',
        },
        ihes: {
          title: 'IHES',
          description: 'The Institut des Hautes \u00c9tudes Scientifiques (IHES) is an advanced research institute in mathematics, theoretical physics and all related sciences. We support IHES to host female scientists since 2022.',
        },
        chern: {
          title: 'Shiing-Shen Chern Young Faculty Award',
          description: 'The Shiing-Shen Chern Young Faculty Award was established in 2023 at Ecole Polytechnique as a targeted support program for outstanding early career teachers/researchers. We support this award to identify young high-potential researchers in mathematics and physics since 2023.',
        },
        idm: {
          title: 'Images des math\u00e9matiques',
          description: 'Images des Math\u00e9matiques (IdM) has existed since 2008 and is funded by the CNRS through Audimath. We support IdM\'s Concours BD project in order to make mathematics education more engaging and enjoyable for young people and children.',
        },
        girlsMaths: {
          title: 'Girls\' Maths Video Challenge',
          description: 'The Girls\' Maths Video Challenge is a global initiative launched by the European Girls\' Mathematical Olympiad (EGMO) 2026, dedicated to female high school students worldwide. We support this initiative to encourage young girls to engage with mathematics in a creative and inspiring way.',
        },
      },
      winners: {
        title: 'Winners',
        2025: {
          winner1: {
            name: 'Suliana Manley',
            institution: 'EPFL',
            title: 'Seeking the Light of Microscopy to Illuminate the Path to Healthy Lives',
            bio: 'Professor Suliana Manley is a leading international figure in the fields of experimental biophysics and high-resolution optical instrumentation development. She receives this honor for her breakthrough contributions to super-resolution microscopy imaging techniques.',
          },
          winner2: {
            name: 'Ying Wang',
            institution: 'Tongji University',
            title: 'Harnessing the Power of Electrochemistry for Pollution Reduction and Carbon Mitigation',
            bio: 'Professor Ying Wang is a pioneer in the field of sustainable electrochemical pollution control and efficient material transformation. Her research directly tackles the major global challenge of synergizing pollution reduction and carbon mitigation.',
          },
        },
        2024: {
          winner1: {
            name: 'L\u00e9onide Yl\u00e9nia Randrianarisoa',
            institution: 'University of Toamasina, Madagascar',
            title: 'Guardian of the Ocean, Champion of Sustainability',
            bio: 'Dr. Randrianarisoa leverages science to inform policy, advancing marine resource conservation and sustainable utilization. She pioneered an adaptive governance framework integrating oceanography, international law, and social sciences.',
          },
          winner2: {
            name: 'Xiuyun Liu',
            institution: 'Tianjin University',
            title: 'Pioneer in Medical-Engineering Innovation, Solving Brain Disease Challenges',
            bio: 'Dr. Liu merges neurocritical care and biomedical engineering to overcome bottlenecks in brain disease diagnosis and treatment. She developed rapid, precise hydrocephalus diagnostics using brain-computer interface technologies.',
          },
        },
        2023: {
          winner1: {
            name: 'Xiaoying Zhuang',
            institution: '',
            title: 'Computer-Aided Design of New Materials',
            bio: 'Prof. Xiaoying Zhuang is an outstanding representative of Chinese female scientists \u0026 engineers. She has contributed to the solution of challenging problems in engineering and materials science, especially the computer-aided design of new materials.',
          },
          winner2: {
            name: 'Patricia Crifo',
            institution: '\u00c9cole Polytechnique',
            title: 'Sustainable Finance and Climate Policy',
            bio: 'Professor Patricia Crifo is an expert in Corporate, Social and Environmental Responsibility (CSR), and Sustainable Cities and Energy Justice. She is the director of the Economics for Smart Cities and Climate Policy Master\'s program at \u00c9cole Polytechnique.',
          },
        },
      },
      contact: {
        title: 'Contact Us',
        lastName: 'Last name',
        firstName: 'First name',
        phone: 'Phone',
        email: 'Email',
        country: 'Country',
        city: 'City',
        message: 'Message',
        submit: 'Send Message',
        required: 'Required',
        success: 'Thank you for your message. We will get back to you soon.',
      },
      donate: {
        title: 'Support Our Mission',
        description: 'Your contribution helps us bridge science and education between France, Europe, and China.',
        button: 'Donate Now',
      },
      footer: {
        address: '40 avenue Hoche, 75008 Paris',
        copyright: '\u00a9 2026 Tongji Foundation. All rights reserved.',
        hosted: 'Abrit\u00e9e par la Fondation de France',
      },
      language: {
        en: 'EN',
        fr: 'FR',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        about: 'Qui sommes-nous',
        programs: 'Nos Projets',
        contact: 'Contactez-nous',
        donate: 'Faire un don',
      },
      hero: {
        title: 'Relier la France, l\'Europe \u0026 la Chine pour un avenir durable',
        subtitle: 'Promouvoir la coop\u00e9ration scientifique, \u00e9ducative et culturelle',
      },
      about: {
        title: 'Fondation Tongji',
        description1: 'La Fondation Tongji a pour objet de promouvoir la coop\u00e9ration entre la France (y compris les r\u00e9gions et les pays francophones), l\'Europe et la Chine dans les domaines o\u00f9 l\'humanit\u00e9 doit faire face \u00e0 un d\u00e9fi universel.',
        description2: 'La Fondation soutient plus particuli\u00e8rement des projets pour r\u00e9pondre aux enjeux du r\u00e9chauffement climatique, de la transition \u00e9nerg\u00e9tique, de la protection de l\'environnement, de la sant\u00e9 publique, de la s\u00e9curit\u00e9 alimentaire, de l\'\u00e9galit\u00e9 dans l\'\u00e9ducation, de l\'\u00e9galit\u00e9 homme-femme.',
        description3: 'Elle souhaite \u00e9galement encourager l\'innovation et l\'entrepreneuriat et promouvoir l\'influence de la France \u00e0 l\'international dans les sciences et technologies, l\'\u00e9ducation et la culture.',
      },
      programs: {
        title: 'Nos Projets',
        subtitle: 'Nous soutenons',
        qidiAward: {
          title: 'Qidi Award',
          description: 'Nous aidons les Alumni de l\'Universit\u00e9 Tongji en France et les Alumni de l\'Universit\u00e9 Tsinghua en France \u00e0 lancer le Qidi Award et soutenons, depuis 2023, deux femmes scientifiques et/ou ing\u00e9nieures d\'exception gr\u00e2ce \u00e0 une dotation de 5 000 \u20ac par laur\u00e9ate.',
          yearLabel: 'Ann\u00e9e',
          learnMore: 'En savoir plus',
        },
        ihes: {
          title: 'IHES',
          description: 'L\'Institut des Hautes \u00c9tudes Scientifiques (IHES) est un institut de recherche avanc\u00e9e en math\u00e9matiques, physique th\u00e9orique et toute autre science qui s\'y rattache. Nous soutenons l\'IHES dans l\'accueil de femmes scientifiques depuis 2022.',
        },
        chern: {
          title: 'Shiing-Shen Chern Young Faculty Award',
          description: 'Le Shiing-Shen Chern Young Faculty Award a \u00e9t\u00e9 cr\u00e9\u00e9 en 2023 \u00e0 l\'\u00c9cole polytechnique en tant que programme de soutien cibl\u00e9 destin\u00e9 aux jeunes enseignants-chercheurs remarquables. Nous soutenons ce prix depuis 2023.',
        },
        idm: {
          title: 'Images des math\u00e9matiques',
          description: 'Images des Math\u00e9matiques (IdM) existe depuis 2008 et est financ\u00e9 par le CNRS via Audimath. Nous soutenons le projet Concours BD d\'IdM, afin de rendre l\'\u00e9ducation math\u00e9matique plus int\u00e9ressante et plus ludique pour les jeunes et les enfants.',
        },
        girlsMaths: {
          title: 'Girls\' Maths Video Challenge',
          description: 'Le Girls\' Maths Video Challenge est une initiative mondiale lanc\u00e9e par les Olympiades Europ\u00e9ennes F\u00e9minines de Math\u00e9matiques (EGMO) 2026. Nous soutenons cette initiative afin d\'encourager les jeunes filles \u00e0 s\'engager dans les math\u00e9matiques de mani\u00e8re cr\u00e9ative et inspirante.',
        },
      },
      winners: {
        title: 'Laur\u00e9ates',
        2025: {
          winner1: {
            name: 'Suliana Manley',
            institution: 'EPFL',
            title: '\u00c0 la recherche de la lumi\u00e8re de la microscopie pour \u00e9clairer le chemin vers une vie en meilleure sant\u00e9',
            bio: 'La professeure Suliana Manley est une figure internationale de premier plan dans les domaines de la biophysique exp\u00e9rimentale et du d\u00e9veloppement d\'instrumentations optiques \u00e0 haute r\u00e9solution. Elle re\u00e7oit cette distinction pour ses contributions majeures aux techniques d\'imagerie par microscopie \u00e0 super-r\u00e9solution.',
          },
          winner2: {
            name: 'Ying Wang',
            institution: 'Universit\u00e9 Tongji',
            title: 'Mettre la puissance de l\'\u00e9lectrochimie au service d\'un nouveau paradigme de r\u00e9duction de la pollution et d\'att\u00e9nuation du carbone',
            bio: 'La professeure Ying Wang est une pionni\u00e8re dans le domaine du contr\u00f4le \u00e9lectrochimique durable de la pollution et de la transformation efficace des mat\u00e9riaux. Ses recherches r\u00e9pondent directement au grand d\u00e9fi mondial de conjuguer r\u00e9duction de la pollution et att\u00e9nuation des \u00e9missions de carbone.',
          },
        },
        2024: {
          winner1: {
            name: 'L\u00e9onide Yl\u00e9nia Randrianarisoa',
            institution: 'Universit\u00e9 de Toamasina, Madagascar',
            title: 'Gardienne de l\'oc\u00e9an, championne du d\u00e9veloppement durable',
            bio: 'Le Dr Randrianarisoa met la science au service des politiques publiques afin de faire progresser la conservation et l\'utilisation durable des ressources marines. Elle a \u00e9t\u00e9 pionni\u00e8re dans l\'\u00e9laboration d\'un cadre de gouvernance adaptative int\u00e9grant l\'oc\u00e9anographie, le droit international et les sciences sociales.',
          },
          winner2: {
            name: 'Xiuyun Liu',
            institution: 'Universit\u00e9 de Tianjin',
            title: 'Pionni\u00e8re de l\'innovation m\u00e9dico-ing\u00e9nierie au service des maladies c\u00e9r\u00e9brales',
            bio: 'La professeure Liu associe les soins neurocritiques et l\'ing\u00e9nierie biom\u00e9dicale afin de surmonter les obstacles majeurs du diagnostic et du traitement des maladies c\u00e9r\u00e9brales. Elle a mis au point des m\u00e9thodes rapides et pr\u00e9cises de diagnostic de l\'hydroc\u00e9phalie en s\'appuyant sur les interfaces cerveau-machine.',
          },
        },
        2023: {
          winner1: {
            name: 'Xiaoying Zhuang',
            institution: '',
            title: 'Conception assist\u00e9e par ordinateur de nouveaux mat\u00e9riaux',
            bio: 'La professeure Xiaoying Zhuang est une repr\u00e9sentante exceptionnelle des femmes scientifiques et ing\u00e9nieurs chinoises. Elle a contribu\u00e9 \u00e0 la r\u00e9solution de probl\u00e8mes complexes en ing\u00e9nierie et en science des mat\u00e9riaux.',
          },
          winner2: {
            name: 'Patricia Crifo',
            institution: '\u00c9cole Polytechnique',
            title: 'Finance durable et politique climatique',
            bio: 'La professeure Patricia Crifo est experte dans le domaine de la responsabilit\u00e9 des entreprises, sociale et environnementale (RSE), des villes durables et de la justice \u00e9nerg\u00e9tique. Elle est directrice du master \u00c9conomie des villes intelligentes et des politiques climatiques \u00e0 l\'\u00c9cole Polytechnique.',
          },
        },
      },
      contact: {
        title: 'Contactez-nous',
        lastName: 'Nom',
        firstName: 'Pr\u00e9nom',
        phone: 'T\u00e9l\u00e9phone',
        email: 'E-mail',
        country: 'Pays',
        city: 'Ville',
        message: 'Message',
        submit: 'Envoyer',
        required: 'Requis',
        success: 'Merci pour votre message. Nous vous r\u00e9pondrons bient\u00f4t.',
      },
      donate: {
        title: 'Soutenez Notre Mission',
        description: 'Votre contribution nous aide \u00e0 cr\u00e9er des ponts entre la science et l\'\u00e9ducation.',
        button: 'Faire un Don',
      },
      footer: {
        address: '40 avenue Hoche, 75008 Paris',
        copyright: '\u00a9 2026 Fondation Tongji. Tous droits r\u00e9serv\u00e9s.',
        hosted: 'Abrit\u00e9e par la Fondation de France',
      },
      language: {
        en: 'EN',
        fr: 'FR',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
    },
  });

export default i18n;
