import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

function CreateAccount({ navigation }) {
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false); // Close the date picker after a selection
        if (selectedDate) {
            // Format the date as dd-mm-yyyy
            const day = selectedDate.getDate().toString().padStart(2, '0');
            const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
            const year = selectedDate.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            setDob(formattedDate);
        }
    };


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? 'padding' : undefined}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                <View style={styles.container}>
                    <Text style={styles.title}>Create your account</Text>
                    <Text style={styles.subtitle}>Personal Info</Text>

                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="person-sharp" size={24} color="white" />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#A9A9A9"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="call" size={24} color="white" />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Phone"
                            placeholderTextColor="#A9A9A9"
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="mail" size={24} color="white" />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#A9A9A9"
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="calendar" size={24} color="white" />
                        </View>
                        <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
                            <Text style={[styles.dateText, !dob && styles.placeholderText]}>
                                {dob || 'DOB'}
                            </Text>
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={dob ? new Date(dob) : new Date()}
                                mode="date"
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                onChange={handleDateChange}
                            />
                        )}
                    </View>

                    <View style={[styles.inputContainer, styles.pickerContainer]}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="male-female" size={24} color="white" />
                        </View>
                        <Picker
                            selectedValue={gender}
                            style={styles.picker}
                            onValueChange={(itemValue) => setGender(itemValue)}
                        >
                            <Picker.Item label="Gender" value="" color="#A9A9A9" enabled={false} />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Other" value="other" />
                        </Picker>
                    </View>



                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="home" size={24} color="white" />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Address"
                            placeholderTextColor="#A9A9A9"
                        />
                    </View>

                    <TouchableOpacity style={styles.continueButton}
                        onPress={() => navigation.navigate('UploadDocument')}>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        marginTop: 80,
        fontSize: 16,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 50,
        marginBottom: 30,
    },
    iconContainer: {
        width: 51,
        height: 53,
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
    pickerContainer: {
        height: 53,
    },
    picker: {
        flex: 1,
        height: '100%',
        color: '#333',
    },
    input: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 10,
        fontSize: 14,
        justifyContent: 'center',
    },
    dateText: {
        color: '#333',
        fontSize: 14,
    },
    picker: {
        flex: 1,
        height: '100%',
    },
    placeholderText: {
        color: '#A9A9A9',
    },
    continueButton: {
        alignSelf: 'center',
        height: 49,
        width: 364,
        borderRadius: 8,
        marginTop: 100,
        backgroundColor: '#0A0A0A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CreateAccount;
