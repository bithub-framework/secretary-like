import { Assets } from './data';
import { clone as copy } from 'ramda';

export function clone<T>(x: T): T {
    if (x instanceof Assets.AutoAssets)
        return JSON.parse(JSON.stringify(x));
    return copy(x);
}
