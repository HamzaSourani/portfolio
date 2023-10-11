import Particle from "@/components/particles";
import MainInfo from "@/components/home/mainInfo";
import ContactSidebar from "@/components/home/contactsSidebar";
import { LngParams } from "@/app/type";
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
