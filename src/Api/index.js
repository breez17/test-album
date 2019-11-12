import axios from 'axios';

export const getUsers = () =>
    axios.get(`${process.env.REACT_APP_API_URL}/users`)
        .then(response => response.data);

export const getAlbums = (userId) =>
    axios.get(`${process.env.REACT_APP_API_URL}/albums?userId=${userId}`)
        .then(response => response.data);

export const getPhotos = (albumId) =>
    axios.get(`${process.env.REACT_APP_API_URL}/photos?albumId=${albumId}`)
        .then(response => response.data);
