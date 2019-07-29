import { FETCH_MOVIE, FETCH_MOVIES, SEARCH_MOVIE, LOADING } from './types';
import axios from 'axios';

import {APIKey} from '../APIKey';

export const searchMovie = text => dispatch => {
    dispatch ({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = text => dispatch => {
    // axios.get(`http://www.omdbapi.com/?apikey=4495d8f7&s=${text}`)
    .then(response => dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
    }))
    .catch(err => console.log(err))
};

export const fetchMovie = id => dispatch => {
    // axios.get(`http://www.omdbapi.com/?apikey=495d8f7&i=${id}`)
    .then(response =>
        dispatch({
            type: FETCH_MOVIE,
            payload: response.data
        })) 
        .catch(err => console.log(err))
};

export const setLoading = () => {
    return {
        type: LOADING
    };
};