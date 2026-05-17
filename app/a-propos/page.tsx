'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const valeurs = [
  {
    icon: '🤝',
    title: 'Solidarité',
    text: "L'entraide collective est notre fondement. Personne ne devrait être laissé seul face à la difficulté.",
    color: 'from-[#1e3a8a] to-[#0c1e3e]',
  },
  {
    icon: '🕊',
    title: 'Respect',
    text: "Chaque personne, quelle que soit sa situation, mérite d'être traitée avec dignité et bienveillance.",
    color: 'from-[#15803d] to-[#0f6b32]',
  },
  {
    icon: '💪',
    title: 'Engagement',
    text: 'Notre dévouement est constant pour créer un changement durable dans la vie de ceux que nous accompagnons.',
    color: 'from-[#ca8a04] to-[#a16207]',
  },
];

export default function AProposPage() {
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
              À propos de la Fondation
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Une vision simple,<br />
              <span className="bg-gradient-to-r from-[#22c55e] to-[#fbbf24] bg-clip-text text-transparent">
                une mission puissante
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Apporter de l&apos;espoir et de la dignité aux personnes vulnérables,
              et bâtir une société plus équitable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a] mb-3">Notre histoire</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0c1e3e] mb-8 leading-tight">
              Née d&apos;une conviction profonde
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-5">
              <p>
                La <strong>Fondation Fanta Sy</strong> est née d&apos;une vision simple mais puissante :
                apporter de l&apos;espoir et de la dignité à ceux que la vie a fragilisés.
                Elle s&apos;est construite autour de la conviction profonde que la solidarité et la compassion
                sont les piliers d&apos;une société plus équitable.
              </p>
              <p>
                Aux côtés des <strong>orphelins, des veuves et des familles en situation précaire</strong>,
                nous œuvrons chaque jour pour transformer leurs conditions de vie. Notre engagement va au-delà
                de l&apos;aide matérielle : nous accompagnons aussi sur le plan psychologique, parce que reconstruire
                une vie passe aussi par le moral et l&apos;estime de soi.
              </p>
              <p>
                Notre conviction : <em>aucune circonstance ne devrait priver un être humain
                d&apos;espoir et de dignité.</em>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 md:py-28 bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[#15803d] mb-3">Nos valeurs</div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0c1e3e] mb-5 leading-tight">
              Trois piliers guident notre action
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valeurs.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-2xl hover:shadow-slate-200 transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${v.color}`} />
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="text-2xl font-bold text-[#0c1e3e] mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center"
          >
            <div className="lg:col-span-2">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1e3a8a] to-[#15803d] p-12 flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/10 blur-2xl" />
                <div className="text-[160px] leading-none drop-shadow-2xl relative">🌍</div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="text-xs font-bold uppercase tracking-widest text-[#ca8a04] mb-3">Notre vision</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0c1e3e] mb-6 leading-tight">
                Un monde où chacun vit avec espoir et dignité
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-5">
                Nous aspirons à un monde où <strong>chaque individu</strong>, quelles que soient ses circonstances,
                puisse vivre avec espoir, dignité et la conviction d&apos;avoir sa place.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                C&apos;est cette vision qui guide chacune de nos actions, du soutien quotidien
                aux programmes structurels, en passant par la mobilisation de toute une communauté autour
                de l&apos;<strong>entraide et de la justice sociale</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOT DU PRÉSIDENT */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0c1e3e] via-[#1e3a8a] to-[#0c1e3e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-6xl mb-5 opacity-30">&ldquo;</div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-5">Mot du Président</div>
            <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic mb-8 max-w-3xl mx-auto">
              Aider, c&apos;est notre crédo. Chaque jour, je suis témoin de la force du lien humain :
              une main tendue à une veuve, un cartable offert à un orphelin, un colis remis à une famille…
              Ces gestes, en apparence simples, redonnent espoir et reconstruisent des vies.
              <br /><br />
              Notre Fondation est ouverte à tous ceux qui veulent contribuer, à leur mesure,
              à bâtir une société plus juste. Rejoignez-nous.
            </blockquote>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl">
                <Image
                  src="/president.jpg"
                  alt="Sylla Ahmed, Président de la Fondation Fanta Sy"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="text-lg font-bold text-white">Sylla Ahmed</div>
              <div className="text-sm text-white/60">Président, Fondation Fanta Sy</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#fafaf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#0c1e3e] mb-5">
            Vous partagez nos valeurs ?
          </h2>
          <p className="text-lg text-slate-600 mb-7">
            Rejoignez-nous pour transformer ces valeurs en actions concrètes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faire-un-don" className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#15803d] to-[#0f6b32] shadow-lg shadow-[#15803d]/20 hover:-translate-y-0.5 transition-all">
              Faire un don
            </Link>
            <Link href="/contact" className="px-7 py-3.5 rounded-xl text-sm font-bold text-[#1e3a8a] bg-white border-2 border-[#1e3a8a]/20 hover:border-[#1e3a8a] transition-all">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
