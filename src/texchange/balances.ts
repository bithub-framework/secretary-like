import { HLike } from '../secretaries/h';
import { Balances } from '../secretaries/balances';


export interface TexchangeBalances<H extends HLike<H>>
	extends Balances<H> { }


export namespace TexchangeBalances {
	export interface MutablePlain<H extends HLike<H>>
		extends Balances.MutablePlain<H> { }
}
