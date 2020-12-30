import Big from 'big.js';

export interface AccountConfig {
    leverage: number;
    MAKER_FEE_RATE: number;
    TAKER_FEE_RATE: number;
}

export interface MarketConfig {
    PRICE_DP: number;
    QUANTITY_DP: number;
    CURRENCY_DP: number;

    calcDollarVolume: (
        price: Big,
        quantity: Big,
    ) => Big,
}
