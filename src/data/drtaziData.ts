export interface SpecialtyGroup {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  items: string[];
}

export interface AvantApresItem {
  id: string;
  title: string;
  category: 'visage' | 'silhouette' | 'poitrine';
  beforeUrl: string;
  afterUrl: string;
  timing?: string;
  description?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  imageUrl: string;
  youtubeUrl: string;
  tag?: string;
}

export interface ActualiteItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  articleUrl: string;
  excerpt: string;
  isArabic?: boolean;
}

export interface QRItem {
  id: string;
  question: string;
  answer: string;
}

export const DR_TAZI_PROFILE = {
  name: "Dr. El Hassan TAZI",
  title: "Chirurgie plastique · esthétique · obésité",
  subtitle: "Spécialiste en chirurgie plastique, esthétique et obésité",
  locationKicker: "Casablanca · Clinique des Spécialités Achifaa",
  bio: "Chirurgien plasticien, avec plus de 30 ans d'expérience. Inventeur d'une technique de liposuccion, brevetée et protégée à travers le monde. Membre de l'American Society for Aesthetic Plastic Surgery (ASAPS) et membre actif de l'Académie des sciences de New-York. Diplômé de la faculté de médecine de Montpellier.",
  footerBio: "Chirurgien plasticien avec plus de 30 ans d'expérience, inventeur d'une technique de liposuccion brevetée et protégée à travers le monde. Diplômé de la faculté de médecine de Montpellier.",
  checkpoints: [
    "Plus de 30 ans d'expérience en chirurgie plastique et esthétique",
    "Inventeur d'une technique de liposuccion brevetée et protégée à travers le monde",
    "Membre de l'American Society for Aesthetic Plastic Surgery (ASAPS)",
    "Membre actif de l'Académie des sciences de New-York",
    "Diplômé de la faculté de médecine de Montpellier"
  ],
  quote: "Un chirurgien esthétique essaie simplement d'apporter de l'harmonie, de donner une apparence naturelle. C'est un artiste comme un peintre qui peint un beau tableau mais qui ne signe pas.",
  vicePresidentBadge: "Vice-président de la société marocaine de chirurgie esthétique et de chirurgie réparatrice",
  portraitUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/dr-tazi-portrait-BM4T_1Jt.png",
  photoSuitUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/dr-tazi-photo-CKDaGLjd.jpg",
  youtubeChannelUrl: "https://www.youtube.com/channel/UC7p8TS-XJD8kTUumLudB8yA",
  facebookUrl: "https://www.facebook.com/taziesthetiquebest",
  instagramUrl: "https://www.instagram.com/elhassanetazi/",
  wikipediaUrl: "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AD%D8%B3%D9%86_%D8%A7%D9%84%D8%AA%D8%A7%D8%B2%D9%8A"
};

export const CONTACT_INFO = {
  clinicName: "Clinique des Spécialités Achifaa",
  address: "Rue Lahcen El Arjoune – Ex Dalton, angle rue Lavoisier (en face de l'Hôpital 20 Août), Casablanca 20100, Maroc",
  phones: [
    "+212 (0) 522 86 30 04",
    "+212 (0) 522 86 06 14"
  ],
  whatsapp: "+212 662 76 35 87",
  whatsappClean: "212662763587",
  email: "tazilipo@gmail.com",
  openStreetMapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-7.6330%2C33.5790%2C-7.6060%2C33.5980&layer=mapnik&marker=33.5890%2C-7.6195",
  legalNotice: "Conformément à la loi nº 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent."
};

export const RDV_INTERVENTIONS = [
  "Liposuccion",
  "Augmentation mammaire",
  "Rhinoplastie",
  "Réduction mammaire",
  "Relooking",
  "Détatouage au laser",
  "Comblement des fesses",
  "Greffe de cheveux",
  "Lifting du visage",
  "Abdominoplastie",
  "Laser",
  "Feeler (Fillers)",
  "Rides",
  "Paupières",
  "Autres"
];

export const COUNTRY_CODES = [
  { code: "+212", label: "MA +212" },
  { code: "+33", label: "FR +33" },
  { code: "+32", label: "BE +32" },
  { code: "+41", label: "CH +41" },
  { code: "+1", label: "US +1" },
  { code: "+216", label: "TN +216" },
  { code: "+213", label: "DZ +213" },
  { code: "+971", label: "AE +971" },
  { code: "+966", label: "SA +966" },
  { code: "+44", label: "GB +44" },
  { code: "+34", label: "ES +34" },
  { code: "+49", label: "DE +49" },
  { code: "+39", label: "IT +39" },
  { code: "+31", label: "NL +31" },
  { code: "+90", label: "TR +90" },
  { code: "+221", label: "SN +221" },
  { code: "+225", label: "CI +225" },
];

