//Illegal shadowing
function test(){
    let a = "Hello";
    var b = "JavaScript";

    if(true){
      //  var a = "Hi";       //Illegal shadowing as a has already been declared with let
        let b = "Python"    //This is not illegal as b is declared with var
         console.log(a);
        console.log(b);
    }

   
}

test();

//Declaration without initialization

var x; //No error
let y;  //No error
//const z; //Error: Missing initializer in const declaration
const w = 10; //No error

//Hoisting
 var count;

console.log(count); //undefined - but hoisting ensures count is recognised with current value as undefined
count = 1;  //with this initialization, count is now 1

//hoisting for let and const

console.log(num); //Error: Cannot access 'num' before initialization
let num = 5;

//console.log(value); //Error: Cannot access 'value' before initialization
const value = 15;

//unless const and let are initialized, they cannot be used. 
// They are in a "temporal dead zone" from the start of the block until the initialization is processed.