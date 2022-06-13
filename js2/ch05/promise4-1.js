
// f1~f3은 통신!
// fn1 리턴값을 fn2에 전달
// fn2 리턴값을 fn3에 전달

function fn1() {
    return new Promise(function(resolve) {
        resolve(10);
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
const result = fn2(10);
result.then(function (val) {
    console.log(val);
})