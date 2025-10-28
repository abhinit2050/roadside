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
//  function a(){
//     for(var i=0;i<3;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }

// a();

// function b(){
//     for(let i=0;i<3;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }

// b();


// Ques 5 - What's the Output?

// Promise.resolve()
//   .then(function a() {
//     Promise.resolve().then(
//         //with setTimeout d runs later because setTimeout goes to macrotask queue
//     //   setTimeout(function d() {
//     //     console.log("d Runs");
//     //   }, 0)

//         //without setTimeout d runs first
//         function d() {
//             console.log("d Runs");
//           }
//     );
//     Promise.resolve().then(function e() {
//       console.log("e Runs");
//     });
//     throw new Error("Error Occured!");  //this will trigger the catch block
//     Promise.resolve().then(function f() {
//       console.log("f Runs");
//     });
//   })
//   .catch(function b() {
//     console.log("b Runs");
//   })
//   .then(function c() {
//     console.log("c Runs");
//   });


  //Q6
  function pause(millis){
    return new Promise(function p(resolve){
        setTimeout(function s(){
            resolve("resolved");
        },millis)
    })
  }

const start = Date.now();

console.log('Start!');

  pause(1000).then((res)=>{
    const end = Date.now();
    const secs = (end - start)/1000
    console.log(res,":",secs)
  }
)