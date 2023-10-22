import React from "react";
import { DescriptionProps } from "./type";
import { translation } from "@/i18n";

const Description = async ({
  lng,
  description: { main, list },
}: DescriptionProps) => {
  const { t } = await translation(lng, "projects");
  return (
    <section className="flex flex-col gap-4">
      <p className="  md:text-lg">{t(main)}</p>
      <ul className="ml-4 flex list-inside list-disc flex-col gap-2 text-xs rtl:mr-4 md:ml-8 md:text-sm rtl:md:mr-8">
        {list.map((item, index) => (
          <li key={index}>{t(item)}</li>
        ))}
      </ul>
    </section>
  );
};

export default Description;
