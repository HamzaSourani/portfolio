import type { Metadata } from "next";
import ProjectCard from "@/components/projects/porjectCard";
import { LngParams } from "@/app/type";
import { PROJECTS } from "./constant";
export const metadata: Metadata = {
  title: "Hama Sourani - Portfolio Projects",
  description:
    "Discover a collection of my projects showcasing my expertise in front-end development. Each project presents a preview that highlights the key features and technologies utilized.",
};
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
