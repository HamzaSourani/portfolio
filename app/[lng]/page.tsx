import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { translation } from "@/i18n";
import Particle from "@/components/particles";
import { LngParams } from "../type";
import myWork from "../../public/assets/images/rounded-text-dark-bold.png";
import Link from "next/link";
export default async function Home({ params: { lng } }: LngParams) {
  const { t } = await translation(lng, "home");
  return (
    <div className={"h-full"}>
      <section className="relative z-10 m-2 flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgba(255,255,255,.2)]  p-4 text-primary shadow-sm shadow-slate-500   md:h-[90%] md:w-2/3  md:space-y-4   lg:w-1/2   ">
        <h1 className="text-lg  font-medium md:text-2xl ">
          {t("hello")}
          <span className=" text-xl font-bold text-destructive md:text-3xl ">
            {t("name")}
          </span>
        </h1>
        <h2 className="text-sm font-medium md:text-xl ">{t("description")}</h2>
        <Link className=" " href={"/projects"}>
          <div className=" group relative flex h-[150px] w-[150px] flex-row content-center items-center md:h-[250px] md:w-[250px]">
            <Image
              className=" animate-spin-slow absolute h-full w-full"
              src={myWork}
              width={250}
              height={250}
              alt="my work"
            />
            <BsArrowRight className=" absolute left-[50px] top-[60px] text-4xl font-extrabold transition-all  group-hover:left-[60px] rtl:rotate-180 rtl:group-hover:left-[40px] md:left-[85px] md:top-[90px] md:text-7xl md:group-hover:left-[100px] rtl:md:group-hover:left-[70px]" />
          </div>
        </Link>
      </section>
      <Particle />
    </div>
  );
}
