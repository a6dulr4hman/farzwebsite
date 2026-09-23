import platform from "../assets/platform.png";
import glyphBalance from "../assets/glyph-balance.svg";
import glyphHistory from "../assets/glyph-history.svg";
import glyphActions from "../assets/glyph-actions.svg";
import Reveal from "./Reveal";
import { SectionHeading } from "./Section";

const KEY_ROWS = [
  [64, 120, 88, 150, 72, 110, 96, 140, 80],
  [110, 76, 140, 92, 128, 68, 150, 84, 104],
  [88, 132, 70, 116, 96, 144, 78, 122, 64],
];

function KeyField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="flex h-full flex-col justify-between py-4 opacity-70">
        {[...KEY_ROWS, ...KEY_ROWS].map((row, r) => (
          <div key={r} className="flex gap-3 px-2" style={{ transform: `translateX(${r % 2 ? -28 : 0}px)` }}>
            {row.map((w, i) => (
              <span
                key={i}
                className="h-7 shrink-0 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.02]"
                style={{ width: w }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,246,0)_30%,#f6f6f6_78%)]" />
    </div>
  );
}

const GLYPHS = [
  { src: glyphBalance, label: "Real-Time Balance", body: "Track your assets live with instant updates." },
  { src: glyphHistory, label: "Smart History", body: "View and manage all transactions easily." },
  { src: glyphActions, label: "Quick Actions", body: "Access key actions with one tap." },
];

export default function PlatformPreview() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
        <SectionHeading
          id="platform"
          align="left"
          eyebrow="Platform Preview"
          title={
            <>
              Experience a Platform That
              <br />
              Feels Effortless to Use
            </>
          }
          subtitle="Farz transforms complex financial workflows into a clean, intuitive interface designed for speed, clarity, and control."
        />
      </div>

      <div className="relative mt-16">
        <KeyField />
        <Reveal delay={120} className="relative mx-auto max-w-[1180px] px-5 lg:px-6">
          <div className="group relative">
            <div
              aria-hidden
              className="absolute inset-x-10 -bottom-8 top-12 rounded-[36px] bg-ink/[0.10] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[26px] shadow-[0_40px_90px_-28px_rgba(24,24,27,0.35)] ring-1 ring-black/[0.06]">
              <img
                src={platform}
                alt="Farz platform dashboard with navigation, balances, spending and net worth"
                className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                draggable={false}
              />
            </div>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-20 grid max-w-[1180px] gap-12 px-6 sm:grid-cols-3">
          {GLYPHS.map(({ src, label, body }, i) => (
            <Reveal key={label} delay={i * 100} className="flex flex-col items-center gap-5 sm:items-start">
              <img
                src={src}
                alt=""
                className="h-16 w-16 transition-transform duration-500 hover:-translate-y-1.5 hover:scale-110"
                draggable={false}
              />
              <h3 className="text-[26px] font-semibold tracking-[-0.02em] text-ink">{label}</h3>
              <p className="text-[16px] leading-relaxed text-ink-mute">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
