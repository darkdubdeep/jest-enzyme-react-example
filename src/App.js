import React, { Component } from 'react';
import './index.css';

class App extends Component {
  state = {
    counter: 0,
    countError: false
  };
  render() {
    return (
      <div data-test='component-app'>
        <h1>hello</h1>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
        </h1>
        {this.state.countError && (
          <h1 className='error-text' data-test='error-text'>
            Error
          </h1>
        )}
        <button
          data-test='increment-button'
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
              countError: false
            })
          }
        >
          Increment Button
        </button>
        <button
          data-test='decrement-button'
          onClick={() => {
            if (this.state.counter === 0) {
              this.setState({
                countError: true
              });
            } else {
              this.setState({
                counter: this.state.counter - 1
              });
            }
          }}
        >
          decrement button
        </button>
      </div>
    );
  }
}

export default App;
