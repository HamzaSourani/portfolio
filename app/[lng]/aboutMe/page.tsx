import type { Metadata } from "next";
import MainInfo from "@/components/aboutMe/mainInfo";
import Resume from "@/components/aboutMe/resume";
import Skills from "@/components/aboutMe/skillsAndTools";
import { LngParams } from "@/app/type";
import { ABOUT_ME_PAGE_METADATA } from "@/constants/metadata";
export const metadata: Metadata = ABOUT_ME_PAGE_METADATA;

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
