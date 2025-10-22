//defining a simple Animal constructor
function Animal(name){
    this.name = name;
}

//adding a method sayName to the prototype
Animal.prototype.sayName = function(){
    console.log("Hello! My name is "+this.name);
}

let animal1 = new Animal("Tiger");

console.log(animal1.sayName());

//defining a Dog constructor

function Dog(name, breed){
    Animal.call(this,name);
    this.breed = breed;
}

//Assigning Animal prototype to Dog
Dog.prototype = Object.create(Animal.prototype);

//Adding Dog's own connstructor which is that of Animal's right now
Dog.prototype.constructor = Dog;

//Adding bark method to Dog prototype
Dog.prototype.bark = function(){
    console.log("Woof!");
}

var dog1 = new Dog("Max", "Labrador");

console.log(dog1.sayName()); //dog1 variable can access Animal's method due to prototype inheritance

//setPrototype

let animalPrototype = {
    sound: function(){
        console.log("Making a sound!");
    }
}

//create an object with above defined prototype
let dog = Object.create(animalPrototype);

let cat = {
    purr:()=>{
        console.log("Purring...")
    }
}

Object.setPrototypeOf(dog, cat);

dog.purr();
//dog.sound();


//Creating an object without any prototype
let obj1 = Object.create(null);
console.log(obj1.__proto__);



//Deepclone an object

function deepClone(obj){

    if(obj === null || typeof obj != 'object' ){
        return obj
    }
    let clone = Array.isArray(obj) ? [] :{}

    //iterate over all the keys of the object
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key])
        }
    }

    return clone;
}

let originalObj = {a:2, b:3}

let clonedObj = deepClone(originalObj);

clonedObj.b=4;

console.log("org", originalObj);
console.log("clo", clonedObj);