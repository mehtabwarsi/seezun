import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {Color, TextColor} from '../../Theme/color';
import Logo from '../../assets/svgIcons/logo';
import {Fonts} from '../../Theme/fonts';
import GoogleIcon from '../../assets/svgIcons/google';
import AppleIcon from '../../assets/svgIcons/appleIcon';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PrimaryButton from '../../Components/common/PrimaryButton';
import {Config} from '../../config';

import {
  GoogleSignin,
  statusCodes,
  isErrorWithCode,
  isSuccessResponse,
  isNoSavedCredentialFoundResponse,
} from '@react-native-google-signin/google-signin';
;

const MainLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [userData, setUserData] = useState<Object>({});

  console.log(JSON.stringify(userData));

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.WEB_ID,
      // scopes: ['profile', 'email'],
    });
  }, []);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const response = await GoogleSignin.signIn();

      if (isSuccessResponse(response)) {
        setUserData(response.data);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            return (
              <View>
                <ActivityIndicator size={'large'} />
              </View>
            );
        }
      }
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Logo height={64} width={193} />
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
        <TouchableOpacity
          onPress={googleSignIn}
          style={{
            borderWidth: 1,
            padding: 12,
            borderRadius: 100,
            borderColor: '#F0F0F0',
          }}>
          <GoogleIcon />
        </TouchableOpacity>

        {Platform.OS === 'ios' && (
          <TouchableOpacity>
            <AppleIcon />
          </TouchableOpacity>
        )}
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
    alignItems: 'center',
    flexDirection: 'row',
    gap: 40,
  },
});

export default MainLogin;
