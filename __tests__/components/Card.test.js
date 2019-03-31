import React from 'react';
import { Image } from 'react-native';
import { shallow } from 'enzyme';
import * as helper from '../../data/helper';

import Card from '../../src/components/Card';

describe('Card Component', () => {
  let testObject;
  let getImageMock;

  beforeEach(() => {
    getImageMock = jest.fn();
    helper.getImage = getImageMock;
    testObject = shallow(<Card name="" source="" />);
  });

  it('should be a component', () => {
    expect(testObject).toBeDefined();
  });

  it('should display image', () => {
    expect(testObject.find(Image).length).toEqual(1);
  });

  it('should use source from props to load image', () => {
    const item = { name: 'someName', source: 'someSource' };
    testObject.setProps({ name: item.name, source: item.source });
    expect(getImageMock).toHaveBeenCalledWith(item.source);
  });
});
