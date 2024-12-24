import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import {View, Button, StyleSheet} from 'react-native';
import React from 'react';

export default function RepeatAnim() {
  const offset = useSharedValue<number>(0);

  const style = useAnimatedStyle(() => ({,
    transform: [{translateX: offset.value}],
  }));

  const TIME = 250;
  const OFFSET = 40;
  const DELAY = 400;


  const handlePress = () => {
    offset.value = withDelay( DELAY, withSequence(
      withTiming(-OFFSET, {duration: TIME / 2}),

      withRepeat(withTiming(OFFSET, {duration: TIME}), 5, true),

      withTiming(0, {duration: TIME / 2}),
    )
  )
  };

  const reset = () => {
    offset.value = 0;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <View style={{gap: 10}}>
        <Button title="shake" onPress={handlePress} />
        <Button title="reset" onPress={reset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    margin: 50,
    borderRadius: 15,
    backgroundColor: '#b58df1',
  },
});
