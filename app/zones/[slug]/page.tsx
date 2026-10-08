import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crumbs, Cta, PageHead, ProjetsLies } from "@/components/blocks";
import { Arrow } from "@/components/ui";
import { autresZones, missions, zones } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return zones.map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({ params }: PageProps<"/zones/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const z = zones.find((x) => x.slug === slug);
  return { title: z?.h1 ?? "Secteur", description: z?.lede };
}

export default async function ZonePage({ params }: PageProps<"/zones/[slug]">) {
  const { slug } = await params;
  const z = zones.find((x) => x.slug === slug);
  if (!z) notFound();
  const autres = zones.filter((x) => x.slug !== z.slug);

  return (
    <>
      <Crumbs items={[{ label: "Secteurs" }, { label: z.nom }]} />
      <PageHead kicker={`Secteur · ${z.nom}`} h1={z.h1} lede={z.lede} />

      <section className="sec duo" style={{ paddingTop: 72, alignItems: "start" }}>
        <div className="zone-txt">
          {z.texte.map((t) => (
            <p key={t.slice(0, 20)}>{t}</p>
          ))}
          <p className="note">Frais de déplacement selon la distance. Missions à distance possibles.</p>
        </div>
        <div className="zone-box">
          <p className="pro2-kicker">Communes</p>
          <ul className="communes">
            {z.communes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <ProjetsLies slugs={z.projets} titre={`Un projet à ${z.nom === "Île de Ré" ? "l'Île de Ré" : z.nom}`} />

      <section className="sec">
        <div className="sec-top">
          <h2 className="h2 serif">
            Trois façons <span className="mute">de travailler ensemble</span>
          </h2>
        </div>
        <div className="other-m">
          {missions.map((m) => (
            <a key={m.slug} href={`/missions/${m.slug}`} className="other-link">
              <span className="pro2-n">Mission {m.n}</span>
              <span className="serif">{m.titre}</span>
              <span>{m.lede}</span>
              <span className="arrow">
                <Arrow size={14} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="sec zone-others">
        <p className="pro2-kicker">Le studio intervient aussi à</p>
        <ul>
          {autres.map((x) => (
            <li key={x.slug}>
              <a href={`/zones/${x.slug}`}>{x.nom}</a>
            </li>
          ))}
          {autresZones.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>
      <Cta />
    </>
  );
}
