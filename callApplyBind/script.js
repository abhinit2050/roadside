// console.log("Script file loaded");

//polyfill for call
Function.prototype.myCall = function(context={},...args){

    if(typeof this != 'function'){
        throw new Error("Invalid context! "+this+" is not callable")
    }
    context.fn = this;
    return context.fn(...args);

}

Function.prototype.myApply = function(context={}, args=[]){
    if(typeof this != 'function'){
        throw new Error("Invalid context! "+this+" is not callable")
    }

    if(!Array.isArray(args)){
        throw new Error("Arguments to be passed should be in array format");
    }

    context.fn=this;
    return context.fn(...args)
}

Function.prototype.myBind = function(context={},args){
    if(typeof this != 'function'){
        throw new Error("Could not bind! "+this+" is not callable")
    }

    context.fn = this;

    return function(...newArgs){
        return context.fn(...args, ...newArgs);
    }
}

const obj = {
    name:"Satish",
    age:"45"
}

function printDetails(city,country){
    console.log(this.name+" "+this.age+" "+city+" "+country);
}

let newFun = printDetails.myBind(obj,["Jersey City","USA"]);
newFun();


// //setTimeout and this
// var status = "Cool";

// setTimeout(()=>{
//     const status = "Love";
    
//     const data = {
//         status: "Avocado",
//         getStatus(){
//            return (this.status);
//         }

//     }
    
//     console.log("plain",data.getStatus());
//     console.log("call",data.getStatus.call(this));

// },0)

// //append two arrays
// const array = ["a","b"];
// const elements = [0,1,2];

// // elements.forEach(i => array.push(i));

// // console.log(array);

// //using apply
// const array2 = array.push.apply(array,elements);
// console.log(array);