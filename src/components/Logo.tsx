import { cn } from "@/utils/cn";
import logo from "../assets/logo.png";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center overflow-hidden rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.22)]",
        className
      )}
    >
      <img src={logo} alt="Farz Wealth logo" className="h-full w-full object-cover" draggable={false} />
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group flex items-center gap-3", className)}>
      <LogoMark className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="text-[22px] font-bold tracking-[-0.02em] text-ink">Farz Wealth</span>
    </a>
  );
}
