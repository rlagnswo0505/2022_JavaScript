function fn1() {
  return new Promise(function(resolve, reject) {
    resolve(10);
    // reject(new Error('문제발생'))
  });
}
// 시간이 걸리는 작업은 리턴으로 받을 수 없다
// 프로미스를 사용하여 resolve .then으로만 받을 수 있다.(통신)
function fn2(val) {
  return new Promise(function (resolve) {
      setTimeout(function () { 
          resolve(val * 2);
      },2000)
  })
}

async function mainRun() {
  let val1 = 0;
  try {
    val1 = await fn1();
    console.log(val1);
  }
  catch (e) { 
    console.log(e);
  }
  
  const val2 = await fn2(val1);
  console.log(val2);
}
mainRun();