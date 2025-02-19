function Home(props){
   var styling={
      textAlign:"center",
      color:"white",
      backgroundColor:"lime"
   }
  return(
   <div>
    <h1 style={styling}>Home</h1>
    <h2>Below tag is for props</h2>
    <h3>Props:{props.sjit}</h3>
   </div>
  )
}
export default Home;