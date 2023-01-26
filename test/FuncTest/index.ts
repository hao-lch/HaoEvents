import HaoEvents from "../../dist/HaoEvents";
// const HaoEvents = require("../dist/HaoEvents")

const emitter = HaoEvents()
const testemitter = HaoEvents()

function log1(a: any) {
    console.log("log1: " + a);
}
function log2(a: any, b: any) {
    console.log("log2: " + a + " " + b);
}
function log3(a: any, b: any, c: any) {
    console.log("log3: " + a + " " + b + " " + c);
}
function test1(a: any) {
    console.log("test1: " + a);
}
function test2(a: any, b: any) {
    console.log("test2: " + a + " " + b);
}

emitter.on("log", log1)
emitter.on("log", log2)
emitter.on("log", log3)

emitter.emit("log", 1)
emitter.emit("log", 1, 2)
emitter.emit("log", 1, 2, 3)

emitter.off("log", log2)
console.log(emitter.events);

emitter.off("log")
console.log(emitter.events);

console.log("////////////////////////////////////////////////////////////////");

emitter.on("log", log1)
emitter.on("log", log2)
emitter.on("log", log3)
emitter.on("test", test1)
emitter.on("test", test2)

emitter.emit("test", 1)
emitter.emit("test", 1, 2)

console.log("////////////////////////////////////////////////////////////////");

testemitter.on("test", test2)
testemitter.emit("test", 1)

console.log("////////////////////////////////////////////////////////////////");

emitter.once("test", (a: any,b: any,c: any,d: any) => {
    console.log("once test", a, b, c, d);
})
console.log(emitter.events);

emitter.emit("test", 1,2,3,4)
console.log(emitter.events);
console.log(testemitter.events);
// console.log(1);
