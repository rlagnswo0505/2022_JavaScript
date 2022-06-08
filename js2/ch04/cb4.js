function fn1(item) {
  console.log(`fn1: ${item}`);
}

function fn2(item) {
  console.log(`fn2: ${item}`);
}

function proc(cb, max) {
  for (let i = 0; i < max; i++) {
    cb(i);
  }
}
proc(fn2, 10);

console.log('----------');
proc(function (item) {
  console.log(`dddd: ${item}`);
}, 3);
