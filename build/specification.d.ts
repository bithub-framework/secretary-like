import { HLike } from '.';
export interface AccountSpecLike {
    LEVERAGE: number;
    MAKER_FEE_RATE: number;
    TAKER_FEE_RATE: number;
}
export interface MarketSpecLike<H extends HLike<H>> {
    PRICE_DP: number;
    QUANTITY_DP: number;
    CURRENCY_DP: number;
    TICK_SIZE: H;
    MARKET_NAME: string;
    dollarVolume(price: H, quantity: H): H;
    quantity(price: H, dollarVolume: H): H;
}
