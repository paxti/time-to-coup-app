import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import Card from '../components/Card';

import { getCards } from '../../data/helper';

class SessionPresentation extends React.Component {
  componentDidMount() {
    this.props.doSomething();
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { data, test } = this.props;
    const cards = getCards();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Host session</Text>
            <Text>Join session</Text>
        </View>
    );
  }
}

const mapStateToProps = state => {
  const { test } = state;
  return {
    test
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doSomething: () => {
      dispatch({
        type: types.DO_SOMETHING
      });
    }
  };
};

SessionPresentation.propTypes = {
  test: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  doSomething: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionPresentation);
