import React, { Component } from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import locationImg from "../../../../assets/images/location.png";
import LocationIcons from "../../../../components/iconWithText/iconWithText";
import locationIcon from "../../../../assets/icons/UBICACION.png";

import GoogleMapReact from 'google-map-react';


const Gmaps = styled.div`
  height: 70vh;
  width: 60%;
  
  @media (max-width: 700px) {
    display: none;
  })
`;

const AnyReactComponent = ({ text }) => <LocationIcons icon={locationIcon}></LocationIcons>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 10.22,
      lng: -68.01
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <Gmaps>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCdIC12PTvjRxLDNcnJ9_Skql0IhY6vK0c'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={10.224105}
            lng={-68.009484}
            text="Kavana"
          />
        </GoogleMapReact>
      </Gmaps>
    );
  }
}

export default SimpleMap;
