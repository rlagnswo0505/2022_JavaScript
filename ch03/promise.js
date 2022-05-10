var num = 11;
var p1 = new Promise(function (resolve, reject) {
    if (num >= 10) {
        // 여러개의 값은 받지 못함
        resolve(1);
    } else {
        reject(2);
    }
});

//  then catch는 promise
// 주로 잘 될 때는 then 에러일때는 catch
// 값을 보내기위해 펑션으로 받는다
p1.then(function (result) {
    console.log(`then : ${result}`);
}).catch(function (result) {
    console.log(`catch : ${result}`);
});