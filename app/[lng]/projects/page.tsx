import type { Metadata } from "next";
import ProjectCard from "@/components/projects/porjectCard";
import { LngParams } from "@/app/type";
import { PROJECTS } from "./constant";
import { PROJECTS_PAGE_METADATA } from "@/constants/metadata";
export const metadata: Metadata = PROJECTS_PAGE_METADATA;
async function Projects({ params: { lng } }: LngParams) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
      {PROJECTS.map(
        ({ id, title, description, images, link, sourceCodeUrl }) => (
          <ProjectCard
            key={id}
            lng={lng}
            title={title}
            image={images[0]}
            description={description.main}
            sourceCodeUrl={sourceCodeUrl}
            projectLink={`project/${id}`}
            externalLink={link}
          />
        ),
      )}
    </div>
  );
}

export default Projects;
