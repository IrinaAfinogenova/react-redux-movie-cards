import movies from './movies.json';
import additionalInfo from './additionalInfo.json';

const convertArrayToObject = (items) => items.reduce((acc={}, item) => { //TODO
    const newItem = {
        [`${item.id}`]: item
    };

    return Object.assign({}, acc, newItem);
}, {});

export default class MovieService { 
    static getMovies() {
        return movies ? convertArrayToObject(movies) : {};
    }

    static getAdditionalInfo() {
        return additionalInfo ? convertArrayToObject(additionalInfo) : {};
    }
}