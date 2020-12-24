import Big from 'big.js';
import { Assets } from './data';
import { clone as copy } from 'ramda';
export function reviver(k, v) {
    if (k !== 'id' && typeof v === 'string')
        return new Big(v);
    else
        return v;
}
export function clone(x) {
    if (x instanceof Assets.AutoAssets)
        return JSON.parse(JSON.stringify(x));
    return copy(x);
}
//# sourceMappingURL=mapping.js.map