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
import React from 'react';
import {Color, TextColor} from '../../Theme/color';
import Logo from '../../assets/svgIcons/logo';

import IcBell from '../../assets/svgIcons/IcBell';
import IcSaved from '../../assets/svgIcons/IcSaved';
import IcCart from '../../assets/svgIcons/IcCart';
import {Fonts, FontSize} from '../../Theme/fonts';
import CatogoryCardView from '../../Components/featureX/catogoryCardView';
import {data} from '../../tempData';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar barStyle={'light-content'} backgroundColor={'white'} />
      <View style={styles.container}>
        {/* logo */}
        <View style={styles.logo}>
          <Logo width={125} height={40} />
        </View>

        {/* header logo */}
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

        {/* images area */}
        <Image
          style={styles.postorImageStyle}
          source={require('../../assets/images/redSareegirl.jpg')}
          resizeMode="contain"
        />

        {/* text area */}
        <View style={styles.postorTextArea}>
          <View style={styles.textArea}>
            <Text style={styles.postorText}>Rent.</Text>
            <Text style={styles.postorText}>Buy.</Text>
            <Text style={styles.postorText}>Sell.</Text>
          </View>

          <View style={styles.columnContainer}>
            <Text style={styles.seizeText}>Seize the product</Text>
            <TouchableOpacity style={styles.shopNowButtonStyle}>
              <Text style={styles.shopNowText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* end text area */}

        {/* cattogory */}
        <View>
          <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: FontSize.L,
                fontFamily: Fonts.TensoreFont,
                color: TextColor.primaryTextColor,
              }}>
              Categories
            </Text>
            <View
              style={{
                marginTop: 5,
                borderWidth: 1,
                borderColor: Color.primaryColor,
                width: '30%',
              }}
            />
          </View>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data}
            columnWrapperStyle={{
              justifyContent: 'center',
              gap: 20,
              marginTop: 20,
            }}
            renderItem={({item}) => (
              <CatogoryCardView
                title={item.title}
                imageSrc={{uri: item.image}}
                onPress={() => console.log('move to catogey')}
              />
            )}
          />

          {/* View ALl */}
          <TouchableOpacity
            style={{
              borderColor: Color.primaryColor,
              borderWidth: 1,
              width: 'auto',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: FontSize.M,
                paddingHorizontal: 10,
                paddingVertical: 2,
                fontFamily: Fonts.TensoreFont,
              }}>
              View more
            </Text>
          </TouchableOpacity>
          {/* end view all */}

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
  postorImageStyle: {
    width: Dimensions.get('screen').width,
    height: 500,
    marginTop: -40,
  },
  postorTextArea: {
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
    width: Dimensions.get('window').width - 1,
    gap: 20,
  },
  postorText: {
    fontSize: 35,
    fontFamily: Fonts.TensoreFont,
    color: Color.white,
  },
  columnContainer: {
    flexDirection: 'column',
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
  shopNowText: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    fontFamily: Fonts.TensoreFont,
    alignSelf: 'center',
  },
  shopNowButtonStyle: {
    backgroundColor: Color.white,
    paddingHorizontal: 40,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
