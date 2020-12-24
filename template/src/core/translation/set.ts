interface Message<T> {
    (_: T): string; // A function that returns a string
}

interface Count {
    count: number;
}

export interface TranslationSet {
    edit: string;
    cancel: string;
    user: Message<Count>;
}
