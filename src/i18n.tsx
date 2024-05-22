import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import en from "@/assets/locales/en/translation.json";
import es from "@/assets/locales/es/translation.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: "es",
    debug: true,

    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
  });
