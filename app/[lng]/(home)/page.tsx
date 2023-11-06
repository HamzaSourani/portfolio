import type { Metadata } from "next";
import { LiaFileDownloadSolid } from "react-icons/lia";
import Particle from "@/components/particles";
import MainInfo from "@/components/home/mainInfo";
import ContactSidebar from "@/components/home/contactsSidebar";
import { LngParams } from "@/app/type";
export const metadata: Metadata = {
  title: " Hamza Sourani - Front-End Web Developer with React.js",
  description:
    "Welcome to my portfolio! I am a skilled front-end web developer specializing in React.js. Explore my projects, skills, and experience in creating stunning web applications.",
};
export default async function Home({ params: { lng } }: LngParams) {
  return (
    <div>
      <div className={"flex  flex-row items-center justify-between"}>
        <MainInfo lng={lng} />
        <div className="flex  flex-col gap-4 ">
          <a
            href="/assets/hamza-sourani.pdf"
            download
            className=" relative  animate-bounce rounded-full bg-primary/20 p-2 shadow-sm hover:animate-none"
          >
            <LiaFileDownloadSolid className="h-8 w-8 " />
          </a>
          <ContactSidebar />
        </div>
      </div>
      <Particle />
    </div>
  );
}
