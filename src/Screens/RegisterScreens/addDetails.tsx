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
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation';
import {Color, TextColor} from '../../Theme/color';
import {Fonts, FontSize} from '../../Theme/fonts';
import PrimaryButton from '../../Components/common/PrimaryButton';
import FormTextInput from '../../Components/common/FormTextInput';
import AppHeader from '../../Components/common/AppHeader';

const AddDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

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
            <Text style={styles.login}>Add details</Text>
          </View>
          <View style={styles.textFields}>
            <FormTextInput
              inputValue={email}
              style={styles.mobileInput}
              keyboardType={'email-address'}
              // onChangeText={handleOnChange}
              error={true}
              errorText={error}
              lable={'Name'}
            />
            <Text
              style={{
                marginRight: 300,
              }}>
              Phone
            </Text>
            <View style={styles.mobileContryCode}>
              <View style={styles.countryCodeBox}>
                <Image
                  style={styles.flag}
                  source={require('../../assets/pngs/englandflag.png')}
                />
                <Text style={styles.numberCode}>+44</Text>
              </View>
              <FormTextInput
                style={styles.mobileContry}
                hintText={'Mobile number'}
                keyboardType={'phone-pad'}
                maxLength={10}
                error={true}
                errorText={error}
              />
            </View>
            <FormTextInput
              inputValue={pass}
              style={styles.mobileInput}
              keyboardType={'default'}
              onChangeText={setPass}
              lable={'Date of birth'}
              calenderIcon={true}
              hintText="DD/MM/YYYY"
            />
          </View>
        </View>

        {/* Button container */}
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Sign Up"
            ButtonColor={Color.primaryColor}
            ButtonTextColor={Color.white}
            size={'large'}
            disable={btnDisable}
            onPress={() => navigation.navigate('bottomTab',{screen:'Home'})}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddDetails;

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
    fontSize: FontSize.L,
    fontFamily: Fonts.TensoreFont,
    fontWeight: '400',
    marginLeft:10
  },
  subTitle: {
    fontSize: 14,
    marginTop: 16,
    fontWeight: '400',
  },
  textFields: {
    marginTop: 14,
    rowGap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileContryCode: {
    flexDirection: 'row',
    gap: 20,
  },
  mobileContry: {
    width: Dimensions.get('window').width / 1.2 - 100,
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
});
