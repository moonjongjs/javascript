function func (x) {
    function cb(y) {
        function bo(z){
            console.log("리턴된 함수 실행",x,y,z);
        }
        return bo;
    }
    return cb;
}
func(); // 값 : func함수 안에 있는 cb함수
func('1리턴값')('2리턴값')('3리턴값'); // 출력 : 리턴된 함수 실행
 
var myCb = func(); // myCb 변수에 func() 값인 cb함수를 전달한다.
console.log(typeof (myCb)); // 출력 : function
myCb(); // 출력 : 리턴된 함수 실행
