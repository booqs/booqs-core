export function makeId(...ids: string[]): string {
    return ids.join('/');
}

export function parseId(id: string): string[] {
    return id.split('/');
}

export function assertNever(x: never) {
    return x;
}

export function flatten<T>(arr: T[][]): T[] {
    return arr.reduce<T[]>(
        (res, a) => a.length > 0
            ? [...res, ...a]
            : res,
        [],
    );
}

export function filterUndefined<T>(arr: Array<T | undefined>): T[] {
    return arr.filter(x => x !== undefined) as T[];
}

export function unique<T>(arr: T[]): T[] {
    const result: T[] = [];
    for (const item of arr) {
        if (!arr.some(i => i === item)) {
            arr.push(item);
        }
    }
    return result;
}
