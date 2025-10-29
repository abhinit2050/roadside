//compose - Higher order Function taking functions as arguments and processing them from right to left

function addFive(num){
    return num+5
}

function subtractTwo(num){
    return num-2
}

function multiplyFour(num){
    return num*4
}

const evaluate = compose(addFive,subtractTwo,multiplyFour)
console.log(evaluate(5));

function compose1(...fns){
    return function(init){
        let result = init;
        for(let i=fns.length-1;i>=0;i--){
            result = fns[i](result)
        }

        return result;
    }

}

//using reduceRight method
function compose(...fns){
    return function(init){ 
        return fns.reduceRight((acc,curr) => curr(acc),init)
    }
   
}

//now writing the pipe function - processing from left to right

function pipe(...fns){
    return function(init){
        return fns.reduce((acc,curr) => curr(acc),init)
    }
}

const evaluate1 = pipe(addFive,subtractTwo,multiplyFour)
console.log(evaluate1(5));
