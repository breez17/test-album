import React, {Component} from 'react';
import {albumsService} from "../../../services/albumsService";


class Index extends Component {

    componentDidMount() {
        albumsService.getAlbums()
            .then(albums => {
                const Auth = localStorage.getItem('Verification');
                const userAlbums = albums.filter(album => album.userId === Auth);
                console.log(userAlbums);
                console.log(Auth);
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