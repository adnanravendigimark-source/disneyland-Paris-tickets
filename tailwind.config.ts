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
          midnight: "#102A5C",  // Midnight Royal Blue ⭐ (Primary brand, buttons, footer)
          navy: "#172F6B",      // Royal Navy (Hero overlays, headings, dark sections)
          pink: "#E94B83",      // Magic Pink ⭐ (Main CTA, highlights, prices)
          lavender: "#DCD8F2",  // Fairytale Lavender (Soft sections, cards, backgrounds)
          gold: "#D6A84F",      // Champagne Gold (Premium accents, icons, decorative elements)
          cream: "#FCF8F1",     // Cloud Cream (Main background)
          sky: "#DCEAF7",       // Soft Sky Blue (Hero/light sections)
          charcoal: "#252A35",  // Charcoal (Body text)
          white: "#FFFFFF",     // White
        },
        stone: {
          50: "#FCF8F1",
          100: "#f5f5f4",
          900: "#252A35",
        },
        gold: {
          300: "#e6c37c",
          400: "#D6A84F",
          500: "#d69e2e",
          600: "#b7791f",
          700: "#975a16",
        },
        // Mapping the canal namespace classes to runtime CSS variables & theme colors
        canal: {
          blue: "rgb(var(--color-canal-blue) / <alpha-value>)",
          primary: "rgb(var(--color-canal-primary) / <alpha-value>)",
          orange: "#E94B83",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
          navy: "#102A5C",
          azure: "#D6A84F",
          royal: "#E94B83",
          sapphire: "#172F6B",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-display)", "Outfit", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 15% 25%, rgba(16,42,92,0.35) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(233,75,131,0.25) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(214,168,79,0.2) 0, transparent 50%)",
        "disney-gradient":
          "linear-gradient(135deg, #102A5C 0%, #172F6B 50%, #E94B83 100%)",
        "disney-pink-gradient":
          "linear-gradient(135deg, #E94B83 0%, #d93d74 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #D6A84F 0%, #e6c37c 50%, #b7791f 100%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(233, 75, 131, 0.40)",
        "red-glow": "0 0 35px -5px rgba(16, 42, 92, 0.45)",
        "gold-glow": "0 0 35px -5px rgba(214, 168, 79, 0.40)",
        "btn-glow": "0 10px 25px -5px rgba(233, 75, 131, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
