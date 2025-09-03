//Illegal shadowing
function test(){
    let a = "Hello";
    var b = "JavaScript";

    if(true){
        var a = "Hi";       //Illegal shadowing as a has already been declared with let
        let b = "Python"    //This is not illegal as b is declared with var
         console.log(a);
        console.log(b);
    }

   
}

test();

//Declaration without initialization

var x; //No error
let y;  //No error
const z; //Error: Missing initializer in const declaration
const w = 10; //No error

//Hoisting

