# Node.JS를 시작하기전에(1)

## Javascript를 알아봅시다

사실 이 강좌에서는 별로 중요하지 않지만
코드짤 때, 막막하지 않도록 기본만 알고자가고요.

### 1. Chrome 웹브라우저 설치

구글에 치면 다운받으실 수 있습니다.

### 2. Console 창 열기

  Ctr + Shift + I

### 3. 기본 문법 정도는 알아야지

* SHIFT + ENTER : 개행
* C언어 기초 지식 필요
* 소요시간 : 15분

#### 변수(var) 선언과 초기화

``` Javascript
var a; // 변수 a 선언
a = 20;
console.log(a);
```

``` Javascript
var a = 20; // 선언과 동시에 초기화
console.log(a);
```

> 20

#### 함수(Function)

독립되고, 특정한 기능을 수행하는 것.  
아래의 코드는 스코프(중괄호) 안과 밖의 변수를 설명하기 위함이다.  
예시로는 함수로 들었지만 반복문, 조건문도 같다.

``` Javascript
var a = 20;

function b() {  // 함수 정의
  var a = 30;
  return a;
};
console.log('한수 안: ' + b());
console.log('함수 밖: ' + a);
```

> 함수 안: 30  
함수 밖: 20

#### 메소드(Method)

변수의 다양한 형태, 그리고 `this`를 잠시 써본다.  
임의의 형식 안에 포함된 함수는 메소드라고 한다.  
다음은 `Object` 형태로 작성한 변수다.

``` Javascript
var calc = {  // 이것도 변수임!
  num: 0,
  Increase : function(plus) {
    this.num += plus; // 여기서의 this = Object(calc)
  },
  Decrease : function(minus) {
    this.num -= minus;
  }
};
calc.Increase(5);
calc.Increase(2);
console.log(calc.num);
calc.Decrease(3);
console.log(calc.num);
```

> 7  
4

JS에서 `this`는 쓰는 위치에 따라 다르게 가리키니 `this`에 대해서 더 자세히는 나중에 알아 보도록 하자.

#### new

`new`를 사용해보자. 인스턴스 객체(Object)를 생성한다. 생성한다는 것은 메모리 공간을 할당해준다는 것이다.

``` Javascript
function Word(word) {
  this.word = word;
  this.print = function() {
    return('This is ' + word)
  }
}
var apple = new Word('apple'); // new를 붙이지 않으면 오류남.
var banana = new Word('banana');
console.log(apple.print());
console.log(banana.print());
```

> This is apple  
This is banana

#### 배열(Array)

배열을 알아보자

``` Javascript
var arr = new Array('a', 'b');
arr.push('c'); // 마지막에 넣기
console.log(arr);
arr.pop(); // 마지막꺼 꺼내기
console.log(arr);
console.log(arr.length); // 배열의 길이
```

> (2) ['a', 'b']  
(3) ['a', 'b', 'c']  
2

음... 가장 기본적인 배열이다. 배열안에 여러 Type을 선언 할 수 있다.

``` Javascript
var arr = ['a','bc', 3, 4];
arr.push('d');
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.length);
```

> (5) ["a", "bc", 3, 4, "d"]  
(4) ["a", "bc", 3, 4]  
4

#### const

변수는 `const`도 있다.

``` Javascript
const a = 5;
a = 4;
console.log(a);
```

> Uncaught TypeError: Assignment to constant variable

앗..아앗 오류가 났다. 선언과 동시에 초기화를 해줘야하고, 고칠 수 없기 때문이다.

``` Javascript
function b() {
  var a = 4;
  //  const a = 4; // 오류 발생!
  return a;
}
const a = 5;
console.log(b());
```

> 4

#### let
변수는 `let`도 있다. `var`대신 쓰도록 하자.

#### 서식, 형태, Type

다음은 Type에 대해 알아보자. JS에서는 Type을 명시 해줘도되고 안해줘도 암묵적으로 알아서 해준다.  
변수만 Type이 있는건 아니다. 상수도, 문자열도 Type이 있다.

