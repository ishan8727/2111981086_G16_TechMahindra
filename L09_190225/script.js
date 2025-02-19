// const arr = [5,7,4,1,4,56];

// var sumOfArr = 0;

// // for(let i=0;i<arr.length; i++){
// //     sumOfArr+=arr[i];
// // }
// // console.log(sumOfArr);

// // arr.reduce(function(accumulator, iterator){
// //     accumulator+=iterator;
// //     console.log(accumulator);
// // },0);


// const users = [
//   { firstName: "Pratiyush", lastName: "Ray", age: 25 },
//   { firstName: "Ishan", lastName: "Chaudhary", age: 22 },
//   { firstName: "Aarav", lastName: "Sharma", age: 28 },
//   { firstName: "Meera", lastName: "Kapoor", age: 24 },
//   { firstName: "Rohan", lastName: "Singh", age: 30 },
// ];

// console.log(users);

// // let ans =  users.reduce(function(acc, curr){
// //     if(!acc[curr.age]){
        
// //     }
// // })

// dataMap = [1,2,3,4,5,6,7];
// var max=0;

// const ans = dataMap.reduce((acc,curr)=>{
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0)
// console.log(`The reduced value is: ${ans}`);
 
// ===========================================================================================================

// PROMISE

// callback -> function inside a function.
//             leading to pyramid of doom / callback hell, inversion of control (or no control)
//             also call backs are dependent on one another

// promise -> 
//      pending
//      reject
//      fulfilled

//  primise APIs:
// promise.all()
// promise.allSettled()
// primise.race()
// promise.any()

// fetch API is a promise

console.log( "--------------------------------------------------------------------------------------------------");
console.log("PROMISE");
console.log("---------------------------------------------------------------------------------------------------");


// reachedRest(function(){
//     console.log("I have reached Res");
// })
// .then(TebleFind)
// .then(MenuDiscover)
// .then(PriceCheck)
// .then(startOrder)
// .then(mainCourse)

// const myRestPromise = new Promise(resolve, reject){
//     if(1:30 > time > 2:30){
//         resolve("Yes Successfully reached");
//     }else{
//         reject("Did not reach on time");
//     }
// }

//                 Rejceted<--- Pending---->Fulfilled
// If directly consoled then the repose is always is pending or rejected check in console.
//  this is due to time taken to fetch >>>greater than>>> logging time


// const githubData = fetch("https://api.github.com/users/ishan8727");

// console.log(githubData);


// console.log("____________________")

// setTimeout(()=>{
//     console.log(githubData);
// },1000);


// const cart = ['shoes','jacket','jeans','watch','phone'];

//  use callbacks or use promise

// thses are like parent children - then passes the data to the child and it runs and works.

// function createOrder(cart){
//     console.log("Order Created");
// }
//  this is a simple function so we cannot use promise here it'll give error here



// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet);


// function createOrder(cart){
//     const myPromise = new Promise(function(resolve, reject){
//         if(cart.length>0){

//             resolve("12345");
//         }else{
//             const err = new Error("order failed")
//             reject(err.message);
//         }
//     });
//     return myPromise;
// }

// console.log(createOrder(cart));

// function orderPayment(){
//     console.log("Payment Done",orderId);
// }
// function orderSummary() {
//   console.log("Order Summary",orderId);
// }
// function updateWallet() {
//   console.log("Wallet updated",orderId);
// }


// createOrder(cart)
// .then(function(orderId){
//     return orderPayment(orderId)
// })
// .then(function(orderId){
//     return orderSummary(orderId);
// })
// .then(function(orderId){
//     return updateWallet(orderId);
// })

const shoes = ["adidas","nike","puma","reebok","NewBalance"];

function createOrder(){
    const iPromise = new Promise(function(resolve,reject){
        if(shoes.length>0){
            console.log("Created an Order");

            resolve("123(orderId)");
        }
        else{
            const err = new Error(error.message)
            reject(err);
        }
    });
}


function orderPayment(orderId){
    console.log("Payment done!");
}

function orderSummary(){
    console.log("Order Summary");
}

function updateWallet(){
    console.log("Wallet updated");
}

createOrder(shoes)
.then( function(orderId){
    return orderPayment(orderId);
})

//  super important form interviews

// primise.all() -> Executes multiple promises simultaneously. Resolves when all succeed, rejects if any fails (returns the first error).
//                  but if 1 fails everything fails... before the time which it fails.
// promise.allSettled() -> Executes multiple promises and waits for all to settle (either fulfilled or rejected). Always returns an array of results.
// promise.any() -> Resolves as soon as any promise is fulfilled; rejects only if all promises fail. Returns the first successful result or an error array.
// promise.race() -> Resolves or rejects as soon as the first promise settles (whichever is faster).
// promise.finally() -> Executes a callback function regardless of the promise's outcome (fulfilled or rejected).
