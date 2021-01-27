import {
    Assets,
} from './data';
import Big from 'big.js';

export function reviver(k: string, v: unknown) {
    if (k !== 'id' && typeof v === 'string')
        return new Big(<string>v);
    else return v;
}

export function clone<T>(x: T): T {
    return JSON.parse(JSON.stringify(x), reviver);
}

export type ConvertPropertyTypeRecursively<Object, Original, Type> = {
    [K in keyof Object]: Object[K] extends Original
    ? Type
    : (Object[K] extends {}
        ? ConvertPropertyTypeRecursively<Object[K], Original, Type>
        : Object[K]);
};

export type Big2StringAssets = ConvertPropertyTypeRecursively<Assets, Big, string>;
