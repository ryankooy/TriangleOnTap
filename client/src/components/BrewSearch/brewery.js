import React from 'react';
import PropTypes from 'prop-types';
import { Card, Paper } from '@material-ui/core';
// import API from "../../utils/API";

function Brewery(props) {
// class Brewery extends PureComponent {
  // render() {
    // const { brewery } = this.props;
    const { brewery } = props;

    const {
      name,
      street,
      city,
      brewery_type
    } = brewery
    let bgColor;
    let address;

    if (city !== '') {
      if (street === '')
        address = encodeURIComponent(`${name}, ${city}`)
      else {
        address = encodeURIComponent(`${name}, ${street}, ${city}`)
      }
    } else {
      address = null;
    }

    switch(brewery.brewery_type) {
      case 'micro':
      case 'regional':
      case 'large':
        // Changed text color to "dark"
        bgColor = 'bg-green text-dark'
        break
      case 'brewpub':
        // Changed text color to "dark"
        bgColor = 'bg-orange text-dark'
        break
      default:
        bgColor = 'bg-grey-light text-grey'
    }

    return (
      // Wrapped in a "div" tag
      // <Paper>
      <Card className={`p-4 mb-2 rounded ${bgColor}`}>
        { (Object.keys(brewery).length !== 0) ?
          <div>
            <address className="roman">
              <div className="text-lg mb-2">
                <span className="font-bold">{name}</span>
                <span> ({brewery_type})</span>
              </div>
              { street !== '' ? <div>{street}</div> : '' }
              <div>
                { city !== '' ? <span>{city}, </span> : '' }
              </div>
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
      </Card>
      // </Paper>
    )
  }
// }

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

export default Brewery;
