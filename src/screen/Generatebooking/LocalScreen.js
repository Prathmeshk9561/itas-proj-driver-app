import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

function LocalScreen({ navigation }) {
    const [partnerName, setPartnerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [dutyType, setDutyType] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [kilometers, setKilometers] = useState('');
    const [baseFare, setBaseFare] = useState('');
    const [exHrRate, setExHrRate] = useState('');
    const [exKmRate, setExKmRate] = useState('');
    const [partnerCommission, setPartnerCommission] = useState('');
    const [additionalNote, setAdditionalNote] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(false);
        setTime(currentTime);
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
                    <Text style={styles.title}>Local</Text>
                    <View style={styles.separator} />

                    {/* Form Container */}
                    <View style={styles.formContainer}>
                        {/* Partner Name */}
                        <Text style={styles.label}>Partner Name</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="person-outline" size={26} color="#999" style={styles.icon} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Partner Name"
                                placeholderTextColor="#999"
                                value={partnerName}
                                onChangeText={setPartnerName}
                            />
                        </View>

                        {/* Contact Number */}
                        <Text style={styles.label}>Contact Number</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="call-outline" size={26} color="#999" style={styles.icon} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Contact Number"
                                placeholderTextColor="#999"
                                keyboardType="phone-pad"
                                value={contactNumber}
                                onChangeText={setContactNumber}
                            />
                        </View>

                        {/* Duty Type and Vehicle Type */}
                        <View style={styles.row}>
                            <View style={styles.halfInputContainer}>
                                <Text style={styles.label}>Duty Type</Text>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="briefcase-outline" size={26} color="#999" style={styles.icon} />
                                    <Picker
                                        selectedValue={dutyType}
                                        onValueChange={(itemValue) => setDutyType(itemValue)}
                                        style={styles.picker}>
                                        <Picker.Item label="Select Duty Type" value="" enabled={false} />
                                        <Picker.Item label="Duty Type 1" value="duty1" />
                                        <Picker.Item label="Duty Type 2" value="duty2" />
                                    </Picker>
                                </View>
                            </View>

                            <View style={styles.halfInputContainer}>
                                <Text style={styles.label}>Vehicle Type</Text>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="car-outline" size={26} color="#999" style={styles.icon} />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Vehicle Type"
                                        placeholderTextColor="#999"
                                        value={vehicleType}
                                        onChangeText={setVehicleType}
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Pickup Location and Drop Location */}
                        <View style={styles.row}>
                            <View style={styles.halfInputContainer}>
                                <Text style={styles.label}>Pickup Location</Text>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="location-outline" size={26} color="#999" style={styles.icon} />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Pickup Location"
                                        placeholderTextColor="#999"
                                        value={pickupLocation}
                                        onChangeText={setPickupLocation}
                                    />
                                </View>
                            </View>
                            <View style={styles.halfInputContainer}>
                                <Text style={styles.label}>Drop Location</Text>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="pin-outline" size={26} color="#999" style={styles.icon} />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Drop Location"
                                        placeholderTextColor="#999"
                                        value={dropLocation}
                                        onChangeText={setDropLocation}
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Date */}
                        <View style={styles.row}>
                            <View style={styles.halfInputContainer}>
                                <Text style={styles.label}>Date</Text>
                                <TouchableOpacity
                                    style={styles.inputContainer}
                                    onPress={() => setShowDatePicker(true)}>
                                    <Ionicons name="calendar-outline" size={24} color="#999" />
                                    <Text style={styles.textInput}>
                                        {date.toLocaleDateString()}
                                    </Text>
                                </TouchableOpacity>
                                {showDatePicker && (
                                    <DateTimePicker
                                        value={date}
                                        mode="date"
                                        display="default"
                                        onChange={handleDateChange}
                                    />
                                )}
                            </View>

                            <View style={styles.halfInputContainer}>
                                 <Text style={styles.label}>Time</Text>
                                 <TouchableOpacity
                                    style={styles.inputContainer}
                                    onPress={() => setShowTimePicker(true)}>
                                    <Ionicons name="time-outline" size={24} color="#999" />
                                    <Text style={styles.textInput}>
                                        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </Text>
                                </TouchableOpacity>
                                {showTimePicker && (
                                    <DateTimePicker
                                        value={time}
                                        mode="time"
                                        display="default"
                                        onChange={handleTimeChange}
                                    />
                                )}
                            </View>
                        </View>

                        {/* Kilometers and Base Fare */}
                        <View style={styles.row}>
                            <View style={styles.halfInputContainer}>
                                <Text style={styles.label}>Kilometers</Text>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="navigate-outline" size={26} color="#999" style={styles.icon} />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Kilometers"
                                        placeholderTextColor="#999"
                                        value={kilometers}
                                        onChangeText={setKilometers}
                                    />
                                </View>
                            </View>
                            <View style={styles.halfInputContainer}>
                                <Text style={styles.label}>Base Fare</Text>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="cash-outline" size={26} color="#999" style={styles.icon} />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Base Fare"
                                        placeholderTextColor="#999"
                                        value={baseFare}
                                        onChangeText={setBaseFare}
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Ex-Hr Rate and Ex-Km Rate */}
                        <View style={styles.row}>
                            <View style={styles.halfInputContainer}>
                                <Text style={styles.label}>Ex-Hr Rate</Text>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="hourglass-outline" size={26} color="#999" style={styles.icon} />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Ex-Hr Rate"
                                        placeholderTextColor="#999"
                                        value={exHrRate}
                                        onChangeText={setExHrRate}
                                    />
                                </View>
                            </View>
                            <View style={styles.halfInputContainer}>
                                <Text style={styles.label}>Ex-Km Rate</Text>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="speedometer-outline" size={26} color="#999" style={styles.icon} />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Ex-Km Rate"
                                        placeholderTextColor="#999"
                                        value={exKmRate}
                                        onChangeText={setExKmRate}
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Partner Commission */}
                        <Text style={styles.label}>Partner Commission</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="wallet-outline" size={26} color="#999" style={styles.icon} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Partner Commission"
                                placeholderTextColor="#999"
                                value={partnerCommission}
                                onChangeText={setPartnerCommission}
                            />
                        </View>

                        {/* Additional Note */}
                        <TextInput
                            style={styles.additionalNoteInput}
                            placeholder="Additional Note"
                            placeholderTextColor="#8F9BB3"
                            value={additionalNote}
                            onChangeText={setAdditionalNote}
                            multiline
                            textAlignVertical="top"
                        />
                        <TouchableOpacity style={styles.continueButton}
                            onPress={() => navigation.navigate('')}>
                            <Text style={styles.continueButtonText}>Submit Trip</Text>
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
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 20,
        width: '100%',
    },
    formContainer: {
        borderWidth: 1,
        borderColor: '#4285F4',
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 13,
        color: '#333',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 20,

    },
    textInput: {
        flex: 1,
        fontSize: 13,
        color: '#333',
        marginLeft: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInputContainer: {
        width: '48%',
    },
    picker: {
        flex: 1,
    },
    additionalNoteInput: {
        height: 108,
        backgroundColor: '#F7F9FC',
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        textAlignVertical: 'top',
        color: '#333',
    },
    continueButton: {
        alignSelf: 'center',
        height: 49,
        width: 232,
        borderRadius: 8,
        backgroundColor: '#0A0A0A',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    continueButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    
});

export default LocalScreen;
