import { HLike } from '../secretaries/h';
import { Amendment, AmendmentStatic } from '../secretaries/amendment';
import { TexchangeOrderId } from './order-id';
export interface TexchangeAmendment<H extends HLike<H>> extends Amendment<H, TexchangeOrderId> {
}
export declare namespace TexchangeAmendment {
    interface MutablePlain<H extends HLike<H>> extends Amendment.MutablePlain<H, TexchangeOrderId> {
    }
}
export declare class TexchangeAmendmentStatic<H extends HLike<H>> extends AmendmentStatic<H, TexchangeOrderId> {
}
