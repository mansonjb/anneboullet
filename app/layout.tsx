import type { Metadata } from "next";
import { Jost, Newsreader } from "next/font/google";
import Switcher from "@/components/Switcher";
import "./globals.css";

const jost = Jost({ variable: "--font-jost", subsets: ["latin"], weight: ["400", "500"] });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Anne Boullet Studio · Décoratrice d'intérieur à La Rochelle",
  description:
    "Conseil, conception et décoration pour les particuliers et les professionnels, à une heure autour de La Rochelle, sur l'Île de Ré et Oléron.",
  robots: { index: false, follow: false },
};

// Applique la piste avant le premier rendu (URL ?piste= puis mémoire locale), sans flash.
const init = `try{var d=document.documentElement,q=new URLSearchParams(location.search).get('piste'),k=['vert','sauge','terracotta','brique','beige','ocre','ardoise','encre'],s=null;try{s=localStorage.getItem('ab-piste')}catch(e){}var p=k.indexOf(q)>-1?q:(k.indexOf(s)>-1?s:'vert');d.dataset.piste=p;var i=null;try{i=localStorage.getItem('ab-italique')}catch(e){}d.dataset.italique=i==='1'?'1':'0'}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" data-piste="vert" className={`${jost.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: init }} />
      </head>
      <body>
        <a className="skip" href="#contenu">Aller au contenu</a>
        {children}
        <Switcher />
      </body>
    </html>
  );
}
