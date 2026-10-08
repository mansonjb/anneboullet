"use client";

import { useState } from "react";
import type { Projet } from "@/data/projets";
import { ProjetCard } from "./blocks";

const FILTRES = ["Tous", "Particulier", "Professionnel"] as const;

export default function RealisationsGrid({ projets }: { projets: Projet[] }) {
  const [f, setF] = useState<(typeof FILTRES)[number]>("Tous");
  const liste = f === "Tous" ? projets : projets.filter((p) => p.type === f);
  return (
    <>
      <div className="filters" role="group" aria-label="Filtrer les réalisations">
        {FILTRES.map((x) => (
          <button key={x} type="button" className="filter" aria-pressed={f === x} onClick={() => setF(x)}>
            {x === "Tous" ? "Tous les projets" : `${x}s`}
            <span>{x === "Tous" ? projets.length : projets.filter((p) => p.type === x).length}</span>
          </button>
        ))}
      </div>
      <div className="cards real-grid">
        {liste.map((p) => (
          <ProjetCard p={p} key={p.slug} />
        ))}
      </div>
    </>
  );
}
