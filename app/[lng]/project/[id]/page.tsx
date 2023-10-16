import { translation } from "@/i18n";
import MainInfo from "@/components/projects/project/mainInfo";
import { PROJECTS } from "../../projects/constant";
import { ProjectProps } from "./type";
import Description from "@/components/projects/project/description";

async function Project({ params: { id, lng } }: ProjectProps) {
  const { t } = await translation(lng, "projects");
  const { description, ...mainInfo } = PROJECTS[Number(id)];
  return (
    <div className="flex flex-col gap-8">
      <MainInfo {...{ lng, ...mainInfo }} />
      <Description {...{ lng, description }} />
    </div>
  );
}

export default Project;
