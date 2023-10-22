"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { ModeToggleItemProps } from "./type";

const ModeToggleItem = ({ label, mode }: ModeToggleItemProps) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuItem onClick={() => setTheme(mode)}>{label}</DropdownMenuItem>
  );
};

export default ModeToggleItem;
