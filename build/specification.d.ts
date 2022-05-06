import { HLike } from '.';
export interface AccountSpec {
    readonly LEVERAGE: number;
    readonly MAKER_FEE_RATE: number;
    readonly TAKER_FEE_RATE: number;
}
export interface MarketSpec<H extends HLike<H>> {
    readonly PRICE_DP: number;
    readonly QUANTITY_DP: number;
    readonly CURRENCY_DP: number;
    readonly TICK_SIZE: H;
    readonly MARKET_NAME: string;
}
export interface MarketCalc<H extends HLike<H>> {
    dollarVolume(price: H, quantity: H): H;
    quantity(price: H, dollarVolume: H): H;
}
