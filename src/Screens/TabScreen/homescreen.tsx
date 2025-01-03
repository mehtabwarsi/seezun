import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color, TextColor} from '../../Theme/color';
import Logo from '../../assets/svgIcons/logo';
import IcBell from '../../assets/svgIcons/IcBell';
import IcSaved from '../../assets/svgIcons/IcSaved';
import IcCart from '../../assets/svgIcons/IcCart';
import {Fonts, FontSize} from '../../Theme/fonts';
import CatogoryCardView from '../../Components/featureX/catogoryCardView';
import {data} from '../../tempData';
import ProductCardView from '../../Components/featureX/productCardView';
import FreshFromToday from '../../Components/featureX/homeScreenComponets/freshFromToday';
import VideoPlay from '../../Components/featureX/homeScreenComponets/VideoPlay';
import {HttpMethod} from '../../constant';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Config} from '../../config';

const HomeScreen = () => {
  const [categoryData, setCategoryData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle={'light-content'} backgroundColor={'white'} />
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logo}>
          <Logo width={125} height={40} />
        </View>

        {/* Header Icons */}
        <View style={styles.logoHeaderContainer}>
          <View style={styles.logoHeader}>
            <TouchableOpacity>
              <IcCart height={30} width={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <IcBell height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <IcSaved height={24} width={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Poster Image */}
        <Image
          style={styles.posterImageStyle}
          source={require('../../assets/images/redSareegirl.jpg')}
          resizeMode="contain"
        />

        {/* Text Area */}
        <View style={styles.posterTextArea}>
          <View style={styles.textArea}>
            <Text style={styles.posterText}>Rent.</Text>
            <Text style={styles.posterText}>Buy.</Text>
            <Text style={styles.posterText}>Sell.</Text>
          </View>

          <View style={styles.columnContainer}>
            <Text style={styles.seizeText}>Seize the product</Text>
            <TouchableOpacity style={styles.shopNowButtonStyle}>
              <Text style={styles.shopNowText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <View style={styles.sectionDivider} />
          </View>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={data}
            columnWrapperStyle={styles.categoryListWrapper}
            renderItem={({item}) => (
              <CatogoryCardView
                title={item.title}
                imageSrc={{uri: item.image}}
                onPress={() => console.log('Move to category')}
              />
            )}
          />

          {/* View All */}
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View more</Text>
          </TouchableOpacity>

          {/* Continue Browsing */}
          <View style={styles.browsingContainer}>
            <Text style={styles.browsingTitle}>
              Continue Browsing These Products
            </Text>
          </View>

          <View style={styles.productListContainer}>
            <FlatList
              horizontal
              data={data}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalProductList}
              renderItem={({item}) => (
                <ProductCardView
                  title={item.title}
                  imageSrc={{uri: item.image}}
                  isSaved
                />
              )}
            />
          </View>

          {/* Top Rented */}
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Top Rented</Text>
              <View style={styles.sectionDivider} />
            </View>
            <FlatList
              horizontal
              data={data}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <ProductCardView
                  title={item.title}
                  imageSrc={{uri: item.image}}
                  onPress={() => console.log('Top rented')}
                />
              )}
            />
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View more</Text>
            </TouchableOpacity>
          </View>

          {/* box show */}

          <View
            style={{
              width: '100%',
              height: 170,
              backgroundColor: Color.tertiaryColor,
              marginTop: 40,
              marginBottom: 40,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: Color.tertiaryColor,
                width: '60%',
                height: 170,
              }}>
              <View
                style={{
                  margin: 24,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: Fonts.Gotham,
                    color: TextColor.primaryTextColor,
                  }}>
                  Have clothes lying around? Why not put them up for sale
                </Text>
                <TouchableOpacity style={{marginTop: 20}}>
                  <Text
                    style={{
                      fontFamily: Fonts.TensoreFont,
                      fontSize: 18,
                      color: Color.primaryColor,
                    }}>
                    {' '}
                    Sell now{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Image
              style={{
                width: '40%',
                height: 170,
              }}
              source={require('../../assets/pngs/clothsslider.png')}
              resizeMode={'contain'}
            />
          </View>
          {/* image background how to wear */}
          <View
            style={{
              backgroundColor: Color.tertiaryColor,
              width: Dimensions.get('screen').width,
              height: 500,
              marginBottom: 20,
            }}>
            <VideoPlay />
          </View>
          {/* fresh from today  */}

          <View>
            <FlatList
              data={data}
              scrollEnabled={false}
              numColumns={3}
              renderItem={({item}) => <FreshFromToday image={item.image} />}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  logo: {
    height: 145,
    width: Dimensions.get('window').width,
    backgroundColor: Color.tertiaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ABABAB',
    borderWidth: 0.5,
  },
  logoHeaderContainer: {
    backgroundColor: Color.tertiaryColor,
  },
  logoHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 17,
    margin: 15,
  },
  posterImageStyle: {
    width: Dimensions.get('screen').width,
    height: 500,
    marginTop: -40,
  },
  posterTextArea: {
    width: Dimensions.get('window').width,
    height: 170,
    backgroundColor: Color.primaryColor,
    marginTop: -40,
  },
  textArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 20,
  },
  posterText: {
    fontSize: 35,
    fontFamily: Fonts.TensoreFont,
    color: Color.white,
  },
  columnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  seizeText: {
    fontSize: 16,
    color: Color.white,
    fontFamily: Fonts.Gotham,
    marginBottom: 10,
  },
  shopNowButtonStyle: {
    backgroundColor: Color.white,
    paddingHorizontal: 40,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopNowText: {
    fontSize: 18,
    color: 'black',
    fontFamily: Fonts.TensoreFont,
  },
  sectionHeader: {
    marginVertical: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: FontSize.L,
    fontFamily: Fonts.TensoreFont,
    color: TextColor.primaryTextColor,
  },
  sectionDivider: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    width: '30%',
  },
  categoryListWrapper: {
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  viewAllButton: {
    borderColor: Color.primaryColor,
    borderWidth: 1,
    alignSelf: 'center',
  },
  viewAllText: {
    textAlign: 'center',
    fontSize: FontSize.M,
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontFamily: Fonts.TensoreFont,
  },
  browsingContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  browsingTitle: {
    fontSize: FontSize.L,
    fontFamily: Fonts.TensoreFont,
  },
  productListContainer: {
    backgroundColor: Color.tertiaryColor,
    marginTop: 20,
  },
  horizontalProductList: {
    marginLeft: 20,
  },
});
