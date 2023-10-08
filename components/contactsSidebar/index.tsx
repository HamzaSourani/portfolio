import React from "react";
import { CONTACTS_OPTIONS } from "./constants";
import Link from "next/link";

const ContactSidebar = () => {
  return (
    <div>
      <aside className=" flex flex-col space-y-4 rounded-full bg-[rgba(255,255,255,.2)] p-2">
        {CONTACTS_OPTIONS.map((contact, index) => (
          <React.Fragment key={index}>
            {contact.isLocalLink ? (
              <Link href={contact.href}>
                <contact.icon
                  className={" h-8 w-8  transition-all hover:scale-110"}
                />
              </Link>
            ) : (
              <a href={contact.href} target="_blank">
                <contact.icon
                  className={" h-8 w-8  transition-all hover:scale-110"}
                />
              </a>
            )}
          </React.Fragment>
        ))}
      </aside>
    </div>
  );
};

export default ContactSidebar;
