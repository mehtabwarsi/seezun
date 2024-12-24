import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardSwiper from './cardSwipper';

const Card = () => {
  const [cards, setCards] = useState<number[]>([1, 2, 3]);

  const handleSwipe = () => {
    setCards(prevCards => prevCards.slice(1));
  };
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        {cards.map((card, index) => (
          <CardSwiper key={index} onSwipe={handleSwipe}>
            <View style={styles.innerCard}>
              <Text style={styles.cardText}>Card {card}</Text>
            </View>
          </CardSwiper>
        ))}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Card;

const styles = StyleSheet.create({
  innerCard: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
