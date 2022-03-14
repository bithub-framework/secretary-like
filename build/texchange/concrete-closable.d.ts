import { HLike, HStatic } from '../secretaries/h';
import { Closable, ClosableStatic } from '../secretaries/closable';
export interface ConcreteClosable<ConcreteH extends HLike<ConcreteH>> extends Closable<ConcreteH> {
}
export declare namespace ConcreteClosable {
    interface MutablePlain<ConcreteH extends HLike<ConcreteH>> extends Closable.MutablePlain<ConcreteH> {
    }
}
export declare class ConcreteClosableStatic<ConcreteH extends HLike<ConcreteH>> implements ClosableStatic<ConcreteH> {
    private ConcreteH;
    constructor(ConcreteH: HStatic<ConcreteH>);
    capture(closable: ConcreteClosable<ConcreteH>): Closable.Snapshot;
    restore(snapshot: Closable.Snapshot): ConcreteClosable.MutablePlain<ConcreteH>;
}
