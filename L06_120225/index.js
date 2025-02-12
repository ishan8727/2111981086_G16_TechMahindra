// console.log(1);
// console.log(sum(10,5));

// setTimeout(()=>{
//     console.log(4);
// },2000)

// var start=1;
// var end=1000000000;
// while(start<end){
//     start++;
// }
// console.log("end");
// console.log("bend")

// setInterval(()=>{
//     console.log(9);
    
// },4000);

// function sum(x,y){
// return x+y;
// }

// // first synchronous tasks end then asynchronous tasks work
// //  this is due to the fact that JS is a single threaded language!.

// __________________________________________________________________________________________________


// a();
// func();
// funct();


function a(){
    console.log("Function 1")
}

const func = function(){
    console.log("Function 2")
}

const funct = ()=>{
    console.log("Function 3");
}

a();
func();
funct();

const orgy = function organ(){
    console.log("organism");
}

orgy();

// GCE explaination :
//     orgy is defined globally.
//     so organ() forms a EC which in global cannot be called.




