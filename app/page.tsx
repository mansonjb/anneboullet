import Image from "next/image";
import Header from "@/components/Header";
import Temoignages from "@/components/Temoignages";
import { Arrow, Logo, Ph } from "@/components/ui";
import { projets } from "@/data/projets";

const [oleron, ermitage, beguin] = projets;

const missions = [
  {
    n: "01",
    titre: "Conseils",
    lede: "Un regard extérieur, le temps d'une visite chez vous.",
    recu: ["Un rendez-vous d'1 h 30 sur place, nuancier et échantillons en main", "Un compte rendu écrit : points clés, astuces, croquis"],
    pour: "avancer par vous-même avec les bonnes pistes.",
  },
  {
    n: "02",
    titre: "Conception",
    lede: "Le projet entièrement dessiné, avant les travaux.",
    recu: ["Plans de principe et d'implantation", "Planches couleurs et matériaux", "Perspectives 3D et fourchettes budgétaires"],
    pour: "une rénovation, une extension ou une redistribution des pièces.",
  },
  {
    n: "03",
    titre: "Décoration",
    lede: "Les bons objets, au bon endroit.",
    recu: ["La sélection du mobilier, des luminaires et des textiles", "Une shopping list prête à commander"],
    pour: "habiller un lieu déjà agencé.",
  },
];

const matieres = [
  { nom: "Bois", img: "bois", lieu: "Charpente apparente, Saint-Denis-d'Oléron" },
  { nom: "Fibres naturelles", img: "rotin", lieu: "Suspensions en rotin, Saint-Denis-d'Oléron" },
  { nom: "Textiles", img: "lin", lieu: "Coussins et tissus imprimés, Saint-Denis-d'Oléron" },
  { nom: "Zellige", img: "zellige", lieu: "Douche, Saint-Clément-des-Baleines" },
  { nom: "Pierre", img: "pierre", lieu: "Mur en pierre, Saint-Clément-des-Baleines" },
  { nom: "Teintes chaudes", img: "terre", lieu: "Tête de lit, Saint-Clément-des-Baleines" },
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
    <div className="page">
      <div className="wrap">
        <Header />

        <main id="contenu">
          <section className="hero">
            <h1 className="h1 serif">
              Décoratrice d&apos;intérieur <span className="mute">à La Rochelle</span>
            </h1>
            <p className="lede">
              Des maisons lumineuses et chaleureuses, pensées pour durer. Conseil, conception et décoration pour les
              particuliers et les professionnels, à une heure autour de La Rochelle.
            </p>
            <a className="pill-btn bg-surface" href="#contact">
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
              <li>La Rochelle</li>
              <li>Île de Ré</li>
              <li>Oléron</li>
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
                Chaque projet part de la lumière, de la maison telle qu&apos;elle est et de la façon dont on y vit. Le
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
              {[
                { p: oleron, ph: oleron.photos[2], meta: "Conception et décoration · 170 m²" },
                { p: ermitage, ph: ermitage.photos[0], meta: "[Type de lieu] · [Commune] · [Surface]" },
                { p: beguin, ph: beguin.photos[0], meta: "[Type de lieu] · [Commune] · [Surface]" },
              ].map(({ p, ph, meta }) => (
                <article className="proj" key={p.slug}>
                  <a href={`/realisations/${p.slug}`} aria-hidden="true" tabIndex={-1}>
                    <Ph photo={ph} ratio="4 / 5" className="r-md" sizes="(max-width: 960px) 100vw, 380px" alt={p.alt} />
                  </a>
                  <h3 className="serif">{p.titre}</h3>
                  <p>{meta}</p>
                  <a href={`/realisations/${p.slug}`}>Voir le projet</a>
                </article>
              ))}
            </div>
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
            <div className="sec-top">
              <h2 className="h2 serif">
                Les matières <span className="mute">qui reviennent</span>
              </h2>
              <p className="sec-lede">Bois, fibres naturelles, zellige, pierre : des matières vraies, qui vieillissent bien avec la maison.</p>
            </div>
            <div className="mat">
              {matieres.map((m) => (
                <figure key={m.nom}>
                  <div className="ph r-md" style={{ aspectRatio: "4 / 5" }}>
                    <Image src={`/matieres/${m.img}.jpg`} alt={`${m.nom} : ${m.lieu}`} fill sizes="(max-width: 960px) 50vw, 380px" />
                  </div>
                  <figcaption>
                    <span className="serif">{m.nom}</span>
                    {m.lieu}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="sec" id="professionnels">
            <div className="pro">
              <div>
                <h2 className="h2 serif">
                  Des lieux de travail <span className="acc">où l&apos;on se sent bien</span>
                </h2>
                <p>Lieux d&apos;accueil qui rassurent, espaces de travail apaisés : conçus avec la même attention qu&apos;une maison.</p>
              </div>
              <ul>
                <li>
                  <b>Santé</b>
                  <span>Cabinets, maternité, salles d&apos;attente</span>
                </li>
                <li>
                  <b>Bureaux</b>
                  <span>Espaces de travail et d&apos;accueil</span>
                </li>
                <li>
                  <b>Hébergement</b>
                  <span>Chambres d&apos;hôtes, locations</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="sec" id="contact">
            <div className="contact">
              <div>
                <h2 className="h2 serif">
                  Parlons de <span className="mute">votre projet</span>
                </h2>
                <p style={{ color: "#4F4840", margin: "20px 0 0", maxWidth: "26em" }}>
                  Quelques lignes suffisent. Anne vous rappelle sous [délai] pour un premier échange, puis un rendez-vous
                  sur place.
                </p>
                <ul className="ct-lines">
                  <li>
                    <span>Téléphone</span>
                    <a href="#">[06 00 00 00 00]</a>
                  </li>
                  <li>
                    <span>WhatsApp</span>
                    <a href="#">[Lien]</a>
                  </li>
                  <li>
                    <span>E-mail</span>
                    <a href="#">[contact@anneboullet.fr]</a>
                  </li>
                </ul>
              </div>
              <form aria-label="Demande de rendez-vous">
                <fieldset className="field">
                  <legend>Vous êtes</legend>
                  <div className="seg">
                    <label>
                      <input type="radio" name="profil" defaultChecked /> Particulier
                    </label>
                    <label>
                      <input type="radio" name="profil" /> Professionnel
                    </label>
                  </div>
                </fieldset>
                <div className="field">
                  <label htmlFor="c-projet">Type de projet</label>
                  <select id="c-projet">
                    <option>Maison</option>
                    <option>Appartement</option>
                    <option>Résidence secondaire</option>
                    <option>Local professionnel</option>
                  </select>
                </div>
                <div className="row2">
                  <div className="field">
                    <label htmlFor="c-commune">Commune</label>
                    <input id="c-commune" type="text" autoComplete="address-level2" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-surface">Surface approximative</label>
                    <input id="c-surface" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="c-msg">Votre projet en quelques mots</label>
                  <textarea id="c-msg" />
                </div>
                <div className="field">
                  <label htmlFor="c-mail">E-mail ou téléphone</label>
                  <input id="c-mail" type="text" />
                </div>
                <button className="pill-btn bg-surface" type="button">
                  Envoyer la demande
                  <span className="arrow">
                    <Arrow />
                  </span>
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="ft">
          <Logo />
          <address>
            Anne Boullet Studio
            <br />
            [Adresse]
            <br />
            17000 La Rochelle
            <br />
            [Téléphone]
          </address>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Mentions légales</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
