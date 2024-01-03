import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList, Linking } from 'react-native';
import axios from 'axios';

const UserChatbot = () => {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'incoming', message: 'Hi there! 👋\nHow can I help you today?' },
  ]);
  const [userMessage, setUserMessage] = useState('');

  const chatInputRef = useRef(null);

  const handleSend = async () => {
    if (userMessage.trim() === '') return;

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, type: 'outgoing', message: userMessage },
    ]);

    try {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, type: 'incoming', message: 'Thinking...' },
      ]);

      const response = await axios.post("https://bullfrog-rich-recently.ngrok-free.app/chatbot", { "query": userMessage });
      const data = response.data;

      setChatMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, type: 'incoming', message: data["content"], links: data["references"] },
      ]);

    } catch (error) {
      console.error("Error fetching data:", error);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, type: 'incoming', message: 'Oops! Something went wrong. Please try again.' },
      ]);
    }

    setUserMessage('');
    chatInputRef.current.scrollToEnd();
  };

  const handleLinkPress = (url) => {
    if (url) {
      Linking.openURL(url);
    } else {
      console.warn("Link URL is undefined.");
    }
  };

  const renderMessageItem = ({ item }) => (
    <View style={[styles.chat, styles[item.type]]}>
      <Text style={styles.message}>{item.message}</Text>
      {item.links && (
        <View>
          {item.links.map((link, index) => (
            <TouchableOpacity key={index} onPress={() => handleLinkPress(link)}>
              <Text style={styles.link}>{link}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chatbot</Text>
      </View>

      <FlatList
        ref={chatInputRef}
        style={styles.chatbox}
        data={chatMessages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessageItem}
      />

      <View style={styles.chatInput}>
        <TextInput
          style={styles.input}
          placeholder="Enter a message..."
          placeholderTextColor={'black'}
          multiline
          value={userMessage}
          onChangeText={(text) => setUserMessage(text)}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Text style={styles.sendBtnText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// const styles = StyleSheet.create({
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e3f2fd',
      padding: 10,
    },
    header: {
      padding: 16,
      backgroundColor: '#1da1f2',
    },
    headerText: {
      fontSize: 18,
      color: '#fff',
    },
    chatbox: {
      flex: 1,
      marginVertical: 10,
    },
    chat: {
      padding: 12,
      borderRadius: 10,
      maxWidth: '75%',
      marginBottom: 10,
    },
    incoming: {
      alignSelf: 'flex-start',
      backgroundColor: '#f2f2f2',
    },
    outgoing: {
      alignSelf: 'flex-end',
      backgroundColor: '#1da1f2',
      color: '#fff',
    },
    message: {
      fontSize: 16,
      color: '#000',
    },
    messag:{
      color:'black',
    },
    chatInput: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      paddingVertical: 5,
    },
    input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      color:'black',
    },
    sendBtn: {
      marginLeft: 10,
      padding: 10,
      backgroundColor: '#1da1f2',
      borderRadius: 5,
    },
    sendBtnText: {
      color: '#fff',
    },
    chat: {
      padding: 12,
      borderRadius: 10,
      maxWidth: '75%',
      marginBottom: 10,
    },
    incoming: {
      alignSelf: 'flex-start',
      backgroundColor: '#f2f2f2',
    },
    outgoing: {
      alignSelf: 'flex-end',
      backgroundColor: '#1da1f2',
      color: '#fff',
    },
    message: {
      fontSize: 16,
      color: '#000',
      // color:'black',
    },
    messag: {
      color: 'black', 
    },
    link: {
      margin:10,
      color: 'blue', // Set the color to blue
      textDecorationLine: 'underline', // Add underline for better visibility
    },
})
export default UserChatbot;
