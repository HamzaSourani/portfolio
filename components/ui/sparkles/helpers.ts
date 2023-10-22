import React, { useId } from "react";
import { SparkleOptions } from "./type";
const DEFAULT_COLOR = "hsl(50ded,100%,50%)";
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const generateSparkleOptions = (
  color: string = DEFAULT_COLOR,
): SparkleOptions => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: { top: `${random(0, 100)}%`, left: `${random(0, 100)}%`, zIndex: 2 },
  };
};

export { generateSparkleOptions, random };
