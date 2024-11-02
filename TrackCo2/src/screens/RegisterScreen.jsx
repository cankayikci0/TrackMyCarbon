import React, { useEffect, useRef, useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";
import { Text, TextInput, Button, Snackbar } from "react-native-paper";
import { images } from "../constants";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const rotateValue = useRef(new Animated.Value(0)).current;

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setErrorVisible(true);
      return;
    }
    console.log("Register clicked", { email, password, confirmPassword });
    // Add registration logic here

    navigation.navigate("InitialCreation");
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
        <KeyboardAvoidingView
          style={styles.avoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.content}>
              <Animated.Image
                style={[
                  styles.logo,
                  { transform: [{ rotate: rotateInterpolate }] },
                ]}
                source={images.AppLogo}
              />
              <Text style={styles.subtitle}>Create an account</Text>
              <TextInput
                label="Name"
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.input}
                theme={{ colors: { primary: "#4caf50" } }}
              />
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
              <TextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
                style={styles.input}
                theme={{ colors: { primary: "#4caf50" } }}
              />

              <Button
                mode="contained"
                onPress={handleRegister}
                style={styles.registerButton}
                color="#4caf50"
              >
                Register
              </Button>

              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.routerText}>
                  Already have an account?{" "}
                  <Text style={styles.loginText}>Log In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Snackbar
            visible={errorVisible}
            onDismiss={() => setErrorVisible(false)}
            duration={3000}
            style={styles.snackbar}
          >
            {errorMessage}
          </Snackbar>
        </KeyboardAvoidingView>
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
  avoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
  content: {
    backgroundColor: "rgba(256,256,256,0.8)",
    padding: 20,
    borderRadius: 10,
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
  registerButton: {
    paddingVertical: 5,
    backgroundColor: "#4caf50",
  },
  routerText: {
    textAlign: "center",
    color: "#85af5e",
    marginTop: 20,
  },
  loginText: {
    textAlign: "center",
    color: "#629249",
    marginTop: 20,
    fontWeight: "bold",
  },
  snackbar: {
    backgroundColor: "#d9534f",
  },
});

export default RegisterScreen;
