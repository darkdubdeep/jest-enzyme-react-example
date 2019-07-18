import React, { Component } from 'react';

/**
 * Functional react component for cngratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Render component (or null if success  prop is empthe)
 */

export default props => {
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
