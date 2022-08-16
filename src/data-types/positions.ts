import { HLike } from './h';
import {
	PositionLike,
	PositionStatic,
} from './position';
import { CompositeDataLike, SerializableStatic } from './composite-data';
import { boundMethod } from 'autobind-decorator';



export abstract class PositionsLike<H extends HLike<H>>
	implements CompositeDataLike {
	public position: PositionLike<H>;
	public closable: PositionLike<H>;
	public time: number;

	public constructor(
		source: PositionsLike.Source<H>,
		Position: SerializableStatic<
			PositionLike.Source<H>,
			PositionLike<H>,
			PositionLike.Snapshot
		>,
	) {
		this.position = Position.create(source.position);
		this.closable = Position.create(source.closable);
		this.time = source.time;
	}

	public abstract toJSON(): unknown;
	public abstract toString(): string;
}


export namespace PositionsLike {
	export interface Literal<H extends HLike<H>> {
		position: PositionLike.Source<H>;
		closable: PositionLike.Source<H>;
		time: number;
	}
	export type Source<H extends HLike<H>> = PositionsLike<H> | Literal<H>;

	export interface Snapshot {
		readonly position: PositionLike.Snapshot;
		readonly closable: PositionLike.Snapshot;
		readonly time: number;
	}
}

export interface SerializablePositionsStatic<H extends HLike<H>>
	extends SerializableStatic
	<
	PositionsLike.Source<H>,
	PositionsLike<H>,
	PositionsLike.Snapshot
	> { }


class Positions<H extends HLike<H>> extends PositionsLike<H>{
	public constructor(
		source: PositionsLike.Source<H>,
		private Positions: PositionsStatic<H>,
		Position: PositionStatic<H>,
	) {
		super(
			source,
			Position,
		);
	}

	public toJSON(): unknown {
		return this.Positions.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}


export class PositionsStatic<H extends HLike<H>>
	implements SerializablePositionsStatic<H>
{
	public constructor(
		private Position: PositionStatic<H>,
	) { }

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public create(source: PositionsLike.Source<H>): PositionsLike<H> {
		return new Positions(
			source,
			this,
			this.Position,
		);
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public capture(positions: PositionsLike<H>): PositionsLike.Snapshot {
		return {
			position: this.Position.capture(positions.position),
			closable: this.Position.capture(positions.closable),
			time: positions.time,
		};
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public restore(snapshot: PositionsLike.Snapshot): PositionsLike<H> {
		return this.create({
			position: this.Position.restore(snapshot.position),
			closable: this.Position.restore(snapshot.closable),
			time: snapshot.time,
		});
	}
}
