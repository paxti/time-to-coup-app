import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import { getImage } from '../../data/helper';

const Card = ({ card }) => {
  const { name, simpleAction, counteraction, source } = card;
  return (
    <View style={{ width: '100%' }}>
      <Text>{name}</Text>
      <Text>{simpleAction}</Text>
      {counteraction && <Text>{counteraction}</Text>}
      <Image
        style={{ width: '100%', height: Dimensions.get('window').width * 0.72 }}
        resizeMode="contain"
        accessibilityLabel={name}
        source={getImage(source)}
      />
    </View>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    simpleAction: PropTypes.string.isRequired,
    counteraction: PropTypes.string
  })
};

export default Card;
