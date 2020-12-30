import {
    Assets,
} from './data';
import Big from 'big.js';

export type ConvertPropertyTypeRecursively<Object, Original, Type> = {
    [K in keyof Object]: Object[K] extends Original
    ? Type
    : (Object[K] extends {}
        ? ConvertPropertyTypeRecursively<Object[K], Original, Type>
        : Object[K]);
};

export type StringifiedAssets = ConvertPropertyTypeRecursively<Assets, Big, string>;
