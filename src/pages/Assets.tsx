import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Copy, X, Zap } from "lucide-react";
import { SignUpButton } from "../components/Header";
import { Eyebrow, PurpleOrb } from "../components/Section";
import { LogoMark } from "../components/Logo";
import {
  BahrainFlag,
  KuwaitFlag,
  OmanFlag,
  QatarFlag,
  SaudiFlag,
  UaeFlag,
} from "../components/Flags";
import Reveal from "../components/Reveal";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* shared raw snippets                                                 */
/* ------------------------------------------------------------------ */

const ARROW_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

const ORB_STYLE =
  'background-color:rgb(194,158,255);box-shadow:rgba(176,131,254,0.1) 0px 2.4px 4.8px -2.4px,rgba(176,131,254,0.24) 0px 0px 3.6px -2.4px,rgba(176,131,254,0.18) 0px 9.6px 6.96px -2.4px,rgba(176,131,254,0.18) 0px 6px 6px -2.4px,rgb(176,131,254) 1.2px 1.2px 3px 0px inset,rgb(255,255,255) -1.2px -1.2px 4.92px 0px inset,rgb(255,255,255) -1.2px -1.2px 2.4px 0px inset,rgb(255,255,255) 0px 0px 3.6px 0px inset,rgb(255,255,255) 0px 0px 1.56px 0px inset,rgba(176,131,254,0.6) 0px 0px 2.4px 0px inset,rgb(255,255,255) 0px 0px 1.56px 0px inset';

const SIGNUP_HTML = `<a href="#" class="btn-signup inline-flex items-center gap-2 py-2 pl-4 pr-2 text-[15px] font-semibold text-white">Sign Up <span class="flex h-6 w-6 items-center justify-center rounded-full bg-white/25">${ARROW_SVG}</span></a>`;

const WHITE_HTML = `<a href="#" class="btn-white inline-flex items-center px-7 py-3 text-[16px] font-semibold text-[#18181b]">How It Works</a>`;

const SUBSCRIBE_HTML = `<button type="submit" class="btn-dark h-12 shrink-0 rounded-xl px-6 text-[15px] font-bold text-white">Subscribe</button>`;

const GLASS_HTML = `<a href="#" class="btn-dark group inline-flex items-center gap-2.5 rounded-full py-3 pl-6 pr-3 text-[16px] font-semibold text-white">Get Started Now <span class="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#18181b]">${ARROW_SVG}</span></a>`;

const EYEBROW_HTML = `<span class="inline-flex items-center gap-2.5 rounded-full bg-white py-2 pl-2.5 pr-5 text-[15px] font-medium text-[#52525b] shadow-[0_2px_10px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04]"><span class="inline-block h-4 w-4 rounded-full" style="${ORB_STYLE}"></span>Core Features</span>`;

const BADGE_HTML = `<a href="#" class="group inline-flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]"><span class="flex h-7 w-7 items-center justify-center rounded-full bg-[#8fb0ff] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span><span class="text-[15px] font-medium text-[#52525b]">Fast, Reliable, and Always On</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717a" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></a>`;

const ORB_HTML = `<span class="inline-block h-4 w-4 rounded-full" style="${ORB_STYLE}"></span>`;

const LIVE_HTML = `<span class="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-[#18181b] ring-1 ring-black/[0.05]"><span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>Live</span>`;

const MONITOR_HTML = `<span class="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-[#18181b] ring-1 ring-black/[0.05]"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Monitoring</span>`;

const TOGGLE_HTML = `<button role="switch" aria-checked="false" class="relative h-[30px] w-[54px] rounded-full bg-[#e3e4ea] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)]"><span class="absolute left-[3px] top-[3px] h-6 w-6 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]"></span></button>`;

