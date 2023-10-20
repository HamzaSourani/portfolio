import type { Metadata } from "next";
import MainInfo from "@/components/aboutMe/mainInfo";
import Resume from "@/components/aboutMe/resume";
import Skills from "@/components/aboutMe/skills";
import { LngParams } from "@/app/type";
export const metadata: Metadata = {
  title: "About Me - Hama Sourani  | Front-End Web Developer",
  description:
    "Learn more about me, Hama Sourani , a passionate front-end web developer. Discover my skills, tools, and expertise in creating engaging and user-friendly web applications. Get to know me and my journey in the world of web development.",
};

async function AboutMe({ params: { lng } }: LngParams) {
  return (
    <div className=" flex flex-col space-y-5">
      <MainInfo lng={lng} />
      <Resume lng={lng} />
      <Skills lng={lng} />
    </div>
  );
}

export default AboutMe;
