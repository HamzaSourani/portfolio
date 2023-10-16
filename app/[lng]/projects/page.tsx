import { LngParams } from "@/app/type";
import { translation } from "@/i18n";
import { PROJECTS } from "./constant";
import ProjectCard from "@/components/projects/porjectCard";

async function Projects({ params: { lng } }: LngParams) {
  const { t } = await translation(lng, "projects");

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
