import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Fondation Fanta Sy — Donner de l'espoir, transformer des vies",
  description:
    "Fondation Fanta Sy : aide aux orphelins, soutien aux veuves et accompagnement des familles en difficulté en Côte d'Ivoire. Rejoignez-nous pour bâtir un avenir solidaire.",
  keywords: [
    "Fondation Fanta Sy",
    "fondation Côte d'Ivoire",
    "aide orphelins",
    "soutien veuves",
    "humanitaire Abidjan",
    "don solidaire",
  ],
  openGraph: {
    title: "Fondation Fanta Sy",
    description: "Donner de l'espoir, transformer des vies.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
