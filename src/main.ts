import * as emitter from 'emitter20';

var emitterInstance : Emitter.IEmitter = emitter();
emitterInstance.on("event", (data : any) => {
    console.log("'event' triggered with data: " + data.foo);
})

emitterInstance.trigger("event", {"foo": "bar"});


import {ExtendedEmitter} from './extendedEmitter';

var extendedEmitter = new ExtendedEmitter(emitterInstance);



