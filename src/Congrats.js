import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for cngratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Render component (or null if success  prop is empthe)
 */

const Congrats = props => {
    if (props.success) {
        return (
            <div data-test='component-congrats'>
                <span data-test='congrats-message'>congrats!!!!!!!!</span>
            </div>
        );
    } else {
        return <div data-test='component-congrats' />;
    }
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;
