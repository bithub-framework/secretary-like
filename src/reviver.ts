import Big from 'big.js';

export function reviver(k: string, v: unknown) {
    if (k === 'price' || k === 'quantity')
        return new Big(<string>v);
    else return v;
}
