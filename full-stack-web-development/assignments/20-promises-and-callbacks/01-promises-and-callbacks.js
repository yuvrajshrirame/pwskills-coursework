// Question-01: Double using callback
// Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.

function doubleArray(arr, callback){
    const doubledArray = arr.map((n) => {
        return callback(n);
    });
    return doubledArray;
}

const arr = [1, 2, 3, 4];
function callback(n){
    return n * 2;
}

const doubledArray = doubleArray(arr, callback);

console.log(doubledArray);