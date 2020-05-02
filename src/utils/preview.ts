import { BooqPath, BooqNode } from '../model';
import { findPath, rootIterator, iteratorsNode, nextNode } from './iterator';
import { nodeText } from './node';

export function previewForPath(nodes: BooqNode[], path: BooqPath, length: number) {
    let iter = findPath(rootIterator(nodes), path);
    let preview = undefined;
    while (iter) {
        const curr = nodeText(iteratorsNode(iter));
        preview = (preview ?? '') + curr;
        if (preview.length > length) {
            break;
        }
        iter = nextNode(iter);
    }
    return preview;
}