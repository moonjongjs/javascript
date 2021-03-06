// script1.js
// - 상수 : 값이 고정된거 바뀌지 않는 것을 말함.
// - 변수 : 값이 변경되어 사용되는 변수를 말함.
// - 변수의 규칙 
// - 첫글자 영문으로 시작한다.
// - 대소문자 구분한다.
// - 네이밍 규칙 중 카멜케이스를 따른다.
// - 공백은 절대 사용 안된다.
// - 컴퓨터에서 사용되는 키워드는 사용 안된다.
// - 첫 글자를 영문으로 쓰고 나머지는 숫자 혼용 사용 가능하다.
// - 첫 글자 사용 가능한 예외 문자 _ (언더스코어 == 언더바), $ (달러사인)
// - 숫자형(Integer 정수, Float 실수)은 인용부호가 없는 순수한 숫자를 의미 한다.
// - 문자형(String 문자열)은 인용부호가 있는 숫자 또는 문자 특수문자 등 이다.
// - 컴퓨터 입력상에서 입력된 숫자는 문자(열)형으로 인식한다. 예] Number() 내장함수
// - 부울(참, 거짓) : true(참)==1, yes, false(거짓)==0, no
// - 논리연산 : AND(논리곱), OR(논리합), NOT(논리부정)
// - 산술연산 : +(덧셈)  -(뺄셈)  *(곱셈)  /(나눗셈)  %(나머지)  =(대입연산)
// - 비교연산 : >(크다)  <(작다)  >=(크거나같다)  <=(작거나같다)  
//             ==(같다)  ===(논리까지같다)  !=(같지않다)  !==(논리까지같지않다)
// - 증감연산 : ++, --, +=1, +=2, +=3, +=5 ....
    var a = 0;
        a++;  //1씩 증가  a = a + 1  또는  a+=1
        a+=2; //2씩 증가  a = a + 2 

        a--;  //1씩 감소
        a-=2; //2씩 감소



// 예제1]
// 변수를 설정하고 산술연산을 실행
// var(상수변수 구분없이 사용) 변수 설정 키워드 - ECMA Script 5
// let(일반변수설정), const(상수변수설정) 변수 설정 키워드 - ECMA Script 6
// 자바스크립트에서 종결 어미는 세미콜론==쌍반점(;)을 사용한다.
// 문자열과 변수 상수등 연결 연산자는 + 사용


   const irum = '이순신';  //const 키워드 - ECMA Script 6 에서 사용
   let a = 100;  // let 키워드 - ECMA Script 6 에서 사용

   var a = 100; //변수 a를 버킷(양동이)이고 거기에 담는 숫자 100을 변수 값이라 한다.
       a = 50;  //변수 a에 값은 50으로 바뀐다. 
   var b = 300; 
   var c = a + b;  //변수 c에는 350 = 50 + 300
       console.log(c + ' = a + b ECMA Script 5 표현'); 
       console.log(`${ c } = a + b  ECMA Script 6 표현`); // ECMA Script 6  ` 빽틱(역 홑따옴표)사용

       console.log((a > b) + '  a > b' );   //거짓(false)
       console.log((a < b) + '  a < b'  );   //참(true)
       console.log((a == b) + '  a == b'   );  //거짓(false)
       console.log((a === b) + '  a === b' ); //거짓(false)
       console.log((a != b) + '  a != b'  );  //참(true)
       console.log((a !== b) + '  a !== b' ); //참(true)


       console.log( (5 % 2) + ' 나머지 연산'); //나머지

       /*
       console.log(       1항      ? '2항' : '3항'  ); //나머지를 이용 홀 짝수 3항 연산자
       console.log(  조건문(비교문) ? '참조건값' : '거짓조건값'  ); //나머지를 이용 홀 짝수 3항 연산자
       */
       console.log(  4 % 2 == 0 ? '짝수' : '홀수'  ); //나머지를 이용 홀 짝수 3항 연산자











 
