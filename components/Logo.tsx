import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  alt = "Disneyland Paris Tickets",
  line1 = "DISNEYLAND",
  line2 = "PARIS TICKETS",
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

  // Purple Castle Silhouette with Circular Ring matching exact design
  const purpleCastleLogo = (sizeClass: string) => (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClass}`}>
      <svg
        viewBox="0 0 60 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Outer Circular Halo Ring */}
        <circle
          cx="30"
          cy="27"
          r="23.5"
          stroke="#7137D4"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Purple Castle Spires & Silhouette */}
        <g fill="#7137D4">
          {/* Main Central Spire */}
          <path d="M28 27V12L30 4.5L32 12V27H28Z" />
          <polygon points="26,13 30,3 34,13" fill="#7137D4" />
          <circle cx="30" cy="3" r="1.2" fill="#7137D4" />

          {/* Left Turrets */}
          <path d="M19 32V19L22 11L25 19V32H19Z" />
          <polygon points="18,19 22,10 26,19" fill="#7137D4" />

          <path d="M11 37V24L14 17L17 24V37H11Z" />
          <polygon points="10,24 14,16 18,24" fill="#7137D4" />

          {/* Right Turrets */}
          <path d="M35 32V19L38 11L41 19V32H35Z" />
          <polygon points="34,19 38,10 42,19" fill="#7137D4" />

          <path d="M43 37V24L46 17L49 24V37H43Z" />
          <polygon points="42,24 46,16 50,24" fill="#7137D4" />

          {/* Castle Wall Base */}
          <path d="M9 44V34H51V44C42 41 18 41 9 44Z" />

          {/* Castle Center Archway */}
          <path
            d="M26 44V35.5C26 33 27.8 31 30 31C32.2 31 34 33 34 35.5V44H26Z"
            fill={theme === "dark" ? "#10233F" : "#FFFFFF"}
          />
        </g>
      </svg>
    </div>
  );

  const isDark = theme === "dark";
  const mainTextColor = isDark ? "text-white" : "text-[#10233F]";
  const purpleSubColor = "text-[#7137D4]";
  const pinkColor = "text-[#F04483]";

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
        {customSrc ? (
          <span className="relative block h-20 w-[240px] sm:h-24 sm:w-[280px]">
            <Image src={customSrc} alt={alt} fill sizes="280px" className="object-contain" priority />
          </span>
        ) : (
          purpleCastleLogo("h-14 w-16 sm:h-16 sm:w-20")
        )}
        <div className="text-center leading-tight flex flex-col items-center">
          <span className={`block font-display text-2xl font-black tracking-[0.05em] uppercase ${mainTextColor}`}>
            {line1 || "DISNEYLAND"}
          </span>
          <span className={`font-display text-sm font-extrabold uppercase tracking-[0.16em] ${pinkColor} mt-0.5`}>
            {line2 || "PARIS TICKETS"}
          </span>
          <span className={`font-display text-[9px] font-bold uppercase tracking-[0.32em] ${purpleSubColor} opacity-70 mt-0.5`}>
            TICKETS
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {customSrc ? (
        <span className="relative block h-11 w-[140px] shrink-0 overflow-hidden sm:h-12 sm:w-[155px]">
          <Image src={customSrc} alt={alt} fill priority sizes="155px" className="object-contain" />
        </span>
      ) : (
        purpleCastleLogo("h-11 w-11 sm:h-12 sm:w-12")
      )}
      <div className="flex flex-col leading-none justify-center">
        <span className={`font-display text-[1.18rem] sm:text-[1.3rem] font-black tracking-[0.03em] uppercase leading-tight ${mainTextColor} transition-colors group-hover:text-[#F04483]`}>
          {line1 || "DISNEYLAND"}
        </span>
        <span className={`font-display text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.12em] leading-tight ${pinkColor}`}>
          {line2 || "PARIS TICKETS"}
        </span>
        <span className={`font-display text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.28em] leading-tight ${purpleSubColor} opacity-70`}>
          T I C K E T S
        </span>
      </div>
    </Link>
  );
}
