import React from "react";

export  const Main =({data, tag, section_name}) =>{
  
  return(
    <>
    
    <div className='foodtag'>{tag} </div>
    <div className='container'>
    {
      data ? data
      .filter((data)=>data.section_name  == section_name)
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
