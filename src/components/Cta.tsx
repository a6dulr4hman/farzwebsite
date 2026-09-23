import { ArrowRight } from "lucide-react";
import ctaArc from "../assets/cta-arc.png";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section className="px-5 pb-28 pt-8 lg:px-6">
      <Reveal className="mx-auto w-full lg:w-[70%]">
        <div
          className="relative overflow-hidden rounded-[40px] px-6 pb-24 pt-16 text-center shadow-[0_40px_90px_-30px_rgba(43,58,220,0.55)] ring-1 ring-white/40"
          style={{
            background:
              "radial-gradient(90% 80% at 8% 6%, #93a2fb 0%, transparent 50%), radial-gradient(85% 90% at 96% 80%, #96a7fb 0%, transparent 55%), radial-gradient(70% 70% at 12% 96%, #3543e4 0%, transparent 60%), linear-gradient(140deg,#6d7ff7 0%,#4a5af0 45%,#5f72f6 100%)",
          }}
        >
          {/* dotted texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.28) 1px, transparent 1.4px)",
              backgroundSize: "13px 13px",
              maskImage: "radial-gradient(130% 110% at 50% 45%, black 50%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(130% 110% at 50% 45%, black 50%, transparent 100%)",
            }}
          />
          {/* soft white rim at the base */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
            style={{ background: "linear-gradient(to top, rgba(255,255,255,0.6), transparent)" }}
          />

          <div className="relative">
            <img
              src={ctaArc}
              alt=""
              className="mx-auto w-full max-w-[520px] select-none"
              draggable={false}
            />

            {/* heading — all white; the "faded" words come from the blue bubble overlaying them */}
            <div className="relative mx-auto mt-14 max-w-[820px]">
              <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[54px]">
                <span className="block">Take Full Control of your</span>
                <span className="mt-8 block lg:mt-10">Assets Today</span>
              </h2>
              {/* hidden blue gradient bubbles sitting on top of the text */}
              <span
                aria-hidden
                className="pointer-events-none absolute -left-[6%] -top-[12%] h-[80%] w-[34%] rounded-full blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(88,106,244,0.95) 0%, rgba(88,106,244,0) 70%)" }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-[8%] -top-[18%] h-[150%] w-[42%] rounded-full blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(96,114,246,0.9) 0%, rgba(96,114,246,0) 70%)" }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-[30%] left-[18%] h-[90%] w-[36%] rounded-full blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(88,106,244,0.85) 0%, rgba(88,106,244,0) 70%)" }}
              />
            </div>

            <p className="relative mx-auto mt-8 max-w-[480px] text-[17px] leading-[1.55] text-white/90">
              Join users already managing their finances with speed, security, and confidence.
            </p>

            <a
              href="#top"
              className="btn-dark group relative mt-10 inline-flex items-center gap-2.5 rounded-full py-3 pl-6 pr-3 text-[16px] font-semibold text-white"
            >
              Get Started Now
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
