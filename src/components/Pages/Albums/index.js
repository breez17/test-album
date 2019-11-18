import React, {Component} from 'react';
import {albumsService} from "../../../data/services/albumsService";
import Button from "../../UI/Button/Button";
import {connect} from "react-redux";
import {albumsActions} from "../../../data/actions";
import {Link} from "react-router-dom";

/*Stylesheets*/

import './Albums.css';


class Index extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(albumsActions.getAlbums(localStorage.getItem('Verification')))
    };

    render() {
        const {albums} = this.props;
        return (
            <div className="container__wrapper-albums wrapper-albums">
                {albums.map((item, index) => (
                        <Link className="tag-album" to={`/albums/${item.id}`} key={index}>
                            <img src={"./img/photo_album.png"} alt="Album"/>
                            <p className="tag_album__item">{item.title}</p>
                        </Link>
                    ))}
            </div>
        );
    }
}

const mapStateToProps = ({albumsState}) => {
    return {
        albums: albumsState.albums,
        loading: albumsState.loading
    }
};

export default connect(mapStateToProps)(Index);