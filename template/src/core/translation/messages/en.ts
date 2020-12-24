import { TranslationSet } from "../set";

const translations: TranslationSet = {
    edit: () => "Edit",
    cancel: () => "Cancel",
    user: ({ count }) => (count == 1 ? "User" : "Users"),
};

export default translations;
