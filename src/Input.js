import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
    render() {
        const contents = this.props.success ? null : (
            <form className='form-inline'>
                <input
                    data-test='input-box'
                    id='wordguess'
                    type='text'
                    placeholder='enter guess'
                />
                />
                <button data-test='submit-button' type='submit'>
                    Submit
                </button>
            </form>
        );
        return (
            <div data-test='component-input'>
                <button>Button </button>
                <h1>Input Component</h1>
                {contents}
            </div>
        );
    }
}

const mapStateToProps = ({ success }) => {
    return { success };
};

export default connect(mapStateToProps)(Input);
