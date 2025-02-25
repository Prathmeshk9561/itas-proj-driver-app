import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

const messages = [
  {
    id: "1",
    name: "Company Name",
    message: "If possible, can we avoid highways? I prefer city streets.",
    time: "9:40 AM",
    avatar: require("../../../assets/images/profile_icon.png"),
    unread: true,
  },
  {
    id: "2",
    name: "Rohan Jadhav",
    message: "Could you give me a quick call when you’re close?",
    time: "9:36 AM",
    avatar: require("../../../assets/images/profile_icon.png"),
    unread: true,
  },
  {
    id: "3",
    name: "Riya Mulla",
    message: "Traffic looks heavy. Is there another route you could take?",
    time: "9:28 AM",
    avatar: require("../../../assets/images/profile_icon.png"),
    unread: false,
  },
  {
    id: "4",
    name: "Trupti Raskar",
    message:
      "Can we make a quick stop on the way? I need to grab something fast.",
    time: "9:20 AM",
    avatar: require("../../../assets/images/profile_icon.png"),
    unread: false,
  },
  {
    id: "5",
    name: "Sunil Pawar",
    message:
      "Tabs make way more sense than spaces. Convince me I'm wrong. LOL.",
    time: "9:00 AM",
    avatar: require("../../../assets/images/profile_icon.png"),
    unread: false,
  },
];

const MessageScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">
          {item.message}
        </Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Header with Back Button & Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Message</Text>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 20,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "400",
  },
  message: {
    fontSize: 15,
    color: "gray",
    lineHeight: 20,
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 5,
  },
});

export default MessageScreen;