``` Javascript
a = 5;
b = 'ad';
c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
```

> number  
string  
boolean

``` Javascript
a = Number(5);
b = String('ad');
c = Boolean(true);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
```

결과는 위와 같다.

``` Javascript
x = function x(){};
console.log(typeof x);
```

위와 같이 입력하고 실행결과를 눈으로 보자. 참고로 `typeof`는 만능이 아니다.*

#### 조건문

조건문.. 삼항영산자도 지원한다. C처럼 쓰면된다.

``` Javascript
if(5 > 4) {
  console.log('5가 커요!');
}else {
  console.log('4가 커요!');
}
```

``` Javascript
var x;
(5 > 4) ? x = 5 : x = 4
console.log(x+'가 커요!');
```

#### 반복문

반복문.. 귀찮다. C언어 처럼쓰면된다. (생략)

#### Equal

`==`과 `===`의 차이를 아는가?

``` Javascript
var x = 5;
var y = '5';

console.log(x == y);
console.log(x === y);
```

> true  
flase

``` Javascript
var x = 5;
const y = Number(5);
var z = new Number(5);

console.log(x == y);
console.log(x === y);
console.log(x == z);
console.log(x === z);
console.log(typeof x, typeof y, typeof z);
```

> true  
true  
true  
flase  
number number object

`==`은 필요하면 암묵적으로 값을 형변환해서 비교하는 것이고,  
`===`은 어떠한 변형없이 레퍼런스끼리 비교한다.

#### 없다를 표현하는 방법

`null`과 `undefind`의 차이를 알아보자.

``` Javascript
console.log(null === undefined);
console.log(null == undefined);
var x;
console.log(x === undefined)
console.log(x === null);
console.log(x == undefined);
console.log(x == null);
```

> false  
true  
true  
flase  
true  
true

`null`은 '값'이고, `undefined`는 '정의 되지 않음'을 나타낸다.

`null`은 데이터(값)가 없다라는 의미로 쓰인다.  
실생활에서 쓰이는 `0`도 없다라는 뜻으로 쓰이긴 하지만 프로그래밍에서는 알아보기에는 `null`이 더 적합하다.  
`undefined`는 정의되지 않은 것이다. 값이 아니라 '상태'를 나타낸 것이다.

#### 화살표 함수(Arrow Function)

ES6에서는 화살표 연산 `=>`이 추가되었다!  

``` Javascript
const x = x => x * x;
console.log(x(5));
```

> 25

``` Javascript
var arr = [1, 2];
var pre = arr.map(x => x * x);

console.log(pre);
```

> (2) [1, 4]

화살표 함수의 `this`는 언제나 상위 스코프의 `this`를 가리킨다.

``` Javascript
function Prefixes(prefix) {
  this.prefix = prefix;
}

Prefixes.prototype.Array = function(arr) {
  return arr.map(name => `${this.prefix}  ${name}`);
  // map() 메소드는 배열의 요소들의 함수 호출 결과를 각각 반환해서 배열로 만든다.
};

const pre = new Prefixes('This is');
console.log(pre.Array(['Apple', 'Banana']));
```

``` Javascript
function Prefixes(prefix) {
  this.prefix = prefix;
  this.Array = function(arr) {
    return arr.map(name => `${prefix}  ${name}`);
  }
}

const pre = new Prefixes('This is');
console.log(pre.Array(['Apple', 'Banana']));
```

> (2) ["This is  Apple", "This is  Banana"]

`prototype`은 함수의 멤버로 참조한다.

#### 백틱(grave accent) - 표현식

큰 따옴표 대신 사용하여 문장을 더욱 간결하게 한다.

``` Javascript
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
```

``` Javascript
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`); // 개행
```

> "Fifteen is 15 and  
not 20."

#### 세미콜론

``` Javascript
function b() {
  var a = 4
  return a
}
const a = 5
console.log(b())
```

세미콜론`;`을 굳이 안붙여도 실행이 문법적 오류는 없다. 그러나 코드의 가독성을 위해서 적당히 넣어 줍시다.

#### 다음으로

참고문헌: MDN Web Docs
