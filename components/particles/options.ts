import { useTheme } from "next-themes";
import type { ISourceOptions } from "tsparticles-engine";

const useGetParticlesOptions = () => {
  const { theme } = useTheme();
  const particleColor =
    theme === "dark" ? "hsl(154,81%,91%)" : "hsl(214,72%,75%)";
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
          enable: false,
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
        opacity: 0.2,
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
        speed: 0.3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 180,
      },
      opacity: {
        value: 0.2,
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

export default useGetParticlesOptions;
