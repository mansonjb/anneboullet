import Image from "next/image";
import Temoignages from "@/components/Temoignages";
import Pros from "@/components/Pros";
import ContactForm from "@/components/ContactForm";
import { contact, faqPages } from "@/data/site";
import { Arrow, Ph } from "@/components/ui";
import { FaqBlock, ProjetCard } from "@/components/blocks";
import { getProjet, type Projet } from "@/data/projets";
import { missions, services } from "@/data/site";
import { JsonLd } from "@/components/blocks";

const oleron = getProjet("maison-de-famille-saint-denis-d-oleron") as Projet;
const parpaillaud = getProjet("maison-de-village-saint-clement-des-baleines") as Projet;
const ermitage = getProjet("decoration-maison-esprit-surf-la-rochelle") as Projet;


const matieres = [
  { nom: "Le bois", ligne: "Il porte la maison et la réchauffe.", img: "bois", lieu: "Charpente apparente, Saint-Denis-d'Oléron" },
  { nom: "Les fibres", ligne: "Rotin et jute laissent passer une lumière adoucie.", img: "rotin", lieu: "Suspensions, Saint-Denis-d'Oléron" },
  { nom: "Les textiles", ligne: "Lin et tissus imprimés invitent à s'installer.", img: "lin", lieu: "Coussins, Saint-Denis-d'Oléron" },
  { nom: "Le zellige", ligne: "Chaque carreau renvoie la lumière à sa façon.", img: "zellige", lieu: "Douche, Saint-Clément-des-Baleines" },
  { nom: "La pierre", ligne: "Elle garde la mémoire du lieu.", img: "pierre", lieu: "Mur en pierre, Saint-Clément-des-Baleines" },
  { nom: "Le laiton", ligne: "Il se patine avec le temps et réchauffe la lumière.", img: "laiton", lieu: "Pommeau de douche, Les Portes-en-Ré" },
];

const etapes = [
  { titre: "Premier contact", texte: "Un échange pour comprendre votre projet et vos envies." },
  { titre: "Visite et devis", texte: "Une rencontre sur place, puis un devis accompagné d'un débriefing écrit." },
  { titre: "Carnet de projet", texte: "Un questionnaire sur votre façon de vivre et le relevé des cotes." },
  { titre: "Esquisse puis projet", texte: "Avant-projet sommaire, puis détaillé : plans de principe, matières, 3D." },
  { titre: "Suivi et réception", texte: "Un suivi esthétique du chantier, jusqu'à la réception." },
];

