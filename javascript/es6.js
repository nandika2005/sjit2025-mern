//1.Variables
//refer to declarations.js
//2.Arrow function
var testarrow=()=>{
    console.log("This is a test function")
}
testarrow()
//3.Scoping
var a=10
let e=15;
console.log(a)
{
    let a =20;
    console.log(a);
    let b=30;
    console.log(b);
    var c=30;
    console.log(c);
    e=8;
    console.log(e)
}
console.log(a);
console.log(c);
console.log(e);
//console.log(b);
//4.Ternary operator
let m=10;
console.log((m%2)?"Odd":"Even");
//5.Spread
year1=['user1','user2','user3']
year2=['user4','user5','user6']
year3=['user7','user8','user9']
stuDB=[year1,year2,year3]
stuDB=[...year1,...year2,...year3]
console.log(stuDB)
//6.Rest operator(...)
function print(...number)
{
    console.log(number);
}
print(1,3,4);
//7.Destructing operator
var arr=[10,20,30,40,50,60]
var[a,c,d,n]=arr
console.log(a,c,n)
//8.Hoisting
//1.Variable hoisting
//Undefined because var is global scope so we know a but not the value so undefined
console.log(k)
var k=10;
console.log(k)
//Reference error :Cannaot access because let is local scope so cannot access before initialization
//console.log(h)
let h=3
console.log(h)
//Refernce error:For const same as let as its scope is local
//2.Functional Hoisting
//Normal function
funcHoist()
function funcHoist(){
    console.log("HI");
}
//Arrow function:For this we are calling after it is defined
funArrow=()=>{
    console.log("This is arrow function");
}
funArrow()
//9.Class and Objects
class abc{
     classfun(){
        console.log("This is a function")
    }
}
    obj=new abc()
    console.log(obj.classfun());
