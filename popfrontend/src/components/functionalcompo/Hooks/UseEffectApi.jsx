import { useEffect, useState } from "react"
import axios from 'axios'
const UseEffectApi=()=>{
    const [posts,setPost]=useState([]);
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{
        setPost(res.data);
        console.log(res.data);
      }).catch((err)=>
        console.log(err));
    },[]);
    return(
       <div>
        <h1>This is useEffect example</h1>
        <h2>We are going to fetch the data from JSON placeholder</h2>
        {
        <ol>
        {posts.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))}
        </ol>
}

       </div>
    );
}
export default UseEffectApi;