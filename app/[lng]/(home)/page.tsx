import type { Metadata } from "next";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { LiaFileDownloadSolid } from "react-icons/lia";
import MyProjectsIcon from "@/components/ui/svgs/myProjects";
import Particle from "@/components/particles";
import MainInfo from "@/components/home/mainInfo";
import ContactSidebar from "@/components/home/contactsSidebar";
import SkillsAndTools from "@/components/home/skillsAndTools";
import { LngParams } from "@/app/type";
import { HOME_PAGE_METADATA } from "@/constants/metadata";
export const metadata: Metadata = HOME_PAGE_METADATA;
export default async function Home({ params: { lng } }: LngParams) {
  return (
    <div>
      <div
        className={
          "flex  flex-col flex-wrap items-center justify-between md:flex-row"
        }
      >
        <MainInfo lng={lng} />
        <Link href={`${lng}/projects`}>
          <div className=" group relative flex h-[150px] w-[150px] flex-row content-center items-center md:h-[250px] md:w-[250px]">
            <MyProjectsIcon className=" absolute  h-full w-full fill-primary" />
            <BsArrowRight className=" absolute left-[50px] top-[60px] text-4xl font-extrabold text-secondary transition-all  group-hover:left-[60px] rtl:rotate-180 rtl:group-hover:left-[40px] md:left-[85px] md:top-[90px] md:text-7xl md:group-hover:left-[100px] rtl:md:group-hover:left-[70px]" />
          </div>
        </Link>

        <div className="hidden flex-col gap-4 md:flex ">
          <a
            href="/assets/Hamza_Sourani_Frontend_Developer.pdf"
            download
            className=" relative  animate-bounce rounded-full bg-primary/20 p-2 shadow-sm hover:animate-none"
          >
            <LiaFileDownloadSolid className="h-8 w-8 " />
          </a>
          <ContactSidebar />
        </div>
      </div>
      <hr className="mt-8 h-[1px] w-2/4 rounded-full border-none bg-hr-linear-gradient rtl:bg-hr-linear-gradient-reverse dark:drop-shadow-neon md:mt-0" />
      <SkillsAndTools lng={lng} />
      <Particle />
    </div>
  );
}
