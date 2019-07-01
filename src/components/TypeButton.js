import React from 'react';
import PropTypes from 'prop-types';

const TypeButton = ({ onClick, primary, icon }) => {
    return (
        <div
            className={`btn btn-outline-dark ${primary ? 'btn-primary' : 'btn-secondary'} ml-1`}
            onClick={onClick}
        >
            <svg width="45" height="45" fill={primary ? 'gold' : 'black'} className="icon">
                <use xlinkHref={`#${icon}`} />
            </svg>
        </div>
    );
};

TypeButton.defaultProps = {
    primary: false,
    icon: 'three-row'
};

TypeButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    primary: PropTypes.bool,
    icon: PropTypes.string
};

export default TypeButton;
