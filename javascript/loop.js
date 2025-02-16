arr=[10,20,30,40,50,50,60,70,70,69]
for(i of arr){
    console.log(i)
}
object1={
    "firstname":"St.Joseph's",
    "Lastname":"Institute of technology",
    "dept":['CSE','IT','ECE','ADS'],
}

for(i in object1){
    console.log(object1.i)
}
for(i of Object.keys(object1)){
    console.log(i)
}
for(i of Object.values(object1)){
    console.log(i)
}
for({i,j} of Object.entries(object1)){
    console.log()
}