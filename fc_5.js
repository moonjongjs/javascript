function func1 (x) {
    return function (y) { 
        return function (z) {
            console.log("리턴된 함수 실행1",x,y,z);     
        }
    };
}
func1(1)(2)(3);
 
var myCb1 = func1();
myCb1();
