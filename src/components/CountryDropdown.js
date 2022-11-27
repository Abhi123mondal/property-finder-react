import React, { useState, useContext } from 'react';

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';

import './CountryDropdown.css';
const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='menu'>
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)}
     
      >
        <RiMapPinLine/>
        <div>
          <div>{country}</div>
          <div>Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine/>
        ) : (
          <RiArrowDownSLine/>
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setCountry(country)}
              key={index}
              className=''>
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;