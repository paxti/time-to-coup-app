import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import { getImage } from '../../data/helper';

const Card = ({ name, source }) => (
  <View style={{ width: '100%' }}>
    <Image
      style={{ width: '100%', height: Dimensions.get('window').width * 0.72 }}
      resizeMode="contain"
      accessibilityLabel={name}
      source={getImage(source)}
    />
  </View>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

export default Card;
