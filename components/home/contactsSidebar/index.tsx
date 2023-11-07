import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { CONTACTS_OPTIONS } from "@/constants";

const ContactSidebar = () => {
  return (
    <aside className="  flex flex-col space-y-4 rounded-full bg-primary/20 p-2 shadow-sm ">
      {CONTACTS_OPTIONS.map((contact, index) => (
        <a key={index} href={contact.href} target="_blank">
          <contact.icon
            className={" h-8 w-8  transition-all hover:scale-110"}
          />
        </a>
      ))}
    </aside>
  );
};

export default ContactSidebar;
