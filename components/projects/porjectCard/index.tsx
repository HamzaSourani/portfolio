import Image from "next/image";
import Link from "next/link";
import { BiLink, BiLogoGithub } from "react-icons/bi";
import { translation } from "@/i18n";
import { ProjectCardProps } from "./type";
const ProjectCard = async ({
  title,
  image,
  description,
  sourceCodeUrl,
  externalLink,
  projectLink,
  lng,
}: ProjectCardProps) => {
  const { t } = await translation(lng, "projects");
  return (
    <div className="  flex flex-col gap-4  overflow-hidden rounded-lg border border-border bg-primary/20   shadow-sm shadow-border ">
      <p className=" px-2 pt-2 text-xl sm:text-2xl md:text-3xl">{t(title)}</p>
      <Link href={projectLink}>
        <div className="h-44 w-full overflow-hidden rounded-b-lg sm:h-48 md:h-52 lg:h-56 ">
          <Image
            className="h-full w-full object-cover transition-transform hover:rotate-12 hover:scale-[1.4]"
            src={image}
            alt={t(title)}
            width={300}
            height={300}
          />
        </div>
      </Link>
      <p className="px-2">
        {t(description).length >= 120 ? (
          <>
            <span>{t(description).slice(0, 120)}</span>...
            <Link href={projectLink}>{t("showMore")}</Link>
          </>
        ) : (
          t(description)
        )}
      </p>
      <div className="flex flex-row gap-4 px-2 pb-2">
        {externalLink && (
          <Link
            className="transition-transform hover:scale-110"
            href={externalLink}
          >
            <BiLink className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7  lg:h-8 lg:w-8" />
          </Link>
        )}
        {sourceCodeUrl && (
          <Link
            className="transition-transform hover:scale-110"
            href={sourceCodeUrl}
          >
            <BiLogoGithub className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7  lg:h-8 lg:w-8" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
