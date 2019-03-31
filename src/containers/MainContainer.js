import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import Card from '../components/Card';

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.doSomething();
  }

  render() {
    const { data, test } = this.props;
    const defaultData = [{ text: 1 }, { text: 2 }];
    return (
      <View>
        <Text>{test}</Text>
        <FlatList data={data || defaultData} renderItem={({ _item }) => <Card />} />
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

MainContainer.propTypes = {
  test: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  doSomething: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
