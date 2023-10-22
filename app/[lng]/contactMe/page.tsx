import type { Metadata } from "next";
import Contacts from "@/components/contactMe/contacts";
import EmailFrom from "@/components/contactMe/emailFrom";
import { LngParams } from "@/app/type";
export const metadata: Metadata = {
  title: " Contact Me - Hama Sourani  | Front-End Web Developer",
  description:
    "Get in touch with Hama Sourani , a skilled front-end web developer, to discuss collaborations, projects, or any inquiries. Reach out via email, WhatsApp, LinkedIn, or Telegram to connect and explore exciting opportunities.",
};
async function ContactMe({ params: { lng } }: LngParams) {
  return (
    <div className="flex flex-col items-center justify-center space-y-7 ">
      <Contacts />
      <EmailFrom lng={lng} />
    </div>
  );
}

export default ContactMe;
