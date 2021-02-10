//script.js
//그룹(블록) 설정(함수)하고 사용하는 방법
// ++ : 1씩증가 연산자 / +=1 : 1씩증가 / +=2 : 2씩증가 ...
// -- : 1씩감소 연산자 / -=1 : 1씩증가 / -=2 : 2씩증가 ...

var cnt1 = 14;
var cnt2 = 0;
var cnt3 = 0;
var cnt4 = 0;





function init1Fn(){
    // cnt1++;  // cnt1 = 14 + 1
    cnt1+=3;    // cnt1 = 14 + 3
    //DOM 
    document.querySelector('.main-btn1').style = 'font-size:' + cnt1 + 'px';
}

function init2Fn(){
    cnt1--;
    alert( -600*cnt1 );
}

function init3Fn(){
    cnt3++;
    alert( cnt3 );
}

function init4Fn(){
    cnt4++;
    alert( cnt4 );
}
