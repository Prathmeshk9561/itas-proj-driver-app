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

function DriverLoginPage({ navigation }) {
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
                        source={require('../../../assets/images/driverLogin.png')}
                        style={styles.centerImage}
                    />

                    <Text style={styles.promptText}>Enter Your Mobile Number and Email</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="+91"
                            style={styles.countryCodeInput}
                            keyboardType="phone-pad"
                        />
                        <TextInput
                            placeholder="Mobile Number"
                            style={styles.mobileInput}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <TextInput
                        placeholder="Email ID"
                        style={styles.emailInput}
                        keyboardType="email-address"
                    />

                    <TouchableOpacity style={styles.continueButton}
                        onPress={() => navigation.navigate('OtpScreen')}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.anchorButton}
                        onPress={() => navigation.navigate('CreateAccount')}>
                        <Text style={styles.anchorButtonText}>Create Your Account</Text>
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
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    arrowText: {
        marginTop: 30,
        fontSize: 48,
        fontWeight: 'bold',
        color: '#0A0A0A',
    },
    logo: {
        height: 82,
        width: 83,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    centerImage: {
        height: 312,
        width: 360,
        alignSelf: 'center',
        marginBottom: 20,
    },
    promptText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    countryCodeInput: {
        width: '15%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    mobileInput: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    emailInput: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
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
    anchorButton: {
        alignSelf: 'center',
    },
    anchorButtonText: {
        fontSize: 16,
        color: '#535AFF',
    },
});

export default DriverLoginPage;
