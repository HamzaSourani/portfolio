"use client";
import React, { FC, PropsWithChildren } from "react";
import { generateSparkleOptions, random } from "./helpers";
import Sparkle from "./sparkle";
import useRandomInterval from "./useRandomInterval";
import { SparkleOptions } from "./type";

const Sparkles: FC<PropsWithChildren> = ({ children }) => {
  const [sparkles, setSparkles] = React.useState<SparkleOptions[]>([]);
  useRandomInterval(
    () => {
      // Create a new sparkle
      const sparkleOption: SparkleOptions = generateSparkleOptions();
      // Clean up any "expired" sparkles
      const nextSparkles: SparkleOptions[] = sparkles.filter(
        (sparkle, index) => index < random(1, 10),
      );

      // Include our new sparkle
      nextSparkles.push(sparkleOption);

      // Make it so!
      setSparkles(nextSparkles);
    },
    200,
    1000,
  );
  return (
    <span className="relative inline-block">
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
      <strong className="relative z-[1] font-bold">{children}</strong>
    </span>
  );
};

export default Sparkles;
