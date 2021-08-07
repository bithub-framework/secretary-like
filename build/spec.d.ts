import Big from 'big.js';
export interface AccountSpec {
    LEVERAGE: number;
    MAKER_FEE_RATE: number;
    TAKER_FEE_RATE: number;
}
export interface MarketSpec {
    PRICE_DP: number;
    QUANTITY_DP: number;
    CURRENCY_DP: number;
    TICK_SIZE: Big;
    calcDollarVolume: (price: Big, quantity: Big) => Big;
    calcQuantity: (price: Big, dollarVolume: Big) => Big;
}
