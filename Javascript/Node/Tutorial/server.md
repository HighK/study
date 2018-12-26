# 웹서버를 시작하기 전에

## 서버(Server)

* 네트워크를 통해 요청(Request) 받은 명령을 처리하고, 클라이언트에게 응답(Response)하는 서비스 프로그램(Program)

### 웹 서버(Web Server)

* HTTP를 통해 웹 브라우저에서 요청하는 HTML 문서나 오브젝트(이미지 파일 등)을 전송해주는 서비스 프로그램

## 클라이언트(Client)

* 서버에 요청하고, 데이터(Data)를 받는 프로그램

### 웹 브라우저(Web Browser)

* 웹 서버에서 쌍방향 통신하는 HTML 문서나 파일과 연동하고 출력하는 응용소프트웨어(Application)

* EX) Chrome, Edge, Opera, FireFox

* * *

## IP 주소(Internet Protocol address)

* 컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신을 하기 위해서 사용하는 특수한 번호(주소)

* EX) IPv4: 192.0.0.1

### 포트(Port)

* 네트워크 서비스나 특정 프로세스를 식별하는 논리 단위
* EX) 192.0.0.1:80

### 로컬호스트(localhost)

* PC자신의 인터넷 주소(: 루프백 주소)

= 127.0.0.1

### 프로토콜(Protocol)

* 네트워크 서비스나 특정 프로세스를 식별하는 논리 단위

#### TCP(Transmission Control Protocol)

* 연결형 프로토콜
* 1대1
* 높은 신뢰성(검증 단계)

#### UDP(User Datagram Protocol)

* 비연결형 프로토콜
  * 1대1 / 1대N / N대N (N은 임의의 상수)

* 전송 속도 빠름(검증 안함)
  * 수신 여부 확인 안함

* 패킷 관리 필요
  * 순서가 바껴서 수신될 수 있음

#### HTTP(HyperText Transfer Protocol)

* WWW(World Wide Web) 상에서 주고 받을 수 있는 프로토콜
* 웹 문서(HTML)을 주고 받는데 쓰인다.
* 80포트 사용

* * *

### URI(Uniform Resource Identifier)

* 통합 자원 식별자

#### URL(Uniform Resource Locator)

* 파일 식별자
  * 네트워크 상에서 자원의 위치를 알려주는 주소

#### URN(Uniform Resource Name)

* * *

### AJAX

* 비동기식 자바스크립트 XML의 약자로 웹 서버에서 데이터만 받아오는 방법
* 웹 브라우저에서 웹 문서 전체를 렌더링 하지 않고 필요한 부분만 데이터를 받아와 갱신(Reflash)하기 때문에 처리속도가 빠르다.

출처: Do it! Node.js Programing & Wikipedia