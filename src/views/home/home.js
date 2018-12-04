import React, {Component} from 'react';
import ImageSliderContainer from "./imageSliderContainer/imageSliderContainer";
import StyledImageSlider from "../../components/imagesSlider/imageSlider";

class Home extends Component {

    state = {
        images: [
            {
                url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                text: 'Asesoria Personalizada en la Selección de Productos',
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                text: 'Marico el que lo lea',
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                text: 'ja weno',
            }
        ]
    };

    render() {
        return (
            <React.Fragment>
                <ImageSliderContainer>
                    <StyledImageSlider images={this.state.images}/>
                </ImageSliderContainer>
            </React.Fragment>
        );
    }
}

export default Home;