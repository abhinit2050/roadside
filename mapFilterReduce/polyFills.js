//Polyfill for map

Array.prototype.myMap= function(cb){
    let temp=[];
   
    for(let i=0; i<this.length;i++){
        temp.push(cb(this[i],i,this))
       
    }
     return temp;
}

let arr = [2,5,6,8];

let result = arr.myMap((ele, index)=>{
    return ele*2+index
})

console.log(result);