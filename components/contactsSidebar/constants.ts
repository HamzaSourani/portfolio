import { MdEmail, MdWhatsapp } from "react-icons/md";
import { BsTelegram, BsLinkedin } from "react-icons/bs";
export const CONTACTS_OPTIONS = [
  {
    label: "contacts.email",
    href: "/contactMe",
    isLocalLink: true,
    icon: MdEmail,
  },
  {
    label: "contacts.linkedin",
    href: "https://www.linkedin.com/in/hamza-sourani-3ab519211/",
    isLocalLink: false,
    icon: BsLinkedin,
  },
  {
    label: "contacts.whatsapp",
    href: "https://web.whatsapp.com/send?phone=+963935405851",
    isLocalLink: false,
    icon: MdWhatsapp,
  },
  {
    label: "contacts.telegram",
    href: "https://telegram.me/HamzaSourani",
    isLocalLink: false,
    icon: BsTelegram,
  },
];
