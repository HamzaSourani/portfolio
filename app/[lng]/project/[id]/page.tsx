import MainInfo from "@/components/projects/project/mainInfo";
import Description from "@/components/projects/project/description";
import { PROJECTS } from "../../projects/constant";
import { ProjectProps } from "./type";

async function Project({ params: { id, lng } }: ProjectProps) {
  const { description, ...mainInfo } = PROJECTS[Number(id)];
  return (
    <div className="flex flex-col gap-8">
      <MainInfo {...{ lng, ...mainInfo }} />
      <Description {...{ lng, description }} />
    </div>
  );
}

export default Project;
