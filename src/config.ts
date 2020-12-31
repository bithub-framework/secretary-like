import Big from 'big.js';
import {
    Assets,
} from './data';

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
    calcQuantity: (
        price: Big,
        dollarVolume: Big,
    ) => Big,
}
