import Big from 'big.js';
export interface AccountSpec {
    readonly LEVERAGE: number;
    readonly MAKER_FEE_RATE: number;
    readonly TAKER_FEE_RATE: number;
}
export interface MarketSpec {
    readonly PRICE_DP: number;
    readonly QUANTITY_DP: number;
    readonly CURRENCY_DP: number;
    readonlyTICK_SIZE: Big;
}
export interface MarketCalc {
    readonly dollarVolume: (price: Big, quantity: Big) => Big;
    readonly quantity: (price: Big, dollarVolume: Big) => Big;
}
