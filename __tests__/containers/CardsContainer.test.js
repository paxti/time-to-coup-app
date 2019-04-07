import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { shallow } from 'enzyme';

import CardsContainer from '../../src/containers/CardsContainer';
import Card from '../../src/components/Card';

describe('Cards Container', () => {
  let testObject;

  beforeEach(() => {
    testObject = shallow(<CardsContainer />);
  });

  it('should have a SafeAreaView', () => {
    expect(testObject.find(SafeAreaView).length).toBe(1);
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
          .renderItem({ item: { name: '', source: '', simpleAction: '' } })
      ).toEqual(<Card card={{ name: '', source: '', simpleAction: '' }} />);
    });
  });
});
