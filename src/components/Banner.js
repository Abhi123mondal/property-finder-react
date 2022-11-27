import React from 'react';
import './Banner.css';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='section'>
      <div>
        <div>
          <h1 className='h1'>
            Search Properties to Rent </h1>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;