'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
};

const sujets = [
  'Faire un don',
  'Devenir bénévole',
  'Devenir partenaire',
  'Demander de l\'aide',
  'Information générale',
  'Autre',
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    nom: '', email: '', telephone: '', sujet: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.nom || !form.email || !form.message || !form.sujet) {
      setError('Merci de remplir les champs requis.');
      return;
    }
    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '42e1a6c8-eea9-4cf8-8cde-085942a43746',
          name: form.nom,
          email: form.email,
          telephone: form.telephone,
          sujet: form.sujet,
          message: form.message,
          subject: `[Site] ${form.sujet} — ${form.nom}`,
          from_name: 'Site Fondation Fanta Sy',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) setSent(true);
      else setError("L'envoi a échoué. Réessayez ou écrivez-nous directement par email.");
    } catch {
      setError("L'envoi a échoué. Vérifiez votre connexion.");
    } finally {
      setSending(false);
    }
  };

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
              Contact
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Une question,<br />
              <span className="bg-gradient-to-r from-[#22c55e] to-[#fbbf24] bg-clip-text text-transparent">
                un projet, une idée ?
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Nous sommes à votre écoute. Écrivez-nous, appelez-nous, ou venez nous rencontrer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-20 md:py-24 bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Coordonnées */}
            <div className="lg:col-span-2 space-y-5">
              <ContactCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                }
                title="Notre adresse"
                lines={['Cocody 2 plateaux', 'derrière SOCOCE', 'Abidjan, Côte d\'Ivoire']}
              />
              <ContactCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                }
                title="Téléphones"
                lines={['(+225) 07 78 78 60 60', '(+225) 07 58 03 03 96']}
                action={{ label: 'Appeler', href: 'tel:+2250778786060' }}
              />
              <ContactCard
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                }
                title="Email"
                lines={['contact@fondationfantasy.org']}
                action={{ label: 'Écrire', href: 'mailto:contact@fondationfantasy.org' }}
              />
              <a
                href="https://wa.me/2250758030396"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white hover:shadow-2xl hover:shadow-[#25d366]/30 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">WhatsApp direct</div>
                    <div className="text-sm text-white/80">Réponse rapide</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-lg">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="text-6xl mb-5">✅</div>
                    <h3 className="text-2xl font-black text-[#0c1e3e] mb-2">Message envoyé !</h3>
                    <p className="text-slate-600">
                      Merci pour votre message. Nous vous répondrons sous 48h.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5" noValidate>
                    <h2 className="text-2xl font-black text-[#0c1e3e] mb-2">Envoyez-nous un message</h2>
                    <p className="text-sm text-slate-500 mb-6">
                      Les champs marqués d&apos;un <span className="text-red-500">*</span> sont obligatoires.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Nom complet" required>
                        <input
                          type="text"
                          value={form.nom}
                          onChange={(e) => setForm({ ...form, nom: e.target.value })}
                          placeholder="Sylla Aminata"
                          className={inputCls}
                          required
                        />
                      </Field>
                      <Field label="Email" required>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="vous@exemple.com"
                          className={inputCls}
                          required
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Téléphone (optionnel)">
                        <input
                          type="tel"
                          value={form.telephone}
                          onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                          placeholder="+225 07 00 00 00 00"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Sujet" required>
                        <select
                          value={form.sujet}
                          onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                          className={inputCls}
                          required
                        >
                          <option value="">Choisir…</option>
                          {sujets.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </Field>
                    </div>

                    <Field label="Votre message" required>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={6}
                        placeholder="Décrivez votre demande, votre projet ou votre situation…"
                        className={`${inputCls} resize-none`}
                        required
                      />
                    </Field>

                    {error && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#1e3a8a] to-[#0c1e3e] hover:from-[#15326e] hover:to-[#091833] shadow-lg shadow-[#1e3a8a]/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base"
                    >
                      {sending ? '⏳ Envoi en cours…' : '✉ Envoyer le message'}
                    </button>
                    <p className="text-slate-400 text-xs text-center">Réponse sous 48h · Aucun spam</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = 'w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a] focus:bg-white transition-all';

function ContactCard({
  icon, title, lines, action,
}: {
  icon: React.ReactNode; title: string; lines: string[]; action?: { label: string; href: string };
}) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#1e3a8a]/10 text-[#1e3a8a] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#0c1e3e] mb-1">{title}</h3>
          <div className="space-y-0.5">
            {lines.map((l, i) => <div key={i} className="text-sm text-slate-600">{l}</div>)}
          </div>
          {action && (
            <a href={action.href} className="inline-block mt-3 text-sm font-semibold text-[#15803d] hover:underline">
              {action.label} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
