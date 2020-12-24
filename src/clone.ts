import { Assets } from './data';
import { clone as copy } from 'ramda';
import { reviver } from './reviver';

export function clone<T>(x: T): T {
    if (x instanceof Assets.AutoAssets)
        return JSON.parse(JSON.stringify(x), reviver);
    return copy(x);
}
