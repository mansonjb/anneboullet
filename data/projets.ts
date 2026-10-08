import photos from "./photos.json";

export type Photo = { file: string; src: string; w: number; h: number };

export type Projet = {
  slug: string;
  titre: string;
  type: "Particulier" | "Professionnel";
  commune: string;
  zone?: string;
  meta: string[];
  resume: string;
  texte: { titre: string; paragraphes: string[] }[];
  partenaires?: string[];
  photos: Photo[];
  alt: string;
  mission?: string;
  secteur?: string;
};

const p = photos as Record<string, Photo[]>;
const A_VENIR = "[Quelques lignes à venir : la demande de départ, le parti pris et le résultat.]";

export const projets: Projet[] = [
  {
    slug: "maison-de-famille-saint-denis-d-oleron",
    titre: "Maison de famille, Saint-Denis-d'Oléron",
    type: "Particulier",
    commune: "Saint-Denis-d'Oléron",
    zone: "oleron",
    mission: "conception",
    meta: ["Conception et décoration", "170 m²", "2024 · 2025"],
    resume: "Une maison de 92 m² rénovée et agrandie de 80 m², pour devenir la maison de famille.",
    texte: [
      {
        titre: "La demande",
        paragraphes: [
          "Une résidence secondaire appelée à devenir la maison de famille, en anticipant la retraite des propriétaires, avec une piscine. Le point de départ : révéler un bâti standard.",
          "La maison de 92 m² a été entièrement rénovée et agrandie de 80 m², avec un architecte pour le permis de construire de l'extension.",
        ],
      },
      {
        titre: "Le projet",
        paragraphes: [
          "Une redistribution complète, pensée à partir des usages et du mobilier existant. Un esprit « cabane » : bois, lin, jute, rotin, charpente apparente et suspensions en fibres naturelles, deux patios de part et d'autre de la salle à manger.",
          "La décoration se lit comme un carnet de souvenirs : objets de famille, voyages, chine et pièces contemporaines. Résultat : du confort, du volume, de la lumière, et un lieu authentique et singulier.",
        ],
      },
    ],
    partenaires: ["[Liste des artisans à confirmer]"],
    photos: p.oleron,
    alt: "Maison de famille à Saint-Denis-d'Oléron",
  },
  {
    slug: "maison-de-village-saint-clement-des-baleines",
    titre: "Maison de village, Saint-Clément-des-Baleines",
    type: "Particulier",
    commune: "Saint-Clément-des-Baleines",
    zone: "ile-de-re",
    mission: "conception",
    meta: ["Conception", "130 m²", "2023 · 2024"],
    resume: "Une maison de village restée dans son état d'origine, achetée comme résidence secondaire.",
    texte: [
      {
        titre: "La demande",
        paragraphes: [
          "Une maison de 130 m² dans son état d'origine, achetée comme résidence secondaire, pour la famille, les amis et une location éventuelle.",
        ],
      },
      {
        titre: "Le projet",
        paragraphes: [
          "Une redistribution complète avec déclaration préalable pour la façade, en travaillant les circulations, les perspectives et les dimensions du mobilier.",
          "Le charme d'une maison de village : arches, matériaux bruts, travertin, bois, zelliges et pierre, avec des teintes chaudes sur les murs de têtes de lit et dans les salles d'eau. Résultat : une maison réappropriée, pour des vacances détendues.",
        ],
      },
    ],
    partenaires: ["[Liste des artisans à confirmer]"],
    photos: p.parpaillaud,
    alt: "Maison de village à Saint-Clément-des-Baleines",
  },
  {
    slug: "salle-a-manger-parents-maternite-la-rochelle",
    titre: "Salle à manger des parents, maternité de La Rochelle",
    type: "Professionnel",
    commune: "La Rochelle",
    zone: "la-rochelle",
    secteur: "sante",
    meta: ["Santé", "Aménagement et signalétique", "La Rochelle"],
    resume: "Un lieu de pause pour les jeunes parents, au sein de la maternité de l'hôpital de La Rochelle.",
    texte: [
      {
        titre: "Le projet",
        paragraphes: [
          "Une salle à manger parentale repensée : papier peint végétal, mobilier, signalétique et messages pour les familles. Un projet mené bénévolement.",
        ],
      },
    ],
    photos: p.maternite,
    alt: "Salle à manger des parents, maternité de La Rochelle",
  },
  {
    slug: "projet-ermitage",
    titre: "Projet Ermitage",
    type: "Particulier",
    commune: "[Commune]",
    meta: ["[Type de lieu]", "[Commune]", "[Surface]"],
    resume: A_VENIR,
    texte: [],
    photos: p.ermitage,
    alt: "Projet Ermitage",
  },
  {
    slug: "projet-beguin",
    titre: "Projet Beguin",
    type: "Particulier",
    commune: "[Commune]",
    meta: ["[Type de lieu]", "[Commune]", "[Surface]"],
    resume: A_VENIR,
    texte: [],
    photos: p.beguin,
    alt: "Projet Beguin",
  },
  {
    slug: "projet-saint-claude",
    titre: "Projet Saint Claude",
    type: "Particulier",
    commune: "[Commune]",
    meta: ["[Type de lieu]", "[Commune]", "[Surface]"],
    resume: A_VENIR,
    texte: [],
    photos: p.saintclaude,
    alt: "Projet Saint Claude",
  },
  {
    slug: "projet-bodilis",
    titre: "Projet Bodilis",
    type: "Particulier",
    commune: "[Commune]",
    mission: "decoration",
    meta: ["[Type de lieu]", "[Commune]", "[Surface]"],
    resume: A_VENIR,
    texte: [],
    photos: p.bodilis,
    alt: "Projet Bodilis",
  },
];

export const getProjet = (slug: string) => projets.find((x) => x.slug === slug);
export const src = (ph: Photo) => `/projets/${ph.file.split("-")[0]}/${ph.file}`;
