import { HLike } from './h';
import {
	Position,
	PositionFactory,
} from './position';
import { CompositeDataLike, CompositeDataFactoryLike } from './composite-data';



export interface Positions<H extends HLike<H>>
	extends Positions.Source<H>, CompositeDataLike {
	position: Position<H>;
	closable: Position<H>;
	time: number;
	toJSON(): unknown;
	toString(): string;
}

class ConcretePositions<H extends HLike<H>> implements Positions<H>{
	public position: Position<H>;
	public closable: Position<H>;
	public time: number;

	public constructor(
		source: Positions.Source<H>,
		private factory: PositionsFactory<H>,
		positionFactory: PositionFactory<H>,
	) {
		this.position = positionFactory.new(source.position);
		this.closable = positionFactory.new(source.closable);
		this.time = source.time;
	}

	public toJSON(): unknown {
		return this.factory.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export namespace Positions {
	export interface Source<H extends HLike<H>> {
		position: Position.Source<H>;
		closable: Position.Source<H>;
		time: number;
	}

	export interface Snapshot {
		readonly position: Position.Snapshot;
		readonly closable: Position.Snapshot;
		readonly time: number;
	}
}

export class PositionsFactory<H extends HLike<H>> implements
	CompositeDataFactoryLike<
	Positions.Source<H>,
	Positions<H>,
	Positions.Snapshot>
{
	public constructor(
		private positionFactory: PositionFactory<H>,
	) { }

	public new(source: Positions.Source<H>): Positions<H> {
		return new ConcretePositions(
			source,
			this,
			this.positionFactory,
		);
	}

	public capture(positions: Positions<H>): Positions.Snapshot {
		return {
			position: this.positionFactory.capture(positions.position),
			closable: this.positionFactory.capture(positions.closable),
			time: positions.time,
		};
	}

	public restore(snapshot: Positions.Snapshot): Positions<H> {
		return this.new({
			position: this.positionFactory.restore(snapshot.position),
			closable: this.positionFactory.restore(snapshot.closable),
			time: snapshot.time,
		});
	}
}
