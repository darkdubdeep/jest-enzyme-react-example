import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
    render() {
        return (
            <div>
                <button>Button </button>
                <h1>Input Component</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(Input);
