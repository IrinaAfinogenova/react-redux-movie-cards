import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeViewType } from '../actions';
import TypeButton from './TypeButton';

const DisplayTypeBlock = ({ changeViewType, viewType }) => {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <TypeButton
                primary={viewType === 'threeRow'}
                icon="three-row"
                onClick={() => changeViewType('threeRow')}
            />
            <TypeButton
                primary={viewType === 'twoRow'}
                icon="two-row"
                onClick={() => changeViewType('twoRow')}
            />
            <TypeButton
                primary={viewType === 'column'}
                icon="column"
                onClick={() => changeViewType('column')}
            />
        </div>
    );
};

DisplayTypeBlock.defaultProps = {
    viewType: 'threeRow' 
};

DisplayTypeBlock.propTypes = {
    viewType: PropTypes.string,
    changeViewType: PropTypes.func.isRequired
};

export default connect((state) => ({ viewType: state.viewType }), { changeViewType })(DisplayTypeBlock);
