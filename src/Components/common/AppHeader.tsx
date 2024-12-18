/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    StatusBarStyle,
    GestureResponderEvent,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    Image,
    ImageSourcePropType,
} from 'react-native';
import BackButton from '../../assets/svgIcons/backButton';
import HamBurgerIcon from '../../assets/svgIcons/humBurger';

enum ICONS {
    HAMBURGER = 'hamburger',
    BACKBUTTON = 'backButton'
}

type HeaderIconType = 'hamburger' | 'backButton'

type AppHeaderProps = {
    readonly barStyle?: StatusBarStyle;
    readonly onHeaderIconButtonPress?: ((event: GestureResponderEvent) => void),
    readonly headerTitle?: string;
    readonly onHeaderPress?: ((event: GestureResponderEvent) => void)
    readonly style?: StyleProp<ViewStyle>
    readonly HeaderImageSource?: ImageSourcePropType,
    readonly HeaderIcon?: HeaderIconType,
    readonly IconDir?: 'right' | 'left'
}

const AppHeader = ({
    barStyle,
    headerTitle,
    onHeaderIconButtonPress,
    onHeaderPress,
    style,
    HeaderImageSource,
    HeaderIcon,
    IconDir = 'left',
}: AppHeaderProps) => {

    const getHeaderIcon = () => {
        switch (HeaderIcon) {
            case ICONS.BACKBUTTON:
                return <BackButton/>;
            case ICONS.HAMBURGER:
                return <HamBurgerIcon />;
            default:
                return null;
        }
    };

    return (
        <View style={[styles.container, style]}>
            <StatusBar barStyle={barStyle || 'default'} />
            <View style={styles.headerStyleDir}>
                {/* Conditionally position the icon */}
                {IconDir === 'left' && (
                    <TouchableOpacity style={styles.IconButtonStyle} onPress={onHeaderIconButtonPress}>
                        {getHeaderIcon()}
                    </TouchableOpacity>
                )}

                {/* Header text and optional image */}
                <View style={styles.headerContent}>
                    {HeaderImageSource && (
                        <View style={styles.imageContainer}>
                            <Image style={styles.imageStyle} source={HeaderImageSource} />
                        </View>
                    )}

                    {headerTitle && (
                        <TouchableOpacity style={styles.headerStyle} onPress={onHeaderPress}>
                            <Text style={styles.headerTextStyle}>{headerTitle}</Text>
                        </TouchableOpacity>
                    )
                    }


                </View>

                {/* Icon on the right */}
                {IconDir === 'right' && (
                    <TouchableOpacity style={styles.IconButtonStyle} onPress={onHeaderIconButtonPress}>
                        {getHeaderIcon()}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
    },
    headerStyleDir: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    headerTextStyle: {
        color: 'black',
        fontSize: 18,
    },
    IconButtonStyle: {
        padding: 10,
    },
    headerStyle: {
        marginLeft: 10,
    },
    imageContainer: {
        marginRight: 10,
    },
    imageStyle: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

export default AppHeader;
