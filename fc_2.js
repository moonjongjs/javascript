function func() {
    console.log("func 호출됨");
}
var f1 = func;
var f2 = f1;
func();  
f1();
f2();

