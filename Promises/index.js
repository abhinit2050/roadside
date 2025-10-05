// //callback - to handle async operation - like setTimeout which is a web API and reading a file
// //const fs = require('fs');
// console.log("start");

// // function importantAction(cb){

// //     // setTimeout(()=>{
        
// //     //     cb()
// //     // },1000)

// //     //now reading a file
// //     fs.readFile("file.txt", "utf-8", (err, data) => {
// //       if (err) {
// //         console.log("error reading the file", err);
// //         return;
// //       }
// //       cb();
// //       console.log(data);
// //       reflect(() => {
// //         console.log("Reflect on what you just read!");
// //         act(() => {
// //           console.log("Act on what you just read!");
// //         });
// //       });
// //     });
// // }

// // function reflect(cb2){
// //     setTimeout(()=>{
// //         cb2();
// //     },5000)
    
// // }

// // function act(cb3){

// //      setTimeout(()=>{
// //         cb3();
// //     },1000)
    
// // }

// // importantAction(()=>{
// //     console.log("important action is done");
// // })

// //now with the promises


// const premRes = new Promise((resolve, reject)=>{
    
//     let temp = true;
//     if(temp){resolve("Promise is resolved!")}
//     else {reject("Promise is rejected!")}
// })

// premRes.then((m)=>{
//     console.log(m);
// }).catch(err => console.log(err))

// console.log("end");

//1
console.log("start");

const p = new Promise((resolve, reject)=>{
    console.log(1);
    resolve(2);
    console.log(3);
})

p.then((res)=>{
    console.log(res);
})

console.log("end");