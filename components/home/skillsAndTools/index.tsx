import classNames from "classnames";
import { SKILLS } from "@/components/aboutMe/skills/constants";
import { LngProps } from "@/app/type";
import { translation } from "@/i18n";

const SkillsAndTools = async ({ lng }: LngProps) => {
  const { t } = await translation(lng, "home");
  return (
    <div className="flex gap-8">
      <div>
        <h2 className=" my-8 text-xl capitalize sm:text-2xl md:text-3xl lg:text-4xl">
          {t("skillsAndTools")}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start ">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.label}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <skill.icon
                className={classNames(
                  {
                    "animate-spin-slow dark:drop-shadow-neon": index === 0,
                  },
                  "h-8 w-8  fill-primary sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12",
                )}
              />
              <p className="text-xs capitalize text-muted-foreground sm:text-sm md:text-lg">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTools;
