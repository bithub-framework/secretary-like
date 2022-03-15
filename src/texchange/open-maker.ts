import { HLike } from '../secretaries/h';
import { OpenMaker } from '../secretaries/open-maker';
import { TexchangeOrderId } from './order-id';



export interface TexchangeOpenMaker<H extends HLike<H>>
	extends OpenMaker<H, TexchangeOrderId> { }


export namespace TexchangeOpenMaker {
	export interface MutablePlain<H extends HLike<H>>
		extends OpenMaker.MutablePlain<H, TexchangeOrderId> { }
}
