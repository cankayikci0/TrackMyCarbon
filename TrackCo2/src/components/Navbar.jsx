import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navbarSub}
        onPress={() => navigation.navigate("Leaderboard")}
      >
        <Ionicons name="trophy-outline" size={24} color="white" />
        <Text style={styles.navbarText}>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarSub}
        onPress={() => navigation.navigate("Facts")}
      >
        <Ionicons name="cloud-outline" size={24} color="white" />
        <Text style={styles.navbarText}>Facts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarSub}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="home-outline" size={24} color="white" />
        <Text style={styles.navbarText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarSub}
        onPress={() => navigation.navigate("ChallengesScreen")}
      >
        <Ionicons name="rocket-outline" size={24} color="white" />
        <Text style={styles.navbarText}>Challenges</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarSub}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Ionicons name="person-outline" size={24} color="white" />
        <Text style={styles.navbarText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#4cb072",
    width: "100%",
    height: 80,
    alignItems: "center",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
  },
  navbarSub: {
    flexDirection: "column",
    alignItems: "center",
  },
  navbarText: {
    color: "white",
    fontSize: 12,
  },
});

export default Navbar;
