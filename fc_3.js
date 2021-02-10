function func(callback) {
    console.log( typeof (callback) );
    // 넘어온 함수 실행하기
    callback();
}
 
var aFunc = function () {
    var a=500;
    console.log("익명함수 호출됨...")
    console.log( a );
}
 
func(aFunc);


