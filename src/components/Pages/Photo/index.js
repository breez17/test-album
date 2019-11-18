import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Gallery from 'react-grid-gallery';
import Button from "../../UI/Button/Button";

/*Stylesheet*/

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Photo.css'
import {photosActions} from "../../../data/actions";


class Index extends Component {
    state = {
        images: []
    };

    componentDidMount() {
        const {dispatch, match} = this.props;
        dispatch(photosActions.getPhotos(match.params.albumId))
    }


    render() {
        const {photos} = this.props;
        const logOut = () => {
          localStorage.clear();
        };

        return (
            <div className="wrapper-photos">
                <Gallery images={photos}/>
                {document.getElementById('example-0')}
                <Link to="/home"><Button type="custom" onClick={logOut}>logout</Button></Link>
            </div>
        );

    }
}

const mapStateToProps = ({photosState}) => {
    return {
        photos: photosState.photos,
        loading: photosState.loading
    }

};

export default withRouter(connect(mapStateToProps)(Index));