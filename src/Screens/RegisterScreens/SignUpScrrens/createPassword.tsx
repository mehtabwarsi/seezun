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
import { RootStackParamList } from '../../../Navigation';
import { Color, TextColor } from '../../../Theme/color';
import { Fonts } from '../../../Theme/fonts';
import AppHeader from '../../../Components/common/AppHeader';
import FormTextInput from '../../../Components/common/FormTextInput';
import PrimaryButton from '../../../Components/common/PrimaryButton';


const CreatePasswordScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  useEffect(() => {
    if (email && pass) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [email, pass]);

  useEffect(() => {
    const unSubsribe = navigation.addListener('focus', () => {
      setEmail('');
      setPass('');
    });
    return unSubsribe;
  }, [navigation]);


  const handleOnChange = (text: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmail(text);
    if (emailRegex.test(text)) {
      setError('');
    } else {
      setError('Invalid email');
    }
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
            <Text style={styles.login}>Create Password</Text>
          </View>

          <View style={styles.textFields}>
            <FormTextInput
              inputValue={email}
              style={styles.mobileInput}
              keyboardType={'email-address'}
              onChangeText={handleOnChange}
              lable='Create new Password'
            />
            <FormTextInput
              inputValue={pass}
              style={styles.mobileInput}
              keyboardType={'default'}
              isPasswordTextFiled={true}
              onChangeText={setPass}
              lable='Confirm password'
            />
          </View>
        </View>

        {/* Button container */}
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Continue"
            ButtonColor={Color.primaryColor}
            ButtonTextColor={Color.white}
            size={'large'}
            disable={btnDisable}
            onPress={() => navigation.push('addDetails')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreatePasswordScreen

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
    marginTop: 14,
    rowGap: 16,
  },
  mobileInput: {
    width: Dimensions.get('window').width / 1.2,
  },
  passLogin: {
    marginTop: 97,
  },
  forgetPass: {
    marginTop: 10,
    marginLeft: 210,
  },
  passloginText: {
    fontSize: 14,
    color: TextColor.primaryTextColor,
    fontFamily: Fonts.TensoreFont,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
});
