import {
  _ScrollView,
  Pressable,
  PressableProps,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  AnimatedProps,
  FadeInDown,
  FadeInLeft,
  FadeOutLeft,
  FadeOutUp,
  interpolateColor,
  LinearTransition,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

/**
 * @constant
 */
const SPACING = 8;
const BUTTON_HEIGHT = 42;
const DOT_CONTAINER = 24;
const DOT_SIZE = DOT_CONTAINER / 3;

// color value

const activeDot = '#fff';
const inactiveDot = '#aaa';

const LAYOUT_TRANSITION = LinearTransition.springify()
  .damping(80)
  .stiffness(200);

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
// buttons
function Button({children, style, ...rest}: AnimatedProps<PressableProps>) {
  return (
    <AnimatedPressable
      style={[
        {
          height: BUTTON_HEIGHT,
          borderRadius: BUTTON_HEIGHT / 2,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: SPACING * 2,
        },
        style,
      ]}
      entering={FadeInLeft.springify().damping(80).stiffness(200)}
      exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
      layout={LAYOUT_TRANSITION}
      {...rest}>
      {children}
    </AnimatedPressable>
  );
}

// Dot
function Dot({
  index,
  animation,
}: {
  index: number;
  animation: SharedValue<number>;
}) {
  const AnimStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animation.value,
        [index - 1, index, index + 1],
        [inactiveDot, activeDot, activeDot],
      ),
    };
  });
  return (
    <View
      style={{
        width: DOT_CONTAINER,
        height: DOT_CONTAINER,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={[
          AnimStyles,
          {
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: DOT_SIZE,
          },
        ]}
      />
    </View>
  );
}

// pagination indicator
function PaginationIndicator({animation}: {animation: SharedValue<number>}) {
  const animStyle = useAnimatedStyle(() => {
    return {
      width: DOT_CONTAINER + DOT_CONTAINER * animation.value,
    };
  });
  return (
    <Animated.View
      style={[

        {
          backgroundColor: '#29BE56',
          height: DOT_CONTAINER,
          width: DOT_CONTAINER,
          borderRadius: DOT_CONTAINER,
          position: 'absolute',
          left: 0,
          right: 0,
        },
        animStyle
      ]}
    />
  );
}

// pagination
export function Pagination({
  selectedIndex,
  total,
}: {
  selectedIndex: number;
  total: number;
}) {
  
  const animation = useDerivedValue(() => {
    return withSpring(selectedIndex, {
      damping: 80,
      stiffness: 200,
    });
  });

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <PaginationIndicator animation={animation} />
        {[...Array(total).keys()].map(i => (
          <Dot key={`dot-${i}`} index={i} animation={animation} />
        ))}
      </View>
    </View>
  );
}

type Props = {
  total: number;
  selectedIndex: number;
  onIndexChange: (index: number) => void;
};

const OnBoarding = ({total, selectedIndex, onIndexChange}: Props) => {
  return (
    <View style={{padding: SPACING, gap: SPACING * 2}}>
      <Pagination total={total} selectedIndex={selectedIndex} />
      <View
        style={{
          flexDirection: 'row',
          gap: SPACING,
        }}>
        {selectedIndex > 0 && (
          <Button
            style={{
              backgroundColor: '#ddd',
            }}
            onPress={() => {
              onIndexChange(selectedIndex - 1);
            }}>
            <Text>Back</Text>
          </Button>
        )}

        <Button
          style={{
            backgroundColor: '#036BFB',
            flex: 1,
          }}
          onPress={() => {
            if (selectedIndex >= total -1) {
              return;
            }
            onIndexChange(selectedIndex + 1);
          }}>
          {selectedIndex === total -1 ? (
            <Animated.Text
              key={'finish'}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutUp.springify().damping(80).stiffness(200)}
              style={{color: '#fff'}}>
              Finish
            </Animated.Text>
          ) : (
            <Animated.Text
              key={'continue'}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutUp.springify().damping(80).stiffness(200)}
              layout={LAYOUT_TRANSITION}
              style={{color: '#fff'}}>
              Continue
            </Animated.Text>
          )}
        </Button>
      </View>
    </View>
  );
};

export default OnBoarding;