export const SPECIALTIES: SpecialtyGroup[] = [
  {
    id: "seins",
    number: "01",
    title: "La chirurgie des seins (gynécomastie)",
    shortDescription: "Redessiner la poitrine dans l'harmonie de la silhouette, avec des résultats naturels.",
    items: [
      "Augmentation mammaire",
      "Levage de sein",
      "Réduction mammaire",
      "Révision mammaire",
      "Gynécomastie"
    ]
  },
  {
    id: "visage",
    number: "02",
    title: "La chirurgie du visage",
    shortDescription: "Rajeunir et affiner les traits du visage en préservant votre personnalité.",
    items: [
      "La chirurgie des paupières (blépharoplastie)",
      "Le lifting supérieur",
      "La chirurgie du nez (rhinoplastie)",
      "Le rajeunissement facial par injections",
      "Le lifting facial",
      "La chirurgie esthétique à l'aide d'implants faciaux",
      "La chirurgie des oreilles (otoplastie)"
    ]
  },
  {
    id: "corps",
    number: "03",
    title: "La chirurgie du corps",
    shortDescription: "Retrouver une silhouette harmonieuse grâce aux techniques brevetées du Dr. Tazi.",
    items: [
      "L'abdominoplastie",
      "La brachioplastie",
      "Le lifting des cuisses",
      "La liposuccion brevetée",
      "Les implants pour les mollets"
    ]
  },
  {
    id: "soins",
    number: "04",
    title: "Soins et suivi",
    shortDescription: "Des soins médicaux esthétiques et un suivi personnalisé, avant et après l'intervention.",
    items: [
      "Injections anti-rides",
      "Remplisseuses (acide hyaluronique)",
      "Le salon laser",
      "Épilation laser",
      "Traitements corporels",
      "Enlèvement des graisses Clatuu"
    ]
  }
];

