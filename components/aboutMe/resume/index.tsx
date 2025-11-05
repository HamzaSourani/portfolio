import { LiaFileDownloadSolid } from "react-icons/lia";
import Sparkles from "@/components/ui/sparkles";
import { LngProps } from "@/app/type";
import { translation } from "@/i18n";

const Resume = async ({ lng }: LngProps) => {
  const { t } = await translation(lng, "aboutMe");
  return (
    <div className=" flex justify-center">
      <a href={"/assets/Hamza_Sourani _Frontend_Developer.pdf"} download>
        <Sparkles>
          <div className=" flex items-center justify-center border-[3px] border-secondary pr-2  rtl:pl-2 ">
            <LiaFileDownloadSolid className="h-14 w-14" />
            <p>{t("resume")}</p>
          </div>
        </Sparkles>
      </a>
    </div>
  );
};

export default Resume;
