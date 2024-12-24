/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/Navigation/routs';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import analytics from '@react-native-firebase/analytics';
// animations screens

function App(): React.JSX.Element {
  const routeNameRef = useRef<string | undefined>(undefined);
  const navigationRef = useRef<any>(null);

  return (
    <>
      <StatusBar />
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;

          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }
          routeNameRef.current = currentRouteName;
        }}>
        <Route />
        <Toast position="bottom" bottomOffset={80} />
      </NavigationContainer>
    </>
  );
}

export default App;
