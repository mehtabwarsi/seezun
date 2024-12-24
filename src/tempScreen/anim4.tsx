import {Animated, ScrollView, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';

const Anim4 = () => {
  const scrolling = useRef(new Animated.Value(0)).current;

  const translation = scrolling.interpolate({
    inputRange: [100, 130], 
    outputRange: [-100, 0], 
    extrapolate: 'clamp', 
  });

  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {transform: [{translateY: translation}]}, 
        ]}
      />

      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          {useNativeDriver: true}, 
        )}
        scrollEventThrottle={16} 
        style={styles.scrollView}>
        <View style={styles.content} />
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'tomato',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    height: 1000,
  },
});

export default Anim4;
