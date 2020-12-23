import i18n from "i18next";
import detector from "i18next-browser-languagedetector";

i18n.use(detector).init({
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
});
