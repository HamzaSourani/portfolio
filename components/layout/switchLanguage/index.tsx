"use client";
import { useRouter } from "next/navigation";
import { LuLanguages } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";
import { isFallbackLng } from "@/i18n/settings";
import { LngProps } from "@/app/type";

export default function SwitchLanguage({ lng }: LngProps) {
  const { t } = useTranslation(lng);
  const router = useRouter();
  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push(isFallbackLng(lng) ? "/ar" : "/en");
      }}
    >
      <LuLanguages className="mr-2 h-4 w-4 rtl:ml-2" />
      {isFallbackLng(lng) ? t("languages.ar") : t("languages.en")}
    </Button>
  );
}
