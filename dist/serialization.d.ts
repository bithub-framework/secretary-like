import { Assets } from './data';
import Big from 'big.js';
export declare function reviver(k: string, v: unknown): unknown;
export declare function clone<T>(x: T): T;
export declare type ConvertPropertyTypeRecursively<Object, Original, Type> = {
    [K in keyof Object]: Object[K] extends Original ? Type : (Object[K] extends {} ? ConvertPropertyTypeRecursively<Object[K], Original, Type> : Object[K]);
};
export declare type Big2StringAssets = ConvertPropertyTypeRecursively<Assets, Big, string>;
