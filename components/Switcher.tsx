"use client";

import { useEffect, useState } from "react";

export const PISTES = {
  vert: "#56634F",
  sauge: "#62735D",
  terracotta: "#A5502F",
  brique: "#7A3B24",
  beige: "#8A6D4C",
  ocre: "#8C6A2F",
  ardoise: "#4A5A66",
  encre: "#2F2B27",
} as const;

type Piste = keyof typeof PISTES;

function save(k: string, v: string) {
  try {
    localStorage.setItem(k, v);
  } catch {}
}

export default function Switcher() {
  const [piste, setPiste] = useState<Piste>("vert");
  const [it, setIt] = useState(false);

  useEffect(() => {
    const d = document.documentElement.dataset;
    if (d.piste && d.piste in PISTES) setPiste(d.piste as Piste);
    setIt(d.italique === "1");
  }, []);

  const choose = (p: Piste) => {
    setPiste(p);
    document.documentElement.dataset.piste = p;
    save("ab-piste", p);
    const u = new URL(location.href);
    u.searchParams.set("piste", p);
    history.replaceState(null, "", u);
  };

  const toggleIt = () => {
    const v = !it;
    setIt(v);
    document.documentElement.dataset.italique = v ? "1" : "0";
    save("ab-italique", v ? "1" : "0");
  };

  return (
    <div className="switch" role="group" aria-label="Choisir la couleur d'accent">
      <span className="lbl">
        Piste <b>{piste}</b>
      </span>
      <div className="dots">
        {(Object.keys(PISTES) as Piste[]).map((p) => (
          <button
            key={p}
            type="button"
            className="sw"
            style={{ background: PISTES[p] }}
            aria-pressed={piste === p}
            aria-label={`Piste ${p}`}
            title={p}
            onClick={() => choose(p)}
          />
        ))}
      </div>
      <button type="button" className="it" aria-pressed={it} title="Accents en italique" onClick={toggleIt}>
        Aa
      </button>
    </div>
  );
}
