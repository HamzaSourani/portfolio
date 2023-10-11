"use client";
import { LiaFileDownloadSolid } from "react-icons/lia";
import Sparkles from "@/components/ui/sparkles";
import { LngProps } from "@/app/type";
import { useTranslation } from "@/i18n/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Resume = ({ lng }: LngProps) => {
  const { t } = useTranslation(lng, "aboutMe");
  const router = useRouter();
  return (
    <div className=" flex justify-center">
      <a href={"/assets/hamza-sourani.pdf"} download>
        <Sparkles>
          <div className=" flex items-center justify-center border-[3px] border-destructive pr-2  rtl:pl-2 ">
            <LiaFileDownloadSolid className="h-14 w-14" />
            <p>{t("resume")}</p>
          </div>
        </Sparkles>
      </a>
    </div>
  );
};

export default Resume;
