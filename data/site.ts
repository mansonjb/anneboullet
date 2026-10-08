// Contenus des modèles de pages. Source : réponses d'Anne (atelier du 29/09 et e-mail du 08/10).
// Tout ce qui n'est pas encore fourni est entre crochets.

export const contact = {
  tel: "[06 00 00 00 00]",
  mail: "[contact@anneboullet.fr]",
  whatsapp: "[Lien WhatsApp]",
  adresse: "[Adresse]",
  ville: "17000 La Rochelle",
};

export type Mission = {
  slug: string;
  n: string;
  titre: string;
  h1: string;
  lede: string;
  recu: string[];
  pour: string;
  deroule: { titre: string; texte: string }[];
  bon: string[];
  photo: { projet: string; i: number };
};

export const missions: Mission[] = [
  {
    slug: "conseils",
    n: "01",
    titre: "Conseils",
    h1: "Conseils en décoration d'intérieur",
    lede: "Un regard extérieur, le temps d'une visite chez vous.",
    recu: ["Un rendez-vous d'1 h 30 sur place, nuancier et échantillons en main", "Un compte rendu écrit : points clés, astuces, croquis"],
    pour: "avancer par vous-même avec les bonnes pistes.",
    deroule: [
      { titre: "Avant le rendez-vous", texte: "Vous répondez à quelques questions et m'envoyez des photos ou des plans du lieu." },
      { titre: "Le rendez-vous", texte: "1 h 30 sur place pour faire le tour des pièces, avec nuancier et échantillons." },
      { titre: "Le compte rendu", texte: "Un document PDF qui reprend les points abordés, mes astuces et des croquis." },
    ],
    bon: ["Les frais de déplacement s'ajoutent au-delà de 15 minutes de route.", "Les questions et les photos envoyées en amont rendent le rendez-vous plus efficace."],
    photo: { projet: "maison-de-famille-saint-denis-d-oleron", i: 2 },
  },
  {
    slug: "conception",
    n: "02",
    titre: "Conception",
    h1: "Conception d'intérieur : plans, matières et 3D",
    lede: "Le projet entièrement dessiné, avant les travaux.",
    recu: ["Plans de principe et d'implantation", "Planches couleurs et matériaux", "Perspectives 3D et fourchettes budgétaires"],
    pour: "une rénovation, une extension ou une redistribution des pièces.",
    deroule: [
      { titre: "Avant-projet sommaire", texte: "Plan de principe et d'implantation, planches couleurs et matériaux, croquis, 3D en option. Des fourchettes budgétaires à la fin de cette étape." },
      { titre: "Avant-projet détaillé", texte: "Plans de principe et d'agencement, plan colorimétrique, perspectives 3D et sélection du mobilier." },
      { titre: "Les travaux", texte: "Vous consultez les artisans en direct pour un petit projet, ou un maître d'œuvre coordonne les travaux pour un projet plus important." },
    ],
    bon: ["Les plans livrés sont des plans de principe, base de travail pour les artisans.", "Pour un permis de construire, je travaille avec un architecte partenaire."],
    photo: { projet: "maison-de-village-saint-clement-des-baleines", i: 0 },
  },
  {
    slug: "decoration",
    n: "03",
    titre: "Décoration",
    h1: "Décoration d'intérieur et shopping list",
    lede: "Les bons objets, au bon endroit.",
    recu: ["La sélection du mobilier, des luminaires et des textiles", "Une shopping list prête à commander"],
    pour: "habiller un lieu déjà agencé.",
    deroule: [
      { titre: "L'écoute", texte: "Vos goûts, ce que vous souhaitez garder, les objets qui comptent pour vous." },
      { titre: "La sélection", texte: "Mobilier, luminaires, textiles et objets, en mêlant pièces chinées, souvenirs et contemporain." },
      { titre: "La shopping list", texte: "Une liste prête à commander, que vous gardez la main pour acheter." },
    ],
    bon: ["Vos meubles existants peuvent être intégrés au projet."],
    photo: { projet: "maison-de-famille-saint-denis-d-oleron", i: 15 },
  },
];

export type Secteur = {
  slug: string;
  nom: string;
  h1: string;
  detail: string;
  lede: string;
  enjeux: string[];
  exemples: string[];
  projet?: string;
  photo?: string;
};

export const secteurs: Secteur[] = [
  {
    slug: "sante",
    nom: "Santé",
    h1: "Aménagement de cabinets médicaux et lieux de santé",
    detail: "Cabinets, maternité, salles d'attente",
    lede: "Des lieux de soin qui apaisent les patients et facilitent le travail des équipes.",
    enjeux: ["La détente des patients dès la salle d'attente", "Le confort de l'équipe au quotidien", "Une signalétique claire et douce"],
    exemples: ["Cabinet d'anesthésistes de La Rochelle (7 associés) : projet global de détente des patients, confort de l'équipe, décoration, signalétique et communication.", "Salle à manger des parents à la maternité de l'hôpital de La Rochelle."],
    projet: "salle-a-manger-parents-maternite-la-rochelle",
    photo: "/pros/sante.jpg",
  },
  {
    slug: "bureaux",
    nom: "Bureaux",
    h1: "Aménagement de bureaux et d'espaces d'accueil",
    detail: "Espaces de travail et d'accueil",
    lede: "Des espaces de travail apaisés, et un accueil qui donne confiance dès la porte.",
    enjeux: ["La circulation et la capacité d'accueil", "Une identité forte, un lieu reconnaissable", "L'implication des équipes, jusqu'au nom des salles"],
    exemples: ["Groupe d'expertise comptable, La Pallice. [Photos à venir]"],
  },
  {
    slug: "hebergement",
    nom: "Hébergement",
    h1: "Décoration de locations saisonnières et chambres d'hôtes",
    detail: "Chambres d'hôtes, locations",
    lede: "Des lieux faciles à vivre, qui donnent envie de revenir.",
    enjeux: ["Des chambres confortables et faciles d'entretien", "Une ambiance qui se démarque", "Des matériaux qui supportent les saisons"],
    exemples: ["Maison de village à Saint-Clément-des-Baleines, pensée pour la famille, les amis et la location."],
    projet: "maison-de-village-saint-clement-des-baleines",
    photo: "/pros/hebergement.jpg",
  },
];

