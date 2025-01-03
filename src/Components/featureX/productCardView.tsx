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
import IcSaved from '../../assets/svgIcons/IcSaved';

type Props = {
  title: string;
  imageSrc: ImageSourcePropType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  isSaved?: boolean;
  rating?: number;
  price?: number;
  offPrice?: number;
  discount?: number;
};

const ProductCardView = ({title, imageSrc, onPress, isSaved}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* Discount Badge */}
      {isSaved && (
        <View style={styles.discountBadge}>
          <IcSaved width={24} height={24} />
        </View>
      )}

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSrc} resizeMode={'cover'} />
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        {/* Title and Rating */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title || 'Title text'}</Text>
          <Text style={styles.rating}>{'4.5 ★'}</Text>
        </View>

        {/* Price and Discount */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{'$63'}</Text>
          <View style={styles.discountContainer}>
            <Text style={styles.offPrice}>{'$56'}</Text>
            <Text style={styles.discount}>{'(34% OFF)'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 170,
    height: 230,
    borderWidth: 1,
    borderColor: Color.borderColor,
    marginBottom: 15,
    borderRadius: 8,
  },
  discountBadge: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 0,
    right: 5,
    margin: 10,
    zIndex: 1,
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  image: {
    width: 150,
    height: 200,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: TextColor.primaryTextColor,
    fontFamily: Fonts.Gotham,
    fontSize: FontSize.S,
    flex: 1,
  },
  rating: {
    color: TextColor.secondaryTextColor,
    fontFamily: Fonts.TensoreFont,
    fontSize: FontSize.S,
    marginLeft: 8,
  },
  priceContainer: {
    flexDirection: 'column',
  },
  discountContainer: {
    flexDirection: 'row',
  },
  price: {
    color: TextColor.primaryTextColor,
    fontFamily: Fonts.Gotham,
    fontSize: FontSize.M,
  },
  offPrice: {
    color: TextColor.secondaryTextColor,
    fontSize: FontSize.S,
    textDecorationLine: 'line-through',
  },
  discount: {
    color: Color.primaryColor,
    fontSize: FontSize.S,
    marginLeft: 10,
  },
});
