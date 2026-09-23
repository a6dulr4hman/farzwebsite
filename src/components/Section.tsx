import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Reveal from "./Reveal";

export function PurpleOrb({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-block h-4 w-4 shrink-0 rounded-full", className)}
      style={{
        backgroundColor: "rgb(194, 158, 255)",
        boxShadow:
          "rgba(176, 131, 254, 0.1) 0px 2.4px 4.8px -2.4px, rgba(176, 131, 254, 0.24) 0px 0px 3.6px -2.4px, rgba(176, 131, 254, 0.18) 0px 9.6px 6.96px -2.4px, rgba(176, 131, 254, 0.18) 0px 6px 6px -2.4px, rgb(176, 131, 254) 1.2px 1.2px 3px 0px inset, rgb(255, 255, 255) -1.2px -1.2px 4.92px 0px inset, rgb(255, 255, 255) -1.2px -1.2px 2.4px 0px inset, rgb(255, 255, 255) 0px 0px 3.6px 0px inset, rgb(255, 255, 255) 0px 0px 1.56px 0px inset, rgba(176, 131, 254, 0.6) 0px 0px 2.4px 0px inset, rgb(255, 255, 255) 0px 0px 1.56px 0px inset",
      }}
    />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full bg-white py-2 pl-2.5 pr-5 text-[15px] font-medium text-ink-soft shadow-[0_2px_10px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04]">
      <PurpleOrb />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
  gap = false,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
  gap?: boolean;
}) {
  const centered = align === "center";
  return (
    <div
      id={id}
      className={cn("scroll-mt-28", centered ? "mx-auto max-w-[860px] text-center" : "max-w-[760px]")}
    >
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={cn(
            "mt-8 text-[38px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px] lg:text-[62px]",
            gap && "[&>span+span]:mt-14 [&>span]:block"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={170}>
          <p
            className={cn(
              "mt-7 text-[19px] leading-[1.55] text-ink-mute",
              centered ? "mx-auto max-w-[640px]" : "max-w-[560px]"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function FeatureCard({
  art,
  title,
  body,
  className,
}: {
  art: ReactNode;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[26px] bg-white p-4 ring-1 ring-black/[0.04]",
        "shadow-[0_2px_14px_rgba(0,0,0,0.04)] transition-all duration-300",
        "hover:-translate-y-1.5 hover:shadow-[0_24px_54px_-18px_rgba(0,0,0,0.16)]",
        className
      )}
    >
      {/* fixed-height art zone keeps every card's title on the same baseline */}
      <div className="flex h-[230px] items-center justify-center overflow-hidden rounded-[18px] sm:h-[260px]">
        {art}
      </div>
      <div className="flex flex-1 flex-col px-3 pb-4 pt-6">
        <h6 className="text-[21px] font-semibold tracking-[-0.015em] text-ink">{title}</h6>
        <p className="mt-2 text-[16px] leading-[1.55] text-ink-mute">{body}</p>
      </div>
    </div>
  );
}
