console.log("Start");

setTimeout(()=>{console.log("sTo")},0)

Promise.resolve().then(()=>{console.log("Promise")});

console.log("End");


