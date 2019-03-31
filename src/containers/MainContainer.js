import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import Card from '../components/Card';

import { getCards } from '../../data/helper';

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.doSomething();
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { data, test } = this.props;
    const cards = getCards();

    return (
      <View>
        <FlatList
          data={cards}
          keyExtractor={(item, _index) => item.name}
          renderItem={({ item }) => <Card name={item.name} source={item.source} />}
        />
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
