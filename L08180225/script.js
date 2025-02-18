// function x() {
//   console.log("im x");
// }
// //higher order function
// function y(args) {
//   console.log("im y");
//   args();
// }
// y(x);

// data=[2,4,6,8,10];
// function double(data){

//     for(let i=0; i<data.length; i++){
//         data[i]=data[i]*2;
//     console.log(data[i]);

//     }

// }double(data);

// ____________________________________________________________
// // HOF
// data = [2, 4, 6, 8, 10];
// const calculate = function (data) {
//   const output = [];
//   for (let i = 0; i < data.length; i++) {
//     output.push(data[i] * 2);
//   }
//   return output;
// };
// const calculate1 = function (data) {
//   const output1 = [];
//   for (let i = 0; i < data.length; i++) {
//     output1.push(data[i] / 2);
//   }
//   return output1;
// };
// const calculate2 = function (data) {
//   const output1 = [];
//   for (let i = 0; i < data.length; i++) {
//     output1.push(data[i] + 10);
//   }
//   return output1;
// };
// console.log(calculate(data));
// console.log(calculate1(data));
// console.log(calculate2(data));

// ____________________________________________________________

// const data = [1,2,3,4,5];

// const calculateDbl = function(data){
//     output = [];
//     for(let i=0; i<data.lenght(); i++){
//         output.push(data[i*2]);
//     }
//     return output;
// }

// const calculateHalf = function(data){
//     output =[];
//     for(let i=0; i<data.lenght(); i++){
//         output.push(data/2);
//     }
//     return output;
// }

// const calculateAdd10 = function(data){
//     output = [];
//     for (let i = 0; i < data.lenght(); i++) {
//       output.push(data+10);
//     }
//     return output;
// }

// ____________________________________________________________

// data = [2, 4, 6, 8, 10];

function doubledata(insidedata) {
  var ans = insidedata * 2;
  return ans;
}
function halfdata(insidedata) {
  var ans = insidedata / 2;
  return ans;
}
function adddata(insidedata) {
  var ans = insidedata + 10;
  return ans;
}

// const calculate = function (data, callback) {
//   console.log("we are inside calculate");
//   var output = [];
//   for (let i = 0; i < data.length; i++) {
//     output.push(callback(data[i]));
//   }
//   return output;
// };
// console.log(calculate(data, doubledata));
// console.log(calculate(data, halfdata));
// console.log(calculate(data, adddata));

// Benifits of HOF:
// 1. Optimization
// 2. Clean Code readability
// 3. Scalability

// MAP function works similarly

// console.log(data.map(()=>{
//     data.forEach(element => {
//         element*2;
//     });
// }));
// CORRECT THIS

// ____________________________________________________________

// PROPTOTYPE

// Polyfill of map Feature of JS
// By using PROPTOTYPE


// const data = [2, 4, 6, 8, 10];

function doubledata(insidedata) {
    return insidedata * 2;
}
function halfdata(insidedata) {
    return insidedata / 2;
}
function adddata(insidedata) {
    return insidedata + 10;
}

// Polyfill for map
Array.prototype.mapp = function (func) {
    var output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(func(this[i])); // Apply the logic to each element
    }
    return output;
};

// usin polyfill
// console.log(data.mapp(doubledata));
// console.log(data.mapp(halfdata));
// console.log(data.mapp(adddata));

// // Using native map
// console.log(data.map(doubledata));
// console.log(data.map(halfdata));
// console.log(data.map(adddata));

// ____________________________________________________________

// Task:

// func, cal dia, circum, are.



// data = [2,9,16,42,71]

// const findDia = function (radius) {
//   const result = 2 * radius;
//   return result;
// };

// const findArea = function (radius) {
//   const result = (22 / 7) * radius * radius;
//   return result;
// };

// const findCircum = function (radius) {
//   const result = 2 * (22 / 7) * radius;
//   return result;
// };

// data.map((radius) => {
//   console.log("Diameter:", findDia(radius));
//   console.log("Area:", findArea(radius));
//   console.log("Circumference:", findCircum(radius));
//   console.log("____________________________________________");
// });

// ____________________________________________

// FILTER

// 1. function;
// 2 .oddData -> prototype;
// 3  data.filter(()=> x%2==0);

// data = [1,2,3,4,5,6,7,8,9,0];

// const filterEven = function(data){
//     return data%2 === 0;
// }

// const filterOdd = function (data) {
//     return data%2 !== 0;
// };

// Array.prototype.filterr = function(func){
//     var result = [];
//     for (let i = 0; i < this.length; i++) {
//         if(func(this[i])){
//         result.push(this[i]);
//     }}
//     return result;
// }

// console.log(data.filterr(filterEven));
// console.log(data.filterr(filterOdd));

// ____________________________________________

const users = [
  { firstName: "Pratiyush", lastName: "Ray", age: 25 },
  { firstName: "Ishan", lastName: "Chaudhary", age: 22 },
  { firstName: "Aarav", lastName: "Sharma", age: 28 },
  { firstName: "Kritika", lastName: "Mehta", age: 24 },
  { firstName: "Rohan", lastName: "Verma", age: 26 },
];

// First + :ast name
// const Fullname = users.map((user)=>{
//     console.log(user.firstName+" "+user.lastName)
// });

//  ag>24 and fullname
const age_name = users.filter(user => user.age > 24).map(user => {
    console.log(user.firstName + " " + user.lastName);
})

const name_age = users.filter((user)=>{
    return user.age>24;
})
console.log(name_age)