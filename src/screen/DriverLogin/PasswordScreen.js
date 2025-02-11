import React from 'react';
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

function PasswordScreen({ navigation }) {

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

                    <Text style={styles.headerText}>Welcome Back Akshay !</Text>

                    <Image
                        source={require('../../../assets/images/password_img.png')}
                        style={styles.centerImage}
                    />

                    <TextInput
                        placeholder="Enter your password"
                        style={styles.passwordInput}
                        keyboardType="password"
                    />

                    <Text style={{ textAlign: 'center', marginBottom: 20 }}>
                        Forgot Password?
                        <Text style={{ color: '#4285F4', fontWeight: '600', textAlign: 'right' }}> Click here</Text>
                    </Text>

                    <TouchableOpacity style={styles.continueButton}
                        onPress={() => navigation.navigate('NotRegister')}>
                        <Text style={styles.continueButtonText}>Continue</Text>
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

export default PasswordScreen;
