import React from 'react';

import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtills';

import Input from './Input';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();
};
describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without eror', () => {});
        test('renders innput box', () => {});
        test('renders submit button', () => {});
    });
    describe('word has  been guessed', () => {
        test('renders component without eror', () => {});
        test('does not renders innput box', () => {});
        test('does not renders submit button', () => {});
    });
});

describe('update state', () => {
    describe('update state', () => {});
});
