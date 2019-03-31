import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import MainContainer from '../../src/containers/MainContainer';

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

    it('should use Text as renderItem', () => {
      expect(
        testObject
          .find(FlatList)
          .props()
          .renderItem({ item: {} })
      ).toEqual(<Text />);
    });

    it('should render data from JSON object', () => {
      const object = { item: { text: 1 } };
      expect(
        testObject
          .find(FlatList)
          .props()
          .renderItem(object)
      ).toEqual(<Text>{object.item.text}</Text>);
    });

    it('should render data from props JSON array', () => {
      const array = [{ text: 1 }, { text: 5 }, { text: 3 }, { text: 2 }];
      testObject = shallow(<MainContainer data={array} />, {
        context: { store }
      }).dive();
      expect(testObject.find(FlatList).props().data.length).toEqual(array.length);
    });

    it('should render data from props JSON array with 2 items', () => {
      const array = [{ text: 1 }, { text: 5 }];
      testObject = shallow(<MainContainer data={array} />, {
        context: { store }
      }).dive();
      expect(testObject.find(FlatList).props().data.length).toEqual(array.length);
    });
  });
});
