      ```js
      //깊은복사방법 --------------------------------------------------------------------------
      const dev = Object.assign({}, wes);
      // {} 복사하려고
      const dev2 = JSON.parse(JSON.stringify(wes));
      // --------------------------------------------------------------------------------------

      // .assing() 인수로 받은 객체들의 모든 열거 가능한 속성을 대상 객체에 복사
      // JSON.parse()  : string 객체를 json 객체로 변환 
      // json포맷을 jsp객체로 바꿈 => json은 문자열일뿐, 접근/조작/핸들링 불가능
      // JSON.stringify() : jsp객체를 JSON 표기법으로 바꿈 => server 전송시

      // 얕은복사 : 같은 참조  
      // 깊은복사 : 객체의 객체는 복사가 안됨. => 직접구현 or Immutable.js 라이브러리

      // `상태`를 복사하거나 바꿔칠때 
      // ex ) const dev2 = JSON.parse(JSON.stringify(wes));
      ```