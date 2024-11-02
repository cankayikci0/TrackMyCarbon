import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Loading = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.closeButtonContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.closeButtonText}>X</Text>
      </Pressable>

      <ActivityIndicator size={"large"} color={"red"} />
      <Text style={styles.LoadingText}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  LoadingText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    flex: 1,
    position: "absolute",
    backgroundColor: "tomato",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonContainer: {
    backgroundColor: "grey",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    right: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  LoadingAreaText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
