import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crumbs, Cta } from "@/components/blocks";
import { Arrow, Ph } from "@/components/ui";
import { getProjet, projets } from "@/data/projets";
import { missions, secteurs, zones } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const p = getProjet((await params).slug);
  return { title: p?.titre ?? "Réalisation", description: p?.resume };
}

export default async function Realisation({ params }: PageProps<"/realisations/[slug]">) {
  const p = getProjet((await params).slug);
  if (!p) notFound();
  const i = projets.indexOf(p);
  const suivant = projets[(i + 1) % projets.length];
  const mission = missions.find((m) => m.slug === p.mission);
  const secteur = secteurs.find((s) => s.slug === p.secteur);
  const zone = zones.find((z) => z.slug === p.zone);

  return (
    <>
      <Crumbs items={[{ href: "/realisations", label: "Réalisations" }, { label: p.titre }]} />
      <section className="p-head">
        <p className="pro2-kicker">{p.type === "Professionnel" ? "Projet professionnel" : "Projet particulier"}</p>
        <h1 className="h1 serif">{p.titre}</h1>
        <p className="lede" style={{ marginBottom: 0 }}>
          {p.resume}
        </p>
        <div className="p-meta">
          {p.meta.map((m) => (
            <span className="tag" key={m}>
              {m}
            </span>
          ))}
        </div>
      </section>

      <figure className="hero-photo" style={{ marginTop: 56 }}>
        <Ph photo={p.photos[0]} ratio="16 / 9" preload alt={`${p.alt}, vue d'ensemble`} />
      </figure>

      {p.texte.length > 0 && (
        <section className="p-text">
          {p.texte.map((b) => (
            <div key={b.titre}>
              <h2 className="serif">{b.titre}</h2>
              {b.paragraphes.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
          ))}
        </section>
      )}

      {(mission || secteur || zone || p.partenaires) && (
        <aside className="p-links">
          {mission && (
            <a href={`/missions/${mission.slug}`}>
              <span>Mission</span>
              {mission.titre}
              <Arrow size={14} />
            </a>
          )}
          {secteur && (
            <a href={`/professionnels/${secteur.slug}`}>
              <span>Secteur</span>
              {secteur.nom}
              <Arrow size={14} />
            </a>
          )}
          {zone && (
            <a href={`/zones/${zone.slug}`}>
              <span>Secteur géographique</span>
              {zone.nom}
              <Arrow size={14} />
            </a>
          )}
          {p.partenaires && (
            <div>
              <span>Artisans</span>
              {p.partenaires.join(", ")}
            </div>
          )}
        </aside>
      )}

      <section className="gal" aria-label="Galerie photos">
        {p.photos.slice(1).map((ph, k) => (
          <figure key={ph.file}>
            <Ph photo={ph} className="" sizes="(max-width: 960px) 100vw, 580px" alt={`${p.alt}, photo ${k + 2}`} />
          </figure>
        ))}
      </section>

      <section className="next-p">
        <p className="cap" style={{ marginBottom: 12 }}>
          Projet suivant
        </p>
        <a className="ghost" href={`/realisations/${suivant.slug}`}>
          {suivant.titre}
          <span className="arrow">
            <Arrow size={14} />
          </span>
        </a>
      </section>
      <Cta titre="Un projet similaire ?" />
    </>
  );
}
