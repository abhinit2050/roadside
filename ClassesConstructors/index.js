class Teacher{
    constructor(name, channel, likes=0){
        this.name=name;
        this.channel=channel;
        this.videoLikes=likes;
    }

    intro(){
        console.log(`Hello! My name is ${this.name} and I teach on ${this.channel}`);
    }

    like(){
        this.videoLikes++;
        console.log(`This video now has ${this.videoLikes} likes!`);
    }
}

const teacher1 = new Teacher("Alice", "TechWithAlice");
teacher1.intro();
teacher1.like();
teacher1.like();

//converting class to function constructor
function Teacherfun(name, channel, likes=0){
    this.name=name;
    this.channel=channel;
    this.videoLikes=likes;

}

Teacherfun.prototype.intro = function(){
    return(`Hello! My name is ${this.name} and I teach on ${this.channel}`);

}

Teacherfun.prototype.like = function(){
    this.videoLikes++;
    return `This video now has ${this.videoLikes} likes!`;
}

let teacher2 = new Teacherfun("Harry","Code with Harry",4);

console.log(teacher2.intro());
console.log(teacher2.like());


//Inheritance
class ytTeacher extends Teacher{
    constructor(name, channel, likes, subscribers){
        super(name, channel, likes);
        this.subscriberCount = subscribers;
    }

    totalSubscribers(){
        console.log(`${this.channel} has ${this.subscriberCount} subscribers!`);
    }

    static paidCourse(){
        console.log("This is a paid course!");
    }
}

const ytTeacher1 = new ytTeacher("Bob","Learn with Bob",10, 5000);
ytTeacher1.intro();
ytTeacher1.totalSubscribers();

ytTeacher.paidCourse(); // Correct way to call static method
//ytTeacher1.paidCourse(); // This will give an error since static methods are not called on instances


//create a class Shape with method area(). Them create subclasses Rectangle and Circle that extend Shape 
// and implement area() method to calculate area of rectangle and circle respectively.

class Shape{
    area(){}
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }

    area(){
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape{
    constructor(side){
        super()
        this.side = side;
    }

    area(){
        return this.side*this.side;
    }
}

let cir = new Circle(5);
let sq = new Square(4);

console.log("cir",cir.area());
console.log("sq",sq.area());