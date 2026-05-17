'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { missions, colorClasses } from '@/lib/missions';

export default function NosMissionsPage() {
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
              Nos Missions
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Six domaines d&apos;intervention<br />
              <span className="bg-gradient-to-r from-[#22c55e] to-[#fbbf24] bg-clip-text text-transparent">
                au service des plus vulnérables
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              La Fondation Fanta Sy conçoit des projets répondant aux besoins essentiels
              des personnes les plus vulnérables de notre société.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSIONS DÉTAILLÉES */}
      <section className="py-20 md:py-28 bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {missions.map((m, i) => {
            const c = colorClasses[m.color];
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={m.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-14 h-14 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center text-3xl`}>
                      {m.icon}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Mission {String(i + 1).padStart(2, '0')}</div>
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-black ${c.text} mb-5 leading-tight`}>{m.title}</h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">{m.description}</p>
                  <ul className="space-y-3">
                    {m.actions.map((a) => (
                      <li key={a} className="flex items-start gap-3 text-slate-700">
                        <span className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${c.grad} flex items-center justify-center shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative aspect-[4/5] max-w-md mx-auto w-full rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    sizes="(min-width: 1024px) 448px, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent`} />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${c.grad} flex items-center justify-center text-2xl shadow-lg`}>
                    {m.icon}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#15803d] to-[#0f6b32] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-5">Ces missions ont besoin de vous</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Chaque action de la Fondation est rendue possible grâce aux donateurs et bénévoles.
            Rejoignez le mouvement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faire-un-don" className="px-7 py-4 rounded-xl text-base font-bold text-[#15803d] bg-white hover:bg-slate-50 shadow-xl hover:-translate-y-0.5 transition-all">
              Faire un don
            </Link>
            <Link href="/contact" className="px-7 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all">
              Devenir bénévole
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
