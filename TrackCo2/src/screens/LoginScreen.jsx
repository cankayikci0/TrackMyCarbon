import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

import { images } from "../constants";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
    console.log("Login clicked", { email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={images.LoginBackground} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Track My Carbon</Text>
            <Text style={styles.subtitle}>Log in to continue</Text>

            <TextInput
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              theme={{ colors: { primary: "#4caf50" } }}
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              style={styles.input}
              theme={{ colors: { primary: "#4caf50" } }}
            />

            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.loginButton}
              color="#4caf50"
            >
              Login
            </Button>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.routerText}>
                Don't have an account?{" "}
                <Text style={styles.signupText}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  content: {
    backgroundColor: "rgba(256,256,256,0.8)",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#5d868e",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#84baae",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    opacity: 0.8,
    borderRadius: 10,
  },
  loginButton: {
    paddingVertical: 5,
    backgroundColor: "#4caf50",
  },
  routerText: {
    textAlign: "center",
    color: "#85af5e",
    marginTop: 20,
  },
  signupText: {
    textAlign: "center",
    color: "#629249",
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default LoginScreen;
