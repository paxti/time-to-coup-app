import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import RecentSession from '../../src/components/RecentSession';

describe('RecentSession Component', () => {
  let testObject;

  it('should render Text component', () => {
    testObject = shallow(<RecentSession session={{ name: '' }} />);
    expect(testObject.type()).toBe(Text);
  });

  it('should render session name', () => {
    const sessionName = 'Session name';
    testObject = shallow(<RecentSession session={{ name: sessionName }} />);
    expect(testObject.shallow().text()).toEqual(`name: ${sessionName}`);
  });

  it('should use session name as a key', () => {
    const sessionName = 'Session name';
    testObject = shallow(<RecentSession session={{ name: sessionName }} />);
    expect(testObject.key()).toEqual(sessionName);
  });
});
