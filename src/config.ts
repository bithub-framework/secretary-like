import Big from 'big.js';

export interface AccountConfig {
    LEVERAGE: number;
    MAKER_FEE_RATE: number;
    TAKER_FEE_RATE: number;
    ONE_WAY_POSITION: boolean;
}

export interface MarketConfig {
    PRICE_DP: number;
    QUANTITY_DP: number;
    CURRENCY_DP: number;
    TICK_SIZE: Big,

    calcDollarVolume: (
        price: Big,
        quantity: Big,
    ) => Big,
    calcQuantity: (
        price: Big,
        dollarVolume: Big,
    ) => Big,
}
