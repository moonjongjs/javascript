let a;
let b;

function person(){
    a='babo';
    b='ppoppo';
}

person.prototype.height = 172;
person.prototype.weight = 82;

let moon = new person();
let jong = new person();

console.log(moon);
console.log(jong);
console.log(person.prototype);
console.log(__proto__);
console.log(person);
console.log(this);
console.log(person.prototype.weight);
console.log(moon.toString());
console.log(jong.toString());

