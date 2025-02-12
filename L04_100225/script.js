// // console.log("start");

// // var a=10;
// // function sqr(x){
// // var ans=x*x;
// // return ans;
// // }
// // console.log(sqr(a));
// // console.log("end");

// // ________________________________________________________

// // console.log("abc");
// // sumofTwo(10,5);
// // var abc = 29;

// // function sumofTwo(a,b){
// //     var ans = a+b;
// //     return ans;
// // }

// // var majorAns = sumofTwo(6,8);
// // console.log(majorAns);

// // => USE DEBUGGER

// // _________________________________________________________

// // console.log(xyz);
// // console.log(sumOfTwo(10,16));
// // let xyz = 12;

// // function sumOfTwo(a,b){
// //     let ans = a+b;
// //     return ans;
// // }

// // console.log(sumOfTwo(19,27));

// // ________________________________________________________

// // console.log(xyz);
// // console.log(sumOfTwo(10,16));
// // var xyz = 12;

// // function sumOfTwo(a,b){
// //     var ans = a+b;
// //     return ans;
// // }

// // console.log(sumOfTwo(19,27));


// // var, let, const =? are all hoisted.
// // var is a global variable -> see console there is global and var is there 
// //  but let is not so it throws eroror.

// // ________________________________________________________

// // What is window?.

// // PARENT OF DOCUMNENT
// // GLOBAL CONTEXT

// // ________________________________________________________

// //  IN JAVASCRIPT -> THIS points to window

// //  console.log(window === this); => true.

// //________________________________________________________


// // LEXICAL ORDER => 
// // child -> parent -> grandparent
// // child can access parent and grandparent
// // but neither parent nor grandparent can access child's content.

// // ________________________________________________________

// //  var is stored globally.

// // ________________________________________________________'


// //  what is TDZ - Temporal Dead Zone

// // time period b/w phase 1 and phase 2.

// // initialisation ---------TDZ----------- execution

// // ________________________________________________________



// // setInterval and setTimeout

// // Both are asynchronous.

// // setTimeout => waits for an interval of time when time is complete it will join the execution thread.
// // setInterval => runs after an interval of time again and again until time is complete.

// function two(){
//     return 2;
// };
// function four(){
//     return 4;
// };

// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3)
// }, 3000);
// console.log(four());
// setInterval(()=>{
//     console.log(5)
// },5000);
// console.log(6);

// ________________________________________________________

// function abc(i){
//         setTimeout(() => {
//             console.log(i)
//         }, 1000);
// }

// for(var i=0; i<6; i++){
//         console.log(abc(i));
// }

// ________________________________________________________

// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     // a=100;
//     return y;
// }

// var z=x();
// console.log(z);

// z();

// ________________________________________________________

// function z(){
//     var b=900;

//     function x(){
//         var a =7;

//         function y(){
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// ________________________________________________________


// IMPORTANT CASE


// var count = 0;

// function increment(){
//     count++;
// }

// increment();
// increment();
// increment();

// console.log(count);

// function outside(){
//     var count=0;
//     function increment(){
//         count=count+100;
//         console.log(count);
//     }
//     return increment();
    
// }

// var a = outside();


// ________________________________________________________


// function counter(){
//     var count = 0;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     return increment;
// }

// var counter1 = counter();
// counter1();
// counter1();
// counter1();

// console.log("===============================");

// var counter2 = counter();
// counter2();
// counter2();
// counter2();

// ________________________________________________________

// function Counter(){

//     var count = 0;
//     this.increment = function(){
//         count++;
//         console.log(count);
//     };
    
//     this.decrement = function(){
//         count--;
//         console.log(count);
//     };
// }

// var counter1 = new Counter();
// counter1.increment();

// ________________________________________________________

// class Counter {
//     constructor() {
//         this.count = 0;
//     }
//     increment() {
//         this.count++;
//         console.log(this.count);
//     }
//     decrement(){
//         this.count--;
//         console.log(this.count);
//     }
// }

// const counter1 = new Counter();

// counter1.increment();
// counter1.increment();
// counter1.decrement();

// const counter2 = new Counter();

// counter2.increment();


console.log(1);
console.log(sum(10,5));

setTimeout(()=>{
    console.log(4);
},2000)

var start=1;
var end=1000000000;
while(start<end){
    start++;
}
console.log("end");
console.log("bend")

setInterval(()=>{
    console.log(9);
    
},4000);

function sum(x,y){
return x+y;
}

// first synchronous tasks end then asynchronous tasks work
//  this is due to the fact that JS is a single threaded language!.
