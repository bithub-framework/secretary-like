import { HLike } from '.';


export interface AccountSpec {
    LEVERAGE: number;
    MAKER_FEE_RATE: number;
    TAKER_FEE_RATE: number;
}

export interface MarketSpec<H extends HLike<H>> {
    PRICE_SCALE: number;
    QUANTITY_SCALE: number;
    CURRENCY_SCALE: number;
    TICK_SIZE: H,
    MARKET_NAME: string;
    dollarVolume(
        price: H,
        quantity: H,
    ): H;
    quantity(
        price: H,
        dollarVolume: H,
    ): H;
}
