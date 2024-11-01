import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login clicked", { email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Track My Carbon</Text>
        <Text style={styles.subtitle}>Log in to continue</Text>

        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          secureTextEntry
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.loginButton}
        >
          Login
        </Button>

        <Text style={styles.orText}>OR</Text>

        <View style={styles.socialContainer}>
          <Button
            icon="google"
            mode="outlined"
            onPress={() => console.log("Google Login")}
            style={styles.socialButton}
          >
            Google
          </Button>
          <Button
            icon="facebook"
            mode="outlined"
            onPress={() => console.log("Facebook Login")}
            style={styles.socialButton}
          >
            Facebook
          </Button>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f0f4f7",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a1a2e",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#1a73e8",
    paddingVertical: 5,
  },
  orText: {
    textAlign: "center",
    marginVertical: 15,
    color: "#6c757d",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  signupText: {
    textAlign: "center",
    color: "#1a73e8",
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default LoginScreen;
