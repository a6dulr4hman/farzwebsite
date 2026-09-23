/* Small rounded flag marks for the "Trusted throughout the Middle East" marquee */

const frame = "block overflow-hidden rounded-[5px] shadow-[0_1px_2px_rgba(0,0,0,0.18)] ring-1 ring-black/5";

export function KuwaitFlag() {
  return (
    <svg viewBox="0 0 30 20" className={`${frame} h-5 w-[30px]`} aria-label="Kuwait">
      <rect width="30" height="6.67" fill="#3a9a4d" />
      <rect y="6.67" width="30" height="6.67" fill="#f5f5f5" />
      <rect y="13.33" width="30" height="6.67" fill="#ce3b2e" />
      <path d="M0 0l9 6.67v6.66L0 20V0Z" fill="#1f1f1f" />
    </svg>
  );
}

export function OmanFlag() {
  return (
    <svg viewBox="0 0 30 20" className={`${frame} h-5 w-[30px]`} aria-label="Oman">
      <rect width="30" height="6.67" fill="#f5f5f5" />
      <rect y="6.67" width="30" height="6.67" fill="#ce3b2e" />
      <rect y="13.33" width="30" height="6.67" fill="#3a9a4d" />
      <rect width="9" height="20" fill="#ce3b2e" />
      <path d="M3.2 3.1l1.3 1.1 1.3-1.1M4.5 2.4v2.2" stroke="#fff" strokeWidth="0.7" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function BahrainFlag() {
  return (
    <svg viewBox="0 0 30 20" className={`${frame} h-5 w-[30px]`} aria-label="Bahrain">
      <rect width="30" height="20" fill="#ce3b2e" />
      <path d="M0 0h9l4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2H0V0Z" fill="#ffffff" />
    </svg>
  );
}

export function UaeFlag() {
  return (
    <svg viewBox="0 0 30 20" className={`${frame} h-5 w-[30px]`} aria-label="United Arab Emirates">
      <rect width="30" height="6.67" fill="#3a9a4d" />
      <rect y="6.67" width="30" height="6.67" fill="#f5f5f5" />
      <rect y="13.33" width="30" height="6.67" fill="#1f1f1f" />
      <rect width="8" height="20" fill="#ce3b2e" />
    </svg>
  );
}

export function SaudiFlag() {
  return (
    <svg viewBox="0 0 30 20" className={`${frame} h-5 w-[30px]`} aria-label="Saudi Arabia">
      <rect width="30" height="20" fill="#2f7a3d" />
      <path d="M7 8.4h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 12.6h12" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function QatarFlag() {
  return (
    <svg viewBox="0 0 30 20" className={`${frame} h-5 w-[30px]`} aria-label="Qatar">
      <rect width="30" height="20" fill="#8a1538" />
      <path d="M0 0h7l2.6 1.43L7 2.86l2.6 1.43L7 5.71l2.6 1.43L7 8.57l2.6 1.43L7 11.43l2.6 1.43L7 14.29l2.6 1.43L7 17.14l2.6 1.43L7 20H0V0Z" fill="#f5f5f5" />
    </svg>
  );
}

export const COUNTRIES = [
  { name: "Kuwait", Flag: KuwaitFlag },
  { name: "Oman", Flag: OmanFlag },
  { name: "Bahrain", Flag: BahrainFlag },
  { name: "United Arab Emirates", Flag: UaeFlag },
  { name: "Saudi Arabia", Flag: SaudiFlag },
  { name: "Qatar", Flag: QatarFlag },
];
