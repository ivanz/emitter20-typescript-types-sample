declare namespace Emitter
{
    export interface IEmitter {
        on: (eventName: string, cb: (data?: any) => void) => void;
        trigger: (eventName: string, data?: any) => void;
    }

    export interface IEmitterFactory {
        (): Emitter.IEmitter;
    }
}

declare module 'emitter20' {
    var EmitterFactory : Emitter.IEmitterFactory;

    export = EmitterFactory;
}