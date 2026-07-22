export type Mission = {
  slug: string;
  title: string;
  icon: string; // emoji ou caractère
  short: string; // résumé homepage
  description: string; // texte long page missions
  actions: string[]; // liste des actions concrètes
  color: 'blue' | 'green' | 'gold' | 'rose' | 'purple' | 'orange';
  image: string; // chemin de l'image dans /public/missions/
};

export const missions: Mission[] = [
  {
    slug: 'orphelins',
    title: 'Aide aux Orphelins',
    icon: '🧒',
    short: "Garantir aux enfants orphelins l'accès à l'éducation, aux soins et à un encadrement psychologique.",
    description:
      "Notre programme d'aide aux orphelins place l'enfant au cœur de notre action. Nous offrons un accompagnement complet pour leur donner les outils nécessaires à bâtir un avenir prometteur.",
    actions: [
      "Prise en charge des frais de scolarité et fournitures",
      "Accès aux soins de santé essentiels",
      "Accompagnement psychologique et soutien moral",
      "Activités d'épanouissement et de socialisation",
    ],
    color: 'blue',
    image: '/missions/orphelins.jpg',
  },
  {
    slug: 'veuves',
    title: 'Soutien aux Veuves',
    icon: '🤝',
    short: "Aider les veuves en précarité à retrouver confiance, dignité et stabilité économique.",
    description:
      "Nous accompagnons les veuves en situation de vulnérabilité par un soutien financier et en nature.",
    actions: [
      "Soutien financier d'urgence",
      "Dons en nature (vivres, biens essentiels)",
      "Accompagnement psychologique",
    ],
    color: 'rose',
    image: '/missions/veuves.jpg',
  },
  {
    slug: 'aide-alimentaire',
    title: 'Aide Alimentaire',
    icon: '🍲',
    short: "Distribuer des colis alimentaires et produits de première nécessité aux familles en difficulté.",
    description:
      "Pour assurer la sécurité alimentaire et matérielle des familles défavorisées, nous organisons des distributions régulières et un accompagnement vers les services essentiels.",
    actions: [
      "Distribution de colis alimentaires mensuels",
      "Fourniture de produits d'hygiène et de première nécessité",
      "Aide à l'accès au logement",
      "Orientation vers les services de santé",
    ],
    color: 'orange',
    image: '/missions/aide-alimentaire.jpg',
  },
  {
    slug: 'education',
    title: 'Éducation & Sensibilisation',
    icon: '📚',
    short: "Promouvoir l'éducation et la solidarité à travers des ateliers et campagnes communautaires.",
    description:
      "Convaincus que l'éducation est le levier le plus puissant du changement, nous menons des campagnes de sensibilisation et organisons des ateliers pour renforcer le tissu communautaire.",
    actions: [
      "Campagnes de sensibilisation (santé, droits, hygiène)",
      "Ateliers communautaires pour adultes et jeunes",
      "Programmes de mentorat scolaire",
      "Promotion de la solidarité et du soutien mutuel",
    ],
    color: 'green',
    image: '/missions/education.jpg',
  },
  {
    slug: 'fonds-urgence',
    title: "Fonds d'Urgence",
    icon: '🚨',
    short: "Réagir rapidement aux catastrophes naturelles et aux crises sanitaires.",
    description:
      "Notre fonds d'urgence nous permet de mobiliser une aide immédiate lorsqu'une crise survient : secours alimentaires, abris temporaires et soins médicaux d'urgence.",
    actions: [
      "Secours alimentaires d'urgence",
      "Mise en place d'abris temporaires",
      "Soins médicaux d'urgence",
      "Coordination avec les services de protection civile",
    ],
    color: 'purple',
    image: '/missions/fonds-urgence.jpg',
  },
  {
    slug: 'benevoles-donateurs',
    title: 'Bénévoles & Donateurs',
    icon: '💛',
    short: "Mobiliser une communauté d'engagés pour bâtir un avenir solidaire et juste.",
    description:
      "Aucune action n'est possible sans vous. Nous invitons toute personne de bonne volonté à rejoindre la Fondation, comme bénévole ou donateur, pour amplifier l'impact de nos actions.",
    actions: [
      "Programme de bénévolat pour étudiants et professionnels",
      "Donations en nature (vêtements, livres, matériel)",
      "Donations financières via Mobile Money ou virement",
      "Partenariats avec entreprises et organisations",
    ],
    color: 'gold',
    image: '/missions/benevoles-donateurs.jpg',
  },
];

export const colorClasses = {
  blue: {
    bg: 'bg-[#1e3a8a]/10',
    text: 'text-[#1e3a8a]',
    border: 'border-[#1e3a8a]/20',
    grad: 'from-[#1e3a8a] to-[#0c1e3e]',
  },
  green: {
    bg: 'bg-[#15803d]/10',
    text: 'text-[#15803d]',
    border: 'border-[#15803d]/20',
    grad: 'from-[#15803d] to-[#0f6b32]',
  },
  gold: {
    bg: 'bg-[#ca8a04]/10',
    text: 'text-[#ca8a04]',
    border: 'border-[#ca8a04]/20',
    grad: 'from-[#ca8a04] to-[#a16207]',
  },
  rose: {
    bg: 'bg-[#be185d]/10',
    text: 'text-[#be185d]',
    border: 'border-[#be185d]/20',
    grad: 'from-[#be185d] to-[#9d174d]',
  },
  purple: {
    bg: 'bg-[#7c3aed]/10',
    text: 'text-[#7c3aed]',
    border: 'border-[#7c3aed]/20',
    grad: 'from-[#7c3aed] to-[#6d28d9]',
  },
  orange: {
    bg: 'bg-[#ea580c]/10',
    text: 'text-[#ea580c]',
    border: 'border-[#ea580c]/20',
    grad: 'from-[#ea580c] to-[#c2410c]',
  },
} as const;
