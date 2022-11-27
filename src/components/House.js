import React from 'react';
import './House.css';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <div className='column'>
    <div className='single-property'>
    <div className='card'>
      <img src={house.image} alt='' />
      <div className='price'>
        $ {house.price}
      </div>
        <div className='type'>
          {house.type}
        </div>
        <div className='country'>
          {house.country}
        </div>
      <div className='address'>{house.address}</div>
      <div className='oneline'>
          <div className='line'>
          <BiBed /> {house.bedrooms} Beds</div>
          <div className='line'>
             <BiBath />{house.bathrooms} Bathrooms</div>
          <div className='line'>
            <BiArea/>
            {house.surface}</div>
            </div>
        </div>
        </div>
        </div>
  );
};

export default House;