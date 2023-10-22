import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuLanguages } from "react-icons/lu";
import { translation } from "@/i18n";
import { LngProps } from "@/app/type";
import { LANGUAGES } from "./constants";
import SwitchLanguageItem from "./item";
const SwitchLanguage = async ({ lng }: LngProps) => {
  const { t } = await translation(lng);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className=" rounded-full" variant="outline" size="icon">
          <LuLanguages />
          <span className="sr-only">languages</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((language, index) => (
          <SwitchLanguageItem
            key={index}
            label={t(language.label)}
            lng={language.target}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default SwitchLanguage;
