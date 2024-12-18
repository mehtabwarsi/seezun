import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

export default function Anim1() {
  const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(translation.x, {
          toValue: 100,
          useNativeDriver: true,
        }),
        Animated.spring(translation.y, {
          toValue: -100,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
    
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          transform: [
            {translateY: translation.y}, 
            {translateX: translation.x}
          ],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
