"use client";
import { usePathname, useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SwitchLanguageItemProps } from "./type";

const SwitchLanguageItem = ({ label, lng }: SwitchLanguageItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenuItem
      onClick={() => {
        router.replace(`/${lng}${pathname.slice(3)}`);
      }}
    >
      {label}
    </DropdownMenuItem>
  );
};

export default SwitchLanguageItem;
