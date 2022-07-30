import { HLike, H, HFactory } from './h';
import { Length } from './length-action-side';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';


export interface Position<H extends HLike<H>>
	extends Position.Source<H>, CompositeDataLike {
	[length: Length]: H;
	toJSON(): unknown;
	toString(): string;
}

class ConcretePosition<H extends HLike<H>> implements Position<H> {
	[length: Length]: H;

	public constructor(
		source: Position.Source<H>,
		private factory: PositionFactory<H>,
	) {
		({
			[Length.LONG]: this[Length.LONG],
			[Length.SHORT]: this[Length.SHORT],
		} = source);
	}

	public toJSON(): unknown {
		return this.factory.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export namespace Position {
	export interface Source<H extends HLike<H>> {
		[length: Length]: H;
	}

	export interface Snapshot {
		readonly long: H.Snapshot;
		readonly short: H.Snapshot;
	}
}

export class PositionFactory<H extends HLike<H>> implements
	CompositeDataFactoryLike<
	Position.Source<H>,
	Position<H>,
	Position.Snapshot>
{
	public constructor(
		private hFactory: HFactory<H>,
	) { }

	public new(source: Position.Source<H>): Position<H> {
		return new ConcretePosition(source, this);
	}

	public capture(position: Position<H>): Position.Snapshot {
		return {
			long: this.hFactory.capture(position[Length.LONG]),
			short: this.hFactory.capture(position[Length.SHORT]),
		};
	}

	public restore(snapshot: Position.Snapshot): Position<H> {
		return this.new({
			[Length.LONG]: this.hFactory.restore(snapshot.long),
			[Length.SHORT]: this.hFactory.restore(snapshot.short),
		});
	}
}
