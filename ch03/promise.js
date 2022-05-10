var p1 = new Promise(function (resolve, reject) {
    if (num > 10) {
        resolve(1);
    } else {
        reject(2);
    }
});