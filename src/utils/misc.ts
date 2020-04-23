export function assertNever(x: never) {
    return x;
}

export function flatten<T>(arr: Array<T[] | undefined>): T[] {
    return arr.reduce<T[]>(
        (res, a) => a !== undefined && a.length > 0
            ? [...res, ...a]
            : res,
        [],
    );
}
