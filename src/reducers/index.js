import { FETCH_MOVIES, CHANGE_VIEW_TYPE, FECTH_ADDITIONAL_INFO } from '../actions/actionsType';

const initialState = {
    movies: {},
    viewType: 'oneCard'
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
    case FETCH_MOVIES:
        return {
            viewType: state.viewType,
            movies: payload
        };
    case FECTH_ADDITIONAL_INFO:      
        return {
            viewType: state.viewType,
            movies: payload.reduce((acc, item) => {
                return Object.assign(acc, {[item.movieId]: Object.assign(state.movies[item.movieId], { addRating: item.rating })});
            }, state.movies) 
        };
    case CHANGE_VIEW_TYPE:
        return {
            movies: state.movies,
            viewType: payload
        };
    default:
        return state;
    }
};
