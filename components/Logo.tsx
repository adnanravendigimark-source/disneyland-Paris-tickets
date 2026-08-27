import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  alt = "Disneyland Paris Tickets",
  line1 = "DISNEYLAND",
  line2 = "PARIS",
}: {
  className?: string;
  variant?: "compact" | "stacked";
  theme?: "light" | "dark";
  src?: string;
  alt?: string;
  line1?: string;
  line2?: string;
}) {
  const customSrc = src?.trim();

  // Exact Golden Castle Silhouette with Circular Ring & Base Arc matching mockup
  const goldCastleLogo = (sizeClass: string) => (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClass}`}>
      <svg
        viewBox="0 0 60 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-sm"
      >
        {/* Outer Circular Halo Ring */}
        <circle
          cx="30"
          cy="26"
          r="23"
          stroke="#FFB52E"
          strokeWidth="1.2"
          strokeDasharray="1 0"
          opacity="0.85"
        />

        {/* Base Arc Swoosh in Midnight Blue */}
        <path
          d="M4 46C18 41.5 42 41.5 56 46"
          stroke="#10233F"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Golden Castle Spires & Silhouette */}
        <g fill="#FFB52E">
          {/* Main Central Tower */}
          <path d="M28 27V12L30 5L32 12V27H28Z" />
          <polygon points="26,13 30,3 34,13" fill="#FFB52E" />
          <circle cx="30" cy="3" r="1" fill="#FFB52E" />

          {/* Left Turrets */}
          <path d="M19 32V19L22 11L25 19V32H19Z" />
          <polygon points="18,19 22,10 26,19" fill="#FFB52E" />

          <path d="M11 36V24L14 17L17 24V36H11Z" />
          <polygon points="10,24 14,16 18,24" fill="#FFB52E" />

          {/* Right Turrets */}
          <path d="M35 32V19L38 11L41 19V32H35Z" />
          <polygon points="34,19 38,10 42,19" fill="#FFB52E" />

          <path d="M43 36V24L46 17L49 24V36H43Z" />
          <polygon points="42,24 46,16 50,24" fill="#FFB52E" />

          {/* Castle Wall Base */}
          <path d="M9 43V34H51V43C42 40 18 40 9 43Z" />

          {/* Castle Center Archway */}
          <path
            d="M25 43V34C25 31.2 27.2 29 30 29C32.8 29 35 31.2 35 34V43H25Z"
            fill={theme === "dark" ? "#10233F" : "#FFF8F1"}
          />
        </g>
      </svg>
    </div>
  );

  const isDark = theme === "dark";
  const mainTextColor = isDark ? "text-white" : "text-[#10233F]";
  const goldColor = "text-[#FFB52E]";
  const pinkColor = "text-[#F04483]";

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-2 ${className}`}>
        {customSrc ? (
          <span className="relative block h-20 w-[240px] sm:h-24 sm:w-[280px]">
            <Image src={customSrc} alt={alt} fill sizes="280px" className="object-contain" priority />
          </span>
        ) : (
          goldCastleLogo("h-14 w-16 sm:h-16 sm:w-20")
        )}
        <div className="text-center leading-tight flex flex-col items-center">
          <span className={`block font-display text-2xl font-black tracking-[0.06em] uppercase ${mainTextColor}`}>
            {line1 || "DISNEYLAND"}
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`font-display text-sm font-bold uppercase tracking-[0.2em] ${pinkColor}`}>
              {line2 || "PARIS"}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="h-[1px] w-3 bg-[#FFB52E]/60" />
            <span className={`font-display text-[10px] font-semibold uppercase tracking-[0.28em] ${goldColor}`}>
              TICKETS
            </span>
            <span className="h-[1px] w-3 bg-[#FFB52E]/60" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
      {customSrc ? (
        <span className="relative block h-11 w-[140px] shrink-0 overflow-hidden sm:h-12 sm:w-[155px]">
          <Image src={customSrc} alt={alt} fill priority sizes="155px" className="object-contain" />
        </span>
      ) : (
        goldCastleLogo("h-11 w-13 sm:h-12 sm:w-14")
      )}
      <div className="flex flex-col leading-none">
        <span className={`font-display text-[1.2rem] sm:text-[1.35rem] font-black tracking-[0.05em] uppercase leading-none ${mainTextColor} transition-colors group-hover:text-[#F04483]`}>
          {line1 || "DISNEYLAND"}
        </span>
        <span className={`font-display text-[13px] sm:text-sm font-bold uppercase tracking-[0.15em] leading-tight ${pinkColor}`}>
          {line2 || "PARIS"}
        </span>
        <span className={`font-display text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.26em] leading-tight ${goldColor}`}>
          TICKETS
        </span>
      </div>
    </Link>
  );
}
