import photos from "./photos.json";

export type Photo = { file: string; src: string; w: number; h: number };

export type Projet = {
  slug: string;
  titre: string;
  lieu: string;
  meta: string[];
  resume: string;
  texte: { titre: string; paragraphes: string[] }[];
  photos: Photo[];
  alt: string;
};

const p = photos as Record<string, Photo[]>;

export const projets: Projet[] = [
  {
    slug: "maison-de-famille-saint-denis-d-oleron",
    titre: "Maison de famille, Saint-Denis-d'Oléron",
    lieu: "Saint-Denis-d'Oléron",
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
    photos: p.oleron,
    alt: "Maison de famille à Saint-Denis-d'Oléron",
  },
  {
    slug: "projet-ermitage",
    titre: "Projet Ermitage",
    lieu: "[Commune]",
    meta: ["[Type de lieu]", "[Commune]", "[Surface]"],
    resume: "[Quelques lignes à venir : la demande de départ et le parti pris.]",
    texte: [],
    photos: p.ermitage,
    alt: "Projet Ermitage",
  },
  {
    slug: "projet-beguin",
    titre: "Projet Beguin",
    lieu: "[Commune]",
    meta: ["[Type de lieu]", "[Commune]", "[Surface]"],
    resume: "[Quelques lignes à venir : la demande de départ et le parti pris.]",
    texte: [],
    photos: p.beguin,
    alt: "Projet Beguin",
  },
];

export const getProjet = (slug: string) => projets.find((x) => x.slug === slug);
export const src = (ph: Photo) => `/projets/${ph.file.split("-")[0]}/${ph.file}`;
