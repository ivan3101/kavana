import React, { Component } from 'react';
import styled from "styled-components";
import Slide from "./slide/slide";
import * as axios from "axios";
import SpinnerLoading from "../spinnerLoading/spinnerLoading";

class ImageSlider extends Component {
    state = {
        currentIndex: 0,
        translateValue: 0,
        sliders: [],
        loading: true
    };

    slideInterval;
    slideRef = React.createRef();

    async componentDidMount() {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/slider`);

        this.setState(() => ({
            sliders: response.data.data.sliders,
            loading: false
        }));
        if (response.data.data.sliders.length > 1) {
            this.slideInterval = setInterval(this.nextImg.bind(this), 7000)
        }
    }

    componentWillUnmount() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }


    nextImg = () => {
        const { currentIndex, sliders } = this.state;

        if (currentIndex < sliders.length - 1) {
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

    getNextIndex(idx) {
        const { currentIndex, sliders } = this.state;
        if (currentIndex >= sliders.length - 1) {
          return 0;
        }
        return currentIndex + 1;
    }

    aja = () => {
        const { currentIndex, sliders } = this.state;

        if (currentIndex >= sliders.length - 1) {
            this.setState(() => ({
                currentIndex: 0,
                translateValue: 0
            }))

        } else {
            this.setState((prevState) => ({
                currentIndex: prevState.currentIndex + 1,
                translateValue: prevState.translateValue + -(this.slideWidth())
            }))
        }
    };

    eje = () => {

        const { currentIndex, sliders } = this.state;

        if (currentIndex >= 0) {
            this.setState(() => ({
                currentIndex: 0,
                translateValue: 0
            }))

        } else {
            this.setState((prevState) => ({
                currentIndex: prevState.currentIndex - 1,
                translateValue: prevState.translateValue + -(this.slideWidth())
            }))
        }
    };

    render() {
        const { className } = this.props;
        const { sliders } = this.state;
        return (
            <div className={className}>
                <a class="prev" onClick={this.eje}>&#10094;</a>
                <a class="next" onClick={this.aja}>&#10095;</a>
                <div
                    className={className}
                    style={{
                        transform: `translateX(${this.state.translateValue}px`
                    }}
                    ref={this.slideRef}
                >

                    {
                        !!sliders.length && sliders.map((slider, i) => (
                            <Slide key={slider.image} image={slider.image} text={slider.message} />
                        ))
                    }
                    {
                        !!this.state.loading && <SpinnerLoading />
                    }
                    {
                        !this.state.loading && !sliders.length && <h3>No se encontraron imagenes en la galeria</h3>
                    }
                </div>
            </div>
        );
    }
}

const StyledImageSlider = styled(ImageSlider)`
  width: 100%;
  height: 100%;
  transition: transform 450ms ease-out;
  position: relative;
  white-space: nowrap;
  @media (max-width: 750px){
    height: 50%;
  }
  /* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: #FF6B0C;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 4px 4px 0;
  user-select: none;
  z-index:999999;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: #A6AAAF;
}
`;

export default StyledImageSlider;