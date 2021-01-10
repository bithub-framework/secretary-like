import Big from 'big.js';

export interface AccountConfig {
    LEVERAGE: number;
    MAKER_FEE_RATE: number;
    TAKER_FEE_RATE: number;
    UNIDIRECTIONAL: boolean;
}

export interface MarketConfig {
    PRICE_DP: number;
    QUANTITY_DP: number;
    CURRENCY_DP: number;
    MINIMUM_PRICE_INC: Big,

    calcDollarVolume: (
        price: Big,
        quantity: Big,
    ) => Big,
    calcQuantity: (
        price: Big,
        dollarVolume: Big,
    ) => Big,
}
