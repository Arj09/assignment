import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./Navbar.css"
export const Navbar = ()=>{
  const [data, setData] = useState()

  useEffect(()=>{
    axios.get("http://localhost:5000/api/food").then((res)=>{
      console.log(res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    
  }, [])

  

  return(
    <>
    <div className='foodtag'>Trending </div>
    <div className='container'>
    {
      data ? data
      .filter((data)=>data.section_name  == "Trending")
      .map((data, index)=>{
        return(
          <>
          
          
          <ul className='box' key={index}>
            <li  className='imgbox'><img   src={data.image_url}  alt='loading'/></li>
            <li  className='title'>{data.product_name}</li>
            <li  className='subtitle'>{data.one_liner}</li>
            <ul  className='action'>
              <li className='rate'>Rs {data.rate} / {data.quantity}</li>
              <li  className='addbtn'> +</li>

            </ul>
          </ul>
         
          </>
        )
      }): <div className='loading'>loading</div>
    }


    </div>

    <div className='foodtag'>Value Deals</div>
    <div className='container'>
    {
      data ? data
      .filter((data)=>data.section_name == "Basic Healthy")
      .map((data, index)=>{
        return(
          <>
          
          
          <ul className='box' key={index}>
            <li  className='imgbox'><img   src={data.image_url}  alt='loading'/></li>
            <li  className='title'>{data.product_name}</li>
            <li  className='subtitle'>{data.one_liner}</li>
            <ul  className='action'>
              <li className='rate'>Rs {data.rate} / {data.quantity}</li>
              <li  className='addbtn'> +</li>

            </ul>
          </ul>
         
          </>
        )
      }): <div className='loading'>loading</div>
    }


    </div>

    <div className='foodtag'>Food</div>
    <div className='container'>
    {
      data ? data
      .filter((data)=>data.section_name == "Value Deals")
      .map((data, index)=>{
        return(
          <>
          
          
          <ul className='box' key={index}>
            <li  className='imgbox'><img   src={data.image_url}  alt='loading'/></li>
            <li  className='title'>{data.product_name}</li>
            <li  className='subtitle'>{data.one_liner}</li>
            <ul  className='action'>
              <li className='rate'>Rs {data.rate} / {data.quantity}</li>
              <li  className='addbtn'> +</li>

            </ul>
          </ul>
         
          </>
        )
      }): <div className='loading'>loading</div>
    }


    </div>
   


    

      
      
      
  

   
    </>
  )
}