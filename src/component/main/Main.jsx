import React from 'react';
import './main.css';
import pic1 from '../../assets/pic1.png'

export const Main = () => {
  return (
    <div className='container'>
        <h2>W O R K  <span> O U T </span> </h2>
        <h2  className='h22' style={{color: "white"}}>W I T H  <span style={{color: "white"}}> M E </span></h2>
        <img src={pic1} alt="" className='pic1' />
        <p>Their guidelines recommend 150 minutes of moderate-intensity <br /> aerobic physical activity each week or vigorous-intensity aerobic </p>
        <div className='cross2'>
            
     <div className='inner2'>
     </div>
       <div className='line2'>
       </div>
  </div>
  <div className='cross3'>
            
     <div className='inner3'>
     </div>
       <div className='line3'>
       </div>
  </div>
    <div className='cross'>
     <div className='inner'>
     </div>
       <div className='line'>
       </div>
  </div>
  <div class="circle"></div>
  </div>
  )
}
