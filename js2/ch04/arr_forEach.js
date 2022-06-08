const arr = [10, 43, 22, 38, 17, 56, 47];

let sum = 0;
function fnSum(item) {
  sum += item;
}
arr.forEach(fnSum);
console.log(`sum: ${sum}`);
console.log('-------------');
let sum2 = 0;
arr.forEach(function (item) {
  sum2 += item;
});
console.log(`sum2: ${sum2}`);

console.log('-------------');
arr.forEach(function (item, idx) {
  console.log(`arr[${idx}] : ${item}`);
});

console.log('-------------');
arr.forEach(function (item, idx) {
  if (item % 2 === 0) {
    console.log(`arr[${idx}] : ${item}`);
  }
});

console.log('-------------');
let sum_odd = 0;
arr.forEach(function (item, idx) {
  if (item % 2 === 1) {
    sum_odd += item;
  }
});
console.log(`홀수 전체 더함 :${sum_odd}`);
