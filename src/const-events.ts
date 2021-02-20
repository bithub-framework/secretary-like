import { EventEmitter } from 'events';

interface ConstEvents<Events extends {
    [event in string | symbol]: unknown[];
}> extends EventEmitter {
    on<Event extends keyof Events>(
        event: Event, listener: (...args: Events[Event]) => void,
    ): this;
    once<Event extends keyof Events>(
        event: Event, listener: (...args: Events[Event]) => void,
    ): this;
    off<Event extends keyof Events>(
        event: Event, listener: (...args: Events[Event]) => void,
    ): this;
    emit<Event extends keyof Events>(
        event: Event, ...args: Events[Event]
    ): boolean;
}

class ConstEvents<Events extends {
    [event in string | symbol]: unknown[];
}> extends EventEmitter { }

export {
    ConstEvents as default,
    ConstEvents,
}
