"use client";
import React, { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import useGetParticlesOptions from "./options";
const HomeParticle = () => {
  const PARTICLES_OPTIONS = useGetParticlesOptions();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    [],
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={PARTICLES_OPTIONS}
    />
  );
};

export default HomeParticle;
