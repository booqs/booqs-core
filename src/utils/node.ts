import { BooqNode } from '../model';
import { assertNever } from './misc';

export function mapNode(node: BooqNode, f: (n: BooqNode) => BooqNode): BooqNode {
    switch (node.node) {
        case 'ignore':
        case 'text':
        case 'image':
            return f(node);
        case undefined:
            return f({
                ...node,
                children: node.children?.map(ch => mapNode(ch, f)),
            });
        default:
            assertNever(node);
            return node;
    }
}

export async function mapNodeAsync(node: BooqNode, f: (n: BooqNode) => Promise<BooqNode>): Promise<BooqNode> {
    switch (node.node) {
        case 'ignore':
        case 'text':
        case 'image':
            return f(node);
        case undefined:
            return f({
                ...node,
                children: node.children
                    ? await Promise.all(
                        node.children.map(ch => mapNodeAsync(ch, f))
                    )
                    : undefined,
            });
        default:
            assertNever(node);
            return node;
    }
}
