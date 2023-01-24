# HaoEvents

> 实现了事件总线。

使用方式：

`npm i hao-events`

```js
import HaoEvents from "hao-events";
// const HaoEvents = require('hao-events');

const emitter = HaoEvents()

function log1(a) {
    console.log("log1: " + a);
}

// 绑定事件
emitter.on("log", log1)

// 发布消息
emitter.emit("log", 1)

// 解绑一个或所有事件
emitter.off("log", log1)
emitter.off("log")

// 绑定一个只能触发一次的事件
emitter.once("test", (a,b,c,d) => {
    console.log("once test", a, b, c, d);
})

// 展示所有事件
console.log(emitter.events);
```