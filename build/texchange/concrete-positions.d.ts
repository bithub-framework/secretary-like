import { HLike, HStatic } from '../secretaries/h';
import { Positions, PositionsStatic } from '../secretaries/positions';
export interface ConcretePositions<ConcreteH extends HLike<ConcreteH>> extends Positions<ConcreteH> {
}
export declare namespace ConcretePositions {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Positions.MutablePlain<ConcreteH> {
    }
}
export declare class ConcretePositionsStatic<ConcreteH extends HLike<ConcreteH>> implements PositionsStatic<ConcreteH> {
    private readonly H;
    private readonly Position;
    private readonly Closable;
    constructor(H: HStatic<ConcreteH>);
    capture(positions: ConcretePositions<ConcreteH>): Positions.Snapshot;
    restore(snapshot: Positions.Snapshot): ConcretePositions.MutablePlain<ConcreteH>;
}
