import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    backend: {
      backends: [LocalStorageBackend, HttpBackend],
    },
  });

export default i18next;
