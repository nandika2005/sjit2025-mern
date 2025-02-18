/*async function asAw(){
   setTimeout(() => {
    console.log("Hello")
   }, 5000);
}
asAw().then((res)=>{
    console.log(res)
}).catch((res)=>{
console.log(res)
})
console.log(asAw())*/
//Instagram console demo
 const likecode=async()=>{
   return new Promise((likePost) => {
        setTimeout(() => {
            likePost("Post liked successfully")
        }, 5000);  
   }) 
}
const Sharecode=async()=>{
    return new Promise((sharePost) => {
         setTimeout(() => {
             sharePost("Post shared successfully")
         }, 5000);  
    }) 
 }
 const Commentcode=async()=>{
    return new Promise((commentPost) => {
         setTimeout(() => {
             commentPost("Post commented successfully")
         }, 5000);  
    }) 
 }
async function postCode(){
    var post=new Promise((post) => {
        setTimeout(() => {
            post("Post created successfully")  
        }, 5000);
        
    })
    console.log(await post)
}
await postCode()
console.log(await likecode())
console.log(await Sharecode())
console.log(await Commentcode())