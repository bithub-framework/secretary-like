import { HLike, HStatic } from '../secretaries/h';
import { Position, PositionStatic } from '../secretaries/position';
export interface ConcretePosition<ConcreteH extends HLike<ConcreteH>> extends Position<ConcreteH> {
}
export declare namespace ConcretePosition {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Position.MutablePlain<ConcreteH> {
    }
}
export declare class ConcretePositionStatic<ConcreteH extends HLike<ConcreteH>> implements PositionStatic<ConcreteH> {
    private ConcreteH;
    constructor(ConcreteH: HStatic<ConcreteH>);
    capture(position: ConcretePosition<ConcreteH>): Position.Snapshot;
    restore(snapshot: Position.Snapshot): ConcretePosition.MutablePlain<ConcreteH>;
}
