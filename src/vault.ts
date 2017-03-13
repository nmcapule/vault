class Vault {
    name: string;
    description: string;

    private blob: string;

    set(k: string, v: string): boolean {
        return true;
    }

    keys(): string[] {
        // TODO(ncapule): parse from blob
        return [];
    }
}