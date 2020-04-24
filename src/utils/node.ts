import { BooqNode } from '../model';

export function* iterateNodes(nodes: BooqNode[]): Generator<BooqNode> {
    for (const node of nodes) {
        yield node;
        if (node.children) {
            yield* iterateNodes(node.children);
        }
    }
}

export function processNode(node: BooqNode, f: (n: BooqNode) => BooqNode): BooqNode {
    return f({
        ...node,
        children: node.children?.map(ch => processNode(ch, f)),
    });
}

export async function processNodeAsync(node: BooqNode, f: (n: BooqNode) => Promise<BooqNode>): Promise<BooqNode> {
    return f({
        ...node,
        children: node.children
            ? await Promise.all(
                node.children.map(ch => processNodeAsync(ch, f))
            )
            : undefined,
    });
}

export function nodeLength(node: BooqNode): number {
    if (node.name) {
        if (node.children?.length) {
            return nodesLength(node.children);
        } else {
            return 1;
        }
    } else {
        return node.content?.length ?? 0;
    }
}

function nodesLength(nodes: BooqNode[]) {
    return nodes.reduce((len, n) => len + nodeLength(n), 0);
}
