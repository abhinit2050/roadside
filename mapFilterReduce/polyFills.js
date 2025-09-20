//Polyfill for map

Array.prototype.myMap= function(cb){
    let temp=[];
   
    for(let i=0; i<this.length;i++){
        temp.push(cb(this[i],i,this))
       
    }
     return temp;
}

Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i])
        }
    }
    return temp;
}

Array.prototype.myReduce = function(cb, initialValue){
    let acc = initialValue;

    for(let i=0;i<this.length;i++){
        acc = acc ? cb(acc,this[i],i,acc):this[i]
    }

    return acc;
}

let arr = [2,5,6,8];

let result = arr.myReduce((acc,curr)=>{
    return acc = acc+curr;
},0)

console.log(result);