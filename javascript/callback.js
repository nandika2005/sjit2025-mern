function callSjit(meassage,callback){
   console.log(meassage)
   callback();
}
function callbackSjit(){
    console.log("Welcome back to sjit")
}
callSjit("welcome to sjit",callbackSjit);