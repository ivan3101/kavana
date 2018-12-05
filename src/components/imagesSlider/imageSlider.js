import React, {Component} from 'react';
import styled from "styled-components";
import Slide from "./slide/slide";

class ImageSlider extends Component {
    state = {
        currentIndex: 0,
        translateValue: 0,
    };

    slideInterval;
    slideRef = React.createRef();

    componentDidMount() {
        this.slideInterval = setInterval(this.nextImg.bind(this), 7000)
    }

    componentWillUnmount() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }


    nextImg = () => {
        const { images } = this.props;
        const { currentIndex } = this.state;

        if (currentIndex < images.length - 1) {
            this.setState((prevState) => ({
                currentIndex: prevState.currentIndex + 1,
                translateValue: prevState.translateValue + -(this.slideWidth())
            }))

        } else {
            this.setState(() => ({
                currentIndex: 0,
                translateValue: 0
            }))
        }
    };

    slideWidth = () => {
        return this.slideRef.current.clientWidth;
    };

    render() {
        const { images, className } = this.props;

        return (
            <div
                className={className}
                style={{
                    transform: `translateX(${this.state.translateValue}px`
                }}
                ref={this.slideRef}
            >
                {
                    images.length && images.map((image, i) => (
                        <Slide key={image.url} image={image.url} text={image.text}/>
                    ))
                }
            </div>
        );
    }
}

const StyledImageSlider = styled(ImageSlider)`
  width: 100%;
  height: 100%;
  transition: transform 450ms ease-out;
  position: relative;
`;

export default StyledImageSlider;