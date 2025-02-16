/*
let a=10
var b="abc"
const c=3.45
let d=true
console.log(a,b,c,d)
console.log(typeof(c))
*/
//Secondary datatypes
arr=[1,3.45,"school",[3,4,5]]
console.log(arr)
console.log(arr[3])
//objects
// 1st type of object declaration
object1={
    "firstname":"St.Joseph's",
    "Lastname":"Institute of technology",
    "dept":['CSE','IT','ECE','ADS'],
}
console.log(object1)
//object2
object2={}
object2["firstname"]="Nandika"
object2["LastName"]="Maheshwar"
object2["sibling"]="Mithun"
console.log(object2)
console.log(object2.sibling)
object2.family=5
console.log(object2)
//3rd way
object3=new Object()
console.log(object3)
object3.name=["Janani","Pavithra"]
object3.dept=["CSE","IT"]
console.log(object3.name)
//set
set=new Set("hello")
console.log(set)
set1=new Set(["hello"])
console.log(set1)
set1.add("hello")
console.log(typeof(set1))