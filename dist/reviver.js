import Big from 'big.js';
export function reviver(k, v) {
    if (k === 'price' || k === 'quantity')
        return new Big(v);
    else
        return v;
}
//# sourceMappingURL=reviver.js.map