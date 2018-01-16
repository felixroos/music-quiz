import { ToggleChunk } from '../toggle-chunk/toggle-chunk';
import { chunks } from '../toggle-chunk/chunks';
export class Task {
    pools: string[][];
    question;
    constructor(public label: string, public generator: () => string, pools: string[][]) {
        this.pools = pools.map(pool => [].concat(pool));
    }
    ask() {
        this.question = this.generator();
    }
}
