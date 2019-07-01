import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies, fetchAdditionalInfo } from '../../actions';
import MovieList from './MovieList';

const mapStateToProps = (state) => ({
    movies: Object.keys(state.movies).map((id) => state.movies[`${id}`])
});

class Movies extends Component {

    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchAdditionalInfo();
    }

    render() {
        return (
            <div className="container justify-content-center">
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.props.movies} />
                    </div>
                </div>
            </div>
        );
    }
}

Movies.defaultProps = {
    movies: []
};

Movies.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    fetchAdditionalInfo: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, { fetchMovies, fetchAdditionalInfo })(Movies);
