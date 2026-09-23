import { LogoMark } from "./Logo";
import Reveal from "./Reveal";
import wordmark from "../assets/footer-wordmark.svg";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.2 8.4h4.6V23H.2V8.4Zm7.68 0h4.41v2h.06c.61-1.16 2.11-2.38 4.35-2.38 4.65 0 5.51 3.06 5.51 7.04V23h-4.6v-6.94c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H7.88V8.4Z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#feature" },
      { label: "Security", href: "#security" },
      { label: "Pricing", href: "#pricing" },
      { label: "Platform", href: "#platform" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Careers", href: "#top" },
      { label: "Blog", href: "#top" },
      { label: "Press", href: "#top" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#top" },
      { label: "API Docs", href: "#top" },
      { label: "Contact", href: "#top" },
      { label: "Privacy Policy", href: "#top" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
        {/* top */}
        <Reveal>
          <div className="grid gap-14 border-t border-black/[0.08] pt-16 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <a href="#top" className="flex items-center gap-3">
                <LogoMark className="h-11 w-11" />
                <span className="text-[24px] font-bold tracking-[-0.02em] text-ink">Farz Wealth</span>
              </a>
              <p className="mt-8 max-w-[420px] text-[17px] leading-[1.6] text-ink-mute">
                Farz is a modern platform for managing, tracking, and growing your assets with complete control and
                security.
              </p>
              <form className="mt-9 flex max-w-[420px] items-center gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-12 min-w-0 flex-1 rounded-xl bg-ink/[0.05] px-4 text-[15px] text-ink outline-none ring-1 ring-black/[0.05] transition-all placeholder:text-ink-mute focus:bg-white focus:ring-2 focus:ring-brand/50"
                />
                <button
                  type="submit"
                  className="btn-dark h-12 shrink-0 rounded-xl px-6 text-[15px] font-bold text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {COLUMNS.map((col) => (
                <div key={col.title}>
                  <h4 className="text-[16px] font-medium text-ink-mute">{col.title}</h4>
                  <ul className="mt-7 space-y-5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[16px] text-ink transition-colors duration-200 hover:text-brand"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-black/[0.08] py-9 sm:flex-row">
          <p className="text-[15px] text-ink-mute">© 2026 Farz. All rights reserved. Falak.me</p>
          <div className="flex items-center gap-7">
            {[XIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
              <a key={i} href="#top" aria-label="Social link" className="text-ink transition-colors hover:text-brand">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* giant fading wordmark */}
        <div aria-hidden className="overflow-hidden pb-2">
          <img
            src={wordmark}
            alt=""
            className="w-full"
            style={{ maskImage: "linear-gradient(to bottom, black 35%, transparent 99%)", WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 99%)" }}
            draggable={false}
          />
        </div>
      </div>
    </footer>
  );
}
