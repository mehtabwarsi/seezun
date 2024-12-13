/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    ActivityIndicator,
    DimensionValue,
    ColorValue,
} from 'react-native';
import { Color } from '../Theme/color';
import { Fonts } from '../Theme/fonts';


enum SIZE {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'

}

type getSizeType = {
    padding: DimensionValue,
    fontSize: number,
    width: DimensionValue
}
type ButtonProps = {
    readonly onPress: (event: GestureResponderEvent) => void;
    readonly onPressIn?: (event: GestureResponderEvent) => void;
    readonly onPressOut?: (event: GestureResponderEvent) => void;
    readonly onLongPress?: (event: GestureResponderEvent) => void;
    readonly disable?: boolean;
    readonly title: string;
    readonly activeOpacity?: number;
    readonly style?: StyleProp<ViewStyle>;
    readonly loading?: boolean,
    readonly size?: 'small' | 'medium' | 'large'
    readonly ButtonColor?:ColorValue,
    readonly ButtonTextColor?:ColorValue
};

const PrimaryButton = ({
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    disable = false,
    title,
    activeOpacity,
    style,
    loading = false,
    size,
    ButtonColor,
    ButtonTextColor
}: ButtonProps) => {

    const getSizeStyles = (): getSizeType => {
        switch (size) {
            case SIZE.SMALL:
                return { padding: 8, fontSize: 14, width: '45%' };
            case SIZE.MEDIUM:
                return { padding: 8, fontSize: 14, width: '65%' };
            case SIZE.LARGE:
                return { padding: 8, fontSize: 14, width: '90%' };
            default:
                return { padding: 8, fontSize: 14, width: '80%' };
        }
    };

    const { padding, fontSize, width } = getSizeStyles();


    return (
        <TouchableOpacity
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onLongPress={onLongPress}
            disabled={disable}
            activeOpacity={activeOpacity}
            style={[
                styles.common_btn,
                {
                    padding: padding,
                    width: width,
                    backgroundColor:ButtonColor,
                },
                style,
                disable && { opacity: 0.5 },
            ]}>
            {
                loading ? <ActivityIndicator size={'large'} color={'white'} />
                    : <Text style={[styles.textStyle, { fontSize: fontSize ,color: ButtonTextColor}]} >
                        {title || 'Primary button'}
                    </Text>
            }


        </TouchableOpacity>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    common_btn: {
        alignItems: 'center',
        // width: '90%',
        justifyContent: 'center',
        display: 'flex',
        // fontSize: 15,
        borderWidth: 1,
        // padding: 18,
        borderColor: '#D2D2D2',
        height:50
    },
    textStyle: {
        fontSize: 12,
        color: 'white',
        fontWeight: '400',
        fontFamily:Fonts.TensoreFont
    },
    loadingIndicator: {
        color: 'white',
    }
});
