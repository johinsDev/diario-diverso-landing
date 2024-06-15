import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        moontime: ["var(--font-moontime)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        h1: "clamp(3.125rem, 2.875rem + 1.25vw, 4rem)",
        h2: "clamp(2.125rem, 1.7321rem + 1.9643vw, 3.5rem)",
        h3: "clamp(1.875rem, 1.7321rem + 1.25vw, 2.5rem)",
        h4: "clamp(1.625rem, 1.7321rem + 0.8929vw, 2.25rem)",
        h5: "clamp(1.375rem, 1.7321rem + 0.5357vw, 2rem)",
        body: "clamp(1rem, 1.7321rem + 0.1786vw, 1.25rem)",
      },
      boxShadow: {
        journal:
          "rgba(0, 0, 0, 0.05) 0px 1.8px 3.6px 0px, rgba(0, 0, 0, 0.08) 0px 10.8px 21.6px 0px, rgba(0, 0, 0, 0.1) 0px -0.9px 0px 0px inset, rgba(255, 255, 255, 0.1) 0px 1.8px 1.8px 0px inset, rgba(0, 0, 0, 0.1) 3.6px 0px 3.6px 0px inset",
      },
      lineHeight: {
        h1: "clamp(3.5rem, 3.25rem + 1.25vw, 4.5rem)",
        h2: "clamp(2.5rem, 2.25rem + 1.25vw, 3.75rem)",
        h3: "clamp(2.25rem, 2.25rem + 1.25vw, 3rem)",
        h4: "clamp(2rem, 2.25rem + 1.25vw, 2.75rem)",
        h5: "clamp(1.75rem, 2.25rem + 1.25vw, 2.5rem)",
        body: "clamp(1.5rem, 2.25rem + 1.25vw, 2rem)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-spin": "border-spin 7s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-3d")],
} satisfies Config;

export default config;
