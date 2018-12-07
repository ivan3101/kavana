import React, {Component} from 'react';
import ImageSliderContainer from "./imageSliderContainer/imageSliderContainer";
import StyledImageSlider from "../../components/imagesSlider/imageSlider";
import InstagramImgs from "./instagramImgs/instagramsImgs";
import Testimonials from "./testimonials/testimonials";
import StyledContact from "./contact/contact";
import Services from "./services/services";
import axios from "axios";

class Home extends Component {

    state = {
        publications: [],
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

    async componentDidMount() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/instagram`);
            this.setState(() => ({
                publications: response.data.images
            }))
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        return (
            <React.Fragment>
                <ImageSliderContainer>
                    <StyledImageSlider images={this.state.images}/>
                </ImageSliderContainer>
                <Services/>
                <InstagramImgs publications={this.state.publications}/>
                <Testimonials/>
                <StyledContact/>
            </React.Fragment>
        );
    }
}

export default Home;