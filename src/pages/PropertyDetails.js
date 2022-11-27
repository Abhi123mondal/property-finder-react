import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div >
      <div>
        <div>
          <h2>{property.name}</h2>
          <h3>{property.address}</h3>
        </div>
        <div>
          <div>
            {property.type}
          </div>
          <div>
            {property.country}
          </div>
        </div>
        <div>
          $ {property.price}
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src={property.imageLg} alt='' />
          </div>
          <div>
            <div>
              <BiBed/>
              <div>{property.bedrooms}</div>
            </div>
            <div>
              <BiBath/>
              <div>{property.bathrooms}</div>
            </div>
            <div>
              <BiArea/>
              <div>{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div>
          <div>
            <div>
              <img src={property.agent.image}></img>
            </div>
            <div>
              <div>{property.agent.name}</div>
              <Link to=''>
                View listings
              </Link>
            </div>
          </div>
          <form>
            <input
              className=''
              type='text'
              placeholder='Name*'
            />
            <input
              className=''
              type='text'
              placeholder='Email*'
            />
            <input
              className=''
              type='text'
              placeholder='Phone*'
            />
            <textarea
              className=''
              type='text'
              placeholder='Message*'
              defaultValue='Hello, I am interested in [Modern apartment]'
            />
            <div className=''>
              <button
                className=''
                type='submit'
              >
                Send message
              </button>
              <button className=''>
                Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;