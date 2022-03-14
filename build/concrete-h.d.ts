import Big from 'big.js';
import { H, HStatic, HFriendly } from './h';
export declare class ConcreteH extends HFriendly {
    private readonly value;
    constructor(big: Big);
    plus(x: this): H;
    minus(x: this): H;
    times(x: this): H;
    div(x: this): H;
    capture(): H.Snapshot;
}
export declare class ConcreteHStatic implements HStatic<ConcreteH> {
    from(source: H.Snapshot): ConcreteH;
    capture(x: ConcreteH): H.Snapshot;
    restore(s: H.Snapshot): ConcreteH;
}
declare const H: HStatic<ConcreteH>;
export { H };
