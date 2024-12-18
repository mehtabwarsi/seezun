import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
    return (
        <View style={styles.container}>
            <LottieView
                style={styles.animation}
                source={require('../assets/animationJson/loader.json')}
                autoPlay
                loop
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    animation: {
        height: 100,
        width: 100,
    },
});

export default Loader;
