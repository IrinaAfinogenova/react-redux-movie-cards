import MovieService from '../services/MovieService';
import { FETCH_MOVIES, FECTH_ADDITIONAL_INFO,  CHANGE_VIEW_TYPE } from './actionsType';

export const fetchMovies = () => ({
    type: FETCH_MOVIES,
    payload: MovieService.getMovies()
});

export const fetchAdditionalInfo = () => ({
    type: FECTH_ADDITIONAL_INFO,
    payload: MovieService.getAdditionalInfo()
});

export const changeViewType = (payload) => ({
    type: CHANGE_VIEW_TYPE,
    payload
});
