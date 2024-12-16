import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation';
import AppHeader from '../../Components/AppHeader';
import FormTextInput from '../../Components/FormTextInput';
import PrimaryButton from '../../Components/PrimaryButton';
import {Color, TextColor} from '../../Theme/color';
import {Fonts} from '../../Theme/fonts';

const ForgotScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setEmail('');
    });

    return unsubscribe;
  }, [navigation]);

  const handleOnChange = (text: string) => {
    const sanitizedText = text.replace(/\s/g, '');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

    if (sanitizedText && error != null) {
      setBtnDisable(false);
      setEmail(sanitizedText);
    }

    if (emailRegex.test(sanitizedText)) {
      setError('');
    } else {
      setError('Invalid email');
    }
  };

  const onSubmit = () => {
    let otp: number = Math.floor(Math.random() * 9000);
    navigation.navigate('verifyOtp', {email, otp, screen: 'emailSignUp'});
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: Color.white}}>
        <AppHeader
          HeaderIcon={'backButton'}
          onHeaderIconButtonPress={() => navigation.pop()}
        />

        <View style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.login}>Forgot Password?</Text>
            <Text style={styles.subTitle}>Enter email to get code</Text>
          </View>

          <View style={styles.textFields}>
            <FormTextInput
              inputValue={email}
              style={styles.mobileInput}
              hintText={'Email'}
              onChangeText={handleOnChange}
              error={!!error}
              errorText={error}
            />
          </View>

          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>
              We’ll send a four-digit code to the registered email address.
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Send code"
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

export default ForgotScreen;

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
    width: Dimensions.get('window').width / 1.2,
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
