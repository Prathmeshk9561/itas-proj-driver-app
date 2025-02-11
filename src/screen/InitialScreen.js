import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Jua } from '@expo-google-fonts/jua';

function InitialScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        Jua
    });

    return (
        <View style={styles.container}>
            <View style={styles.img_container}>
                <Image
                    source={require('../../assets/images/itas_initial_logo.png')}
                    style={styles.image}
                />
                <Text style={styles.text}>Welcome to The Driver App !</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DriverLoginPage')}
            >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    img_container: {
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 254,
        resizeMode: 'contain',
    },
    text: {
        marginTop: 20,
        fontSize: 45,
        textAlign: 'center',
        fontFamily: 'Jua',
    },
    button: {
        height: 60,
        width: 296,
        borderRadius: 30,
        backgroundColor: '#0A0A0A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        letterSpacing: 2.5,
    },
});

export default InitialScreen;
