console.log('A');
setTimeout(function () {
    console.log('B');
    setTimeout(() => {
        console.log('C');
        setTimeout(() => { console.log('D'); }, 500);
    }, 2000)
}, 1000)
