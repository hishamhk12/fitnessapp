import React from 'react';
import './footer.css';
import m1 from '../../assets/m1.jpg';
import m2 from '../../assets/m2.jpg';
import n1 from '../../assets/n1.png';

const Footer = () => {
  return (
    <div>
        <div>
        <h3>
        join the workout
        </h3>
        <div className='c'>
            <h6> Easy</h6>
	<input type="checkbox" id="checkbox1" />
	<label for="checkbox1"></label>
    <h6> Hard</h6>
</div>

        <img src={m1}alt="" className='m m1 ' />
        <img src={m2}alt="" className='m m2' />
        <img src={n1}alt="" className='m n1' />
          <button className='btn'>Invite Your Friend</button>
        </div>
    </div>
  )
}

export default Footer