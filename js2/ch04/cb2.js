function print(p1, p2, cb = hello) {
  cb(p1, p2);
}

function hello(nm) {
  console.log(`Hi~~~${nm}`);
}

function goodbye(nm) {
  console.log(`Bye~~~ ${nm}`);
}

print('재훈', undefined, goodbye);
