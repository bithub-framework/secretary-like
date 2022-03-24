import { HLike } from '../secretaries/data/h';
import { Amendment, AmendmentStatic } from '../secretaries/data/amendment';
import { TexchangeOrderId } from './order-id';


export interface TexchangeAmendment<H extends HLike<H>>
	extends Amendment<H, TexchangeOrderId> { }


export namespace TexchangeAmendment {
	export interface Functional<H extends HLike<H>>
		extends Amendment.Functional<H, TexchangeOrderId> { }
}

export class TexchangeAmendmentStatic<H extends HLike<H>>
	extends AmendmentStatic<H, TexchangeOrderId>{ }
