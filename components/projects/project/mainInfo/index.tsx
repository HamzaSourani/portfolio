import Link from "next/link";
import classNames from "classnames";
import { translation } from "@/i18n";
import { BiLink, BiLogoGithub } from "react-icons/bi";
import ProjectImages from "@/components/projects/project/mainInfo/projectImages";
import { LngProps } from "@/app/type";
import { MainInfoProps } from "./type";

const MainInfo = async ({
  lng,
  title,
  owner,
  ownerLogo,
  estimateTime,
  images,
  link,
  sourceCodeUrl,
  tools,
  collaborators,
}: MainInfoProps) => {
  const { t } = await translation(lng, "projects");
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-5">
      <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-3">
        <p className=" text-xl sm:text-2xl md:text-3xl">{t(title)}</p>
        <p>{t("project.owner", { name: t(owner) })}</p>
        <p>{t("project.estimatingTime", { time: estimateTime })}</p>
        <div className="flex flex-row flex-wrap  gap-4">
          {tools.map((tool, index) => (
            <div
              key={tool.label}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <tool.icon
                className={classNames(
                  { "animate-spin-slow": index === 0 },
                  "h-6 w-6 fill-primary sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10",
                )}
              />
              <p className="text-xs capitalize sm:text-sm ">{tool.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 md:col-span-3 lg:col-span-2">
        <div className="h-60 sm:h-64 md:h-72 lg:h-80">
          <ProjectImages images={images} />
        </div>
        <div className="flex flex-row gap-4 px-2 pb-2">
          {link && (
            <Link className="transition-transform hover:scale-110" href={link}>
              <BiLink className="h-6 w-6 fill-secondary  sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </Link>
          )}
          {sourceCodeUrl && (
            <Link
              className="transition-transform hover:scale-110"
              href={sourceCodeUrl}
            >
              <BiLogoGithub className="h-6 w-6 fill-secondary sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainInfo;
