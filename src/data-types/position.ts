import { HLike, SerializableHStatic } from './h';
import { Length, LONG, SHORT } from './pairs';
import { SerializableStatic } from './serializable';
import { boundMethod } from 'autobind-decorator';
import assert = require('assert');



export abstract class PositionLike<H extends HLike<H>>
{
	protected long: H;
	protected short: H;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: PositionLike.Source<H>,
		H: SerializableHStatic<H>,
	) {
		if (source instanceof PositionLike) {
			this.long = source.length(LONG);
			this.short = source.length(SHORT);
		} else {
			assert(source[0][0] !== source[1][0]);
			if (source[0][0] === LONG) {
				this.long = H.create(source[0][1]);
				this.short = H.create(source[1][1]);
			} else {
				this.long = H.create(source[1][1]);
				this.short = H.create(source[0][1]);
			}
		}
	}

	public length(length: Length): H {
		return length === LONG ? this.long : this.short;
	}
}


export namespace PositionLike {
	export type Literal<H extends HLike<H>> = [
		[Length, HLike.Source<H>],
		[Length, HLike.Source<H>],
	];
	export type Source<H extends HLike<H>> = PositionLike<H> | Literal<H>;

	export interface Snapshot {
		readonly long: HLike.Snapshot;
		readonly short: HLike.Snapshot;
	}
}


export interface SerializablePositionStatic<H extends HLike<H>>
	extends SerializableStatic
	<
	PositionLike.Source<H>,
	PositionLike<H>,
	PositionLike.Snapshot
	> { }


class Position<H extends HLike<H>> extends PositionLike<H> {
	public constructor(
		source: PositionLike.Source<H>,
		private Position: PositionStatic<H>,
		H: SerializableHStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public toJSON(): unknown {
		return this.Position.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export class PositionStatic<H extends HLike<H>>
	implements SerializablePositionStatic<H>
{
	public constructor(
		private H: SerializableHStatic<H>,
	) { }

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public create(source: PositionLike.Source<H>): PositionLike<H> {
		return new Position(
			source,
			this,
			this.H,
		);
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public capture(position: PositionLike<H>): PositionLike.Snapshot {
		return {
			long: this.H.capture(position.length(LONG)),
			short: this.H.capture(position.length(SHORT)),
		};
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public restore(snapshot: PositionLike.Snapshot): PositionLike<H> {
		return this.create([
			[LONG, snapshot.long],
			[SHORT, snapshot.short],
		]);
	}
}
