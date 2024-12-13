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
import {RootStackParamList} from '../../../Navigation';
import AppHeader from '../../../Components/AppHeader';
import FormTextInput from '../../../Components/FormTextInput';
import PrimaryButton from '../../../Components/PrimaryButton';
import {Color, TextColor} from '../../../Theme/color';
import {Fonts} from '../../../Theme/fonts';

const UserNameScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [username, setUserName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  console.log(username);
  const handleUsername = (text: string) => {
    const validUsername = text.replace(/[^a-zA-Z0-9]/g, '');
    if (validUsername) {
      setUserName(validUsername);
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const onSubmit = () => {
    console.log(`username:${username}`);
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
          onHeaderIconButtonPress={() => navigation.replace('mobileSignUp')}
        />

        <View style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.login}>Username</Text>
            <Text style={styles.subTitle}>Create new username</Text>
          </View>

          <View style={styles.textFields}>
            <FormTextInput
              inputValue={username}
              style={styles.mobileInput}
              onChangeText={handleUsername}
              // error={true}
              // errorText={error}
            />
          </View>

          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>
              Use of only numeric, alphabetical characters are allowed
            </Text>
            <Text style={styles.subText}>
              No special characters @,#,$,%,&,* can be used
            </Text>
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

export default UserNameScreen;

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
  subTextContainer: {
    marginTop: 8,
  },
  subText: {
    fontSize: 12,
    lineHeight: 17,
    color: '#8E8E8E',
  },
});