const MODAL_HTML = `<div class="fixed inset-0 z-[100] flex items-center justify-center p-5">
  <div class="absolute inset-0 bg-[#18181b]/40 backdrop-blur-sm"></div>
  <div class="animate-modal relative w-full max-w-[420px] rounded-[24px] bg-white p-8 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.06]">
    <h3 class="text-[22px] font-bold tracking-[-0.02em] text-[#18181b]">Confirm action</h3>
    <p class="mt-3 text-[15px] leading-relaxed text-[#71717a]">This is the Farz modal surface — use it for confirmations, alerts, and quick forms.</p>
    <div class="mt-7 flex items-center gap-3">
      <a href="#" class="btn-signup inline-flex flex-1 items-center justify-center gap-2 py-2.5 pl-4 pr-2 text-[15px] font-semibold text-white">Continue</a>
      <a href="#" class="btn-white inline-flex flex-1 items-center justify-center px-4 py-3 text-[15px] font-semibold text-[#18181b]">Cancel</a>
    </div>
  </div>
</div>`;

const TOAST_HTML = `<div class="animate-toast fixed bottom-8 left-1/2 z-[110] flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-[#18181b] py-3 pl-4 pr-5 text-[14px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(0,0,0,0.5)]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7dd3a8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Copied to clipboard</div>`;

const flagSvg = (inner: string, label: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" class="block h-5 w-[30px] overflow-hidden rounded-[5px] shadow-[0_1px_2px_rgba(0,0,0,0.18)] ring-1 ring-black/5" aria-label="${label}">${inner}</svg>`;

const FLAGS = [
  {
    name: "Kuwait Flag",
    node: <KuwaitFlag />,
    html: flagSvg(
      '<rect width="30" height="6.67" fill="#3a9a4d"/><rect y="6.67" width="30" height="6.67" fill="#f5f5f5"/><rect y="13.33" width="30" height="6.67" fill="#ce3b2e"/><path d="M0 0l9 6.67v6.66L0 20V0Z" fill="#1f1f1f"/>',
      "Kuwait"
    ),
  },
  {
    name: "Oman Flag",
    node: <OmanFlag />,
    html: flagSvg(
      '<rect width="30" height="6.67" fill="#f5f5f5"/><rect y="6.67" width="30" height="6.67" fill="#ce3b2e"/><rect y="13.33" width="30" height="6.67" fill="#3a9a4d"/><rect width="9" height="20" fill="#ce3b2e"/><path d="M3.2 3.1l1.3 1.1 1.3-1.1M4.5 2.4v2.2" stroke="#fff" stroke-width="0.7" fill="none" stroke-linecap="round"/>',
      "Oman"
    ),
  },
  {
    name: "Bahrain Flag",
    node: <BahrainFlag />,
    html: flagSvg(
      '<rect width="30" height="20" fill="#ce3b2e"/><path d="M0 0h9l4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2H0V0Z" fill="#ffffff"/>',
      "Bahrain"
    ),
  },
  {
    name: "UAE Flag",
    node: <UaeFlag />,
    html: flagSvg(
      '<rect width="30" height="6.67" fill="#3a9a4d"/><rect y="6.67" width="30" height="6.67" fill="#f5f5f5"/><rect y="13.33" width="30" height="6.67" fill="#1f1f1f"/><rect width="8" height="20" fill="#ce3b2e"/>',
      "United Arab Emirates"
    ),
  },
  {
    name: "Saudi Arabia Flag",
    node: <SaudiFlag />,
    html: flagSvg(
      '<rect width="30" height="20" fill="#2f7a3d"/><path d="M7 8.4h16" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M9 12.6h12" stroke="#fff" stroke-width="1" stroke-linecap="round"/>',
      "Saudi Arabia"
    ),
  },
  {
    name: "Qatar Flag",
    node: <QatarFlag />,
    html: flagSvg(
      '<rect width="30" height="20" fill="#8a1538"/><path d="M0 0h7l2.6 1.43L7 2.86l2.6 1.43L7 5.71l2.6 1.43L7 8.57l2.6 1.43L7 11.43l2.6 1.43L7 14.29l2.6 1.43L7 17.14l2.6 1.43L7 20H0V0Z" fill="#f5f5f5"/>',
      "Qatar"
    ),
  },
];

/* ------------------------------------------------------------------ */
/* asset registry                                                      */
/* ------------------------------------------------------------------ */

interface Asset {
  id: string;
  name: string;
  category: string;
  preview: ReactNode;
  html: string;
}

function MiniToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={(e) => {
        e.stopPropagation();
        setOn((v) => !v);
      }}
      className={cn(
        "relative h-[30px] w-[54px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        on
          ? "bg-gradient-to-r from-[#5f8bff] to-[#145dfa] shadow-[0_4px_14px_rgba(20,93,250,0.45),inset_0_1px_2px_rgba(255,255,255,0.4)]"
          : "bg-[#e3e4ea] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)]"
      )}
    >
      <span
        className={cn(
          "absolute top-[3px] h-6 w-6 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          on ? "left-[27px]" : "left-[3px]"
        )}
      />
    </button>
  );
}

