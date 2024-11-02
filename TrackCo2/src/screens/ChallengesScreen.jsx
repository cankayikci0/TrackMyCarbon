import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import challenges from "../../dummyData/challenges";

const ChallengesScreen = () => {
  const handlePress = (challenge) => {
    // You can implement the function here
    console.log(`Pressed: ${challenge.title}`);
  };

  return (
    <ScrollView style={styles.container}>
      {challenges.map((challenge, index) => (
        <TouchableOpacity
          key={index}
          style={styles.challengeContainer}
          onPress={() => handlePress(challenge)}
        >
          <Image
            source={{ uri: `../assets/icons/${challenge.subtitle}.png` }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{challenge.title}</Text>
            <Text style={styles.carbonReduction}>
              Carbon Reduction: {challenge.carbonReduction} kg CO2
            </Text>
            <Text style={styles.points}>Points: {challenge.points}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E0F7FA", // Light sea green background
  },
  challengeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#FFFFFF", // White background for cards
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#4DB6AC", // Sea green border
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#00796B", // Dark sea green
  },
  carbonReduction: {
    color: "#455A64", // Dark grey for contrast
    marginTop: 4,
  },
  points: {
    color: "#455A64", // Dark grey for consistency
    marginTop: 2,
  },
});

export default ChallengesScreen;
