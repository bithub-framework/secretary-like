import {
    Assets,
} from './data';

export type UnknownTypedAssets = {
    [K in keyof Assets]: unknown;
};

export interface StringifiedAssets extends UnknownTypedAssets {
    position: {
        [length: number]: string;
    };
    balance: string;
    cost: {
        [length: number]: string;
    };
    frozenMargin: string;
    frozenPosition: {
        [length: number]: string;
    };
    margin: string;
    reserve: string;
    closable: {
        [length: number]: string;
    };
    time: number;
}

export interface NumberizedAssets extends UnknownTypedAssets {
    position: {
        [length: number]: number;
    };
    balance: number;
    cost: {
        [length: number]: number;
    };
    frozenMargin: number;
    frozenPosition: {
        [length: number]: number;
    };
    margin: number;
    reserve: number;
    closable: {
        [length: number]: number;
    };
    time: number;
}
