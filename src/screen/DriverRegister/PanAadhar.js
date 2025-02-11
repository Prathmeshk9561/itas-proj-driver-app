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
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

function PanAadhar({ navigation }) {
    const [rcFrontImage, setRcFrontImage] = useState(null);
    const [rcBackImage, setRcBackImage] = useState(null);
    const [permitFrontImage, setPermitFrontImage] = useState(null);
    const [permitBackImage, setPermitBackImage] = useState(null);
    const [vehicleOwner, setVehicleOwner] = useState('');

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
                    <Text style={styles.title}>PAN/AADHAR</Text>
                    <View style={styles.separator} />
                    <View style={styles.contentContainer}>

                        <View style={[styles.inputContainer, styles.pickerContainer]}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="person-sharp" size={24} color="white" />
                            </View>
                            <Picker
                                selectedValue={vehicleOwner}
                                style={styles.picker}
                                onValueChange={(itemValue) => setVehicleOwner(itemValue)}
                            >
                                <Picker.Item label="PAN/AADHAR" value="" color="#A9A9A9" enabled={false} />
                                <Picker.Item label="PAN" value="owner" />
                                <Picker.Item label="AADHAR" value="driver" />
                            </Picker>
                        </View>

                        {/* RC */}
                        <View style={styles.imageContainer}>
                            <Text style={styles.label}>If PAN</Text>
                            <Text style={styles.subLabel}>Upload PAN</Text>
                            <View style={styles.rowContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.imageBox,
                                        rcFrontImage ? styles.imageBoxFilled : styles.imageBoxEmpty,
                                        styles.dottedBorder,
                                    ]}
                                    onPress={() => pickImage(setRcFrontImage)}
                                >
                                    {rcFrontImage ? (
                                        <ImageBackground
                                            source={{ uri: rcFrontImage }}
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
                                        rcBackImage ? styles.imageBoxFilled : styles.imageBoxEmpty,
                                        styles.dottedBorder,
                                    ]}
                                    onPress={() => pickImage(setRcBackImage)}
                                >
                                    {rcBackImage ? (
                                        <ImageBackground
                                            source={{ uri: rcBackImage }}
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

                        {/* Permit */}
                        <View style={styles.imageContainer}>
                            <Text style={styles.label}>Aadhar Card</Text>
                            <Text style={styles.subLabel}>Upload Aadhar Card</Text>
                            <View style={styles.rowContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.imageBox,
                                        permitFrontImage ? styles.imageBoxFilled : styles.imageBoxEmpty,
                                        styles.dottedBorder,
                                    ]}
                                    onPress={() => pickImage(setPermitFrontImage)}
                                >
                                    {permitFrontImage ? (
                                        <ImageBackground
                                            source={{ uri: permitFrontImage }}
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
                                        permitBackImage ? styles.imageBoxFilled : styles.imageBoxEmpty,
                                        styles.dottedBorder,
                                    ]}
                                    onPress={() => pickImage(setPermitBackImage)}
                                >
                                    {permitBackImage ? (
                                        <ImageBackground
                                            source={{ uri: permitBackImage }}
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
                        onPress={() => navigation.navigate('MapScreen')}>
                        <Text style={styles.continueButtonText}>Submit</Text>
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
        justifyContent: 'space-evenly',
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
    pickerContainer: {
        height: 55,
    },
    picker: {
        flex: 1,
        height: '100%',
        color: '#333',
    },
    iconContainer: {
        width: 51,
        height: 55,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 364,
        height: 53,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },
    placeholderText: {
        color: '#A9A9A9',
    },
});

export default PanAadhar;