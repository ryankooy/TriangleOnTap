import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import SaveBtn from '../BrewLists/SaveBtn';
import './Brewery.css';

function Brewery(props) {

  const { brewery } = props;

  const {
    name,
    street,
    city,
    state,
    brewery_type,
    website_url
  } = brewery
  let bgColor;
  let address;

  if (city !== '') {
    if (street === '')
      address = encodeURIComponent(`${name}, ${city}, ${state}`)
    else {
      address = encodeURIComponent(`${name}, ${street}, ${city}, ${state}`)
    }
  } else {
    address = null;
  }

    // switch(brewery.brewery_type) {
    //   case 'micro':
    //   case 'regional':
    //   case 'large':
    //     bgColor = 'white'
    //     break
    //   case 'brewpub':
    //     bgColor = 'white'
    //     break
    //   default:
    //     bgColor = 'white'
    // }

  return (
    <Card className='p-4 mb-2 rounded text-dark' 
          bgcolor={`${bgColor}`}
    >
      { (Object.keys(brewery).length !== 0) ?
        <div>
          <address className="roman">
            <div className="text-lg mb-2">
              <span className="font-bold">{name}</span>
              <span> ({brewery_type})</span>
            </div>
              { street !== '' ? <div>{street}</div> : '' }
            <div>
              { city !== '' ? <span>{city}, {state} </span> : '' }
            </div>
            <div>
              { website_url !== '' ? <a href={website_url}>{website_url}</a> : '' }
            </div>
            <SaveBtn onClick={props.onClick}
                      dataId={props.brewery.id}
            />
          </address>
            {/* { address ?
              <div>
                <a
                  className="text-white"
                  href={`https://www.google.com/maps/search/?api=1&query=${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Map
                </a>
              </div>
              : ''
            } */}
        </div>
          :
        <span className="font-bold">No brewery selected.</span>
      }
    </Card>
  )
};

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

export default Brewery;