const ASSETS: Asset[] = [
  { id: "btn-signup", name: "Sign Up Button", category: "Buttons", preview: <SignUpButton />, html: SIGNUP_HTML },
  { id: "btn-white", name: "White Pill Button", category: "Buttons", preview: <span className="btn-white inline-flex items-center px-7 py-3 text-[16px] font-semibold text-ink">How It Works</span>, html: WHITE_HTML },
  {
    id: "btn-subscribe",
    name: "Subscribe Button",
    category: "Buttons",
    preview: (
      <button type="button" className="btn-dark h-12 rounded-xl px-6 text-[15px] font-bold text-white">
        Subscribe
      </button>
    ),
    html: SUBSCRIBE_HTML,
  },
  {
    id: "btn-glass",
    name: "Glass Dark Button",
    category: "Buttons",
    preview: (
      <span className="btn-dark inline-flex items-center gap-2.5 rounded-full py-3 pl-6 pr-3 text-[16px] font-semibold text-white">
        Get Started Now
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink">
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      </span>
    ),
    html: GLASS_HTML,
  },
  { id: "eyebrow", name: "Eyebrow Pill", category: "Badges & Pills", preview: <Eyebrow>Core Features</Eyebrow>, html: EYEBROW_HTML },
  {
    id: "badge-hero",
    name: "Hero Status Badge",
    category: "Badges & Pills",
    preview: (
      <span className="inline-flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8fb0ff] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)]">
          <Zap className="h-3.5 w-3.5 fill-white text-white" strokeWidth={1.5} />
        </span>
        <span className="text-[15px] font-medium text-ink-soft">Fast, Reliable, and Always On</span>
      </span>
    ),
    html: BADGE_HTML,
  },
  { id: "orb", name: "Purple Orb", category: "Badges & Pills", preview: <PurpleOrb className="h-6 w-6" />, html: ORB_HTML },
  {
    id: "pill-live",
    name: "Live Pill",
    category: "Badges & Pills",
    preview: (
      <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-ink ring-1 ring-black/[0.05]">
        <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Live
      </span>
    ),
    html: LIVE_HTML,
  },
  {
    id: "pill-monitor",
    name: "Monitoring Pill",
    category: "Badges & Pills",
    preview: (
      <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-ink ring-1 ring-black/[0.05]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Monitoring
      </span>
    ),
    html: MONITOR_HTML,
  },
  { id: "toggle", name: "Billing Toggle", category: "Controls", preview: <MiniToggle />, html: TOGGLE_HTML },
  {
    id: "modal",
    name: "Modal",
    category: "Overlays",
    preview: <ModalPreview />,
    html: MODAL_HTML,
  },
  {
    id: "toast",
    name: "Toast",
    category: "Overlays",
    preview: (
      <span className="flex items-center gap-2.5 rounded-full bg-[#18181b] py-3 pl-4 pr-5 text-[14px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(0,0,0,0.5)]">
        <Check className="h-4 w-4 text-[#7dd3a8]" strokeWidth={3} /> Copied to clipboard
      </span>
    ),
    html: TOAST_HTML,
  },
  {
    id: "logo",
    name: "Logo Mark",
    category: "Brand",
    preview: <LogoMark className="h-12 w-12" />,
    html: `<img src="/assets/logo.png" alt="Farz Wealth" class="h-10 w-10 rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.22)]" />`,
  },
  ...FLAGS.map((f) => ({ id: f.name.toLowerCase().replace(/\s/g, "-"), name: f.name, category: "Flags", preview: f.node, html: f.html })),
];

