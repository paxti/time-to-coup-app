import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import Card from '../components/Card';

import { getCards } from '../../data/helper';

const CardsPresentation = () => {
  const cards = getCards();
  return (
    <FlatList
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
      data={cards}
      keyExtractor={(item, _index) => item.name}
      renderItem={({ item }) => <Card name={item.name} source={item.source} />}
    />
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

CardsPresentation.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsPresentation);
