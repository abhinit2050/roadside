//Q1
// console.log("Start");

// setTimeout(()=>{console.log("sTo")},0)

// Promise.resolve().then(()=>{console.log("Promise")});

// console.log("End");


//Q2
// blockMainThread();

// console.log("start");

// function blockMainThread(){
//     const start = Date.now();
    
//     while(Date.now() - start <3000){}
//     console.log("running...")
// }

// console.log("end");

//Q3
// setTimeout(()=>{console.log("a")},1000)
// setTimeout(()=>{console.log("b")},500)
// setTimeout(()=>{console.log("c")},0)

// function d(){console.log("d")}

// d();


//Q4
 function a(){
    for(var i=0;i<3;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}

a();

function b(){
    for(let i=0;i<3;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}

b();
