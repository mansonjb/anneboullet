"use client";

import { useState } from "react";
import { Arrow } from "./ui";

// Avis Google réels (extraits, coupures signalées par […], coquilles corrigées).
const avis = [
  {
    texte:
      "Ce que j'ai le plus apprécié, ce sont les étapes pour parvenir au projet final : du questionnaire sur nos habitudes de vie jusqu'à l'avant-projet détaillé et la shopping list. […] J'ai totalement eu confiance et ne regrette pas l'accompagnement du début à la fin.",
    nom: "Isabelle A.",
    contexte: "Agrandissement d'une maison de vacances",
  },
  {
    texte:
      "Après avoir acheté une maison datant de 1650, à totalement rénover, Anne a été un atout essentiel pour la rendre fonctionnelle et esthétique. Le résultat dépasse mes espérances. […] La famille s'y sent bien.",
    nom: "Guirec T.",
    contexte: "Rénovation d'une maison de 1650",
  },
  {
    texte:
      "C'est une parfaite rénovation, faite avec du goût, des idées novatrices et du talent. Je n'aurais jamais osé la couleur sans elle.",
    nom: "Sylvie B.",
    contexte: "Rénovation d'un appartement",
  },
  {
    texte:
      "Les propositions déco d'Anne nous ont tout de suite plu, car elle a su capter nos besoins et nos attentes. Les artisans recommandés étaient très professionnels et de confiance.",
    nom: "Julia B.",
    contexte: "Projet de décoration",
  },
  {
    texte:
      "Anne m'a accompagné sur deux projets de rénovation : efficacité, disponibilité, force de propositions. Je recommande !",
    nom: "Clément W.",
    contexte: "Deux projets de rénovation",
  },
  {
    texte:
      "Avec beaucoup de talent, Anne Boullet a su rénover et décorer superbement une maison du XIXᵉ siècle pour l'un de mes clients.",
    nom: "Isabelle A. de S.",
    contexte: "Rénovation d'une maison du XIXᵉ siècle",
  },
];

export default function Temoignages() {
  const [i, setI] = useState(0);
  const a = avis[i];
  const go = (d: number) => setI((x) => (x + d + avis.length) % avis.length);

  return (
    <div>
      <blockquote className="temo-q" aria-live="polite" key={i}>
        <p className={`serif${a.texte.length > 180 ? " long" : ""}`}>« {a.texte} »</p>
      </blockquote>
      <div className="who">
        <div>
          <strong>{a.nom}</strong>
          <span>
            {a.contexte} · Avis Google
          </span>
        </div>
        <div className="who-nav">
          <span className="who-count" aria-hidden="true">
            {i + 1} / {avis.length}
          </span>
          <button className="circ" type="button" aria-label="Avis précédent" onClick={() => go(-1)}>
            <Arrow size={14} back />
          </button>
          <button className="circ on" type="button" aria-label="Avis suivant" onClick={() => go(1)}>
            <Arrow size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
