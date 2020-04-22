import { BooqNode } from '../model';
import { assertNever } from './misc';

export function mapNode(node: BooqNode, f: (n: BooqNode) => BooqNode): BooqNode {
    switch (node.node) {
        case 'ignore':
        case 'text':
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
