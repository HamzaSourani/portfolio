import type { Metadata } from "next";
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
    <>
      <div className={"flex  flex-row items-center justify-between"}>
        <MainInfo lng={lng} />
        <ContactSidebar />
      </div>
      <Particle />
    </>
  );
}
