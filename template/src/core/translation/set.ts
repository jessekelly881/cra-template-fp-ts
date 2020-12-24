interface Message<T> {
    (_: T): string; // A function that returns a string
}

interface Count {
    count: number;
}

export interface TranslationSet {
    edit: Message<void>;
    cancel: Message<void>;
    user: Message<Count>;
}
