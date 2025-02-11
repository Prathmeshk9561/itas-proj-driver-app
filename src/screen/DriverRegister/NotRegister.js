import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

function NotRegister({ navigation }) {

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
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
                    source={require('../../../assets/images/not_Register.png')}
                    style={styles.centerImage}
                />

                <Text style={{ textAlign: 'center', marginBottom: 20, fontSize: 32, marginTop: 50, fontWeight: 500, fontFamily: 'Roboto' }}>
                    “Documents verification is under process, our executive will contact you soon”
                </Text>

            </View>
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
    headerText: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },
    centerImage: {
        height: 287,
        width: 287,
        alignSelf: 'center',
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
    passwordInput: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default NotRegister;
