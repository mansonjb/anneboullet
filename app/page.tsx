import Header from "@/components/Header";
import Temoignages from "@/components/Temoignages";
import { Arrow, Logo, Ph } from "@/components/ui";
import { projets } from "@/data/projets";

const [oleron, ermitage, beguin] = projets;

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
            </div>
            <div className="cards missions">
              <div className="card">
                <h3 className="serif">
                  <i className="dot" />
                  Conseils
                </h3>
                <p>Une visite chez vous et des pistes concrètes : couleurs, matières, agencement, pour avancer par vous-même.</p>
              </div>
              <div className="card on">
                <h3 className="serif">
                  <i className="dot" />
                  Conception
                </h3>
                <p>Plans, choix des matériaux, du mobilier et des luminaires : un projet complet, dessiné avant les travaux.</p>
              </div>
              <div className="card">
                <h3 className="serif">
                  <i className="dot" />
                  Décoration
                </h3>
                <p>Le choix et la mise en place du mobilier, des textiles et des objets, jusqu&apos;à la remise des clés.</p>
              </div>
            </div>
            <ol className="steps">
              <li>
                <h4 className="serif">La rencontre</h4>
                <p>Chez vous, pour comprendre le lieu, vos habitudes et votre budget.</p>
              </li>
              <li>
                <h4 className="serif">L&apos;esquisse</h4>
                <p>Une première direction : ambiance, couleurs, matières.</p>
              </li>
              <li>
                <h4 className="serif">Le projet</h4>
                <p>Plans, mobilier, matériaux et chiffrage.</p>
              </li>
              <li>
                <h4 className="serif">Le chantier</h4>
                <p>Le lien avec les artisans et le suivi.</p>
              </li>
              <li>
                <h4 className="serif">La réception</h4>
                <p>La mise en place finale et les derniers ajustements.</p>
              </li>
            </ol>
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
              <figure>
                <Ph
                  photo={ermitage.photos[1]}
                  ratio="1 / 1"
                  sizes="(max-width: 960px) 100vw, 540px"
                  alt="Projet Ermitage, banquette dans une niche orange"
                />
              </figure>
            </div>
          </section>

          <section className="sec">
            <div className="sec-top">
              <h2 className="h2 serif">
                Quelques repères <span className="mute">avant de se rencontrer</span>
              </h2>
            </div>
            <div className="cards">
              <div className="stat">
                <b>1 h</b>
                <span>de route autour de La Rochelle, Île de Ré et Oléron comprises</span>
              </div>
              <div className="stat on">
                <b>[XX]</b>
                <span>projets livrés depuis [année]</span>
              </div>
              <div className="stat">
                <b>3</b>
                <span>missions, du simple conseil au projet complet</span>
              </div>
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
