import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({ imgSource }) => (
  <View>
    <Image source={imgSource} />
  </View>
);

Card.propTypes = {
  imgSource: PropTypes.string
};

export default Card;
