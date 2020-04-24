import { BooqNode } from '../model';

export function mapNode(node: BooqNode, f: (n: BooqNode) => BooqNode): BooqNode {
    return f({
        ...node,
        children: node.children?.map(ch => mapNode(ch, f)),
    });
}

export async function mapNodeAsync(node: BooqNode, f: (n: BooqNode) => Promise<BooqNode>): Promise<BooqNode> {
    return f({
        ...node,
        children: node.children
            ? await Promise.all(
                node.children.map(ch => mapNodeAsync(ch, f))
            )
            : undefined,
    });
}
