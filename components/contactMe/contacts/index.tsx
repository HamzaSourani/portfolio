import { CONTACTS_OPTIONS } from "@/constants";
import React from "react";

const Contacts = () => {
  return (
    <section className="flex flex-row space-x-4 rtl:space-x-reverse sm:space-x-5  md:space-x-6 ">
      {CONTACTS_OPTIONS.map((contact, index) => (
        <a
          key={index}
          className="group flex min-w-[100] flex-col items-center justify-center rounded-md bg-primary/20 p-4 shadow-sm [perspective:56px] sm:min-w-[110px] md:min-w-[126px] "
          href={contact.href}
          target="_blank"
        >
          <contact.icon
            className={
              "h-10 w-10 transition-transform duration-1000 group-hover:animate-twinkle sm:h-12 sm:w-12 md:h-14 md:w-14  "
            }
          />
          <span className="mt-2 text-xs uppercase sm:text-sm md:text-lg">
            {contact.label}
          </span>
        </a>
      ))}
    </section>
  );
};

export default Contacts;
