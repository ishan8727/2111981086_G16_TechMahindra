// function a(){
//     console.log("first");
//     b();
// }
// function b(){
//     console.log("second")
// }

// a();

// __________________________________________________________________________________________________

// function a(){
//     console.log("first");
// }
// function b(){
//     console.log("second")
// }

// b(a())

// __________________________________________________________________________________________________

// const btn1 = document.getElementById("myBtn");
// const btn2 = document.getElementById("myBtn2");

// function outside() {
//     function inside() {
//       btn.addEventListener("click", (e) => {
//         console.log("Button Clicked");
//       });
//     }
//     return inside();
// }

// outside();


// btn.addEventListener('mouseover',(e)=>{
//     console.log("buttonOver");
// });

// btn.addEventListener('mouseout',()=>{
//     console.log("mouseOut");
// });

// btn2.addEventListener("click",(e)=>{
//     console.log("Button Clicked");
// });

// var count = 0;

// btn2.addEventListener('click',function(){
//     count++;
//     console.log(`clicked other ${count}`);
// });

// btn1.addEventListener("click", function(){
//     count++;
//     console.log(`clicked ${count}`);
// })

const btn1 = document.getElementById("myBtn");
const btn2 = document.getElementById("myBtn2");

// var count = 0;

// function outside(){
//     function Btn1(){
//         btn1.addEventListener("click", function () {
//           count++;
//           console.log(`clicked ${count}`);
//         });
//     }
//     function Btn2(){
//         btn1.addEventListener("click", function () {
//           count++;
//           console.log(`clicked ${count}`);
//         });
//     }
//     return {Btn1, Btn2}
// }


function reachedRes(callback){
    console.log("Reached Rest");
    setTimeout(callback,1000);
}

function findTable(callback) {
  console.log("Tale found");
  setTimeout(callback,1000);
}

function menuDis(callback){
    console.log("Menu discovered");
    setTimeout(callback, 6000);
}

function PriceCheck(callback) {
  console.log("Price Check");
  setTimeout(callback, 4000);
}

function startOrder(callback) {
  console.log("start order");
  setTimeout(callback, 3000);
}

function mainCourse(callback) {
  console.log("Main course");
  setTimeout(callback, 1000);
}

function dessert(callback) {
  console.log("Desert");
  setTimeout(callback, 1000);
}

function payBill(callback) {
  console.log("Bill paid");
  setTimeout(callback, 1000);
}

// reachedRes(()=>{
//     findTable(()=>{
//         menuDis(()=>{
//             mainCourse(()=>{
//                 PriceCheck(()=>{
//                     startOrder(()=>{
//                         dessert(()=>{
//                             payBill();
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

// PYRAMID OF DOOM
// solution -> promise.

function abc(callback){
    console.log("This is task 1");
    setTimeout(() => {
        callback();
    }, 3000);
}

function xyz(){
    console.log("This is task 2");
}

abc(xyz);





