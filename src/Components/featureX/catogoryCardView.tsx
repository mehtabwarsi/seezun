import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Color, TextColor} from '../../Theme/color';
import {Fonts, FontSize} from '../../Theme/fonts';

type props = {
  title: string;
  imageSrc: ImageSourcePropType;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const CatogoryCardView = ({title, imageSrc, onPress}: props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.conatiner}>
        <View style={styles.imagesContainer}>
          <Image style={styles.images} source={imageSrc} resizeMode={'cover'} />
        </View>
        <View style={styles.titleContiner}>
          <Text style={styles.title}>{title || 'title text'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CatogoryCardView;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    width: 170,
    height: 200,
    borderWidth: 1,
    borderColor: Color.borderColor,
    marginBottom: 15,
  },
  images: {
    width: 170,
    aspectRatio: 1,
  },
  imagesContainer: {},
  titleContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: TextColor.primaryTextColor,
    fontFamily: Fonts.TensoreFont,
    fontSize: FontSize.S,
  },
});
