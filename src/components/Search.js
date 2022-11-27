import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import './Search.css';
import { HouseContext } from './HouseContext';


const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className='drop'>
      <CountryDropdown className='country'/>
      <PropertyDropdown className='country'/>
      <PriceRangeDropdown className='country'/>
      <button
        onClick={() => {
          handleClick();
        }}
        className=''
      >
      Search  </button>
    </div>
  );
};

export default Search;