export type Zone = { slug: string; nom: string; h1: string; lede: string; communes: string[]; texte: string[]; projets: string[] };

export const zones: Zone[] = [
  {
    slug: "la-rochelle",
    nom: "La Rochelle",
    h1: "Décoratrice d'intérieur à La Rochelle",
    lede: "Le studio est installé à La Rochelle et intervient dans toute l'agglomération.",
    communes: ["La Rochelle", "Aytré", "Lagord", "Périgny", "Puilboreau", "Nieul-sur-Mer", "Châtelaillon-Plage"],
    texte: [
      "Maisons de ville, appartements, locaux professionnels : je me déplace chez vous pour une première visite, puis je vous accompagne du conseil au projet complet.",
      "À La Rochelle, j'ai notamment repensé la salle à manger des parents de la maternité, et des espaces de travail à La Pallice.",
    ],
    projets: ["salle-a-manger-parents-maternite-la-rochelle"],
  },
  {
    slug: "ile-de-re",
    nom: "Île de Ré",
    h1: "Décoratrice d'intérieur sur l'Île de Ré",
    lede: "Des maisons de village et des résidences secondaires, sur les dix communes de l'île.",
    communes: ["Rivedoux-Plage", "Sainte-Marie-de-Ré", "La Flotte", "Saint-Martin-de-Ré", "Le Bois-Plage-en-Ré", "La Couarde-sur-Mer", "Loix", "Ars-en-Ré", "Saint-Clément-des-Baleines", "Les Portes-en-Ré"],
    texte: [
      "Beaucoup de mes clients sur l'île achètent une résidence secondaire et souhaitent déléguer : je les accompagne de la conception jusqu'à la réception du chantier, avec des artisans de confiance.",
      "Le parti pris : garder le charme des maisons de village, leurs arches et leurs matériaux bruts, tout en les rendant faciles à vivre.",
    ],
    projets: ["maison-de-village-saint-clement-des-baleines"],
  },
  {
    slug: "oleron",
    nom: "Oléron",
    h1: "Décoratrice d'intérieur sur l'île d'Oléron",
    lede: "Rénovations et extensions de maisons de famille, à une heure de La Rochelle.",
    communes: ["Saint-Denis-d'Oléron", "Saint-Pierre-d'Oléron", "Saint-Georges-d'Oléron", "Dolus-d'Oléron", "Le Château-d'Oléron", "Saint-Trojan-les-Bains"],
    texte: [
      "À Saint-Denis-d'Oléron, une maison de 92 m² est devenue une maison de famille de plus de 170 m² : redistribution complète, extension et décoration.",
    ],
    projets: ["maison-de-famille-saint-denis-d-oleron"],
  },
];

export const autresZones = ["Châtelaillon-Plage", "Rochefort", "Royan", "Saintes"];

export type Faq = { q: string; r: string };

export const faq: { groupe: string; items: Faq[] }[] = [
  {
    groupe: "Questions générales",
    items: [
      { q: "Jusqu'où va votre accompagnement ?", r: "Du simple rendez-vous conseil au projet complet : plans de principe, choix des matières et du mobilier, puis un suivi esthétique du chantier jusqu'à la réception." },
      { q: "Faites-vous uniquement de la conception, ou suivez-vous aussi les travaux ?", r: "Je conçois le projet puis j'assure un suivi esthétique du chantier. La coordination des travaux est confiée à un maître d'œuvre pour les projets importants." },
      { q: "Travaillez-vous avec des artisans que vous recommandez ?", r: "Oui, je travaille avec des artisans locaux de confiance. [Liste en cours de validation]" },
      { q: "Pouvez-vous déposer un permis de construire ?", r: "Les permis de construire sont réalisés avec un architecte partenaire. Je peux déposer moi-même une déclaration préalable." },
      { q: "Mon projet est déjà commencé, pouvez-vous intervenir ?", r: "[Réponse d'Anne à venir]" },
      { q: "Respectez-vous mon style ou imposez-vous votre vision ?", r: "[Réponse d'Anne à venir]" },
    ],
  },
  {
    groupe: "Particuliers",
    items: [
      { q: "Pouvez-vous intégrer nos meubles existants ?", r: "Oui. À Saint-Denis-d'Oléron, la redistribution de la maison a été pensée à partir des usages et du mobilier existant." },
      { q: "Combien de temps dure la conception ?", r: "Selon l'ampleur du projet, la conception demande de quelques heures à deux semaines de travail." },
      { q: "Combien coûte la prestation ?", r: "Le devis est établi après la première visite, avec un débriefing écrit. [Fourchettes à préciser]" },
      { q: "Intervenez-vous pour une seule pièce ?", r: "[Réponse d'Anne à venir]" },
    ],
  },
  {
    groupe: "Professionnels",
    items: [
      { q: "Pouvez-vous améliorer la circulation et la capacité d'accueil ?", r: "[Réponse d'Anne à venir]" },
      { q: "Prenez-vous en charge la signalétique ?", r: "Oui, la signalétique fait partie de mes services, comme pour la maternité de La Rochelle." },
      { q: "Tenez-vous compte de l'accessibilité PMR ?", r: "[Réponse d'Anne à venir]" },
    ],
  },
];
