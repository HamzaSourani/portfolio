import classNames from "classnames";
import { translation } from "@/i18n";
import { LngProps } from "@/app/type";
import { SKILLS, TOOLS } from "./constants";

const Skills = async ({ lng }: LngProps) => {
  const { t } = await translation(lng, "aboutMe");
  return (
    <div>
      <div className="flex flex-col gap-6">
        <h2 className=" text-xl capitalize first-letter:font-bold first-letter:text-muted-foreground sm:text-2xl md:text-3xl lg:text-4xl">
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
                  {
                    "dark:drop-shadow-neon animate-spin-slow": index === 0,
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
        <hr className="bg-hr-linear-gradient drop-shadow-neon h-[1px] w-2/4 rounded-full border-none" />
        <h2 className=" text-xl capitalize first-letter:font-bold first-letter:text-muted-foreground  sm:text-2xl md:text-3xl lg:text-4xl">
          {t("tools")}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6 lg:gap-8 ">
          {TOOLS.map((tool, index) => (
            <div
              key={tool.label}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <tool.icon className="h-8 w-8  fill-primary sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12" />
              <p className="text-xs  capitalize  text-muted-foreground sm:text-sm md:text-lg">
                {tool.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
