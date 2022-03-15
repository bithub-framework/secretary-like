import { HLike, HStatic } from '../secretaries/h';
import { Positions, PositionsStatic } from '../secretaries/positions';
export interface ConcretePositions<ConcreteH extends HLike<ConcreteH>> extends Positions<ConcreteH> {
}
export declare namespace ConcretePositions {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Positions.MutablePlain<ConcreteH> {
    }
}
export declare class ConcretePositionsStatic<ConcreteH extends HLike<ConcreteH>> implements PositionsStatic<ConcreteH> {
    private ConcreteH;
    private Position;
    private Closable;
    constructor(ConcreteH: HStatic<ConcreteH>);
    capture(positions: ConcretePositions<ConcreteH>): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): ConcretePositions.MutablePlain<ConcreteH>;
}
