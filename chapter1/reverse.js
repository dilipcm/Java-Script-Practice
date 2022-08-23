
// //Reverse an array


//Method -1

// let reverse = a => [...a].map(a.pop,a);
// let a=[1,2,6,4,5];
// console.log(reverse(a));



//Method-2


let x = [1,2,3,4,5];
console.log(x);

function Reverse(original){
    r=[];
    for(let i=0;i<x.length;i++){
        x=original[i]
        console.log(x);
        //r.push(original[i].pop);
    }
}

x=Reverse(x);
console.log(x);

