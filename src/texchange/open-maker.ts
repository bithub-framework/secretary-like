import { HLike } from '../secretaries/data/h';
import { OpenMaker, OpenMakerStatic } from '../secretaries/data/open-maker';
import { TexchangeOrderId } from './order-id';



export interface TexchangeOpenMaker<H extends HLike<H>>
	extends OpenMaker<H, TexchangeOrderId> { }


export namespace TexchangeOpenMaker {
	export interface Functional<H extends HLike<H>>
		extends OpenMaker.Functional<H, TexchangeOrderId> { }
}

export class TexchangeOpenMakerStatic<H extends HLike<H>>
	extends OpenMakerStatic<H, TexchangeOrderId>{ }
