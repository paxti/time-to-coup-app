import React from 'react';
import { shallow, mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import { IS_SESSION_ACTIVE } from '../src/graphql/queries';
import App from '../src/containers/app';
import ActiveSessionContainer from '../src/containers/ActiveSessionContainer';

jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest.fn().mockReturnValue(() => <div />),
    createBottomTabNavigator: jest.fn()
  };
});

describe.skip('App', () => {
  let testObject;

  const mocks = [
    {
      request: {
        query: IS_SESSION_ACTIVE
      },
      result: {
        data: {
          sessionActive: true
        }
      }
    }
  ];

  it('should render ActiveSessionContainer if session is active', async () => {
    testObject = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    await new Promise(resolve => setTimeout(resolve, 0));
    expect(testObject.find(ActiveSessionContainer).length).toEqual(1);
  });

  it('should render InactiveSessionContainer if session is not active', () => {
    testObject = shallow(<App sessionActive={false} />);
    expect(testObject.find(ActiveSessionContainer).length).toEqual(0);
  });
});