export default function Home() {
  return (
    <>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Anne Boullet Studio",
              description: "Décoratrice d'intérieur à La Rochelle : conseil, conception et décoration pour les particuliers et les professionnels.",
              url: "https://anneboullet.vercel.app",
              address: { "@type": "PostalAddress", addressLocality: "La Rochelle", postalCode: "17000", addressCountry: "FR" },
              areaServed: ["La Rochelle", "Île de Ré", "Oléron", "Châtelaillon-Plage", "Rochefort", "Royan", "Saintes"],
              knowsAbout: ["Décoration d'intérieur", "Agencement intérieur", "Signalétique", "Rénovation"],
            }}
          />
          <section className="hero">
            <h1 className="h1 serif">
              Décoratrice d&apos;intérieur <span className="mute">à La Rochelle</span>
            </h1>
            <p className="lede">
              Des maisons lumineuses et chaleureuses, pensées pour durer. Conseil, conception et décoration pour les
              particuliers et les professionnels, à une heure autour de La Rochelle.
            </p>
            <a className="pill-btn bg-surface" href="/contact">
              Prendre rendez-vous
              <span className="arrow">
                <Arrow />
              </span>
            </a>
          </section>

          <figure className="hero-photo">
            <Ph
              photo={oleron.photos[0]}
              ratio="16 / 9"
              preload
              alt="Séjour de la maison de famille à Saint-Denis-d'Oléron : charpente apparente, bois blond, lin et rotin"
            />
            <figcaption className="cap center">Maison de famille, Saint-Denis-d&apos;Oléron</figcaption>
          </figure>

          <section className="zone" aria-label="Zone d'intervention">
            <p>Le studio intervient à</p>
            <ul>
              <li><a href="/zones/la-rochelle">La Rochelle</a></li>
              <li><a href="/zones/ile-de-re">Île de Ré</a></li>
              <li><a href="/zones/oleron">Oléron</a></li>
              <li>Châtelaillon</li>
              <li>Rochefort</li>
            </ul>
          </section>

          <section className="sec duo" id="approche">
            <div>
              <h2 className="h2 serif">
                Des intérieurs qui semblent <span className="mute">avoir toujours vécu</span>
              </h2>
              <p className="body">
                Chaque projet part de la lumière, de la maison telle qu&apos;elle est et de la façon dont vous y vivez. Le
                bois, le lin, la terre cuite et la pierre sont choisis pour bien vieillir, loin des tendances qui
                passent.
              </p>
              <a className="ghost" href="#missions">
                Découvrir le studio
                <span className="arrow">
                  <Arrow size={14} />
                </span>
              </a>
            </div>
            <figure className="duo-photo">
              <Ph
                photo={oleron.photos[1]}
                ratio="4 / 5"
                sizes="(max-width: 960px) 100vw, 580px"
                alt="Maison de famille à Saint-Denis-d'Oléron, séjour et objets de famille"
              />
            </figure>
          </section>

          <section className="sec" id="missions">
            <div className="sec-top">
              <h2 className="h2 serif">
                Trois façons <span className="mute">de travailler ensemble</span>
              </h2>
              <p className="sec-lede">Du simple regard extérieur au projet complet : vous choisissez le niveau d&apos;accompagnement.</p>
            </div>
            <div className="missions">
              {missions.map((m) => (
                <article className="mission" key={m.titre}>
                  <p className="m-n">Mission {m.n}</p>
                  <h3 className="serif">{m.titre}</h3>
                  <p className="m-lede">{m.lede}</p>
                  <p className="m-lbl">Vous recevez</p>
                  <ul>
                    {m.recu.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <p className="m-pour">
                    <span>Idéal pour</span> {m.pour}
                  </p>
                  <a className="m-link" href={`/missions/${m.slug}`}>
                    Découvrir la mission
                    <Arrow size={14} />
                  </a>
                </article>
              ))}
            </div>

            <div className="methode">
              <h3 className="serif methode-t">
                Un projet, <span className="mute">en cinq temps</span>
              </h3>
              <ol className="frise">
                {etapes.map((s, k) => (
                  <li key={s.titre}>
                    <span className="f-n">{k + 1}</span>
                    <h4 className="serif">{s.titre}</h4>
                    <p>{s.texte}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="sec" id="realisations">
            <div className="sec-top">
              <h2 className="h2 serif">
                Des maisons <span className="mute">qui racontent quelque chose</span>
              </h2>
            </div>
            <div className="cards">
              {[oleron, parpaillaud, ermitage].map((p) => (
                <ProjetCard p={p} key={p.slug} />
              ))}
            </div>
            <p className="center" style={{ marginTop: 40 }}>
              <a className="ghost" href="/realisations">
                Toutes les réalisations
                <span className="arrow">
                  <Arrow size={14} />
                </span>
              </a>
            </p>
          </section>

          <section className="sec">
            <div className="sec-top">
              <h2 className="h2 serif">
                D&apos;une maison vide <span className="mute">à une maison habitée</span>
              </h2>
            </div>
            <div className="temo">
              <Temoignages />
            </div>
          </section>

          <section className="sec" id="matieres">
            <div className="sec-top sec-top-wide">
              <h2 className="h2 serif">
                Une maison se raconte <span className="mute">par ses matières</span>
              </h2>
              <p className="sec-lede">
                Avant les couleurs et les meubles, je pense à ce que vous toucherez chaque jour : des matières naturelles, travaillées par des
                artisans d&apos;ici, qui vieillissent avec la maison.
              </p>
            </div>
            <ol className="mat">
              {matieres.map((m, k) => (
                <li key={m.nom}>
                  <figure>
                    <div className="ph r-md" style={{ aspectRatio: "4 / 5" }}>
                      <Image src={`/matieres/${m.img}.jpg`} alt={`${m.nom.replace(/^L[ea]s? |^L'/, "")} : ${m.lieu}`} fill sizes="(max-width: 960px) 50vw, 380px" />
                    </div>
                    <figcaption>
                      <span className="mat-n">0{k + 1}</span>
                      <span className="serif mat-t">{m.nom}</span>
                      <span className="mat-l">{m.ligne}</span>
                      <span className="mat-p">{m.lieu}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ol>
          </section>

          <section className="sec" id="professionnels">
            <Pros />
          </section>

          <section className="sec sf" id="savoir-faire">
            <div className="sf-head">
              <h2 className="h2 serif">
                Huit savoir-faire, <span className="mute">un même regard</span>
              </h2>
              <a className="m-link" href="/services">
                Tous les savoir-faire
                <Arrow size={14} />
              </a>
            </div>
            <ol className="sf-list">
              {services.map((s, k) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`}>
                    <span className="sf-n">{String(k + 1).padStart(2, "0")}</span>
                    <span className="sf-name serif">{s.nom}</span>
                    <Arrow size={16} />
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <FaqBlock items={faqPages.accueil} />

          <section className="sec" id="contact">
            <div className="contact">
              <div>
                <h2 className="h2 serif">
                  Parlons de <span className="mute">votre projet</span>
                </h2>
                <p style={{ color: "#4F4840", margin: "20px 0 0" }}>
                  Quelques lignes suffisent. Anne vous rappelle sous [délai] pour un premier échange, puis un rendez-vous
                  sur place.
                </p>
                <ul className="ct-lines">
                  <li>
                    <span>Téléphone</span>
                    <a href="#">{contact.tel}</a>
                  </li>
                  <li>
                    <span>WhatsApp</span>
                    <a href="#">{contact.whatsapp}</a>
                  </li>
                  <li>
                    <span>E-mail</span>
                    <a href="#">{contact.mail}</a>
                  </li>
                </ul>
              </div>
              <ContactForm />
            </div>
          </section>
    </>
  );
}
