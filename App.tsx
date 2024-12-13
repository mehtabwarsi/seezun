/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/Navigation/routs';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </>

  );
}


export default App;
