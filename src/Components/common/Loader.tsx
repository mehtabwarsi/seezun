import React from 'react';
import {View, StyleSheet, Modal, Text, ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';
import {Fonts} from '../../Theme/fonts';
import {Color, TextColor} from '../../Theme/color';

const Loader = () => {
  return (
    <Modal visible={true} transparent={true} >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            height: 150,
            width: 250,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 30,
              fontFamily: Fonts.Gotham,
              color: TextColor.primaryTextColor,
            }}>
            Please wait...
          </Text>

          <ActivityIndicator size={'large'} color={Color.primaryColor} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'white',
//     },
//     animation: {
//       height: 100,
//       width: 100,
//     },
//   });
