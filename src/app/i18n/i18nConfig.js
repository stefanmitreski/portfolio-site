"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Preload translations
const resources = {
  en: {
    translation: require("../../../public/locales/en/translation.json"),
  },
  mk: {
    translation: require("../../../public/locales/mk/translation.json"),
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "mk"],
    lng: "en", // Always start with English on server
    react: {
      useSuspense: false, // Disable suspense
      wait: true, // Wait for translations before rendering
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
