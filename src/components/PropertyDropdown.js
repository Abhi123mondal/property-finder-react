import React, { useState, useContext } from 'react';
// import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiHome5Line/>
        <div>
          <div>
            {property}
          </div>
          <div>Choose property type</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine />
        ) : (
          <RiArrowDownSLine/>
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setProperty(property)}
              key={index}
              className=''
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;