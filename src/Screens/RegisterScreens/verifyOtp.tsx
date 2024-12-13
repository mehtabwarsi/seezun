import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {Color, TextColor} from '../../Theme/color';
import AppHeader from '../../Components/AppHeader';
import {Fonts} from '../../Theme/fonts';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation';
import PrimaryButton from '../../Components/PrimaryButton';
import Toast from 'react-native-toast-message';

const VerifyOtp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'mobileLogin'>>();

  const {phone,otp,screen}: any = route.params;

  console.log(`routs scrrn: ${screen}`)
  console.log(`routs otp: ${otp}`)

  const otpRef1 = useRef<TextInput>(null);
  const otpRef2 = useRef<TextInput>(null);
  const otpRef3 = useRef<TextInput>(null);
  const otpRef4 = useRef<TextInput>(null);

  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const [btnDisable, setBtnDisable] = useState(true);
   
  const mergeOtp =  Number(otp1+otp2+otp3+otp4)

  useEffect(() => {
    if (otp1 && otp2 && otp3 && otp4) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [otp1, otp2, otp3, otp4]);


  const onSubmit = () => {
    if(mergeOtp === otp){
       if(screen === 'mobileSignUp'){
        navigation.navigate('username')
       } else{
        console.log(screen)
       } 
    }else{
      Toast.show({
        type:'error',
        text1:'worng otp',
        visibilityTime:3000
      })
      console.log('womng')
    }


    setOtp1('');
    setOtp2('');
    setOtp3('');
    setOtp4('');

    console.log(otp1, otp2, otp3, otp4);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <AppHeader
        HeaderIcon={'backButton'}
        onHeaderIconButtonPress={() => navigation.pop()}
      />

      <View style={styles.textContainer}>
        <Text style={styles.login}>Verify your number</Text>
        <Text style={styles.subTitle}>Enter six digit code send to</Text>
        <Text>+44 {phone}</Text>
      </View>

      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.otpTextFiledStyle}
            keyboardType={'number-pad'}
            value={otp1}
            maxLength={1}
            ref={otpRef1}
            onChangeText={otp => {
              if (otp != '') {
                setOtp1(otp);
                otpRef2.current?.focus();
              }
            }}
          />
          <TextInput
            style={styles.otpTextFiledStyle}
            keyboardType={'number-pad'}
            value={otp2}
            maxLength={1}
            ref={otpRef2}
            onChangeText={otp => {
              if (otp != '') {
                setOtp2(otp);
                otpRef3.current?.focus();
              }
            }}
          />
          <TextInput
            style={styles.otpTextFiledStyle}
            keyboardType={'number-pad'}
            value={otp3}
            maxLength={1}
            ref={otpRef3}
            onChangeText={otp => {
              if (otp != '') {
                setOtp3(otp);
                otpRef4.current?.focus();
              }
            }}
          />
          <TextInput
            style={styles.otpTextFiledStyle}
            keyboardType={'number-pad'}
            value={otp4}
            maxLength={1}
            ref={otpRef4}
            onChangeText={otp => {
              if (otp != '') {
                setOtp4(otp);
                // otpRef2.current?.focus();
              }
            }}
          />
        </View>

        <View style={styles.btnContainer}>
          <PrimaryButton
            title="Verify OTP"
            size={'large'}
            disable={btnDisable}
            ButtonTextColor={Color.white}
            ButtonColor={Color.primaryColor}
            onPress={onSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  textContainer: {
    marginHorizontal: 20,
    rowGap:2,
    marginTop:30
  },
  login: {
    fontSize: 24,
    fontFamily: Fonts.TensoreFont,
    fontWeight: '400',
    marginBottom:10
  },
  subTitle: {
    fontSize: 14,
    marginTop: 16,
    fontWeight: '400',
    color: TextColor.secondaryTextColor,
  },
  otpTextFiledStyle: {
    width: 30,
    borderBottomWidth: 1,
    color: "Black",
  },
  textInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
});
