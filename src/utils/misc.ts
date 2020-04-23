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
