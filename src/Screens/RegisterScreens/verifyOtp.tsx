import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, TextColor } from '../../Theme/color';
import AppHeader from '../../Components/AppHeader';
import { Fonts } from '../../Theme/fonts';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation';

const VerifyOtp = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList,'mobileLogin'>>();


  const { phone}:any= route.params;
  console.log(phone)
  
  return (
    <View style={styles.container}>
      <AppHeader 
      HeaderIcon={'backButton'}
      onHeaderIconButtonPress={()=> navigation.pop()}
       />

      <View style={styles.textContainer}>
        <Text style={styles.login}>Verify your number</Text>
        <Text style={styles.subTitle}>Enter six digit code send to</Text>
        <Text>+44 {phone}</Text>
      </View>
    </View>
  );
}

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  textContainer: {
    marginHorizontal:20
  },
  login: {
    fontSize: 24,
    fontFamily: Fonts.TensoreFont,
    fontWeight: '400',
  },
  subTitle: {
    fontSize: 14,
    marginTop: 16,
    fontWeight: '400',
    color:TextColor.secondaryTextColor
  },

})
