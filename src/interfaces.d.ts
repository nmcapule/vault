interface IBundle {
    name: string;
    description: string;
    set: (k: string, v: string) => boolean;
    del: (k: string) => boolean;
    has: (k: string) => boolean;
    keys: () => string[];
}

interface IBundleCodec {
    encode: (b: IBundle) => string;
    decode: (s: string) => IBundle;
}