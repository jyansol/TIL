
## Node.js
- HTML만으로 구성된 WEB개발에 욕심 > JavaScript > Node.js (JS를 이용해서 웹브라우저가 아닌 컴퓨터 자체를 제어함. 마치 java, Ruby 등 처럼)
- 웹브라우저 울타리안에 갇혀있던 JS는 Node.js때문에 인생역전됨!

## MySQL
- file만으로는 정보를 입력, 저장, 출력하는 것이 어려움.
- 누구나 쉽게 데이터를 정리정돈 할 수 있도록 `database` 제품을 만듬.
  * Relational Database 이론적 토대 위에서 사용되는 database
    01. MySQL : 무료, 오픈소스
    01. Oracle
    01. SQL Server
    ... 등등
- WEB이 폭발적인 성장을 하면서 웹개발자들은 웹페이지를 통해서 표현할 정보를 저장할 데이터베이스를 찾게됨 > MySQL 
  * WEB 페이지를 만들면서 몇천만원의 데이터베이스를 사용할 수 없으니까!
  

# Node.js - MySQL(database)
- data를 파일에 저장하고 있었음 뭔가 설치할거 없이 바로 쓸 수 있음. 파일을 배우는데 시간이 필요하지 않음. 근데 단점이 있음.
> 파일의 문제
  >> 근데 파일안의 페이지가 1억개라면, 컴퓨터는 파일을 열어서 조건에 만족하는 일을 출력한다고 할때, 오래걸림
  >> 제목이 파일의 이름이고 본문을 가진 파일인데, 저자의 이름, 공개상태 등을 화면에 표현하고 싶고, 파일에 표현해야할 때 각각을 나타내기 애매함.
  >> 또는 저자의 이름, 생성한 날짜 순서대로 등의 명령 + 구현하는 일은 매우 어려움.
  => database 가 쉽게해줌 
  - Node.js 에서 MySQL을 건드려서 관리하는 라이브러리가 있음


