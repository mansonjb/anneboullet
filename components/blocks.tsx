import { getProjet, type Projet } from "@/data/projets";
import { Arrow, Ph } from "./ui";

export function Crumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Fil d'Ariane">
      <ol>
        <li>
          <a href="/">Accueil</a>
        </li>
        {items.map((it) => (
          <li key={it.label}>{it.href ? <a href={it.href}>{it.label}</a> : <span aria-current="page">{it.label}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHead({ kicker, h1, lede, children }: { kicker?: string; h1: React.ReactNode; lede?: string; children?: React.ReactNode }) {
  return (
    <section className="p-head">
      {kicker && <p className="pro2-kicker">{kicker}</p>}
      <h1 className="h1 serif">{h1}</h1>
      {lede && (
        <p className="lede" style={{ marginBottom: 0 }}>
          {lede}
        </p>
      )}
      {children}
    </section>
  );
}

export function Cta({ titre = "Parlons de votre projet", texte = "Quelques lignes suffisent pour un premier échange, puis un rendez-vous sur place." }: { titre?: string; texte?: string }) {
  return (
    <section className="cta-band">
      <h2 className="h2 serif">{titre}</h2>
      <p>{texte}</p>
      <a className="pill-btn bg-surface" href="/contact">
        Prendre rendez-vous
        <span className="arrow">
          <Arrow />
        </span>
      </a>
    </section>
  );
}

export function ProjetCard({ p, meta }: { p: Projet; meta?: string }) {
  return (
    <article className="proj">
      <a href={`/realisations/${p.slug}`} aria-hidden="true" tabIndex={-1} className="proj-ph">
        <Ph photo={p.photos[0]} ratio="4 / 5" className="r-md" sizes="(max-width: 960px) 100vw, 380px" alt={p.alt} />
      </a>
      <h3 className="serif">{p.titre}</h3>
      <p>{meta ?? p.meta.join(" · ")}</p>
      <a href={`/realisations/${p.slug}`}>Voir le projet</a>
    </article>
  );
}

export function ProjetsLies({ slugs, titre = "Un projet en exemple" }: { slugs: string[]; titre?: string }) {
  const ps = slugs.map(getProjet).filter(Boolean) as Projet[];
  if (!ps.length) return null;
  return (
    <section className="sec">
      <div className="sec-top">
        <h2 className="h2 serif">{titre}</h2>
      </div>
      {ps.length === 1 ? (
        <a className="proj-one" href={`/realisations/${ps[0].slug}`}>
          <Ph photo={ps[0].photos[0]} ratio="3 / 2" className="r-lg" sizes="(max-width: 960px) 100vw, 700px" alt={ps[0].alt} />
          <div>
            <p className="pro2-kicker">{ps[0].type === "Professionnel" ? "Projet professionnel" : "Projet particulier"}</p>
            <h3 className="serif">{ps[0].titre}</h3>
            <p>{ps[0].resume}</p>
            <p className="proj-meta">{ps[0].meta.join(" · ")}</p>
            <span className="m-link">
              Voir le projet
              <Arrow size={14} />
            </span>
          </div>
        </a>
      ) : (
        <div className="cards">
          {ps.map((p) => (
            <ProjetCard p={p} key={p.slug} />
          ))}
        </div>
      )}
    </section>
  );
}

export function Accordion({ items }: { items: { q: string; r: string }[] }) {
  return (
    <div className="acc-list">
      {items.map((it) => (
        <details key={it.q} className="acc-item">
          <summary>
            <span className="serif">{it.q}</span>
            <span className="acc-ic" aria-hidden="true" />
          </summary>
          <p>{it.r}</p>
        </details>
      ))}
    </div>
  );
}
