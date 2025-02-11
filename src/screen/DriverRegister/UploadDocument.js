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
    ImageBackground,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function UploadDocument({ navigation }) {
    const [licenseFrontImage, setLicenseFrontImage] = useState(null);
    const [licenseBackImage, setLicenseBackImage] = useState(null);
    const [fitnessImage, setFitnessImage] = useState(null);
    const [insuranceFrontImage, setInsuranceFrontImage] = useState(null);
    const [insuranceBackImage, setInsuranceBackImage] = useState(null);

    const pickImage = async (setImage) => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert('Permission Denied', 'Permission to access gallery is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
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
                    <Text style={styles.title}>Upload Documents</Text>
                    <View style={styles.separator} />
                    <View style={styles.contentContainer}>
                        {/* Driving License */}
                        <View style={styles.imageContainer}>
                            <Text style={styles.label}>Driving License</Text>
                            <Text style={styles.subLabel}>Upload Driving License</Text>
                            <View style={styles.rowContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.imageBox,
                                        licenseFrontImage ? styles.imageBoxFilled : styles.imageBoxEmpty,
                                        styles.dottedBorder,
                                    ]}
                                    onPress={() => pickImage(setLicenseFrontImage)}
                                >
                                    {licenseFrontImage ? (
                                        <ImageBackground
                                            source={{ uri: licenseFrontImage }}
                                            style={styles.imageThumbnail}
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                source={require('../../../assets/images/camera_icon.png')}
                                                style={styles.icon}
                                            />
                                            <Text style={styles.imageText}>Front</Text>
                                        </>
                                    )}
                                </TouchableOpacity>
                                <View style={{ margin: 8 }} />
                                <TouchableOpacity
                                    style={[
                                        styles.imageBox,
                                        licenseBackImage ? styles.imageBoxFilled : styles.imageBoxEmpty,
                                        styles.dottedBorder,
                                    ]}
                                    onPress={() => pickImage(setLicenseBackImage)}
                                >
                                    {licenseBackImage ? (
                                        <ImageBackground
                                            source={{ uri: licenseBackImage }}
                                            style={styles.imageThumbnail}
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                source={require('../../../assets/images/camera_icon.png')}
                                                style={styles.icon}
                                            />
                                            <Text style={styles.imageText}>Back</Text>
                                        </>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Fitness Certificate */}
                        <View style={styles.imageContainer}>
                            <Text style={styles.label}>Fitness Certificate</Text>
                            <Text style={styles.subLabel}>Upload Fitness Certificate</Text>
                            <View style={styles.rowContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.imageBox,
                                        fitnessImage ? styles.imageBoxFilled : styles.imageBoxEmpty,
                                        styles.dottedBorder,
                                    ]}
                                    onPress={() => pickImage(setFitnessImage)}
                                >
                                    {fitnessImage ? (
                                        <ImageBackground
                                            source={{ uri: fitnessImage }}
                                            style={styles.imageThumbnail}
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                source={require('../../../assets/images/camera_icon.png')}
                                                style={styles.icon}
                                            />
                                            <Text style={styles.imageText}>All</Text>
                                        </>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Insurance */}
                        <View style={styles.imageContainer}>
                            <Text style={styles.label}>Insurance</Text>
                            <Text style={styles.subLabel}>Upload Insurance</Text>
                            <View style={styles.rowContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.imageBox,
                                        insuranceFrontImage ? styles.imageBoxFilled : styles.imageBoxEmpty,
                                        styles.dottedBorder,
                                    ]}
                                    onPress={() => pickImage(setInsuranceFrontImage)}
                                >
                                    {insuranceFrontImage ? (
                                        <ImageBackground
                                            source={{ uri: insuranceFrontImage }}
                                            style={styles.imageThumbnail}
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                source={require('../../../assets/images/camera_icon.png')}
                                                style={styles.icon}
                                            />
                                            <Text style={styles.imageText}>Front</Text>
                                        </>
                                    )}
                                </TouchableOpacity>
                                <View style={{ margin: 8 }} />
                                <TouchableOpacity
                                    style={[
                                        styles.imageBox,
                                        insuranceBackImage ? styles.imageBoxFilled : styles.imageBoxEmpty,
                                        styles.dottedBorder,
                                    ]}
                                    onPress={() => pickImage(setInsuranceBackImage)}
                                >
                                    {insuranceBackImage ? (
                                        <ImageBackground
                                            source={{ uri: insuranceBackImage }}
                                            style={styles.imageThumbnail}
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                source={require('../../../assets/images/camera_icon.png')}
                                                style={styles.icon}
                                            />
                                            <Text style={styles.imageText}>Back</Text>
                                        </>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={() => navigation.navigate('VehicleDetails')}>
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
        margin: 35
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 40,
        width: '100%',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
    },
    subLabel: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageBox: {
        height: 90,
        width: 140,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBoxEmpty: {
        borderWidth: 1.5,
        borderColor: '#000',
    },
    imageBoxFilled: {
        borderWidth: 0,
    },
    dottedBorder: {
        borderStyle: 'dashed',
    },
    icon: {
        width: 24,
        height: 24,
    },
    imageText: {
        fontSize: 12,
        color: '#000',
        marginTop: 5,
    },
    imageThumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    continueButton: {
        alignSelf: 'center',
        height: 50,
        width: '100%',
        borderRadius: 8,
        marginTop: 60,
        marginBottom: 60,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default UploadDocument;