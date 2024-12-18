import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Anim3 = () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 200,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: translation.interpolate({
            inputRange: [0, 50, 100, 200],
            outputRange: ['blue', 'red', 'yellow', 'black'],
          }),
          transform: [
            {translateX: translation},
            {
              rotate: translation.interpolate({
                inputRange: [0, 200],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
          opacity: translation.interpolate({
            inputRange: [25, 50, 100],
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          }),
        }}
      />
    </View>
  );
};

export default Anim3;

const styles = StyleSheet.create({});
