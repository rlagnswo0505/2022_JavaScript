try {
  console.log('AAAA');
  const result = new Array(-1);
  // 위에서 에러가 발생했기 때문에 BBBB는 출력되지 않음
  console.log('BBBB');
} catch (e) {
  console.error(e.name); //실행됨!!!
}

console.log(`(1) try_catch 끝`);

console.log('---------------------------');

try {
  console.log('AAAA');
  console.log('BBBB');
  console.log('CCCC');
} catch (e) {
  console.error(e.name); //실행 안 됨!!!
}

console.log(`(2) try_catch 끝`);

console.log('---------------------------');

try {
  console.log('AAAA');
  const result = new Array(-1);
  // 위에서 에러가 발생했기 때문에 BBBB는 출력되지 않음
  console.log('BBBB');
} catch (e) {
  console.error(e.name); //실행됨!!!
} finally {
  console.log('무조건 실행 됨!');
}

console.log(`(3) try_catch 끝`);

console.log('---------------------------');

try {
  console.log('AAAA');
  console.log('BBBB');
} catch (e) {
  console.error(e.name); //실행됨!!!
} finally {
  console.log('무조건 실행 됨!');
}

console.log(`(4) try_catch 끝`);

console.log('---------------------------');