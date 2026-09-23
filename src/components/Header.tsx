import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Wordmark } from "./Logo";
import { cn } from "@/utils/cn";

const NAV = [
  { label: "Features", href: "#feature" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export function SignUpButton({ className, label = "Sign Up" }: { className?: string; label?: string }) {
  return (
    <a
      href="#pricing"
      className={cn(
        "btn-signup group inline-flex items-center gap-2 py-2 pl-4 pr-2 text-[15px] font-semibold text-white",
        className
      )}
    >
      {label}
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-0.5">
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-black/[0.06] bg-page/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-[1320px] items-center justify-between px-5 lg:h-[88px] lg:px-10">
        <Wordmark />

        <nav className="hidden items-center gap-3 md:flex">
          {NAV.map((item, i) => (
            <span key={item.label} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-ink/30" />}
              <a
                href={item.href}
                className="nav-link text-[17px] font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </a>
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          <a
            href="#top"
            className="hidden text-[17px] font-medium text-ink-soft transition-colors duration-200 hover:text-ink sm:block"
          >
            Login
          </a>
          <SignUpButton className="hidden sm:inline-flex" />
          <SignUpButton className="inline-flex py-1.5 pl-3.5 pr-1.5 text-[14px] sm:hidden" />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-black/[0.06] bg-page/95 backdrop-blur-xl transition-all duration-400 md:hidden",
          open ? "max-h-80" : "max-h-0 border-b-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[17px] font-medium text-ink-soft transition-colors hover:bg-ink/[0.05] hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 text-[17px] font-medium text-ink-soft transition-colors hover:bg-ink/[0.05] hover:text-ink"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
