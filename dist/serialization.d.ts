import { Assets } from './data';
import Big from 'big.js';
export declare type ConvertPropertyTypeRecursively<Object, Original, Type> = {
    [K in keyof Object]: Object[K] extends Original ? Type : (Object[K] extends {} ? ConvertPropertyTypeRecursively<Object[K], Original, Type> : Object[K]);
};
export declare type StringifiedAssets = ConvertPropertyTypeRecursively<Assets, Big, string>;
