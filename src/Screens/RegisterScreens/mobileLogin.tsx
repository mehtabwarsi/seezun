import React, { useState } from 'react';
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
} from 'react-native';
import { Color, TextColor } from '../../Theme/color';
import AppHeader from '../../Components/AppHeader';
import { Fonts } from '../../Theme/fonts';
import FormTextInput from '../../Components/FormTextInput';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation';
import PrimaryButton from '../../Components/PrimaryButton';

const MobileLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const numberRegx = /^[0-9]{10}$/;

  const validatePhone = (value: string) => {
    if (value === '') {
      setError('Number required');
    } else if (!numberRegx.test(value)) {
      setError('Invalid number format');
    } else if (value.length !== 10) {
      setError('Phone number must be 10 digits');
    } else {
      setError(''); // Clear error if valid
    }
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    validatePhone(value);
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    // Final validation before submission
    if (numberRegx.test(phone) && phone.length === 10) {
      // Proceed to next screen
      navigation.navigate('verifyOtp', { phone });
    } else {
      if (phone === '') {
        setError('Number required');
      } else {
        setError('Invalid number');
      }
    }
  }

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, backgroundColor: Color.white }}>
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
              <View style={styles.countryCodeBox} />
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

            <TouchableOpacity style={styles.passLogin}>
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
              onPress={onSubmit}
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
      backgroundColor: 'red',
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