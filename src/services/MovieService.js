import movies from './movies.json';
import additionalInfo from './additionalInfo.json';

const convertArrayToObject = (items) => items.reduce(
    (acc, item) => ({ ...acc, [`${item.id}`]: item}),
    {}
);

export default class MovieService { 
    static getMovies() {
        return movies ? convertArrayToObject(movies) : {};
    }

    static getAdditionalInfo() {
        return additionalInfo ? additionalInfo : [];
    }
}