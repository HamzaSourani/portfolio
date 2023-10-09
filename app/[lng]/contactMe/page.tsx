import Contacts from "@/components/contactMe/contacts";
import EmailFrom from "@/components/contactMe/emailFrom";
import { LngParams } from "@/app/type";

async function ContactMe({ params: { lng } }: LngParams) {
  return (
    <div className="flex flex-col items-center justify-center space-y-7 ">
      <Contacts />
      <EmailFrom lng={lng} />
    </div>
  );
}

export default ContactMe;