export const AVANT_APRES_ITEMS: AvantApresItem[] = [
  {
    id: "menton",
    title: "Lifting du visage et du cou — 21 jours après",
    category: "visage",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/menton-avant-C20POkww.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/menton-apres-pu0NtnHx.jpg",
    timing: "21 jours après",
    description: "Rajeunissement cervico-facial permettant de redessiner l'ovale du visage et l'angle cervico-mentonnier."
  },
  {
    id: "nez-profil",
    title: "Rhinoplastie — vue de profil",
    category: "visage",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/nez-profil-apres-CsEgloLO.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/nez-profil-apres-CsEgloLO.jpg",
    timing: "Vue de profil",
    description: "Correction de l'arête nasale et réharmonisation du profil en préservant le naturel des traits."
  },
  {
    id: "lifting-visage",
    title: "Lifting du visage",
    category: "visage",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/lifting-visage-apres-gJqniSY7.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/lifting-visage-apres-gJqniSY7.jpg",
    timing: "Résultat naturel",
    description: "Repositionnement des tissus profonds pour un rajeunissement naturel sans aspect figé."
  },
  {
    id: "ventre-10l",
    title: "Liposuccion du ventre — 10 litres sans abdominoplastie",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/ventre-10l-apres-BjVbsfzl.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/ventre-10l-apres-BjVbsfzl.jpg",
    timing: "Sans abdominoplastie",
    description: "Extraction majeure par technique brevetée du Dr. Tazi avec excellente rétraction cutanée."
  },
  {
    id: "lipo-6l",
    title: "Liposuccion de 6 litres de graisses",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/lipo-6l-apres-BVqK0PNR.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/lipo-6l-apres-BVqK0PNR.jpg",
    timing: "Sculpture du dos et taille",
    description: "Affinement du dos et des hanches pour redessiner la cambrure et la silhouette."
  },
  {
    id: "cuisses",
    title: "Liposuccion des cuisses et des mollets — 3 semaines après",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/cuisses-apres-BXP-gg0C.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/cuisses-apres-BXP-gg0C.jpg",
    timing: "3 semaines après",
    description: "Remodelage harmonieux des membres inférieurs et allègement des zones galbées."
  },
  {
    id: "hcg-80-58",
    title: "Cure HCG + liposuccion — de 80 kg à 58 kg",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/hcg-80-58-apres-CajPwg-J.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/hcg-80-58-apres-CajPwg-J.jpg",
    timing: "De 80 kg à 58 kg",
    description: "Combinaison médicale et chirurgicale pour une métamorphose globale et durable."
  },
  {
    id: "hcg-78-64",
    title: "Cure HCG — de 78 kg à 64 kg, sans chirurgie ni liposuccion",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/hcg-78-64-apres-C2EgIR2L.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/hcg-78-64-apres-C2EgIR2L.jpg",
    timing: "Sans chirurgie",
    description: "Protocole médical métabolique exclusif de gestion pondérale encadré par le cabinet."
  },
  {
    id: "lipo-hcg-28l",
    title: "Liposuccion de 28 litres + 3 mois de cure HCG",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/lipo-hcg-apres-DhGueCpT.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/lipo-hcg-apres-DhGueCpT.jpg",
    timing: "Transformation majeure",
    description: "Prise en charge de grande envergure associant aspiration volumétrique et stabilisation."
  },
  {
    id: "lipo-160-138",
    title: "Liposuccion — de 160 kg à 138 kg en 6 mois",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/lipo-28l-apres-BR6vfJzD.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/lipo-28l-apres-BR6vfJzD.jpg",
    timing: "En 6 mois",
    description: "Intervention en plusieurs temps pour une réduction corporelle sécurisée et harmonieuse."
  },
  {
    id: "perte-40kg",
    title: "Perte de 40 kg — cure d'amaigrissement HCG, 114 kg à 74 kg",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/perte-40kg-apres-D9KbQ_Zz.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/perte-40kg-apres-D9KbQ_Zz.jpg",
    timing: "114 kg à 74 kg",
    description: "Résultat impressionnant avec préservation de la masse musculaire et tonus de la peau."
  },
  {
    id: "abdomino-lipo-3s",
    title: "Abdominoplastie + liposuccion — 3 semaines après",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/abdomino-lipo-apres-BXLoieFp.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/abdomino-lipo-apres-BXLoieFp.jpg",
    timing: "3 semaines après",
    description: "Remise en tension de la sangle abdominale et élimination de l'excès cutané et graisseux."
  },
  {
    id: "abdomino-27l",
    title: "Abdominoplastie + liposuccion de 27 litres",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/abdomino-27l-apres-BqK-R96i.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/abdomino-27l-apres-BqK-R96i.jpg",
    timing: "27 litres aspirés",
    description: "Cas d'excellence chirurgicale documenté avec rétablissement fonctionnel et esthétique."
  },
  {
    id: "asymetrie-seins",
    title: "Asymétrie des seins — augmentation à droite et réduction à gauche",
    category: "poitrine",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/seins-asymetrie-apres-nJsdDY36.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/seins-asymetrie-apres-nJsdDY36.jpg",
    timing: "Équilibre parfait",
    description: "Symétrisation mammaire complexe personnalisée pour un galbe naturel et proportionné."
  },
  {
    id: "bras",
    title: "Liposuccion des bras",
    category: "silhouette",
    beforeUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/bras-full-BKdD7RUu.jpg",
    afterUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/bras-full-BKdD7RUu.jpg",
    timing: "Brachioplastie / Lipo",
    description: "Affinement de la face postérieure des bras avec cicatrices imperceptibles."
  }
];

