const myArr = {
  0: 10,
  1: 43,
  2: 22,
  3: 38,
  4: 17,
  5: 56,
  6: 47,
  length: 7,
  forEach: function (cb) {
    for (let i = 0; i < this.length; i++) {
      const val = this[i];
      cb(val, i);
    }
  },
};

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}
console.log(typeof []);

let sum = 0;
function fnSum(item) {
  sum += item;
}
myArr.forEach(fnSum);
console.log(`sum: ${sum}`);
console.log('-------------');
let sum2 = 0;
myArr.forEach(function (item) {
  sum2 += item;
});
console.log(`sum2: ${sum2}`);

console.log('-------------');
myArr.forEach(function (item, idx) {
  console.log(`arr[${idx}] : ${item}`);
});

console.log('-------------');
myArr.forEach(function (item, idx) {
  if (item % 2 === 0) {
    console.log(`arr[${idx}] : ${item}`);
  }
});

console.log('-------------');
let sum_odd = 0;
myArr.forEach(function (item, idx) {
  if (item % 2 === 1) {
    sum_odd += item;
  }
});
console.log(`홀수 전체 더함 :${sum_odd}`);
