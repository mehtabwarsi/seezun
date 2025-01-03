/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/Navigation/routs';
import {StatusBar, View} from 'react-native';
import Toast from 'react-native-toast-message';
import analytics from '@react-native-firebase/analytics';
import OnBoarding from './src/Temp/animationScreen/onBoadring';
import AnimatedTab from './src/Temp/animationScreen/animatedTab';
// animations screens

function App(): React.JSX.Element {
  const routeNameRef = useRef<string | undefined>(undefined);
  const navigationRef = useRef<any>(null);

  /**
   * @todo  animations @example
   */

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      {/* <StatusBar />
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
 */}

      <AnimatedTab
        data={[
          {icon: 'LifeBuoy', label: 'Buoy'},
          {icon: 'Fish', label: 'Fresh fish'},
          {icon: 'Sailboat', label: 'Sail'},
          {icon: 'Ship', label: 'Ship it'},
          {icon: 'ShipWheel', label: 'Mange it'},
        ]}
        onChange={index => setSelectedIndex(index)}
        selectedItem={selectedIndex}
      />
    </>
  );
}

export default App;
