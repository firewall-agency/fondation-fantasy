'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const mobileMoneyOptions = [
  {
    name: 'Orange Money',
    number: '+225 07 58 03 03 96',
    color: 'from-[#ff6a00] to-[#ee0979]',
    bg: 'bg-[#ff6a00]/5',
    border: 'border-[#ff6a00]/30',
    logo: 'OM',
  },
  {
    name: 'Wave',
    number: '+225 07 58 03 03 96',
    color: 'from-[#1dc8ff] to-[#0072ff]',
    bg: 'bg-[#1dc8ff]/5',
    border: 'border-[#1dc8ff]/30',
    logo: 'W',
  },
];

const naturalDonationItems = [
  { icon: '👕', label: 'Vêtements (enfants & adultes)' },
  { icon: '📚', label: 'Livres, cahiers, fournitures scolaires' },
  { icon: '🍚', label: 'Denrées alimentaires non périssables' },
  { icon: '🧴', label: 'Produits d\'hygiène' },
  { icon: '💊', label: 'Médicaments (non périmés)' },
  { icon: '🪑', label: 'Mobilier, matériel scolaire' },
];

export default function FaireUnDonPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-[#15803d] via-[#0f6b32] to-[#0a5226]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-5">💛</div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-5">
              Faire un don
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Chaque don<br />
              <span className="bg-gradient-to-r from-[#fbbf24] to-[#ffffff] bg-clip-text text-transparent">
                change une vie
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Votre générosité nous permet d&apos;accompagner orphelins, veuves et familles en difficulté
              au quotidien. Merci pour votre confiance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MOBILE MONEY */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#15803d] mb-3">Option 1 — Le plus rapide</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0c1e3e] mb-4">Don par Mobile Money</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Envoyez votre don directement depuis votre téléphone, en quelques secondes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mobileMoneyOptions.map((opt, i) => (
              <motion.div
                key={opt.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative rounded-2xl p-7 ${opt.bg} ${opt.border} border-2 hover:shadow-xl transition-all`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${opt.color} text-white font-black text-lg shadow-lg mb-5`}>
                  {opt.logo}
                </div>
                <h3 className="text-xl font-bold text-[#0c1e3e] mb-2">{opt.name}</h3>
                <p className="text-sm text-slate-600 mb-4">Numéro marchand</p>
                <div className="bg-white rounded-xl p-4 border border-slate-200 mb-3">
                  <div className="text-lg font-bold text-[#0c1e3e] font-mono">{opt.number}</div>
                </div>
                <button
                  onClick={() => copy(opt.number, opt.name)}
                  className={`w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${opt.color} hover:shadow-lg transition-all`}
                >
                  {copied === opt.name ? '✓ Copié !' : '📋 Copier le numéro'}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-blue-50 border border-blue-200 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#1e3a8a] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <div>
                <p className="font-bold text-[#0c1e3e] mb-1">Important</p>
                <p className="text-sm text-slate-700">
                  Après votre don, n&apos;hésitez pas à nous envoyer une capture d&apos;écran sur WhatsApp ou par email
                  afin que nous puissions vous remercier personnellement et tracer votre contribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DON EN NATURE */}
      <section className="py-20 md:py-24 bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#ca8a04] mb-3">Option 2 — Donner ce que vous avez</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0c1e3e] mb-4">Don en nature</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vêtements, livres, denrées… donnez du sens à ce que vous n&apos;utilisez plus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {naturalDonationItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-[#ca8a04]/40 hover:shadow-md transition-all"
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="text-sm font-semibold text-slate-700">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#ca8a04] to-[#a16207] rounded-3xl p-8 md:p-10 text-white text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">Comment procéder ?</h3>
            <p className="text-white/90 mb-7 leading-relaxed">
              Contactez-nous pour organiser la collecte. Notre équipe peut passer chercher vos dons
              dans la zone d&apos;Abidjan, ou convenir d&apos;un point de dépôt.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/2250758030396?text=Bonjour,%20je%20souhaite%20faire%20un%20don%20en%20nature%20à%20la%20Fondation%20Fanta%20Sy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-bold text-[#ca8a04] bg-white hover:bg-slate-50 transition-all"
              >
                💬 Contacter sur WhatsApp
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all"
              >
                Formulaire de contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0c1e3e] mb-4">À quoi servira votre don ?</h2>
            <p className="text-lg text-slate-600">Concrètement, voici l&apos;impact que vous permettez.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { amount: '5 000 FCFA', desc: "Un repas chaud pour 10 enfants", icon: '🍲' },
              { amount: '25 000 FCFA', desc: "Fournitures scolaires complètes pour 1 orphelin", icon: '🎒' },
              { amount: '100 000 FCFA', desc: "Lancement d'une activité génératrice de revenus pour une veuve", icon: '💼' },
            ].map((item) => (
              <div key={item.amount} className="bg-gradient-to-br from-[#1e3a8a]/5 to-[#15803d]/5 border border-[#1e3a8a]/10 rounded-2xl p-7 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-2xl font-black text-[#15803d] mb-2">{item.amount}</div>
                <div className="text-sm text-slate-700">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MERCI */}
      <section className="py-16 bg-gradient-to-br from-[#0c1e3e] to-[#1e3a8a] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-5">🙏</div>
          <h2 className="text-3xl md:text-4xl font-black mb-5">Merci du fond du cœur</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Votre soutien, quel qu&apos;il soit, est précieux. Vous faites partie de la chaîne d&apos;entraide
            qui change des vies au quotidien. <strong>Aider est notre crédo</strong>, partager cet élan est notre fierté.
          </p>
        </div>
      </section>
    </>
  );
}
