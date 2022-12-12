import React, { useState } from 'react'
import "./Tour.css"
function Tour({tour,removebtn}) {
    const {id,name,info,price,image} = tour
    const [readMore, setReadMore] = useState(true); 
  return (
    <div className='card-main'>
        <div className='Card' >
            <img src={image} />
 
           <p>{readMore? info : info.substring(0,200)}  <span className='showbtn' onClick={()=>setReadMore(!readMore)}>showmore</span></p>
          
            <div className='buttn'>
             <button className='btn' onClick={()=>removebtn(id)}>Not Interested</button>
             </div>       
    </div>
    </div>
  )
}

export default Tour