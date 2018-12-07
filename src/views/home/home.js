import React, {Component} from 'react';
import ImageSliderContainer from "./imageSliderContainer/imageSliderContainer";
import StyledImageSlider from "../../components/imagesSlider/imageSlider";
import InstagramImgs from "./instagramImgs/instagramsImgs";
import Testimonials from "./testimonials/testimonials";
import StyledContact from "./contact/contact";
import Services from "./services/services";

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
            }
        ]
    };

    render() {
        return (
            <React.Fragment>
                <ImageSliderContainer>
                    <StyledImageSlider images={this.state.images}/>
                </ImageSliderContainer>
                <Services/>
                <InstagramImgs/>
                <Testimonials/>
                <StyledContact/>
            </React.Fragment>
        );
    }
}

export default Home;