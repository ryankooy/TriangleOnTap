import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { palette } from '@material-ui/system';
import SaveBtn from '../BrewLists/SaveBtn';

function Brewery(props) {
// class Brewery extends PureComponent {
  // render() {
    // const { brewery } = this.props;
    const { brewery } = props;

    const {
      name,
      street,
      city,
      state,
      phone,
      latitude,
      longitude,
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

    switch(brewery.brewery_type) {
      case 'micro':
      case 'regional':
      case 'large':
        // Changed text color to "dark"
        bgColor = 'secondary.main'
        break
      case 'brewpub':
        // Changed text color to "dark"
        bgColor = 'secondary.main'
        break
      default:
        bgColor = 'white'
    }

    console.log(props.brewery);

    return (
      // Wrapped in a "div" tag
      // <Paper>
      <Box className='p-4 mb-2 rounded text-light' 
            bgcolor={`${bgColor}`}>
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
                { website_url != '' ? <a href={website_url}>{website_url}</a> : '' }
              </div>
              <SaveBtn onClick={props.onClick}
                       dataId={props.brewery.id}/>
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
          <span>No brewery selected.</span>
        }
      </Box>
      // </Paper>
    )
  }
// }

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

export default Brewery;
