// 객체생성용 함수는 대문자로 시작 [생성자함수]
function Human(name, age) {
    // 속성
    this.name = name;
    this.age = age;

    // function이 들어가면 메소드
    this.showMe = function () {
        console.log(`My name is ${this.name}, age is ${this.age}`);
    }
}
var h1 = new Human('홍길동', 20);
// 객체에 함수를 추가해서 쓸 수 있다.
Human.prototype.hello = function () {
    console.log(`Hello ${this.name}`);
}
h1.height = 180;
var h2 = new Human('둘리', 120);

h1.showMe();
h2.showMe();
h1.hello();
h2.hello();

console.log(`h1.height : ${h1.height}`);
console.log(`h2.height : ${h2.height}`);