export const VIDEOS_LIST: VideoItem[] = [
  {
    id: "v-1",
    title: "Liposuccion brevetée — résultats d'une intervention du Dr. Tazi",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/video-lipo-BsF-Gquj.jpg",
    youtubeUrl: "https://www.youtube.com/channel/UC7p8TS-XJD8kTUumLudB8yA",
    tag: "LIPOSUCCION BREVETÉE"
  },
  {
    id: "v-2",
    title: "Lifting du visage et des sourcils, depuis la salle d'opération",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/video-lifting-BgYKyp-E.jpg",
    youtubeUrl: "https://www.youtube.com/channel/UC7p8TS-XJD8kTUumLudB8yA",
    tag: "LIFTING DU VISAGE ET SOURCILS"
  },
  {
    id: "v-3",
    title: "Causes et solutions de la chute de cheveux, expliquées par le Dr. Tazi",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/video-calvitie-BbrPS3lQ.jpg",
    youtubeUrl: "https://www.youtube.com/channel/UC7p8TS-XJD8kTUumLudB8yA",
    tag: "TRAITEMENT DE LA CALVITIE"
  },
  {
    id: "v-4",
    title: "Abdominoplastie et liposuccion : de superbes résultats",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/abdomino-lipo-apres-BXLoieFp.jpg",
    youtubeUrl: "https://www.youtube.com/channel/UC7p8TS-XJD8kTUumLudB8yA",
    tag: "LIFTING ABDOMINAL"
  },
  {
    id: "v-5",
    title: "Rhinoplastie complète réalisée par le Dr. El Hassan Tazi",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/nez-profil-apres-CsEgloLO.jpg",
    youtubeUrl: "https://www.youtube.com/channel/UC7p8TS-XJD8kTUumLudB8yA",
    tag: "RHINOPLASTIE"
  },
  {
    id: "v-6",
    title: "Une première au Maroc : « Défi Obésité » sur 2M avec le Dr. Tazi",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/dr-tazi-photo-CKDaGLjd.jpg",
    youtubeUrl: "https://www.youtube.com/channel/UC7p8TS-XJD8kTUumLudB8yA",
    tag: "ÉMISSION 2M — DÉFI OBÉSITÉ"
  }
];

export const ACTUALITES_LIST: ActualiteItem[] = [
  {
    id: "act-1",
    title: "En dialogue avec le Dr El Hassan Tazi, spécialiste en chirurgie esthétique et obésité : le Maroc capable d'être un pôle de santé en Afrique",
    date: "23 FÉVRIER 2018",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/dr-tazi-portrait-BM4T_1Jt.png",
    articleUrl: "https://www.drtazi.com/2018/02/23/en-dialogue-avec-le-dr-el-hassan-tazi-specialiste-en-chirurgie-esthetique-et-obesite-le-maroc-capable-detre-un-pole-de-sante-en-afrique/",
    excerpt: "Grand entretien sur les opportunités du Maroc en tant que destination médicale de premier plan pour la chirurgie plastique et la prise en charge de l'obésité."
  },
  {
    id: "act-2",
    title: "La chirurgie esthétique a le vent en poupe",
    date: "28 JUILLET 2017",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/presse-chirurgie-esthetique-DzzT7X80.jpg",
    articleUrl: "https://www.drtazi.com/2017/07/28/la-chirurgie-esthetique-a-le-vent-en-poupe/",
    excerpt: "L'évolution des demandes et la démocratisation des interventions au Maroc et à l'international décryptées par le Dr. El Hassan Tazi."
  },
  {
    id: "act-3",
    title: "Enquête. Les Marocain(e)s soignent leurs corps",
    date: "28 JUILLET 2017",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/presse-enquete-vsx7b4ND.jpg",
    articleUrl: "https://www.drtazi.com/2017/07/28/enquete-les-marocaines-soignent-leurs-corps/",
    excerpt: "Comment la quête du bien-être et de l'harmonie physique s'est installée dans les habitudes des Marocaines et Marocains."
  },
  {
    id: "act-4",
    title: "La cure HCG, pour se débarrasser efficacement des kilos superflus",
    date: "28 JUILLET 2017",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/video-lipo-BsF-Gquj.jpg",
    articleUrl: "https://www.drtazi.com/2017/07/28/la-cure-hcg-pour-se-debarrasser-efficacement-des-kilos-superflus/",
    excerpt: "La prise en charge de l'obésité et des surcharges pondérales : l'approche médicale et nutritionnelle spécialisée."
  },
  {
    id: "act-5",
    title: "Dr El Hassane Tazi, chirurgien-plasticien : « L'affaire des PIP n'a pas dissuadé les femmes envers les implants mammaires »",
    date: "28 JUILLET 2017",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/presse-implants-BgJyNB6E.jpg",
    articleUrl: "https://www.drtazi.com/2017/07/28/dr-el-hassane-tazi-chirurgien-plasticien-laffaire-des-pip-na-pas-dissuade-les-femmes-envers-les-implants-mammaires/",
    excerpt: "Entretien sur la sécurité rigoureuse, la qualité des prothèses agréées et la relation de confiance entre praticien et patiente."
  },
  {
    id: "act-6",
    title: "La liposuccion, 1er acte de chirurgie esthétique : 10 000 accomplis par an",
    date: "28 JUILLET 2017",
    imageUrl: "https://tazi-aesthetic-consultations.lovable.app/assets/presse-liposuccion-B5Sv4DH8.jpg",
    articleUrl: "https://www.drtazi.com/2017/07/28/la-liposuccion-1er-acte-de-chirurgie-esthetique-10-000-accomplis-par-an/",
    excerpt: "Analyse chiffrée de l'intervention la plus demandée et des avancées technologiques brevetées pour des résultats optimisés."
  }
];

