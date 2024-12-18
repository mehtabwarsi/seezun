import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

export default function Anim2() {
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(125,[
      Animated.timing(firstOpacity,{
        toValue:1,
        useNativeDriver:true
      }),
      Animated.timing(secondOpacity,{
        toValue:1,
        useNativeDriver:true
      }),
      Animated.timing(thirdOpacity,{
        toValue:1,
        useNativeDriver:true
      })
    ]).start()
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 20,
      }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: firstOpacity,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: secondOpacity,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: thirdOpacity,
        }}
      />
    </View>
  );
}
