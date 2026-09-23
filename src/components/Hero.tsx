import { ChevronRight, Zap } from "lucide-react";
import heroArt from "../assets/hero-icons.png";
import { COUNTRIES } from "./Flags";
import { SignUpButton } from "./Header";
import Reveal from "./Reveal";

function FlagMarquee() {
  // each item carries its own trailing padding so both halves of the
  // duplicated track are exactly equal width -> the -50% loop is seamless
  const loop = [...COUNTRIES, ...COUNTRIES];
  return (
    <div className="marquee-mask relative mt-6 max-w-[600px] overflow-hidden">
      <div className="animate-marquee flex w-max items-center">
        {loop.map(({ name, Flag }, i) => (
          <span key={`${name}-${i}`} className="flex items-center gap-3 pr-14">
            <Flag />
            <span className="whitespace-nowrap text-[20px] font-semibold tracking-[-0.01em] text-ink">{name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ---- large floating artwork, pinned right & bleeding off-edge (desktop) ---- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[-60px] z-0 hidden w-[46%] min-w-[600px] max-w-[840px] items-center lg:flex"
      >
        <Reveal delay={180} className="relative w-full">
          <img
            src={heroArt}
            alt=""
            className="mx-auto w-full max-h-[calc(100vh-105px)] select-none"
            draggable={false}
          />
          {/* page-colored inset haze dissolves the PNG's rectangular seam */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ boxShadow: "inset 0 0 80px 34px #f6f6f6" }}
          />
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 lg:px-10">
        <div className="flex min-h-[calc(100svh-68px)] flex-col py-10 lg:min-h-[calc(100vh-88px)] lg:pr-[41%]">
          {/* ---- main copy, vertically centered ---- */}
          <div className="my-auto">
            <Reveal>
              <a
                href="#feature"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-shadow duration-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8fb0ff] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)]">
                  <Zap className="animate-pulse-soft h-3.5 w-3.5 fill-white text-white" strokeWidth={1.5} />
                </span>
                <span className="text-[15px] font-medium text-ink-soft">Fast, Reliable, and Always On</span>
                <ChevronRight className="h-4 w-4 text-ink-mute transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-8 text-[44px] font-bold leading-[1.04] tracking-[-0.035em] text-ink sm:text-[60px] lg:text-[72px]">
                Your entire financial
                <br />
                life, on autopilot.
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-[540px] text-[19px] leading-[1.55] text-ink-mute">
                Navigate your finances withconfidence. Track spending, budgets, investments, net worth, and get
                personalized recommendations.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <SignUpButton className="px-6 py-3 text-[16px]" />
                <a
                  href="#platform"
                  className="btn-white inline-flex items-center px-7 py-3 text-[16px] font-semibold text-ink"
                >
                  How It Works
                </a>
              </div>
            </Reveal>
          </div>

          {/* ---- artwork on mobile ---- */}
          <Reveal delay={150} className="relative mt-14 lg:hidden">
            <img
              src={heroArt}
              alt="Floating icons representing home, cards, bitcoin, gold and secure vault"
              className="mx-auto w-full max-w-[440px] select-none"
              draggable={false}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: "inset 0 0 60px 24px #f6f6f6" }}
            />
          </Reveal>

          {/* ---- trusted-by pinned to the bottom ---- */}
          <Reveal delay={330} className="pt-14">
            <p className="text-[15px] font-medium text-ink-mute">Trusted throughout the Middle East</p>
            <FlagMarquee />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
