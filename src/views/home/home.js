import React, {Component, createRef} from 'react';
import ImageSliderContainer from "./imageSliderContainer/imageSliderContainer";
import StyledImageSlider from "../../components/imagesSlider/imageSlider";
import InstagramImgs from "./instagramImgs/instagramsImgs";
import Testimonials from "./testimonials/testimonials";
import StyledContact from "./contact/contact";
import Services from "./services/services";
import axios from "axios";
import ServicesContainer from "./services/servicesContainer";
import StyledBlogSlider from "../blog/blogSlider/blogSlider";

const ServicesComponent = ServicesContainer(Services);

class Home extends Component {

    state = {
        publications: []
    };

    servicesRef = createRef();

    async componentDidMount() {
        console.log(this.servicesRef)
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/instagram`);
            this.setState(() => ({
                publications: response.data.images
            }));
        } catch (e) {
            console.log(e)
        }

        const {location} = this.props;

        if (location.hash && location.hash === '#servicios') {
            this.servicesRef.current.scrollIntoView();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {location} = this.props;

        if (location.hash && location.hash === '#servicios') {
            this.servicesRef.current.scrollIntoView();
        }
    }


    render() {
        return (
            <React.Fragment>
                <ImageSliderContainer>
                    <StyledImageSlider/>
                </ImageSliderContainer>
                <ImageSliderContainer>
                    <StyledBlogSlider />
                </ImageSliderContainer>
                <ServicesComponent ref={this.servicesRef}/>
                <InstagramImgs publications={this.state.publications}/>
                <Testimonials/>
                <StyledContact/>
            </React.Fragment>
        );
    }
}

export default Home;