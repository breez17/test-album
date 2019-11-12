import React, {Component} from 'react';
import {photoService} from "../../../services/photosService";
import Slider from "react-slick";


/*Stylesheet*/

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Photo.css'

class Index extends Component {
    state = {
        photos: []
    };

    componentDidMount() {
        photoService.getPhotos(1)
            .then(photos => {
                this.setState({photos})
            })
    }


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const photos = this.state.photos;
        return (
            <Slider {...settings}>

                    {[photos.map((item, key) => (
                       <div> <img className="imgHolder__picture" key={key} src={item.url} alt=""/></div>
                    ))]}

            </Slider>
        );
    }
}

export default Index;