import { translation } from "@/i18n";
import { LngProps } from "@/app/type";
import NavItem from "./navItem";
import { getNavLink } from "./constants";

const Navbar = async ({ lng }: LngProps) => {
  const { t } = await translation(lng);
  const NAV_LINKS = getNavLink(lng);
  return (
    <nav>
      <div className="flex flex-row justify-center items-center my-4 space-x-3 md:space-x-4 lg:space-x-5 rtl:space-x-reverse">
        {NAV_LINKS.map((navLink, index) => (
          <NavItem key={index} href={navLink.href} label={t(navLink.label)} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
