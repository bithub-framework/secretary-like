import { HLike, SerializableHStatic } from './h';
import { Length, LONG, SHORT } from './pairs';
import { SerializableStatic } from './serializable';
import { boundMethod } from 'autobind-decorator';
import assert = require('assert');



export abstract class PositionPairLike<H extends HLike<H>>
{
	protected long: H;
	protected short: H;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: PositionPairLike.Source<H>,
		H: SerializableHStatic<H>,
	) {
		if (source instanceof PositionPairLike) {
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

	public abstract set(length: Length, position: H): PositionPairLike<H>;

	public toLiteral(): PositionPairLike.Literal<H> {
		return [
			[LONG, this.long],
			[SHORT, this.short],
		];
	}

	public length(length: Length): H {
		return length === LONG ? this.long : this.short;
	}
}


export namespace PositionPairLike {
	export type Literal<H extends HLike<H>> = [
		[Length, HLike.Source<H>],
		[Length, HLike.Source<H>],
	];
	export type Source<H extends HLike<H>> = PositionPairLike<H> | Literal<H>;

	export interface Snapshot {
		readonly long: HLike.Snapshot;
		readonly short: HLike.Snapshot;
	}
}


export interface SerializablePositionPairStatic<H extends HLike<H>>
	extends SerializableStatic
	<
	PositionPairLike.Source<H>,
	PositionPairLike<H>,
	PositionPairLike.Snapshot
	> { }


class PositionPair<H extends HLike<H>> extends PositionPairLike<H> {
	public constructor(
		source: PositionPairLike.Source<H>,
		private Position: PositionPairStatic<H>,
		H: SerializableHStatic<H>,
	) {
		super(
			source,
			H,
		);
	}

	public set(length: Length, position: H): PositionPairLike<H> {
		return this.Position.create([
			[length, position],
			[length.i(), this.length(length.i())],
		]);
	}

	public toJSON(): unknown {
		return this.Position.capture(this);
	}

	public toString(): string {
		return JSON.stringify(this.toJSON());
	}
}

export class PositionPairStatic<H extends HLike<H>>
	implements SerializablePositionPairStatic<H>
{
	public constructor(
		private H: SerializableHStatic<H>,
	) { }

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public create(source: PositionPairLike.Source<H>): PositionPairLike<H> {
		return new PositionPair(
			source,
			this,
			this.H,
		);
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public capture(positionPair: PositionPairLike<H>): PositionPairLike.Snapshot {
		return {
			long: this.H.capture(positionPair.length(LONG)),
			short: this.H.capture(positionPair.length(SHORT)),
		};
	}

	/**
	 * @decorator boundMethod
	 */
	@boundMethod
	public restore(snapshot: PositionPairLike.Snapshot): PositionPairLike<H> {
		return this.create([
			[LONG, snapshot.long],
			[SHORT, snapshot.short],
		]);
	}
}
