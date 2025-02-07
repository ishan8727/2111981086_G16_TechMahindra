// WE cannot re-declare b=block scoped (let) variable, only cacn change value
//  In var we can redecalre global scope variable and can also change value
// Always declare all the varibles on the top

arr=[1,2,3,4,5,6,7,8,9,10]

//   FOR LOOPS:

arr.forEach(function(element){
    console.log(element);
});

for( i in arr ){
    console.log(i,arr[i]);
}
// i is index

for (let i of arr){
    console.log(i);
}


// WHILE LOOPS

let i=0;

while(i<10){
    console.log(i)
    i++;
}

do{
    console.log("G16");
}
while(i<=20)
i++;

// ------------------------DOM manupulation----------------------------

// DOM -> HTML ya full elment to a tree like structure

// -------------------
//                   |
//                   |
//                   | ----> this is document (which is HTML page)
//                   |  window -> it is the parent of the document
//                   |
//                   |
//                   |
// -------------------

