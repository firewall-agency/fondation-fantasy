'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const projets = [
  {
    icon: '🕌',
    title: 'Construction de mosquées',
    description:
      "Bâtir des lieux de culte dans les villages éloignés d'Abidjan, où les populations locales n'ont pas toujours accès à un espace de prière digne. Une mosquée, c'est aussi un point de rassemblement et de transmission qui structure la vie communautaire.",
    color: 'from-[#1e3a8a] to-[#0c1e3e]',
    accent: 'text-[#1e3a8a]',
    border: 'border-[#1e3a8a]/20',
    bgSoft: 'bg-[#1e3a8a]/5',
  },
  {
    icon: '💧',
    title: 'Construction de forages',
    description:
      "Apporter de l'eau potable là où le besoin se fait sentir. Dans plusieurs zones rurales, les familles parcourent encore des kilomètres pour accéder à une source d'eau saine. Un forage, c'est la santé et la dignité retrouvées pour tout un village.",
    color: 'from-[#0891b2] to-[#0e7490]',
    accent: 'text-[#0891b2]',
    border: 'border-[#0891b2]/20',
    bgSoft: 'bg-[#0891b2]/5',
  },
  {
    icon: '🏠',
    title: "Centre d'accueil pour personnes vulnérables",
    description:
      "Construire un lieu pérenne pour accueillir les orphelins, les veuves et toutes les personnes en grande vulnérabilité. Un toit, un encadrement, un accompagnement quotidien — la fondation rêve d'offrir ce socle qui change une vie.",
    color: 'from-[#15803d] to-[#0f6b32]',
    accent: 'text-[#15803d]',
    border: 'border-[#15803d]/20',
    bgSoft: 'bg-[#15803d]/5',
  },
];

export default function NosProjetsPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-[#0c1e3e] via-[#1e3a8a] to-[#0c1e3e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-5">
              Vision à long terme
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Les projets qui<br />
              <span className="bg-gradient-to-r from-[#22c55e] to-[#fbbf24] bg-clip-text text-transparent">
                façonneront demain
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Au-delà de nos actions quotidiennes, la Fondation Fanta Sy porte des ambitions
              durables, pensées pour transformer profondément les conditions de vie des plus fragiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[#15803d] mb-3">Nos ambitions</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0c1e3e] mb-6 leading-tight">
              Trois grands chantiers pour les années à venir
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Aider au quotidien, oui — mais aussi bâtir des infrastructures qui perdureront
              bien après nous. Voici les projets que nous souhaitons concrétiser, avec le
              soutien de nos donateurs et partenaires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {projets.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl border ${p.border} ${p.bgSoft} overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${p.color}`} />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8 md:p-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-xl`}>
                    <div className="text-6xl drop-shadow-lg">{p.icon}</div>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className={`text-xs font-bold uppercase tracking-widest ${p.accent} mb-3`}>
                    Projet {i + 1} sur {projets.length}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0c1e3e] mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#1e3a8a] to-[#0c1e3e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-5">🤲</div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Aidez-nous à donner vie à ces projets
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Chaque don, chaque soutien, chaque partenariat nous rapproche de ces ambitions.
              Ensemble, posons les pierres d&apos;un avenir plus solidaire.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/faire-un-don"
                className="px-8 py-4 rounded-xl text-base font-bold text-[#0c1e3e] bg-white hover:bg-slate-100 shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Faire un don
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all"
              >
                Devenir partenaire
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
