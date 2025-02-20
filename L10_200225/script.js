//     // Promise metods -> .all, .allSettled, .any, .race.
    
//     const myPromiseFromNetflix = new Promise(function(resolve, reject){
//         setTimeout(() => {
//           resolve("Fetched data from Netflix");
//           // reject('Error fetching from Netflix');
//         }, 1000);
//     })
//     const myPromiseFromX = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve("Fetched data from X");
//             // reject('Error fetching from X');
//         }, 2000);
//     })
//     const myPromiseFromGithub = new Promise(function(resolve, reject){
//         setTimeout(() => {
//           resolve("Fetched data from Github");
//           // reject('Error fetching from Github');
//         }, 3000);
//     })
//     const myPromiseFromHotstar = new Promise(function(resolve, reject){
//         setTimeout(() => {
//           resolve("Fetched data from Hotstar");
//         //   reject('Error fetching from Hotstar');
//         }, 4000);
//     })

// // promise.all

// Promise.all([
//     myPromiseFromNetflix,
//     myPromiseFromX,
//     myPromiseFromGithub,
//     myPromiseFromHotstar,
// ])
//     .then((results) => {
//         console.log("Promise.all results:", results);
//     })
//     .catch((error) => {
//         console.log("Promise.all error:", error);
//     });

// // Promise.allSettled
// Promise.allSettled([
//     myPromiseFromNetflix,
//     myPromiseFromX,
//     myPromiseFromGithub,
//     myPromiseFromHotstar,
// ]).then((results) => {
//     console.log("Promise.allSettled results:", results);
// });

// // Promise.any
// Promise.any([
//     myPromiseFromNetflix,
//     myPromiseFromX,
//     myPromiseFromGithub,
//     myPromiseFromHotstar,
// ])
//     .then((result) => {
//         console.log("Promise.any result:", result);
//     })
//     .catch((error) => {
//         console.log("Promise.any error:", error);
//     });

// // Promise.race
// Promise.race([
//     myPromiseFromNetflix,
//     myPromiseFromX,
//     myPromiseFromGithub,
//     myPromiseFromHotstar,
// ])
//     .then((result) => {
//         console.log("Promise.race result:", result);
//     })
//     .catch((error) => {
//         console.log("Promise.race error:", error);
//     });

console.log("________________________ASYNC-AWAIT______________________________________");


//  async feature used tomake any function asynchronous
// async is also a promise

// const setPromise = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve("I will be on time!");
//     },4000);
// });

// console.log("Hello class!");

// async function techMahindra(){
//     setTimeout(() => {
//         setPromise.then((promiseOfSamar)=>{
//             console.log(promiseOfSamar);
//         });
//     }, 4000);
//     console.log("Hello students");
// }

// techMahindra();

// async function techMahindra() {
//     console.log("This is Tech Mahindra");
// }

// const techData = techMahindra();
// console.log(techData);
// techData.then((res)=>{
//     return res;
// })

const projectStubmitioonByIshan = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Submitted sir!");
    }, 5000);
})

// function projectEvaluation(){
//     const projectFile = projectStubmitioonByIshan;
//     console.log(projectFile);
// }
//  here files not submitted so syncronously here file is not submitted but he gets deadlined;

// async function projectEvaluation() {
//   const projectFile = await projectStubmitioonByIshan;
//   console.log(projectFile);
// }

// projectEvaluation();

// using await allows the teacher to wait for a student's file and then check rather than not waiting.
// async makes the function asynchronous.

// ______________________________________________________________________________________________________________

// class start -> kuber file wiriting(10sec) -> file check eveal -> now untill file not checked(class will not end) -> class end

// console.log("Class start");

// const kuberFile = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("File complete sir!");
//     }, 10000)
// }).catch({

// });

// async function fileCheckEval(){
//     console.log("marking attendace");
//     const evalutaionFile = await kuberFile;
//     console.log(evalutaionFile);
//     console.log("Class end");
// }

// fileCheckEval();


// ______________________________________________________________________________________________________________

    
async function fetchApiData(){
    const data = await fetch("https://api.github.com/users/ishan8727");
    
    const myData = await data.json();
    return myData;
}
const finaldata = fetchApiData();
finaldata.then((data)=>{
    console.log(data);
})




