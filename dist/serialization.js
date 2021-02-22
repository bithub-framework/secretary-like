import Big from 'big.js';
export function reviver(k, v) {
    if (k !== 'id' &&
        k !== 'length' &&
        k !== 'side' &&
        k !== 'operation' &&
        typeof v === 'string')
        return new Big(v);
    else
        return v;
}
export function clone(x) {
    return JSON.parse(JSON.stringify(x), reviver);
}
//# sourceMappingURL=serialization.js.map