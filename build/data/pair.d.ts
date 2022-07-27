import { Length, Side, Action } from './length-action-side';
export interface Pair<Key, Value> {
    get(key: Key): Value;
    set(key: Key, value: Value): void;
}
export declare class LengthPair<Value> implements Pair<Length, Value> {
    protected long: Value;
    protected short: Value;
    constructor(long: Value, short: Value);
    get(length: Length): Value;
    set(length: Length, value: Value): void;
}
export declare class SidePair<Value> implements Pair<Side, Value> {
    protected bid: Value;
    protected ask: Value;
    constructor(bid: Value, ask: Value);
    get(side: Side): Value;
    set(side: Side, value: Value): void;
}
export declare class ActionPair<Value> implements Pair<Action, Value> {
    protected open: Value;
    protected close: Value;
    constructor(open: Value, close: Value);
    get(action: Action): Value;
    set(action: Action, value: Value): void;
}
