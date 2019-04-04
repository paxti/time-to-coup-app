import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Card from '../components/Card';

import { getCards } from '../../data/helper';

const CardsPresentation = () => {
  const cards = getCards();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        style={{
          flex: 1,
          backgroundColor: 'white'
        }}
        data={cards}
        keyExtractor={(item, _index) => item.name}
        renderItem={({ item }) => <Card card={item} />}
      />
    </SafeAreaView>
  );
};

export default CardsPresentation;
