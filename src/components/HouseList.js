import React, { useContext } from 'react';


import { HouseContext } from './HouseContext';

import House from './House';

import { Link } from 'react-router-dom';

import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2/>
    );
  }

  if (houses.length < 1) {
    return (
      <div>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className='row'>
  
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
    </section>
  );
};

export default HouseList;