function ModalPreview() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className="btn-white px-5 py-2.5 text-[14px] font-semibold text-ink"
      >
        Open Modal
      </button>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5" onClick={() => setOpen(false)}>
          <div className="animate-fade absolute inset-0 bg-[#18181b]/40 backdrop-blur-sm" />
          <div
            className="animate-modal relative w-full max-w-[420px] rounded-[24px] bg-white p-8 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.06]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-mute transition-colors hover:bg-ink/[0.06] hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-[22px] font-bold tracking-[-0.02em] text-ink">Confirm action</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-mute">
              This is the Farz modal surface — use it for confirmations, alerts, and quick forms.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a href="#/" onClick={(e) => e.preventDefault()} className="btn-signup inline-flex flex-1 items-center justify-center py-2.5 text-[15px] font-semibold text-white">
                Continue
              </a>
              <button type="button" onClick={() => setOpen(false)} className="btn-white inline-flex flex-1 items-center justify-center px-4 py-3 text-[15px] font-semibold text-ink">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* page                                                                */
/* ------------------------------------------------------------------ */

const CATEGORY_ORDER = ["Buttons", "Badges & Pills", "Controls", "Overlays", "Brand", "Flags"];

export default function Assets() {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const grouped = useMemo(
    () => CATEGORY_ORDER.map((cat) => ({ cat, items: ASSETS.filter((a) => a.category === cat) })),
    []
  );

  const copy = async (asset: Asset) => {
    try {
      await navigator.clipboard.writeText(asset.html);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = asset.html;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setToast(`${asset.name} HTML copied`);
  };

  return (
    <div className="min-h-screen bg-page text-ink">
      {/* sub-header */}
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-page/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-5 lg:px-6">
          <div className="flex items-center gap-3">
            <LogoMark className="h-9 w-9" />
            <span className="text-[19px] font-bold tracking-[-0.02em]">Farz Assets</span>
            <span className="rounded-full bg-ink/[0.06] px-2.5 py-1 text-[12px] font-semibold text-ink-soft">
              {ASSETS.length} components
            </span>
          </div>
          <Link
            to="/"
            className="nav-link flex items-center gap-2 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-5 pb-28 pt-16 lg:px-6">
        <Reveal>
          <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-brand">Design System</p>
          <h1 className="mt-3 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[54px]">
            Every asset, ready to copy.
          </h1>
          <p className="mt-5 max-w-[560px] text-[18px] leading-relaxed text-ink-mute">
            The complete Farz Wealth component library — buttons, pills, toggles, overlays, flags and brand marks.
            Click any card to copy its raw HTML to your clipboard.
          </p>
        </Reveal>

        {grouped.map(({ cat, items }) => (
          <section key={cat} className="mt-16">
            <Reveal>
              <h2 className="flex items-center gap-3 text-[15px] font-bold uppercase tracking-[0.1em] text-ink-mute">
                {cat}
                <span className="h-px flex-1 bg-black/[0.08]" />
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((asset, i) => (
                <Reveal key={asset.id} delay={(i % 3) * 70}>
                  <button
                    type="button"
                    onClick={() => copy(asset)}
                    className="group flex w-full flex-col overflow-hidden rounded-[22px] bg-white text-left ring-1 ring-black/[0.05] shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(0,0,0,0.16)] active:scale-[0.98]"
                  >
                    <div className="preview-grid flex h-40 items-center justify-center overflow-hidden p-5">
                      <div className="transition-transform duration-300 group-hover:scale-[1.04]">{asset.preview}</div>
                    </div>
                    <div className="flex items-center justify-between border-t border-black/[0.05] px-5 py-4">
                      <div>
                        <p className="text-[15px] font-semibold text-ink">{asset.name}</p>
                        <p className="mt-0.5 text-[12px] font-medium text-ink-mute">Click to copy HTML</p>
                      </div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/[0.05] text-ink-soft transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                        <Copy className="h-4 w-4" />
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* toast */}
      {toast && (
        <div className="animate-toast fixed bottom-8 left-1/2 z-[110] flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-[#18181b] py-3 pl-4 pr-5 text-[14px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(0,0,0,0.5)]">
          <Check className="h-4 w-4 text-[#7dd3a8]" strokeWidth={3} />
          {toast}
        </div>
      )}
    </div>
  );
}
