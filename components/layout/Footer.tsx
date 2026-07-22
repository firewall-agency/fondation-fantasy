import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos Missions', href: '/nos-missions' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Nos Projets', href: '/nos-projets' },
  { label: 'Faire un don', href: '/faire-un-don' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c1e3e] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-4 inline-block mb-5 shadow-lg">
              <Image
                src="/logo_2- png.png"
                alt="Fondation Fanta Sy"
                width={411}
                height={607}
                className="h-28 md:h-32 w-auto"
              />
            </div>
            <div className="text-sm text-white/60 italic mb-4">Donner de l&apos;espoir, transformer des vies</div>
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-md">
              Aux côtés des orphelins, des veuves et des familles en difficulté en Côte d&apos;Ivoire.
              Ensemble, bâtissons une société plus solidaire et plus juste.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/2250758030396"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#25d366]/20 border border-white/10 hover:border-[#25d366]/40 flex items-center justify-center text-white/70 hover:text-[#25d366] transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
              <a
                href="mailto:contact@fondationfantasy.org"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#1e3a8a]/30 border border-white/10 hover:border-[#1e3a8a]/40 flex items-center justify-center text-white/70 hover:text-white transition-all"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-[#22c55e] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Abidjan, Cocody 2 plateaux<br />derrière SOCOCE
              </li>
              <li>
                <a href="tel:+2250778786060" className="flex items-center gap-2 text-white/70 hover:text-[#22c55e] transition-colors">
                  <svg className="w-4 h-4 shrink-0 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  (+225) 07 78 78 60 60
                </a>
              </li>
              <li>
                <a href="tel:+2250758030396" className="flex items-center gap-2 text-white/70 hover:text-[#22c55e] transition-colors">
                  <svg className="w-4 h-4 shrink-0 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  (+225) 07 58 03 03 96
                </a>
              </li>
              <li>
                <a href="mailto:contact@fondationfantasy.org" className="flex items-center gap-2 text-white/70 hover:text-[#22c55e] transition-colors break-all">
                  <svg className="w-4 h-4 shrink-0 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  contact@fondationfantasy.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Fondation Fanta Sy. Tous droits réservés.</p>
          <p className="text-xs text-white/30">Aider est notre crédo · Abidjan, Côte d&apos;Ivoire</p>
        </div>
      </div>
    </footer>
  );
}
