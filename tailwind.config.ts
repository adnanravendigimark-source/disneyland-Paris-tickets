import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Disneyland Paris exact color palette
        disney: {
          midnight: "#10233F",  // Midnight Royal Blue ⭐ (Primary brand, buttons, footer)
          navy: "#5B2BA8",      // Royal Navy (Hero overlays, headings, dark sections)
          pink: "#F04483",      // Magic Pink ⭐ (Main CTA, highlights, prices)
          lavender: "#EEE7FF",  // Fairytale Lavender (Soft sections, cards, backgrounds)
          gold: "#FFB52E",      // Champagne Gold (Premium accents, icons, decorative elements)
          cream: "#FFF8F1",     // Cloud Cream (Main background)
          sky: "#EEE7FF",       // Soft Sky Blue (Hero/light sections)
          charcoal: "#252A35",  // Charcoal (Body text)
          white: "#FFFFFF",     // White
        },
        stone: {
          50: "#FFF8F1",
          100: "#f5f5f4",
          900: "#252A35",
        },
        gold: {
          300: "#e6c37c",
          400: "#FFB52E",
          500: "#d69e2e",
          600: "#b7791f",
          700: "#975a16",
        },
        // Mapping the regal namespace classes to runtime CSS variables & theme colors
        // (renamed from "canal" — a leftover from the boat-cruise sibling
        // repo this project was copied from; the color VALUES were already
        // correct Disney hex codes, only the namespace name was stale)
        regal: {
          blue: "rgb(var(--color-regal-blue) / <alpha-value>)",
          primary: "rgb(var(--color-regal-primary) / <alpha-value>)",
          orange: "#F04483",
          ink: "rgb(var(--color-regal-ink) / <alpha-value>)",
          navy: "#10233F",
          azure: "#FFB52E",
          royal: "#F04483",
          sapphire: "#5B2BA8",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-display)", "Outfit", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "magic-glow":
          "radial-gradient(circle at 15% 25%, rgba(16,35,63,0.35) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(240,68,131,0.25) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(255,181,46,0.2) 0, transparent 50%)",
        "disney-gradient":
          "linear-gradient(135deg, #10233F 0%, #5B2BA8 50%, #F04483 100%)",
        "disney-pink-gradient":
          "linear-gradient(135deg, #F04483 0%, #d93d74 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #FFB52E 0%, #e6c37c 50%, #b7791f 100%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(240, 68, 131, 0.40)",
        "red-glow": "0 0 35px -5px rgba(16, 35, 63, 0.45)",
        "gold-glow": "0 0 35px -5px rgba(255, 181, 46, 0.40)",
        "btn-glow": "0 10px 25px -5px rgba(240, 68, 131, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
