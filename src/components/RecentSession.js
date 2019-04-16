import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const RecentSession = ({ session }) => {
  const { name } = session;
  return <Text key={name}>{`name: ${name}`}</Text>;
};

RecentSession.propTypes = {
  session: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

export default RecentSession;
