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
    TICK_SIZE: Big,
}

export interface MarketCalc {
    dollarVolume: (
        price: Big,
        quantity: Big,
    ) => Big,
    quantity: (
        price: Big,
        dollarVolume: Big,
    ) => Big,
}
