import React, { Component } from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import locationImg from "../../../../assets/images/location.png";
import LocationIcons from "../../../../components/iconWithText/iconWithText";
import locationIcon from "../../../../assets/icons/UBICACION.png";

const Location = ({ className }) => {
    return (
        <div className={className}>
            <a href={'https://www.google.com/maps/place/Kavana+Revestimientos/@10.2244272,-68.0108164,18z/data=!4m5!3m4!1s0x0:0x1fe4e1de45de41e4!8m2!3d10.2241374!4d-68.0094279'} target={'_blank'}>
              <ResponsiveImg src={locationImg}/>
            </a>
        </div>
    );
};

export const StyledLocation = styled(Location)`
  width: auto;
  height: 400px;
  max-height: 400px;
  
  img {
    display: block;
    margin: 0 auto;
  }
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export default StyledLocation;


// import GoogleMapReact from 'google-map-react';


// const Gmaps = styled.div`
//   height: 70vh;
//   width: 60%;
  
//   @media (max-width: 700px) {
//     display: none;
//   })
// `;

// const AnyReactComponent = ({ text }) => <LocationIcons icon={locationIcon}></LocationIcons>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 10.22,
//       lng: -68.01
//     },
//     zoom: 15
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <Gmaps>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyCdIC12PTvjRxLDNcnJ9_Skql0IhY6vK0c'}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={10.224105}
//             lng={-68.009484}
//             text="Kavana"
//           />
//         </GoogleMapReact>
//       </Gmaps>
//     );
//   }
// }

// export default SimpleMap;


