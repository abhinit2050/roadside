var len = 5;

function callBack() { 
   
  console.log(this.len) 
}

const object = {
  len: 4,
  method(fn) {
   const arrow = ()=>{console.log(this.len)}
   arrow();
  }
}


object.method(callBack);