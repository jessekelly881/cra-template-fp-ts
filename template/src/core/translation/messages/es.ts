import { TranslationSet } from "../set";

const translations: TranslationSet = {
    edit: () => "Editar",
    cancel: () => "Cancelar",
    user: ({ count }) => (count == 1 ? "Usario" : "Usarios"),
};

export default translations;
