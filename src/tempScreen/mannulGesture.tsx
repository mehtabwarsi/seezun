import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

const MannulGesture = () => {
  const tap = Gesture.Tap().numberOfTaps(3).onStart(() => {
    console.log('tap');
  });
  return (
    <GestureDetector gesture={tap}>
      <FunctionalComponent>
        <View style={styles.box} />
      </FunctionalComponent>
    </GestureDetector>
  );
};

function FunctionalComponent(props) {
  return <View collapsable={false}>{props.children}</View>;
}
export default MannulGesture;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
});
