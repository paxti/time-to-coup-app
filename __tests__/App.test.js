/* eslint-disable no-shadow */
/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/containers/app';
import ActiveSessionContainer from '../src/containers/ActiveSessionContainer';

jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest.fn().mockReturnValue('<div/>'),
    createBottomTabNavigator: jest.fn()
  };
});

describe('App', () => {
  let testObject;

  it('should render ActiveSessionContainer if session is active', () => {
    testObject = shallow(<App sessionActive={true} />);
    expect(testObject.find(ActiveSessionContainer).length).toEqual(1);
  });

  it('should render InactiveSessionContainer if session is not active', () => {
    testObject = shallow(<App sessionActive={false} />);
    expect(testObject.find(ActiveSessionContainer).length).toEqual(0);
  });
});
