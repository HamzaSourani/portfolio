import type { Metadata } from "next";
import Contacts from "@/components/contactMe/contacts";
import EmailForm from "@/components/contactMe/emailForm";
import { LngParams } from "@/app/type";
import { CONTACT_ME_PAGE_METADATA } from "@/constants/metadata";
export const metadata: Metadata = CONTACT_ME_PAGE_METADATA;
async function ContactMe({ params: { lng } }: LngParams) {
  return (
    <div className="flex flex-col items-center justify-center space-y-7 ">
      <Contacts />
      <EmailForm lng={lng} />
    </div>
  );
}

export default ContactMe;
