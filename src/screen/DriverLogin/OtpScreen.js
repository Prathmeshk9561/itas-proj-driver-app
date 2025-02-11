import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';

function OtpScreen({ navigation }) {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleBackspace = (index) => {
        if (index > 0 && !otp[index]) {
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? 'padding' : undefined}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../assets/images/backIcon.png')}
                            style={{ width: 25, height: 25, marginTop: 20 }}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require('../../../assets/images/itas_initial_logo.png')}
                        style={styles.logo}
                    />

                    <Image
                        source={require('../../../assets/images/otpPage.png')}
                        style={styles.centerImage}
                    />
                    <Text style={styles.topPromptText}>OTP Verification</Text>

                    <Text style={styles.promptText}>OTP Verification check your phone for an OTP</Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={inputRefs[index]}
                                style={styles.otpInput}
                                keyboardType="numeric"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleOtpChange(text, index)}
                                onKeyPress={({ nativeEvent }) => {
                                    if (nativeEvent.key === 'Backspace') {
                                        handleBackspace(index);
                                    }
                                }}
                            />
                        ))}
                    </View>

                    <Text style={styles.resendPrompt}>Not received yet? Resend it</Text>

                    <TouchableOpacity style={styles.resendButton}>
                        <Text style={styles.resendButtonText}>Resend Code</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.continueButton}
                        onPress={() => navigation.navigate('PasswordScreen')}>
                        <Text style={styles.continueButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
    },
    logo: {
        height: 82,
        width: 83,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    centerImage: {
        height: 287,
        width: 287,
        alignSelf: 'center',
    },
    topPromptText: {
        fontSize: 30,
        textAlign: 'center',
        letterSpacing: 0.28,
    },
    promptText: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 18,
    },
    resendPrompt: {
        fontSize: 14,
        textAlign: 'center',
    },
    resendButton: {
        alignSelf: 'flex-start',
        padding: 10,
    },
    continueButton: {
        alignSelf: 'center',
        height: 49,
        width: 232,
        borderRadius: 8,
        backgroundColor: '#0A0A0A',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    continueButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    resendButtonText: {
        color: '#007BFF',
        fontSize: 16,
        padding: 10,
    },
});

export default OtpScreen;
