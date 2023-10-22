import * as React from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LngProps } from "@/app/type";
import { translation } from "@/i18n";
import { MODES } from "./constants";
import ModeToggleItem from "./item";

export default async function ModeToggle({ lng }: LngProps) {
  const { t } = await translation(lng);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className=" rounded-full" variant="outline" size="icon">
          <RiSunFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <RiMoonClearFill className="drop-shadow-neon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("layout.toggleMode.label")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {MODES.map((mode, index) => (
          <ModeToggleItem key={index} label={t(mode.label)} mode={mode.theme} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
