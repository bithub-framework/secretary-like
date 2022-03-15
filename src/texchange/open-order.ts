import { HLike } from '../secretaries/h';
import { OpenOrder } from '../secretaries/open-order';
import { TexchangeOrderId } from './order-id';



export interface TexchangeOpenOrder<H extends HLike<H>>
	extends OpenOrder<H, TexchangeOrderId> { }

export namespace TexchangeOpenOrder {
	export interface MutablePlain<H extends HLike<H>>
		extends OpenOrder.MutablePlain<H, TexchangeOrderId> { }
}
