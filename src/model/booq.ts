export type BooqPath = number[];

export type BooqIgnoreNode = {
    node: 'ignore',
    comment?: string,
    attrs?: undefined,
}
export type BooqStringNode = {
    node: 'text',
    content: string,
    attrs?: undefined,
};
export type BooqImageNode = {
    node: 'image',
    image: BooqImage,
    id?: string,
    attrs?: BooqNodeAttrs,
};

export type BooqNodeAttrs = {
    [name in string]?: string;
};
export type BooqNodeStyle = {
    [name in string]?: string;
};
export type BooqElementNode = {
    node?: undefined,
    name: string,
    id?: string,
    style?: BooqNodeStyle,
    children?: BooqNode[],
    attrs?: BooqNodeAttrs,
}

export type BooqNode =
    | BooqStringNode | BooqElementNode | BooqIgnoreNode | BooqImageNode;

export type BooqImage = {
    image: 'url', url: string,
} | {
    image: 'base64', base64: string,
};

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
    title?: string,
    authors?: string[],
    languages?: string[],
    subjects?: string[],
    license?: string,
    extra?: {
        [name in string]?: string;
    },
};
export type Booq = {
    nodes: BooqNode[],
    meta: BooqMeta,
    toc: TableOfContents,
}
