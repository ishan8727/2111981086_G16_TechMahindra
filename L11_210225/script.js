// // let student1 = {
// //   fname: "Sahil",
// //   lname: "Gupta",
// //   getResult: function () {
// //     console.log(this.fname + " " + "passed");
// //   },
// // };
// // console.log(student1.fname + " " + student1.lname);
// // student1.getResult();

// // let student2 = {
// //     firstName: 'Vishwas',
// //     lastName: 'Saxena'
// // }

// // let getName = function getName(classStudent){
// //     console.log(this.firstName +" "+ this.lastName)
// // }

// // // _________________________________________________________________________________________________________________-

// // console.log("__________________________________CURRYING_______________________________")

// // // What is eventBubbling and eventCapturing?

// // // eventBubbling

// console.log(
//   "_________________________________________________________________________________________________________________"
// );

// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandparent.addEventListener("click", () => {
//   console.log("grandparent cicked");
// });
// parent.addEventListener("click", () => {
//   console.log("parent cicked");
// });
// child.addEventListener("click", () => {
//   console.log("chld cicked");
// });


// // _________________________________________________________________________________________________________________

// // href.

// // addEventListener("cick", () => {
// //   window.location.href = e.target.id;
// //   console.log(object);
// // });

// // _________________________________________________________________________________________________________________


// // Debugging in JS -> delay API calls to optimize -> important

const searchBox = document.getElementById('searchBox')
searchBox.addEventListener("input", debouncing);

function fetchData(){
    console.log("Fetching API ");
}



function debouncing(){
    setTimeout(() => {
        fetchData();
    }, 2000);
}

// // _________________________________________________________________________________________________________________



// //  just put event listener on parent


