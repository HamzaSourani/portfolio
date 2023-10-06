"use client";
import type { ISourceOptions } from "tsparticles-engine";
import { useTheme } from "next-themes";

const useParticlesOptions = () => {
  const { theme } = useTheme();
  const particleColor = theme === "dark" ? "hsl(0,0%,100%)" : "hsl(222,84%,5%)";

  const PARTICLES_OPTIONS: ISourceOptions = {
    fullScreen: {
      enable: true,
    },

    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push" },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 50,
        },
        repulse: {
          distance: 80,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: particleColor,
        distance: 90,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",

        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 250,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
      detectRetina: true,
    },
  };
  return PARTICLES_OPTIONS;
};

export default useParticlesOptions;
