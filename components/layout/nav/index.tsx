import { translation } from "@/i18n";
import { LngProps } from "@/app/type";
import NavItem from "./navItem";
import { getNavLink } from "./constants";

const Navbar = async ({ lng }: LngProps) => {
  const { t } = await translation(lng);
  const NAV_LINKS = getNavLink(lng);
  return (
    <nav>
      <div className="flex flex-row items-center justify-center space-x-3 py-8 rtl:space-x-reverse md:space-x-4 lg:space-x-5">
        {NAV_LINKS.map((navLink, index) => (
          <NavItem
            key={index}
            href={navLink.href}
            isDisplayOnSmallScreen={navLink.isDisplayOnSmallScreen}
            label={t(navLink.label)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
