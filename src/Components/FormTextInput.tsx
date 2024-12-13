import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    StyleProp,
    ViewStyle,
    ColorValue,
    useWindowDimensions,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    TextInputFocusEventData,
    TouchableOpacity,
    KeyboardTypeOptions,
} from 'react-native';
import CloseEyeIcon from '../assets/svgIcons/closeEyeIcon';
import OpenEyeIcon from '../assets/svgIcons/openEyeIcon';

type TextInputProps = {
    readonly ref?: React.LegacyRef<TextInput> | undefined,
    readonly inputValue?: string|number
    readonly style?: StyleProp<ViewStyle>,
    readonly placeholderTextColor?: ColorValue,
    readonly hintText?: string,
    readonly maxLength?: number | undefined,
    readonly multiline?: boolean,
    readonly selectionColor?: ColorValue,
    readonly textAlign?: 'left' | 'right' | 'center',
    readonly onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void),
    readonly onChangeText?: (text: string) => void,
    readonly onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined,
    readonly errorText?: string | null,
    readonly error?: boolean,
    readonly isPasswordTextFiled?: boolean,
    readonly keyboardType?: KeyboardTypeOptions | undefined,
};

const FormTextInput = ({
    style,
    placeholderTextColor = 'grey',
    hintText,
    maxLength,
    multiline,
    selectionColor,
    textAlign = 'left',
    onChange,
    onChangeText,
    onFocus,
    inputValue,
    error,
    errorText,
    isPasswordTextFiled,
    ref,
}: TextInputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [passwordValidationMessage, setPasswordValidationMessage] = useState<string | null>(null);

    const { width } = useWindowDimensions();
    const OFFSET = 55;

    // Password validation function
    const validatePassword = (text: string) => {
        const minLength = text.length >= 8;
        const hasUppercase = /[A-Z]/.test(text);
        const hasNumber = /[0-9]/.test(text);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(text);

        if (!minLength) {
            setPasswordValidationMessage('Password must be at least 8 characters.');
        } else if (!hasUppercase) {
            setPasswordValidationMessage('Password must include at least one uppercase letter.');
        } else if (!hasNumber) {
            setPasswordValidationMessage('Password must include at least one number.');
        } else if (!hasSpecialChar) {
            setPasswordValidationMessage('Password must include at least one special character.');
        } else {
            setPasswordValidationMessage(null);
        }
    };

    const handlePasswordChange = (text: string) => {
        const sanitizedText = text.replace(/\s+/g, '');
        if (isPasswordTextFiled) {
            validatePassword(sanitizedText);
        }
        if (onChangeText) {
            onChangeText(sanitizedText);
        }
    };

    return (
        <View>
            <View>
                <View style={[styles.container, { width: width - 50, height: OFFSET }, style]}>
                    <TextInput
                        ref={ref}
                        placeholderTextColor={placeholderTextColor || '#8E8E8E'}
                        placeholder={hintText}
                        maxLength={maxLength || 255}
                        multiline={multiline}
                        secureTextEntry={isPasswordTextFiled && !showPassword}
                        style={styles.textInputStyle}
                        selectionColor={selectionColor}
                        textAlign={textAlign}
                        onChange={onChange}
                        onChangeText={handlePasswordChange}
                        onFocus={onFocus}
                        value={inputValue}
                    />

                    {isPasswordTextFiled && (
                        <TouchableOpacity
                            style={styles.passwordIcon}
                            onPress={() => setShowPassword(!showPassword)}>
                            {!showPassword ? <CloseEyeIcon /> : <OpenEyeIcon />}
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View>
                {isPasswordTextFiled && passwordValidationMessage && (
                    <Text style={styles.validationMessageStyle}>
                        {passwordValidationMessage}
                    </Text>
                )}
                {error && errorText ? (
                    <Text style={styles.errorTextStyle} adjustsFontSizeToFit>
                        {errorText}
                    </Text>
                ) : null}
            </View>
        </View>
    );
};

export default FormTextInput;

const styles = StyleSheet.create({
    container: {
        borderColor: '#D2D2D2',
        borderWidth: 1,
        justifyContent: 'center',
        padding: 8,
    },
    textInputStyle: {
        color: 'black',
        height: 70,
        alignItems: 'center',
        fontSize: 14,
    },
    errorTextStyle: {
        color: 'red',
        fontSize: 15,
        marginTop: 2,
    },
    validationMessageStyle: {
        color: 'orange',
        fontSize: 14,
        marginTop: 2,
    },
    passwordIcon: {
        position: 'absolute',
        right: 0,
        top: 18,
        marginRight: 5,
    },
});
