import { translation } from "@/i18n";
import { LngProps } from "@/app/type";
const MainInfo = async ({ lng }: LngProps) => {
  const { t } = await translation(lng, "home");
  return (
    <section className="relative z-10 m-2 flex h-full grow flex-col  justify-center space-y-2  p-8  text-primary shadow-sm shadow-border/50 md:h-[90%]   md:w-2/3 md:grow-0  md:space-y-4   lg:w-1/2   ">
      <h1 className="text-lg  font-medium sm:text-2xl md:text-3xl lg:text-4xl ">
        {t("hello")}
        <span className=" text-xl font-bold text-secondary sm:text-3xl md:text-4xl lg:text-5xl ">
          {t("name")}
        </span>
      </h1>
      <h2 className="text-lg font-medium sm:text-xl md:text-2xl ">
        {t("description")}
      </h2>
      <p className="text-sm font-medium sm:text-lg md:text-xl">
        {t("aboutMe")}
      </p>
    </section>
  );
};

export default MainInfo;
