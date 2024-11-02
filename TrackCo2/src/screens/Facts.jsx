import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

// Dummy data for icons
const iconPrompts = [
  {
    title: "Turn off lights when leaving a room",
    url: "https://via.placeholder.com/150?text=Light+Off",
  },
  {
    title: "Unplug devices when not in use",
    url: "https://via.placeholder.com/150?text=Unplug+Device",
  },
  {
    title: "Use public transport once a week",
    url: "https://via.placeholder.com/150?text=Public+Transport",
  },
  {
    title: "Carpool to work or school",
    url: "https://via.placeholder.com/150?text=Carpool",
  },
  // Add more dummy icons as needed...
];

const Facts = () => {
  const renderItem = ({ item }) => (
    <View style={styles.iconCard}>
      <Image source={{ uri: item.url }} style={styles.iconImage} />
      <Text style={styles.iconTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommendations</Text>
      <FlatList
        data={iconPrompts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.iconGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  iconGrid: {
    justifyContent: "space-between",
  },
  iconCard: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
  },
  iconImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  iconTitle: {
    textAlign: "center",
  },
});

export default Facts;

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   ScrollView,
//   ImageBackground,
//   Image,
// } from "react-native";
// import * as Animatable from "react-native-animatable";
// import { images } from "../constants";

// const recommendations = {
//   travel: ["Visit Paris", "Explore the mountains", "Take a beach holiday"],
//   food: ["Try sushi", "Visit a local bakery", "Taste authentic Italian pizza"],
//   technology: [
//     "Learn React Native",
//     "Try out the latest smartphone",
//     "Explore AI trends",
//   ],
// };

// const getRecommendations = (message) => {
//   const keywords = Object.keys(recommendations);
//   for (let keyword of keywords) {
//     if (message.toLowerCase().includes(keyword)) {
//       return recommendations[keyword];
//     }
//   }
//   return ["I'm not sure how to help with that."];
// };

// const ChatAssistant = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([
//     {
//       id: "1",
//       text: "Merhaba! Ben AI Asistanınız. Size nasıl yardımcı olabilirim?",
//       sender: "ai",
//     },
//   ]);

//   const sendMessage = () => {
//     if (message.trim()) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { id: Date.now().toString(), text: message, sender: "user" },
//       ]);

//       setTimeout(() => {
//         const aiResponse = getRecommendations(message);
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           {
//             id: Date.now().toString() + "ai",
//             text: aiResponse.join(", "),
//             sender: "ai",
//           },
//         ]);
//       }, 1000);
//       setMessage("");
//       Keyboard.dismiss();
//     }
//   };

//   return (
//     <ImageBackground
//       source={images.LoginBackground} // Arka plan resmi
//       style={styles.container}
//     >
//       <KeyboardAvoidingView
//         style={styles.innerContainer}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
//       >
//         <Text style={styles.title}>AI Chat Assistant</Text>
//         <ScrollView
//           contentContainerStyle={styles.messagesList}
//           keyboardShouldPersistTaps="handled"
//         >
//           {messages.map((item) => (
//             <Animatable.View
//               key={item.id}
//               style={[
//                 styles.messageContainer,
//                 item.sender === "user" ? styles.userMessage : styles.aiMessage,
//               ]}
//               animation={item.sender === "user" ? "fadeInRight" : "fadeInLeft"}
//               duration={300}
//             >
//               {item.sender === "user" ? (
//                 <View style={styles.userMessageContent}>
//                   <Image source={images.UserIcon} style={styles.userPhoto} />
//                   <Text style={styles.messageText}>{item.text}</Text>
//                 </View>
//               ) : (
//                 <View style={styles.aiMessageContent}>
//                   <Image
//                     source={{
//                       uri: "https://your-ai-photo-url.com/ai-photo.jpg",
//                     }}
//                     style={styles.aiPhoto}
//                   />
//                   <Text style={styles.messageText}>{item.text}</Text>
//                 </View>
//               )}
//             </Animatable.View>
//           ))}
//         </ScrollView>
//         <View style={styles.messageField}>
//           <TextInput
//             style={styles.input}
//             value={message}
//             onChangeText={setMessage}
//             placeholder="Mesajınızı yazın..."
//             placeholderTextColor="#888"
//             onSubmitEditing={sendMessage}
//             returnKeyType="send"
//           />
//           <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//             <Text style={styles.sendButtonText}>Gönder</Text>
//           </TouchableOpacity>
//         </View>
//         <Image
//           source={{
//             uri: "https://your-ai-assistant-image-url.com/assistant-image.png",
//           }} // AI asistan karakteri
//           style={styles.assistantImage}
//         />
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   innerContainer: {
//     flex: 1,
//     padding: 16,
//     justifyContent: "flex-end",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//     color: "#333",
//   },
//   messagesList: {
//     flexGrow: 1,
//     justifyContent: "flex-end",
//   },
//   messageContainer: {
//     padding: 10,
//     borderRadius: 10,
//     marginVertical: 5,
//     maxWidth: "80%",
//     flexDirection: "row",
//     alignItems: "flex-end",
//   },
//   userMessage: {
//     alignSelf: "flex-end",
//     backgroundColor: "#007bff",
//   },
//   aiMessage: {
//     alignSelf: "flex-start",
//     backgroundColor: "#e5e5e5",
//   },
//   userMessageContent: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   aiMessageContent: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   userPhoto: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   aiPhoto: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   messageText: {
//     fontSize: 16,
//     color: "#fff",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     padding: 10,
//     backgroundColor: "#fff",
//     flex: 1,
//   },
//   sendButton: {
//     backgroundColor: "#007bff",
//     borderRadius: 10,
//     padding: 10,
//     alignItems: "center",
//     marginLeft: 8,
//   },
//   sendButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   messageField: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   assistantImage: {
//     width: 100,
//     height: 100,
//     alignSelf: "center",
//     marginBottom: 10,
//   },
// });

// export default ChatAssistant;
