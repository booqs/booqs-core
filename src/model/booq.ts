export type BooqId = {
    source: string,
    id: string,
};

export type BooqPath = number[];

export type BooqNodeAttrs = {
    [name in string]?: string;
};
export type BooqNodeStyle = {
    [name in string]?: string;
};
export type BooqNode = {
    name?: string,
    id?: string,
    style?: BooqNodeStyle,
    children?: BooqNode[],
    attrs?: BooqNodeAttrs,
    content?: string,
}

export type TableOfContentsItem = {
    title: string | undefined,
    level: number,
    path: BooqPath,
    position: number,
};
export type TableOfContents = {
    title: string | undefined,
    items: TableOfContentsItem[],
    length: number,
};

export type BooqMeta = {
    [name in string]?: string | string[];
};
export type BooqImages = {
    [src in string]: string | undefined;
};
export type Booq = {
    nodes: BooqNode[],
    meta: BooqMeta,
    toc: TableOfContents,
    images: BooqImages,
}
