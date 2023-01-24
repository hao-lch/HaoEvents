declare type Handler = (...event: any[]) => void
interface Emitter {
    events: Map<string | symbol, Array<Handler>>,
    on(type: string | symbol, handler: Handler) : void,
    off(type: string | symbol, handler?: Handler) : void,
    emit(type: string | symbol, ...event: any[]) : void,
    once(type: string | symbol, handler: Handler) : void,
}

export default function HaoEvents()