import { HLike } from '../secretaries/h';
import { Amendment } from '../secretaries/amendment';
import { TexchangeOrderId } from './order-id';


export interface TexchangeAmendment<H extends HLike<H>>
	extends Amendment<H, TexchangeOrderId> { }


export namespace TexchangeAmendment {
	export interface MutablePlain<H extends HLike<H>>
		extends Amendment.MutablePlain<H, TexchangeOrderId> { }
}
