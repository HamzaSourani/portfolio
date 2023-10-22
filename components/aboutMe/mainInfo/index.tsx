import Image from "next/image";
import { translation } from "@/i18n";
import { LngProps } from "@/app/type";

const MainInfo = async ({ lng }: LngProps) => {
  const { t } = await translation(lng, "aboutMe");
  return (
    <div className="flex flex-col items-center  justify-evenly gap-4 md:flex-row">
      <h1 className="order-2 basis-3/5  md:order-1">{t("mainParagraph")}</h1>
      <div className="order-1  md:order-2 ">
        <Image
          src={"/assets/images/personalImage.png"}
          className=" h-[200px] w-[200px] animate-wave  border border-primary object-cover "
          width={200}
          height={200}
          alt="hamza sourani"
        />
      </div>
    </div>
  );
};

export default MainInfo;
