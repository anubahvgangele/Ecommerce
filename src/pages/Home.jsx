import React, { useEffect, useState } from 'react'
import { Product } from '../component/product';

export const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const[loading,setLoading] =  useState(false);
    const[posts,setPosts] = useState([]);

    async function fetchProductData() {
      setLoading(true)

      try{
        const res = await fetch(API_URL);
        const data = await res.json();

        setPosts(data);
      }
      catch(error){
        console.log("error agya");
        setPosts([]);
      }
      finally{
        setLoading(false);
      }
    }

    useEffect(() => {
      fetchProductData();
    },[])

  return (
    <div className='grid xs-grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
      {
        loading ? (<p>Product Loading...</p> ) : 
        
        ( posts.length === 0 ? (<p>No product founnd</p>) 
        :
          posts.map( (post) => ( <Product key={post.id} post = {post} classname=" flex justify-center items-center "/>))  
          
          ) 
          
      }
    </div>
  )
}
