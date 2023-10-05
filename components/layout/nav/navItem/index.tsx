"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemProps } from "./type";
import classnames from "classnames";
const NavItem = ({ href, label }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      className="relative py-1 sm:text-lg md:text-xl lg:text-2xl"
      href={href}
    >
      {label}
      <span
        className={classnames(
          { "w-full": pathname === href },
          "absolute w-0 h-[2px] bg-primary transition-all left-0 bottom-0"
        )}
      ></span>
    </Link>
  );
};

export default NavItem;
