import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} porps - Component props specific to this setup
 * @param {object} atate - initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containng noides(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = shallow(<App />);
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = shallow(<App />);
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = shallow(<App />);
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
});

test('renders error text display', () => {
  const wrapper = shallow(<App />);
  const counterDisplay = findByTestAttr(wrapper, 'error-text');
  const countError = wrapper.state('countError');
  if (countError) {
    expect(counterDisplay.length);
  }
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking on the button affect increments', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});
