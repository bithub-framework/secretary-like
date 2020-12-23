import Big from 'big.js';
export function reviver(k, v) {
    if (k !== 'id' && typeof v === 'string')
        return new Big(v);
    else
        return v;
}
//# sourceMappingURL=reviver.js.map