import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.3;

type CardProps = {
  onSwipe: () => void;
  children: React.ReactNode;
};

const CardSwiper: React.FC<CardProps> = ({ onSwipe, children }) => {

  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${(translateX.value / SCREEN_WIDTH) * 15}deg` }
    ]
  }))


  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    translateX.value = event.nativeEvent.translationX
    translateY.value = event.nativeEvent.translationY
  }

  const onHandlerStateChange = (event: PanGestureHandlerGestureEvent) => {
    if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
      // Animate out
      translateX.value = withSpring(
        translateX.value > 0 ? SCREEN_WIDTH : -SCREEN_WIDTH,
        { stiffness: 200 },
        () => runOnJS(onSwipe)()
      );
    } else {
      // Reset position
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    }
  };


  return (
    <PanGestureHandler
    onGestureEvent={onGestureEvent}
   onEnded={onHandlerStateChange}>
    <Animated.View style={[styles.card, animatedStyle]}>
      {children}
    </Animated.View>
  </PanGestureHandler>
  );
};

export default CardSwiper;

const styles = StyleSheet.create({


  card: {
    width: '80%',
    height: '50%',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
