# Queries

## Learn how to fetch data with Query components
graphQL에서 성공적으로 실행되는 query는 Apollo에서도 실행된다. => 왜냐하면 Apollo는 graphQL 기반이기 때문에

## microsalts에서의 코드!
1. views의 해당(데이터를 불러와야할) 디렉토리를 확인한다.
1. 나는 비밀번호변경하기 기능을 구현해야 하므로, `myPageChangePassword` 에서 시작한다.
1. 그리고 `myPage` 디렉토리 파일들을 참고할 것이다.
1. `myPage`에서는 두 개의 query를 import해서 사용하고있다. 하나는 ME에 대한 쿼리, 하나는 로그인 정보에 대한 쿼리+업데이트 쿼리
1. 해당 디렉토리에서 쿼리는 해당 디렉토리에서 만들 수도 있고, 다른 디렉토리의 쿼리를 불러올 수도 있다.
1. `myPageChangePassword` 에서는 어떤 쿼리/뮤테이션이 필요하고 어떻게 렌더링 해줘야할까!?
  - [쿼리] **현재비밀번호**와 **데이터의 비밀번호**가 일치하는지 검사
  - [뮤테이션] **새로운비밀번호**를 **데이터의 비밀번호**에 대입

## [Mutation codesandbox example](https://codesandbox.io/s/v3mn68xxvy)
