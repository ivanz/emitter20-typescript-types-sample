import * as emitterFactory from 'emitter20';

export class ExtendedEmitter implements Emitter.IEmitter
{
    private emitter : Emitter.IEmitter;

    constructor(emitter : Emitter.IEmitter) {
        this.emitter = emitter;
    }

    public on(eventName: string, cb: (data?: any) => void) {
        this.emitter.on(eventName, cb);
    }

    public trigger(eventName: string, data?: any) {
        this.emitter.trigger(eventName, data);
    }
}