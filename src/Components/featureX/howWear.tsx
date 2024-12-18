import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {ImageBackgroundProps} from 'react-native';
import {Color} from '../../Theme/color';
import { Fonts, FontSize } from '../../Theme/fonts';

type props = {
  title: string;
  imageSrc: ImageBackgroundProps;
  style?: StyleProp<ViewStyle>;
};
const HowToWear = ({title, imageSrc, style}: props) => {
  return (
    <View>
      <ImageBackground
        style={{
          width: 170,
          height: 120,
       
        }}
        source={imageSrc}>
        <View
          style={{
            width: 170,
            height: 120,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: Color.white,
              fontFamily:Fonts.TensoreFont,
              fontSize:FontSize.M
            }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HowToWear;

const styles = StyleSheet.create({});
