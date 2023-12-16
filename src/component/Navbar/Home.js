import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./Navbar.css"
import { Main } from './main';
export const Home = ()=>{
  const [data, setData] = useState()

  useEffect(()=>{
    axios.get("https://food-backend12.onrender.com/api/food").then((res)=>{
     
      setData(res.data)
    }).catch((err)=>{
    
    })
    
  }, [])

  return(
    
    <>
    <Main  data = {data}  tag = "Trending"  section_name = "Trending"/>
    <Main  data = {data}  tag = "Value Deals"  section_name = "Basic Healthy"/>
    <Main  data = {data}  tag = "Food"  section_name = "Value Deals"/>
    </>
  )
}