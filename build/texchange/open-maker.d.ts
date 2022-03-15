import { HLike } from '../secretaries/h';
import { OpenMaker, OpenMakerStatic } from '../secretaries/open-maker';
import { TexchangeOrderId } from './order-id';
export interface TexchangeOpenMaker<H extends HLike<H>> extends OpenMaker<H, TexchangeOrderId> {
}
export declare namespace TexchangeOpenMaker {
    interface MutablePlain<H extends HLike<H>> extends OpenMaker.MutablePlain<H, TexchangeOrderId> {
    }
}
export declare class TexchangeOpenMakerStatic<H extends HLike<H>> extends OpenMakerStatic<H, TexchangeOrderId> {
}
