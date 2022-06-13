// finally 없는 함수
function fn1() {
  try {
    const div = 10 / 2;
    return div;
  } catch (e) {
    console.log(e);
  }
  console.log('무조건 실행해야 하는 소스');
}

// finally 없는 함수
function fn2() {
  try {
    const div = 10 / 2;
    return div;
  } catch (e) {
    console.log(e);
  }finally{
    console.log('무조건 실행해야 하는 소스');
  }
}
const fn1Result = fn1();
console.log(fn1Result);

console.log('-------------------');
const fn2Result = fn2();
console.log(fn2Result);