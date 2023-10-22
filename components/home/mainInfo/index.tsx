import Link from "next/link";
import { translation } from "@/i18n";
import { BsArrowRight } from "react-icons/bs";
import { LngProps } from "@/app/type";
import MyProjectsIcon from "@/components/ui/svgs/myProjects";
const MainInfo = async ({ lng }: LngProps) => {
  const { t } = await translation(lng, "home");
  return (
    <section className="relative z-10 m-2 flex h-full grow flex-col items-center justify-center space-y-2 rounded-md border-b-2 border-border bg-primary/20 p-4  text-primary shadow-sm shadow-border/50 md:h-[90%]   md:w-2/3 md:grow-0  md:space-y-4   lg:w-1/2   ">
      <h1 className="text-lg  font-medium md:text-2xl ">
        {t("hello")}
        <span className=" text-xl font-bold text-secondary md:text-3xl ">
          {t("name")}
        </span>
      </h1>
      <h2 className="text-sm font-medium md:text-xl ">{t("description")}</h2>
      <Link className=" " href={`${lng}/projects`}>
        <div className=" group relative flex h-[150px] w-[150px] flex-row content-center items-center md:h-[250px] md:w-[250px]">
          <MyProjectsIcon className=" absolute h-full w-full fill-secondary" />
          <BsArrowRight className=" absolute left-[50px] top-[60px] text-4xl font-extrabold transition-all  group-hover:left-[60px] rtl:rotate-180 rtl:group-hover:left-[40px] md:left-[85px] md:top-[90px] md:text-7xl md:group-hover:left-[100px] rtl:md:group-hover:left-[70px]" />
        </div>
      </Link>
    </section>
  );
};

export default MainInfo;
