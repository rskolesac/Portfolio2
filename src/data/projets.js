export const projetsData = {
    projet1: {
    titre: "Détection intelligente d’anomalies cardiaques (C++)",
    technologies: {
      "C++17": "Implémentation performante temps réel",
      Eigen: "Algèbre linéaire (filtres, convolutions, features)",
      "FFTW3": "Transformées de Fourier pour l’analyse fréquentielle",
      OpenMP: "Parallélisation du prétraitement et des features",
      "ONNX Runtime / libtorch": "Inférence du modèle IA (classification)",
      Qt: "Interface de visualisation des signaux et prédictions"
    },
    description:
      "🔍 Définition : sur un signal ECG, chaque battement de cœur génère une onde appelée complexe QRS, qui représente l’activité électrique des ventricules lors de leur contraction. Le pic R correspond au point le plus haut de ce complexe, c’est-à-dire le maximum d’amplitude positive du battement. Il indique le moment exact où le cœur se contracte pour propulser le sang dans les artères. C’est le repère principal utilisé pour mesurer la fréquence cardiaque (en battements par minute). Le temps entre deux pics R successifs correspond à l’intervalle RR. Il sert également à détecter les anomalies du rythme cardiaque, telles que : arythmies, tachycardies ou fibrillations.",
    contexte: "Projet académique / R&D — IA & santé",
    objectifs: [
      "Filtrage passe-bande, suppression du bruit de fond et de la ligne de base",
      "Détection des pics R en temps quasi réel (fenêtrage + dérivation + intégration)",
      "Extraction de caractéristiques temporelles et fréquentielles (RR, HRV, énergie QRS)",
      "Modèle d’IA pour classifier les rythmes (ONNX/libtorch) avec métriques (accuracy, recall, F1)",
      "Visualisation : tracé ECG + marquage des R et des prédictions"
    ],
    images: [
      `${process.env.PUBLIC_URL}/image/ECG_cpp.png`,
      `${process.env.PUBLIC_URL}/image/ecg_prediction.png`
    ]
  },
    projet2: {
    titre: "Implémentation de l’algorithme cryptographique ASCON-256 (VHDL)",
    technologies: {
      SystemVerilog: "Langage de description matériel pour la simulation du chiffrement",
      ASCON: "Algorithme cryptographique léger sélectionné pour le standard NIST 2023",
    },
    description:
      "Implémentation complète du chiffrement ASCON-256 avec 12 permutations internes, ajout de constantes rondes, opérations de substitution non linéaire (S-box), diffusion linéaire et simulation du comportement matériel en VHDL. Le but du projet était de comprendre la structure interne d’un algorithme cryptographique moderne et de valider son fonctionnement par simulation.",
    contexte: "Projet universitaire — cryptographie matérielle",
    objectifs: [
      "Implémenter la permutation ASCON-256 (12 rounds)",
      "Réaliser les étapes : ajout de constante, substitution (S-box) et diffusion linéaire",
      "Créer le testbench pour valider la sortie et le timing logique",
      "Simuler et observer les transitions internes via ModelSim",
      "Optimiser les ressources logiques et le temps de propagation"
    ],
    images: [
      `${process.env.PUBLIC_URL}/image/ascon_pr.png`,
      `${process.env.PUBLIC_URL}/image/fsm_ascon.png`
    ]
  },
  projet3: {
  titre: "Pipeline Data Quality automatisé (Décathlon)",
  technologies: {
    Python: "Langage principal pour l’orchestration et les règles",
    "Great Expectations": "Validation des données selon 7 normes de qualité",
    Pandas: "Chargement, profiling et transformations du fichier",
    "SMTP (email)": "Notification automatique des écarts et rapports",
    Docker: "Environnements reproductibles pour l’exécution",
    GitHub: "CI/CD et suivi de version du référentiel"
  },
  description:
    "Mise en place d’un pipeline automatisé de contrôle qualité des données issues de fichier volumineux de Décathlon. Les règles sont définies avec Great Expectations et couvrent 7 dimensions de data quality. À chaque exécution, un rapport est généré et envoyé par email (SMTP) avec les métriques, les tests échoués et les recommandations.",
  contexte: "Projet personnel — data engineering & gouvernance de données",
  objectifs: [
    "Couvrir les 7 normes de data quality : complétude, exactitude, validité, unicité, cohérence, intégrité référentielle, fraîcheur",
    "Définir un catalogue d’expectations : schéma, types, bornes, regex, clés primaires/doublons, référentiels",
    "Générer automatiquement un rapport HTML/JSON (Great Expectations Data Docs)",
    "Notifier par email (SMTP) en cas d’échec avec pièces jointes (rapport + échantillon d’erreurs)",
    "Orchestration planifiée (cron) et relance sur incident",
    "Traçabilité : logs, métriques et historisation des exécutions"
  ],
  images: [
    `${process.env.PUBLIC_URL}/image/mail_dq.png`,
    `${process.env.PUBLIC_URL}/image/resultat_dq.png`
  ]
},
  projet4: {
    titre: "Portfolio moderne",
    technologies: {
      React: "Librairie pour interfaces dynamiques et déclaratives",
      TypeScript: "Typage statique pour fiabilité et maintenabilité",
      "Framer Motion": "Animations fluides et accessibles",
      "React Router": "Navigation déclarative multi-pages",
      CSS3: "Styles responsive (grid/flex) et variables CSS",
      Github: "Plateforme de développement et d'hébergement"
    },
    description:
      "Un portfolio moderne en React + TypeScript, basé sur une logique de composants réutilisables. Les données des projets proviennent d’une ‘API’ locale (fichier dédié) afin de séparer présentation et contenu. Le site présente mon parcours professionnel, mes réalisations et mes compétences.",
    contexte: "Projet personnel — vitrine professionnelle",
    objectifs: [
      "Architecture modulaire avec composants réutilisables",
      "Source de données centralisée (fichier API) et typée",
      "Performances Web (Lighthouse 95+)",
      "Accessibilité (navigation clavier, aria, contrastes)",
      "Design responsive",
      "Déploiement continu Github"
    ],
    images: [
      `${process.env.PUBLIC_URL}/image/projet1/screen1.png`,
      `${process.env.PUBLIC_URL}/image/projet1/screen2.png`
    ]
  },
};
    // Ajouter les autres projets ici
