import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Color} from '../../Theme/color';
import {Fonts, FontSize} from '../../Theme/fonts';
import {RootStackParamList} from '../../Navigation/index';

interface props {
  title?: string;
  subTitle?: string;
  nextScreen?: keyof RootStackParamList;
}
const SuccessMessage = ({title, subTitle, nextScreen}: props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(nextScreen);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, nextScreen]);

  return (
    <View style={styles.container}>
      <View style={styles.mainConinaer}>
        <View style={styles.topBar} />

        <View style={styles.mainContainerline}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.halfline} />
        </View>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <LottieView
            source={require('../../assets/lottie/Animation - 1734360674365.json')}
            style={{height: 100, width: 100}}
            autoPlay
            loop={true}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          rowGap: 10,
        }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default SuccessMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainConinaer: {
    height: 200,
    width: 100,
    borderWidth: 7,
    borderColor: '#DADBDC',
    borderRadius: 20,
  },
  topBar: {
    height: 10,
    width: 30,
    backgroundColor: '#DADBDC',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 5,
    borderRadius: 7,
  },
  mainContainerline: {
    gap: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  line: {
    width: 70,
    height: 5,
    backgroundColor: '#DADBDC',
    borderRadius: 7,
  },
  halfline: {
    width: 45,
    height: 5,
    backgroundColor: '#DADBDC',
    borderRadius: 7,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: FontSize.L,
    fontFamily: Fonts.TensoreFont,
    color: 'black',
  },
  subtitle: {
    fontSize: FontSize.S,
    fontFamily: Fonts.Gotham,
    alignSelf: 'center',
    color: 'black',
  },
});
