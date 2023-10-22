"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemProps } from "./type";
import classnames from "classnames";
const NavItem = ({ href, label, isDisplayOnSmallScreen }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={classnames(
        {
          " hidden md:inline": !isDisplayOnSmallScreen,
        },
        "relative pb-2 sm:text-lg md:text-xl lg:text-2xl",
      )}
      href={href}
    >
      {label}
      <span
        className={classnames(
          { "w-full": pathname === href },
          "absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-primary transition-all",
        )}
      ></span>
    </Link>
  );
};

export default NavItem;
