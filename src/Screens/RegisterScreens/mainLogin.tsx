import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Color, TextColor} from '../../Theme/color';
import Logo from '../../assets/svgIcons/logo';
import {Fonts} from '../../Theme/fonts';
import PrimaryButton from '../../Components/PrimaryButton';
import GoogleIcon from '../../assets/svgIcons/google';
import AppleIcon from '../../assets/svgIcons/appleIcon';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const MainLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Logo />
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.textStyleHead}>Welcome to Seezun</Text>
        <Text style={styles.textSubStyle}>
          Buy, sell festive clothes and more!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          style={styles.buttonSpacing}
          ButtonColor={Color.primaryColor}
          size="large"
          title="Log in"
          ButtonTextColor={Color.white}
          onPress={() => navigation.push('mobileLogin')}
        />
        <PrimaryButton
          title="Sign up"
          ButtonColor={Color.white}
          size="large"
          ButtonTextColor={TextColor.primaryTextColor}
          onPress={() => navigation.push('mobileSignUp')}
        />
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialStyle}>

        <TouchableOpacity>
          <GoogleIcon />
        </TouchableOpacity>
				
        <TouchableOpacity>
          <AppleIcon />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  logoStyle: {
    marginTop: Dimensions.get('window').height - 650,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyleHead: {
    fontSize: 24,
    fontFamily: Fonts.TensoreFont,
    fontWeight: '400',
    color: TextColor.primaryTextColor,
    marginBottom: 8,
  },
  textSubStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: TextColor.primaryTextColor,
    textAlign: 'center',
    fontFamily: Fonts.Gotham,
  },
  buttonContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSpacing: {
    marginBottom: 8,
  },
  orContainer: {
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: '20%',
    height: 1,
    backgroundColor: '#E9E9E9',
    opacity: 0.2,
    borderWidth: 0.2,
  },
  orText: {
    marginHorizontal: 10,
    color: TextColor.primaryTextColor,
    fontSize: 14,
  },
  socialStyle: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 40,
  },
});

export default MainLogin;
