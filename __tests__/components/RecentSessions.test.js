import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import RecentSessions from '../../src/components/RecentSessions';

describe('RecentSessions Component', () => {
  let testObject;

  it('should renader loading', () => {
    testObject = shallow(<RecentSessions loading={true} error={true} sessions={[]} />);
    expect(testObject.type()).toBe(Text);
    expect(testObject.shallow().text()).toEqual('Loading...');
  });

  it('should render error', () => {
    testObject = shallow(<RecentSessions loading={false} error={true} sessions={[]} />);
    expect(testObject.type()).toBe(Text);
    expect(testObject.shallow().text()).toEqual('Error :(');
  });

  it('should 1 session', () => {
    testObject = shallow(
      <RecentSessions loading={false} error={false} sessions={[{ name: 'name' }]} />
    );

    expect(testObject.type()).toBe(Text);
    expect(testObject.length).toEqual(1);
  });

  it('should render multiple sessions', () => {
    testObject = shallow(
      <RecentSessions
        loading={false}
        error={false}
        sessions={[{ name: 'name' }, { name: 'name 2' }]}
      />
    );
    expect(testObject.length).toEqual(2);
  });
});
