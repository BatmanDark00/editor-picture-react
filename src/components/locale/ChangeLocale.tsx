import { useTranslation } from "react-i18next";

import ButtonBase from "@/components/common/ButtonBase";

export default function ChangeLocale() {
  const { i18n } = useTranslation();
  const locales = {
    en: { nativaName: "English", locale: "en" },
    es: { nativaName: "Español", locale: "es" },
  };

  return (
    <div>
      {Object.keys(locales).map((key: string) => {
        return (
          <ButtonBase
            className="btn_theme"
            onClick={() => i18n.changeLanguage(key)}
            disabled={
              i18n.language === locales[key as keyof typeof locales].locale
            }
          >
            {key}
          </ButtonBase>
        );
      })}
    </div>
  );
}
