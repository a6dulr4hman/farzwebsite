import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import Reveal from "./Reveal";
import { PurpleOrb, SectionHeading } from "./Section";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
        <SectionHeading
          id="pricing"
          eyebrow="Pricing"
          title={
            <>
              Honest and
              <br />
              thoughtful pricing
            </>
          }
        />

        {/* Billing toggle */}
        <Reveal delay={140}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={cn("text-[17px] font-medium transition-colors", yearly ? "text-ink-mute" : "text-ink")}>
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              onClick={() => setYearly((v) => !v)}
              className={cn(
                "relative h-[30px] w-[54px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                yearly
                  ? "bg-gradient-to-r from-[#5f8bff] to-[#145dfa] shadow-[0_4px_14px_rgba(20,93,250,0.45),inset_0_1px_2px_rgba(255,255,255,0.4)]"
                  : "bg-[#e3e4ea] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)]"
              )}
            >
              <span
                className={cn(
                  "absolute top-[3px] h-6 w-6 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                  yearly ? "left-[27px] scale-105" : "left-[3px]"
                )}
              />
            </button>
            <span className={cn("text-[17px] font-medium transition-colors", yearly ? "text-ink" : "text-ink-mute")}>
              Yearly (Save 33%)
            </span>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[1180px] items-stretch gap-6 lg:grid-cols-2">
          {/* Free */}
          <Reveal>
            <div className="h-full rounded-[34px] bg-ink/[0.045] p-3 transition-transform duration-300 hover:-translate-y-1.5">
              <div className="flex h-full flex-col rounded-[28px] bg-white p-9 sm:p-11">
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">Test Drive for Free</h3>
                <p className="mt-5 max-w-[440px] text-[20px] leading-[1.5] text-ink-soft">
                  Take Farz for a spin before you connect a single account. If you like what you see, you can start a
                  free trial.
                </p>
                <div className="flex-1" />
                <p className="mt-14 text-[40px] font-bold tracking-[-0.02em] text-ink sm:text-[46px]">Free</p>
                <a href="#top" className="btn-signup group mt-6 inline-flex w-fit items-center gap-2 py-3 pl-6 pr-3 text-[16px] font-semibold text-white">
                  Start for Free
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Pro */}
          <Reveal delay={100}>
            <div
              className="h-full rounded-[34px] p-[10px] shadow-[0_30px_70px_-20px_rgba(20,93,250,0.45)] transition-transform duration-300 hover:-translate-y-1.5"
              style={{ background: "linear-gradient(140deg,#7fb0ff 0%,#145dfa 45%,#4a7dfc 80%,#9cc0ff 100%)" }}
            >
              <div className="flex h-full flex-col rounded-[26px] bg-[#fbfcff] p-9 text-center sm:p-11">
                {/* rolling amount */}
                <p className="text-[36px] font-bold tracking-[-0.02em] text-ink sm:text-[44px]">
                  AED{" "}
                  <span className="inline-block h-[1em] overflow-hidden align-baseline">
                    <span
                      className={cn(
                        "flex flex-col transition-transform duration-[550ms] ease-[cubic-bezier(0.3,1.35,0.5,1)]",
                        yearly ? "-translate-y-1/2" : "translate-y-0"
                      )}
                    >
                      <span className="block h-[1em] leading-[1em]">29.99</span>
                      <span className="block h-[1em] leading-[1em]">24.99</span>
                    </span>
                  </span>
                  <span className="font-medium text-ink-mute">/month</span>
                </p>

                {/* scrolling billing line, slightly delayed — fades as it rises */}
                <p
                  className="mt-3 h-[1.4em] overflow-hidden text-[16px] sm:text-[18px]"
                  style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
                  }}
                >
                  <span
                    className={cn(
                      "flex flex-col transition-transform delay-150 duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                      yearly ? "-translate-y-1/2" : "translate-y-0"
                    )}
                  >
                    <span className="block h-[1.4em] whitespace-nowrap leading-[1.4em] text-ink-soft">
                      Save 33% by going yearly
                    </span>
                    <span className="block h-[1.4em] whitespace-nowrap leading-[1.4em] font-semibold text-ink">
                      AED 299.99 billed yearly
                    </span>
                  </span>
                </p>
                <p className="mt-8 text-left text-[24px] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
                  Full control, advanced tools, and better performance.
                </p>
                <ul className="mt-7 flex flex-col gap-5 text-left">
                  {["No Ads", "No Hidden Fees", "Your data stays private, we focus on building the best product for you."].map(
                    (f) => (
                      <li key={f} className="flex items-start gap-3 text-[17px] leading-[1.45] text-ink-mute">
                        <PurpleOrb className="mt-1 h-3 w-3 shrink-0 !shadow-none opacity-70" />
                        {f}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
