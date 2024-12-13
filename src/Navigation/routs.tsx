import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '.';
import MainLogin from '../Screens/RegisterScreens/mainLogin';
import MobileLogin from '../Screens/RegisterScreens/LogInScreens/mobileLogin';
import VerifyOtp from '../Screens/RegisterScreens/verifyOtp';
import EmailLogin from '../Screens/RegisterScreens/LogInScreens/emailLogin';
import MobileSignUp from '../Screens/RegisterScreens/SignUpScrrens/mobileSignUp';
import UserNameScreen from '../Screens/RegisterScreens/SignUpScrrens/username';
import AddDetails from '../Screens/RegisterScreens/addDetails';

const Route = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="mainLogin" component={MainLogin} />
      <Stack.Screen name="mobileLogin" component={MobileLogin} />
      <Stack.Screen name="verifyOtp" component={VerifyOtp} />
      <Stack.Screen name="emailLogin" component={EmailLogin} />
      <Stack.Screen name="mobileSignUp" component={MobileSignUp} />
      <Stack.Screen name="username" component={UserNameScreen} />
      <Stack.Screen name="addDetails" component={AddDetails} />
    </Stack.Navigator>
  );
};

export default Route;
