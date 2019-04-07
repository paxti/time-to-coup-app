/* eslint-disable no-shadow */
/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import App from '../src/containers/App';
import ActiveSessionContainer from '../src/containers/ActiveSessionContainer';

jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest.fn().mockReturnValue('<div/>'),
    createBottomTabNavigator: jest.fn()
  };
});

describe('App', () => {
  let store;
  let testObject;

  it('should render ActiveSessionContainer if session is active', () => {
    const mockStore = configureStore([]);
    store = mockStore({ sessionActive: true });
    testObject = shallow(<App />, { context: { store } }).dive();
    expect(testObject.find(ActiveSessionContainer).length).toEqual(1);
  });

  it('should render InactiveSessionContainer if session is not active', () => {
    const mockStore = configureStore([]);
    store = mockStore({ sessionActive: false });
    testObject = shallow(<App />, { context: { store } }).dive();
    expect(testObject.find(ActiveSessionContainer).length).toEqual(0);
  });
});
