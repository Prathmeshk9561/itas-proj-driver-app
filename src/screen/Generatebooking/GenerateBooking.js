import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert,
} from 'react-native';

function GenerateBooking({ navigation }) {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image
                            source={require('../../../assets/images/backIcon.png')}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Generate Booking</Text>
                    <View style={styles.separator} />
                    <Text style={styles.subTitle}>Select the Type</Text>

                    {/* Grid Layout */}
                    <View style={styles.grid}>
                        <TouchableOpacity
                            style={styles.imageContainer}
                            onPress={() => navigateToScreen('LocalScreen')}>
                            <Image
                                source={require('../../../assets/images/local_image.png')}
                                style={styles.image}
                            />
                            <Text style={styles.imageText}>Local</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.imageContainer}
                            onPress={() => navigateToScreen('OnewayScreen')}>
                            <Image
                                source={require('../../../assets/images/oneway_image.png')}
                                style={styles.image}
                            />
                            <Text style={styles.imageText}>Oneway</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.imageContainer}
                            onPress={() => navigateToScreen('OutStationScreen')}>
                            <Image
                                source={require('../../../assets/images/out_station_image.png')}
                                style={styles.image}
                            />
                            <Text style={styles.imageText}>Out Station</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 10,
    },
    backIcon: {
        width: 25,
        height: 25,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 35,
    },
    subTitle: {
        textAlign: 'left',
        marginTop: 15,
        fontSize: 24,
        color: '#262628',
        marginBottom: 10,
        fontWeight: '500',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 40,
        width: '100%',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width: 150,
        height: 197,
        borderColor: '#C1C1C1',
        borderWidth: 0.8,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10
    },
    image: {
        marginTop: 20,
        borderRadius: 10,
        width: 147,
        height: 157,
    },
    imageText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: '#262628',
        marginTop: 10,
        padding: 10,
        bottom: 18,
    },
});

export default GenerateBooking;
