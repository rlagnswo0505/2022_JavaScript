
const obj1 = {
  name: '홍길동',
  age: 20
};
console.log(obj1.hasOwnProperty('name'));
console.log(obj1.hasOwnProperty('age'));

obj1.addr = '경기도'
console.log(obj1.hasOwnProperty('addr'));
// obj1.prototype.height = 172.2;

function Human(name, age) {
  this.name = name;
  this.age = age;
}
Human.prototype.height = 172.2;
const obj2 = new Human('홍길동',21)
console.log(obj2.hasOwnProperty('name'));
console.log(obj2.hasOwnProperty('age'));
obj2.addr = '제주도';
console.log(obj2.hasOwnProperty('addr'));
// obj2.height = 182.2;
console.log(Human.prototype.height);
console.log(obj2.height);
console.log(obj2.hasOwnProperty('height'));
