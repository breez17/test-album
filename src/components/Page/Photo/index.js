import React, {Component} from 'react';
import {photoService} from "../../../services/photosService";

class Index extends Component {

    componentDidMount() {
        photoService.getPhotos()
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <h1>photo</h1>
            </div>
        );
    }
}

export default Index;