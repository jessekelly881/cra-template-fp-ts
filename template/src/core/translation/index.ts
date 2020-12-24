/**
 * @module translation
 * @desc A custom translation module using typescript instead of json. See link for a description of the rational.
 *
 * @see https://medium.com/@kenji.imamula/simple-and-type-safe-i18n-implementation-with-typescript-aca4b9369db3
 */

import { TranslationSet } from "./set";

import TranslationSetEn from "./messages/en";
import TranslationSetEs from "./messages/es";

/**
 * Languages supported by application.
 */
export type SupportedLanguage = "en" | "es";

type LanguageSetMap = Record<SupportedLanguage, TranslationSet>;
const languageMap: LanguageSetMap = {
    en: TranslationSetEn,
    es: TranslationSetEs,
};

/**
 * @function t
 * The translation function. Completely typesafe. Replaces i18n t function.
 *
 * @example t("en").user({ count: 2 });
 * @example t("en").edit;
 */
const t = (lang: SupportedLanguage) => languageMap[lang];

export default t;
