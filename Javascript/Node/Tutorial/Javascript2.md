# Node.JS를 시작하기전에(2)

## What is ES6

ES6, ES2015이게 지 궁금해 하는 분도 있었을 것이다.  
별거 없다. 자바스크립트 버전이다. 그중 ES6가 가장 최신 버전이다.

## Node 설치

구글에 Node.js 검색해서 설치하시면 된다.
[Node.js v10.14.2 Windows x64](https://nodejs.org/dist/v10.14.2/node-v10.14.2-x64.msi) <= 이거 누르면 윈도우 64비트 설치파일을 받을 수 있다.

## Node 실행

이제부터 `.js` 확장자를 가진 파일을 만들어 터미널(Terminer)로 실행해 볼 것이다.

Windows OS는 CMD 또는 PowerShell을 사용한다.  
터미널에서 실행할 `.js` 파일이 담긴 디렉터리(폴더)를 지정해주고,

> $ node Example1.js

이렇게 입력한다.

~~~ Javascript
$Example1.js
const os = require('os');
console.log(`Hello World ${os.cpus()} !`);
~~~

다음은 HTTP 서버를 생성해볼겁니다.


~~~ Javascript
$Example2.js
const http = require('http');

http.createServer((req, res) => {
  res.end('Hello Node!');
}).listen(3000);
~~~

> $ node Example2.js

웹 브라우저에서 `127.0.0.1:3000` 또는 `localhost:3000` 으로 접속하고요.

서버는 터미널에서 `^C` CTR + C로 종료해주세요.
