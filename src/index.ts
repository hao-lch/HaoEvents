type Handler = (...event: any[]) => void
interface Emitter {
    events: Map<string | symbol, Array<Handler>>,
    on(type: string | symbol, handler: Handler) : void,
    off(type: string | symbol, handler?: Handler) : void,
    emit(type: string | symbol, ...event: any[]) : void,
    once(type: string | symbol, handler: Handler) : void,
}

export default function haoEvents(): Emitter {
    const eventsObj = new Map<string | symbol, Array<Handler>>()

    return {
        events: eventsObj,

        on(type: string | symbol, handler: Handler) {
            if(eventsObj.has(type)) {
                const handlers = eventsObj.get(type)
                handlers!.push(handler)
            }else {
                eventsObj.set(type, [handler])
            }
        },

        off(type: string | symbol, handler?: Handler) {
            if(handler) {
                const handlers = eventsObj.get(type)
                handlers?.splice(handlers.indexOf(handler), 1)
            }else {
                eventsObj.delete(type)
            }
        },

        emit(type: string | symbol, ...event: any[]) {
            const handlers = eventsObj.get(type)
            handlers?.slice().forEach((handler, index) => {
                handler(...event)
            })
        },

        once(type: string | symbol, handler: Handler) {
            const callback = (...args: any[]) => {
                handler(...args)
                this.off(type, callback)
            }
            this.on(type, callback)
        }
    }
}