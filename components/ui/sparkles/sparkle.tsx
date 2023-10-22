import React from "react";
import { SparkleOptions } from "./type";

const Sparkle = ({ color, size, style }: SparkleOptions) => {
  return (
    <span
      className="animate-sparkle-parent pointer-events-none absolute block "
      style={style}
    >
      <svg
        className="animate-sparkle-child block fill-primary"
        width={size}
        height={size}
        viewBox="0 0 160 160"
      >
        <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" />
      </svg>
    </span>
  );
};

export default Sparkle;
