import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const CircleAnimation = () => {
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const r = useSharedValue<number>(10);

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  const handlePress = () => {
    r.value += 10;
  };

  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <AnimatedCircle
          cx="50%"
          cy="50%"
          fill="#b58df1"
          animatedProps={animatedProps}
        />
      </Svg>
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};

export default CircleAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  svg: {
    height: 250,
    width: '100%',
  },
});
