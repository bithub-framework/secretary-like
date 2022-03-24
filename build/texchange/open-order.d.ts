import { HLike } from '../secretaries/data/h';
import { OpenOrder, OpenOrderStatic } from '../secretaries/data/open-order';
import { TexchangeOrderId } from './order-id';
export interface TexchangeOpenOrder<H extends HLike<H>> extends OpenOrder<H, TexchangeOrderId> {
}
export declare namespace TexchangeOpenOrder {
    interface Functional<H extends HLike<H>> extends OpenOrder.Functional<H, TexchangeOrderId> {
    }
}
export declare class TexchangeOpenOrderStatic<H extends HLike<H>> extends OpenOrderStatic<H, TexchangeOrderId> {
}
