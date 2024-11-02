import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../components/Layout";

const RecommendationScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Recommended Challenges</Text>
        <View style={styles.challenges}>
          <Text style={styles.challengeText}>
            1. Carpool instead of driving by yourself
          </Text>
          <Text style={styles.challengeText}>2. Go vegan today</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6cd48a",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  emissionText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
  },
  breakdown: {
    marginBottom: 20,
    alignItems: "center",
  },
  breakdownText: {
    fontSize: 16,
    color: "white",
  },
  challenges: {
    alignItems: "center",
    marginBottom: 30,
  },
  challengeText: {
    fontSize: 16,
    color: "white",
  },
});

export default RecommendationScreen;
