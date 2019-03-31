import React from 'react';
import { Image } from 'react-native';
import { shallow } from 'enzyme';

import Card from '../../src/components/Card';

describe('Card Component', () => {
  let testObject;

  beforeEach(() => {
    testObject = shallow(<Card />);
  });

  it('should be a component', () => {
    expect(testObject).toBeDefined();
  });

  it('should display image', () => {
    expect(testObject.find(Image).length).toEqual(1);
  });

  it('should use image source from props', () => {
    const imgSource = { url: 'some_image' };
    testObject.setProps({ imgSource });
    expect(testObject.find(Image).props().source).toEqual(imgSource);
  });
});
