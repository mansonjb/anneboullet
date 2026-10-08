import type { Metadata } from "next";
import Image from "next/image";
import { Crumbs, Cta, PageHead } from "@/components/blocks";
import { Arrow } from "@/components/ui";
import { secteurs } from "@/data/site";

export const metadata: Metadata = {
  title: "Aménagement de lieux professionnels à La Rochelle",
  description: "Santé, bureaux, hébergement : aménagement, décoration et signalétique de lieux professionnels autour de La Rochelle.",
};

export default function Professionnels() {
  return (
    <>
      <Crumbs items={[{ label: "Professionnels" }]} />
      <PageHead
        kicker="Professionnels"
        h1={
          <>
            Des lieux de travail <span className="mute">où chacun se sent bien</span>
          </>
        }
        lede="Agencement, décoration et signalétique pour les lieux de santé, les bureaux et l'hébergement. Je travaille avec la direction, les services techniques et les équipes, qui sont impliquées dans le projet."
      />
      <section className="sec" style={{ paddingTop: 72 }}>
        <div className="sect-grid">
          {secteurs.map((s, k) => (
            <a key={s.slug} href={`/professionnels/${s.slug}`} className="sect-card">
              <div className="ph r-md" style={{ aspectRatio: "4 / 5" }}>
                {s.photo ? (
                  <Image src={s.photo} alt={s.h1} fill sizes="(max-width: 960px) 100vw, 380px" />
                ) : (
                  <div className="pro2-empty on">
                    <span className="serif">Photos à venir</span>
                  </div>
                )}
              </div>
              <span className="pro2-n">0{k + 1}</span>
              <h2 className="serif">{s.nom}</h2>
              <p>{s.detail}</p>
              <span className="m-link">
                Découvrir
                <Arrow size={14} />
              </span>
            </a>
          ))}
        </div>
      </section>
      <Cta titre="Parlons de votre lieu" texte="Un premier échange pour comprendre votre activité, vos équipes et vos contraintes." />
    </>
  );
}
