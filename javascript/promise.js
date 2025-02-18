function promiseeg(value){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(value){
                resolve("Promise is resloved")
            }
            else{
                reject("Promise is rejected")
            }
        }, 1000);    
        
    })
}
promiseeg(true).then((res)=>{
    console.log("Hi")
}).catch((res)=>{
    console.log(res)
})
//Location finder
function locationFinder(loc,time){
    var location = new Promise((locFound,locNotFound)=>{
      setTimeout(()=>{
        if(isLocationFound(loc,time)){
            locFound("America");
        }
        else{
            locNotFound(loc,"Not Found");
        }
      },time)
    });
location.then((found,notFound)=>{
    console.log(found);
})
.catch(()=>{
    console.log(notFound);
})
}
isLocationFound = (loc,time)=>{
    location = "America"
    t = 7000;
    if(loc === location && time<=t) {
        return true;
    }
    else{
        return false;
    }

}
locationFinder("America",5000);
