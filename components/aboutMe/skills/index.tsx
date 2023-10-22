import { LngProps } from "@/app/type";
import { translation } from "@/i18n";
import React from "react";
import { SKILLS } from "./constants";
import classNames from "classnames";

const Skills = async ({ lng }: LngProps) => {
  const { t } = await translation(lng, "aboutMe");
  return (
    <div>
      <h2 className="mb-8  text-2xl first-letter:font-extrabold first-letter:text-destructive sm:text-3xl md:text-4xl lg:text-5xl">
        {t("skills")}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6 lg:gap-8 ">
        {SKILLS.map((skill, index) => (
          <div
            key={skill.label}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <skill.icon
              className={classNames(
                { "animate-spin-slow": index === 0 },
                "h-8 w-8 fill-primary sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12",
              )}
            />
            <p className="text-xs capitalize sm:text-sm md:text-lg">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
