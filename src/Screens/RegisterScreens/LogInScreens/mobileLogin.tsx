import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Color, TextColor} from '../../../Theme/color';
import {Fonts} from '../../../Theme/fonts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../Navigation';
import PrimaryButton from '../../../Components/common/PrimaryButton';
import AppHeader from '../../../Components/common/AppHeader';
import FormTextInput from '../../../Components/common/FormTextInput';

const MobileLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [confiramtion, setConfirmation] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setPhone('');
    });

    return unsubscribe;
  }, [navigation]);

  const numberRegx = /^[0-9]{10}$/;

  const handlePhoneChange = (value: string) => {
    const sanitizedValue = value.replace(/[^0-9]/g, '');
    setPhone(sanitizedValue);
    setError('');
  };

  const validatePhone = () => {
    if (phone === '') {
      setError('Number required');
    } else if (!numberRegx.test(phone)) {
      setError('Phone number must be 10 digits');
    } else {
      setError('');
    }
  };

  const onSubmit = async (phoneNumber: string): Promise<void> => {
    validatePhone();
    if (phone.length === 10) {
      navigation.navigate('verifyOtp', {
        phone,
        otpConfirmData: confiramtion,
        screen: 'mobileLogin',
      });

      // try {
      //   const confirmation = await auth().signInWithPhoneNumber(
      //     `+91${phoneNumber}`,
      //   );
      //   setConfirmation(confiramtion)

      //   if (confirmation?.verificationId != null) {
      //     navigation.navigate('verifyOtp', {phone,otpConfirmData:confiramtion, screen: 'mobileLogin'});
      //   }
      // } catch (err) {
      //   console.log(`err:${err}`);
      // }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: Color.white}}
        keyboardShouldPersistTaps={'always'}>
        <AppHeader
          HeaderIcon={'backButton'}
          onHeaderIconButtonPress={() => navigation.pop()}
        />

        <View style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.login}>Log In</Text>
            <Text style={styles.subTitle}>
              Enter your mobile number to get otp
            </Text>
          </View>

          <View style={styles.textFields}>
            <View style={styles.countryCodeBox}>
              <Image
                style={styles.flag}
                source={require('../../../assets/pngs/englandflag.png')}
              />
              <Text style={styles.numberCode}>+44</Text>
            </View>

            <FormTextInput
              inputValue={phone}
              style={styles.mobileInput}
              hintText={'Mobile number'}
              keyboardType={'phone-pad'}
              maxLength={10}
              onChangeText={handlePhoneChange}
              error={true}
              errorText={error}
            />
          </View>

          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>
              We’ll send six digit code to the registered number.
            </Text>
            <Text style={styles.subText}>Standard data rates may apply</Text>
          </View>

          <TouchableOpacity
            style={styles.passLogin}
            onPress={() => navigation.navigate('emailLogin')}>
            <Text style={styles.passloginText}>Login with Password</Text>
          </TouchableOpacity>
        </View>

        {/* Button container */}
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Get OTP"
            ButtonColor={Color.primaryColor}
            ButtonTextColor={Color.white}
            size={'large'}
            onPress={() => onSubmit(phone)}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MobileLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  mainContainer: {
    margin: 24,
    flex: 1,
  },
  textContainer: {},
  login: {
    fontSize: 24,
    fontFamily: Fonts.TensoreFont,
    fontWeight: '400',
  },
  subTitle: {
    fontSize: 14,
    marginTop: 16,
    fontWeight: '400',
  },
  textFields: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 14,
  },
  countryCodeBox: {
    width: 84,
    height: 56,
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#D2D2D2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  numberCode: {
    fontSize: 16,
    fontFamily: Fonts.Gotham,
  },
  flag: {
    width: 24,
    height: 17,
  },
  mobileInput: {
    width: Dimensions.get('window').width / 2 + 60,
  },
  subTextContainer: {
    marginTop: 8,
  },
  subText: {
    fontSize: 12,
    lineHeight: 17,
    color: '#8E8E8E',
  },
  passLogin: {
    marginTop: 97,
  },
  passloginText: {
    fontSize: 14,
    color: TextColor.secondaryTextColor,
    fontFamily: Fonts.TensoreFont,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
});
