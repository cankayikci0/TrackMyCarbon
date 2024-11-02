import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // veya kullandığınız ikon kütüphanesi

const ChallengeScreen = () => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="bulb" size={24} color="black" />
          <Text style={styles.cardTitle}>Challenges</Text>
        </View>
        <View style={styles.cardBody}>
          <Text>Turn the light off</Text>
          <Text>When leaving</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="bulb" size={24} color="black" />
          <Text style={styles.cardTitle}>Challenges</Text>
        </View>
        <View style={styles.cardBody}>
          <Text>Turn the light off</Text>
          <Text>When leaving</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="bulb" size={24} color="black" />
          <Text style={styles.cardTitle}>Challenges</Text>
        </View>
        <View style={styles.cardBody}>
          <Text>Turn the light off</Text>
          <Text>When leaving</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  cardBody: {
    marginTop: 8,
  },
});

export default ChallengeScreen;
