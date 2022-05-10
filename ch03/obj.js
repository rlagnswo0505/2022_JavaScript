// 객체생성용 함수는 대문자로 시작
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
var h2 = new Human('둘리', 120);

h1.showMe();
h2.showMe();