import { HLike, HLikeStatic } from './h';
import { Length, LONG, SHORT } from './length-action-side';
import {
	CompositeDataLike,
	CompositeDataLikeStatic,
} from './composite-data';


export abstract class PositionLike<H extends HLike<H>>
	implements CompositeDataLike {
	protected long: H;
	protected short: H;
	public abstract toJSON(): unknown;
	public abstract toString(): string;

	public constructor(
		source: PositionLike.Source<H>,
		H: HLikeStatic<H>,
	) {
		if (source instanceof PositionLike) {
			this.long = source.length(LONG);
			this.short = source.length(SHORT);
		} else {
			this.long = H.create(source.long);
			this.short = H.create(source.short);
		}
	}

	public length(length: Length): H {
		return length === LONG ? this.long : this.short;
	}
}


export namespace PositionLike {
	export interface Literal<H extends HLike<H>> {
		long: HLike.Source<H>;
		short: HLike.Source<H>;
	}
	export type Source<H extends HLike<H>> = PositionLike<H> | Literal<H>;

	export interface Snapshot {
		readonly long: HLike.Snapshot;
		readonly short: HLike.Snapshot;
	}
}


class Position<H extends HLike<H>> extends PositionLike<H> {
	public constructor(
		source: PositionLike.Source<H>,
		private Position: PositionStatic<H>,
		H: HLikeStatic<H>,
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

export class PositionStatic<H extends HLike<H>> implements
	CompositeDataLikeStatic<
	PositionLike.Source<H>,
	PositionLike<H>,
	PositionLike.Snapshot>
{
	public constructor(
		private H: HLikeStatic<H>,
	) { }

	public create(source: PositionLike.Source<H>): PositionLike<H> {
		return new Position(
			source,
			this,
			this.H,
		);
	}

	public capture(position: PositionLike<H>): PositionLike.Snapshot {
		return {
			long: this.H.capture(position.length(LONG)),
			short: this.H.capture(position.length(SHORT)),
		};
	}

	public restore(snapshot: PositionLike.Snapshot): PositionLike<H> {
		return this.create({
			long: this.H.restore(snapshot.long),
			short: this.H.restore(snapshot.short),
		});
	}
}
