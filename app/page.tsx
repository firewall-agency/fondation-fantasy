'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { missions, colorClasses } from '@/lib/missions';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0c1e3e] via-[#1e3a8a] to-[#0c1e3e]">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/hero-action.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1e3e]/95 via-[#1e3a8a]/85 to-[#0c1e3e]/95" />
        </div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, #15803d 0%, transparent 40%), radial-gradient(circle at 80% 70%, #ca8a04 0%, transparent 40%)',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Aider est notre crédo
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
            >
              Donner de l&apos;espoir,<br />
              <span className="bg-gradient-to-r from-[#22c55e] to-[#fbbf24] bg-clip-text text-transparent">
                transformer des vies
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
            >
              La <strong className="text-white">Fondation Fanta Sy</strong> agit aux côtés des orphelins,
              des veuves et des familles en difficulté en Côte d&apos;Ivoire.
              Ensemble, bâtissons une société plus solidaire et plus juste.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/faire-un-don"
                className="px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#15803d] to-[#0f6b32] hover:from-[#0f6b32] hover:to-[#0a5226] shadow-xl shadow-[#15803d]/30 hover:-translate-y-0.5 transition-all"
              >
                ❤ Faire un don
              </Link>
              <Link
                href="/nos-missions"
                className="px-7 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all"
              >
                Découvrir nos missions →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 6, suffix: '', label: "Domaines d'intervention" },
              { value: 500, suffix: '+', label: 'Familles accompagnées' },
              { value: 100, suffix: '%', label: 'Bénévolat & engagement' },
              { value: 2, suffix: ' ODD', label: 'Objectifs ONU alignés' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#1e3a8a] to-[#15803d] bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm md:text-base text-slate-600 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="py-20 md:py-28 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a] text-xs font-bold uppercase tracking-widest mb-4">
              Nos Missions
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0c1e3e] mb-5 leading-tight">
              Six domaines d&apos;intervention<br />
              <span className="text-[#15803d]">au service des plus vulnérables</span>
            </h2>
            <p className="text-lg text-slate-600">
              Nous concevons des programmes répondant aux besoins essentiels des populations
              les plus fragiles de notre société.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((m, i) => {
              const c = colorClasses[m.color];
              return (
                <motion.div
                  key={m.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-transparent hover:shadow-2xl hover:shadow-slate-200 transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className={`absolute top-3 left-3 w-11 h-11 rounded-xl bg-gradient-to-br ${c.grad} flex items-center justify-center text-2xl shadow-lg`}>
                      {m.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold ${c.text} mb-3`}>{m.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{m.short}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/nos-missions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#1e3a8a] bg-white border-2 border-[#1e3a8a]/20 hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all"
            >
              Voir toutes nos missions en détail
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: '🤝', title: 'Solidarité', text: "L'entraide collective est notre fondement. Personne ne devrait être laissé seul face à la difficulté." },
              { icon: '🕊', title: 'Respect', text: 'Chaque personne, quelle que soit sa situation, mérite d\'être traitée avec dignité et bienveillance.' },
              { icon: '💪', title: 'Engagement', text: 'Notre dévouement est constant pour créer un changement durable dans la vie des personnes que nous accompagnons.' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8"
              >
                <div className="text-6xl mb-5">{v.icon}</div>
                <h3 className="text-2xl font-bold text-[#0c1e3e] mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ODD */}
      <section className="py-16 bg-gradient-to-br from-[#fafaf7] to-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Aligné sur les</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0c1e3e]">Objectifs de Développement Durable de l&apos;ONU</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200">
              <div className="w-16 h-16 rounded-xl bg-[#dda63a] flex items-center justify-center text-white font-black text-2xl shrink-0">02</div>
              <div>
                <div className="text-lg font-bold text-[#0c1e3e]">Faim Zéro</div>
                <div className="text-sm text-slate-600">Sécurité alimentaire et nutrition pour tous</div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200">
              <div className="w-16 h-16 rounded-xl bg-[#c5192d] flex items-center justify-center text-white font-black text-2xl shrink-0">04</div>
              <div>
                <div className="text-lg font-bold text-[#0c1e3e]">Éducation de qualité</div>
                <div className="text-sm text-slate-600">Accès à un enseignement équitable pour tous</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1e3a8a] to-[#0c1e3e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-6">💛</div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Votre soutien change des vies
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Chaque don, chaque heure de bénévolat, chaque partage compte.
              Rejoignez-nous pour construire un avenir plus solidaire.
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
                Devenir bénévole
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
