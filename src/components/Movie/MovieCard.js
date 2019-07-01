import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StarRating from '../StarRating';

const MovieCard = ({ viewType, movie }) => {
    return (
        <div className={`movie-card ${viewType}`}>
            <div className={`movie-card card ${viewType} ${movie.additionalRating || ''}`}>
                <img className="card-img-top" src={movie.imageUrl} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{movie.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
                    <p className="text-justify" style={{fontSize: '14px'}}>{movie.description}</p>
                </div>
                <div className="card-footer">
                    <div className="clearfix">
                        <div className="float-left mt-1">
                            <StarRating rating={movie.rating} />
                        </div>
                        <div className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.defaultProps = {
    viewType: 'threeRow'
};

MovieCard.propTypes = {
    movie: PropTypes.object,
    viewType: PropTypes.string
};

export default connect((state) => ({ viewType: state.viewType }))(MovieCard);