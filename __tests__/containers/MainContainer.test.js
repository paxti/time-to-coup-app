import React from 'react';
import { View, FlatList } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import MainContainer from '../../src/containers/MainContainer';
import Card from '../../src/components/Card';

describe('Main Container', () => {
  let store;
  let testObject;

  beforeEach(() => {
    const mockStore = configureStore([]);
    store = mockStore({});
    testObject = shallow(<MainContainer />, { context: { store } }).dive();
  });

  it('should have a View', () => {
    expect(testObject.find(View).length).toBe(1);
  });

  it('should have Flat list', () => {
    expect(testObject.find(FlatList).length).toBe(1);
  });

  describe('Flat List', () => {
    it('should have data by default', () => {
      expect(testObject.find(FlatList).props().data.length).not.toEqual(0);
    });

    it('should have renderItem props', () => {
      expect(testObject.find(FlatList).props().renderItem).not.toBeUndefined();
    });

    it('should use Card as renderItem', () => {
      expect(
        testObject
          .find(FlatList)
          .props()
          .renderItem({ item: {} })
      ).toEqual(<Card />);
    });
  });
});