export const QUESTIONS_REPONSES: QRItem[] = [
  {
    id: "q1",
    question: "Votre bureau inspire beaucoup de chaleur. Il est différent de celui d'un médecin habituel. Est-ce une volonté propre au chirurgien esthétique pour se rapprocher de ses patients ?",
    answer: "Les personnes qui ont recours à la chirurgie esthétique ne sont pas malades somatiquement. Elles viennent tranquillement consulter et c'est pour cela que le décor doit prêter une certaine sensibilité pour montrer au patient que nous sommes là pour discuter, trouver une solution plutôt que traiter un problème en urgence."
  },
  {
    id: "q2",
    question: "Est-il facile de mettre en confiance un client ?",
    answer: "Le côté psychologique chez un chirurgien plasticien est extrêmement important. D'une part, le patient doit se sentir immédiatement en confiance sinon il devra repartir pour une autre consultation et toujours dans le but d'établir cette confiance. D'autre part, nous ne sommes pas là pour juger mais pour écouter, pour conseiller et savoir adapter les conditions du patient à ses possibilités."
  },
  {
    id: "q3",
    question: "Donc, vous êtes d'accord qu'un chirurgien plasticien n'est pas un magicien ?",
    answer: "Vous savez, un chirurgien esthétique est avant tout un médecin ayant suivi une formation médicale, chirurgicale puis esthétique. A aucun moment, il ne peut prétendre être un magicien pour transformer une silhouette. Il essaie simplement d'apporter de l'harmonie, de donner une apparence naturelle. Si nous devions le comparer, nous pouvons dire que c'est un artiste comme un peintre qui peint un beau tableau mais qui ne signe pas car le bistouri ne doit laisser aucune trace, du moins un minimum."
  },
  {
    id: "q4",
    question: "Pensez-vous que tous les médecins peuvent pratiquer la chirurgie esthétique ?",
    answer: "Par la loi, tous les médecins peuvent traiter. Sur le plan pratique, il est préférable de faire appel à des experts reconnus par le Conseil de l'ordre, des professionnels qui ont écrit dans ce domaine, qui ont approfondi leur recherche car le diplôme n'est plus suffisant aujourd'hui. Ce qu'on pratiquait il y a une quinzaine d'années n'est plus à jour. Un diplôme donne la base mais la recherche vous offre la possibilité d'être à la pointe."
  },
  {
    id: "q5",
    question: "Nous remarquons depuis quelque temps une véritable lancée vers la chirurgie esthétique. Est-ce vouloir répondre au standard international de beauté ?",
    answer: "Je ne pense pas qu'il y ait un standard sinon les recherches scientifiques dresseraient des dimensions précises, des formes à respecter. C'est illogique car nous sommes face à un corps humain qui se transforme, nous ne sculptons pas un morceau de bois. Le corps humain varie d'une personne à l'autre et réagit différemment pour chacun. La création divine est concrète, nous ne sommes là que pour harmoniser, pour apporter un plus et tous ceux qui prétendent le contraire sont des charlatans."
  },
  {
    id: "q6",
    question: "Est-elle pratiquée au Maroc ?",
    answer: "A ma connaissance, non."
  },
  {
    id: "q7",
    question: "La transexualité n'est pas une chirurgie plastique ?",
    answer: "C'est une chirurgie plastique mais parfois fait l'objet d'une chirurgie réparatrice si plusieurs psychologues se réunissent et approuvent cette alternative pour l'équilibre du patient."
  },
  {
    id: "q8",
    question: "Est-ce une chirurgie interdite par la loi ?",
    answer: "Quelque part, oui. Vous savez, en tant que médecins, nous sommes amenés à respecter certaines valeurs sans oublier celles qui sont sacrées, découlant de notre éducation et de notre patrimoine culturel. Etre des scientifiques ne signifie pas que nous devons nous en défaire."
  }
];
