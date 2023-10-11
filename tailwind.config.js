/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "grow-and-shrink": {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": {
            transform: "scale(0)",
          },
        },
        "spin-180": {
          from: { transform: "rotate(0deg)" },
          to: {
            transform: "rotate(180deg)",
          },
        },
        twinkle: {
          from: {
            transform: "rotateY(0deg) scale(1)",
          },
          to: {
            transform: "rotateY(360deg) scale(1.1)",
          },
        },
        waving: {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },

          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 6s linear infinite",
        "sparkle-parent": "grow-and-shrink 1s  forwards",
        "sparkle-child": "spin-180 1s linear forwards",
        twinkle: "twinkle 1s ease-in-out",
        wave: "waving 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
