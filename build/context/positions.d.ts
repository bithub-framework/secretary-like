import { HLike } from './h';
import { Position } from './position';
import { Closable } from './closable';
export interface Positions<ConcreteH extends HLike<ConcreteH>> {
    readonly position: Position<ConcreteH>;
    readonly closable: Closable<ConcreteH>;
    readonly time: number;
}
export declare namespace Positions {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> {
        position: Position.MutablePlain<ConcreteH>;
        closable: Closable.MutablePlain<ConcreteH>;
        time: number;
    }
    interface Snapshot {
        readonly position: Position.Snapshot;
        readonly closable: Closable.Snapshot;
        readonly time: number;
    }
}
export interface PositionsStatic<ConcreteH extends HLike<ConcreteH>> {
    capture(positions: Positions<ConcreteH>): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): Positions.MutablePlain<ConcreteH>;
}
