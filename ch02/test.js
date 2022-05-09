const arr = [1,2,3,4];

console.log(arr.reduce(function (acc, curValue, curIndex, array) {
    return acc + curValue; 
}));