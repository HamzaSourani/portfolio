import { translation } from "@/i18n";
import MainInfo from "@/components/aboutMe/mainInfo";
import { LngParams } from "@/app/type";
import Resume from "@/components/aboutMe/resume";
import Skills from "@/components/aboutMe/skills";
async function AboutMe({ params: { lng } }: LngParams) {
  const { t } = await translation(lng, "aboutMe");
  return (
    <div className=" flex flex-col space-y-5">
      <MainInfo lng={lng} />
      <Resume lng={lng} />
      <Skills lng={lng} />
    </div>
  );
}

export default AboutMe;
