import React, {Component} from 'react';
import {albumsService} from "../../../services/albumsService";

class Index extends Component {

    componentDidMount() {
       albumsService.getAlbums()
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <h1>alb</h1>
            </div>
        );
    }
}

export default Index;