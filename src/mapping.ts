import Big from 'big.js';
import { Assets } from './data';
import { clone as copy } from 'ramda';

export function reviver(k: string, v: unknown) {
    if (k !== 'id' && typeof v === 'string')
        return new Big(<string>v);
    else return v;
}

export function clone<T>(x: T): T {
    if (x instanceof Assets.AutoAssets)
        return JSON.parse(JSON.stringify(x));
    return copy(x);
}
