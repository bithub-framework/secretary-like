import Big from 'big.js';

export function reviver(k: string, v: unknown) {
    if (k !== 'id' && typeof v === 'string')
        return new Big(<string>v);
    else return v;
}
