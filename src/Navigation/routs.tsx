import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '.';
import MainLogin from '../Screens/RegisterScreens/mainLogin';
import MobileLogin from '../Screens/RegisterScreens/mobileLogin';
import VerifyOtp from '../Screens/RegisterScreens/verifyOtp';

const Route = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}

        >
            <Stack.Screen name="mainLogin" component={MainLogin} />
            <Stack.Screen name="mobileLogin" component={MobileLogin} />
            <Stack.Screen name="verifyOtp" component={VerifyOtp} />
        </Stack.Navigator>
    );
};

export default Route;
