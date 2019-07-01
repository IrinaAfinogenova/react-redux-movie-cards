import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeViewType } from '../actions';
import TypeButton from './TypeButton';

const DisplayTypeBlock = ({ changeViewType, viewType }) => {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <TypeButton
                primary={viewType === 'threeCard'}
                icon="first-type"
                onClick={() => changeViewType('threeCard')}
            />
            <TypeButton
                primary={viewType === 'twoCard'}
                icon="two-type"
                onClick={() => changeViewType('twoCard')}
            />
            <TypeButton
                primary={viewType === 'oneCard'}
                icon="one-type"
                onClick={() => changeViewType('oneCard')}
            />
        </div>
    );
};

DisplayTypeBlock.defaultProps = {
    viewType: 'threeCard' 
};

DisplayTypeBlock.propTypes = {
    viewType: PropTypes.string,
    changeViewType: PropTypes.func.isRequired
};

export default connect((state) => ({ viewType: state.viewType }), { changeViewType  })(DisplayTypeBlock);
