/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/Navigation/routs';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <>
      <Toast />
      <StatusBar />
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </>
  );
}

export default App;
