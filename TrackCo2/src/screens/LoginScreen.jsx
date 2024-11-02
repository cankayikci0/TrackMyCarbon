import React, { useEffect, useRef, useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Animated,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

import { images } from "../constants";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const rotateValue = useRef(new Animated.Value(0)).current;

  const handleLogin = () => {
    navigation.navigate("InitialCreation");
    console.log("Login clicked", { email, password });
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateValue]);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={images.LoginBackground} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Animated.Image
              style={[
                styles.logo,
                { transform: [{ rotate: rotateInterpolate }] },
              ]}
              source={images.AppLogo}
            />
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#5d868e",
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
