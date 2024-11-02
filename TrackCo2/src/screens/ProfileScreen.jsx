import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  // Örnek veri
  const username = "John Doe";
  const challengesCompleted = 12;
  const starsCount = 25;

  const carbonStats = {
    dailyFootprint: "71 lbs of CO₂",
    totalReduction: "150 lbs of CO₂",
    mealType: "Vegan",
    dietType: "Plant-Based",
    householdSize: "4",
    acUsage: "Yes",
    gasVehicle: "No",
    kmPerWeek: 150,
  };

  return (
    <View style={styles.container}>
      {/* Kullanıcı Adı */}
      <Text style={styles.username}>{username}</Text>

      {/* Challenges Completed ve Stars Count kutuları */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Challenges Completed</Text>
          <Text style={styles.statValue}>{challengesCompleted}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Stars Count</Text>
          <Text style={styles.statValue}>{starsCount}</Text>
        </View>
      </View>

      {/* Your Carbon Stats Bölümü */}
      <Text style={styles.sectionTitle}>Your Carbon Stats</Text>
      <View style={styles.statsBox}>
        {Object.entries(carbonStats).map(([key, value]) => (
          <View key={key} style={styles.statItemContainer}>
            <Text style={styles.statItemTitle}>{capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}:</Text>
            <Text style={styles.statItemValue}>{value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a9e5c", // Daha koyu bir arka plan rengi
    alignItems: "center",
    padding: 20,
  },
  username: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginVertical: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  statBox: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Yarı saydam beyaz kutu
    borderRadius: 15,
    elevation: 5,
    alignItems: 'center',
    shadowColor: "#000", // Gölge efekti
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  statTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#4a9e5c", // Başlık rengi
  },
  statValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c6b3f", // Değer rengi
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
    textAlign: 'center',
  },
  statsBox: {
    width: '100%',
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Yarı saydam beyaz kutu
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000", // Gölge efekti
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  statItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  statItemTitle: {
    fontSize: 16,
    color: "#333",
    fontWeight: '600',
  },
  statItemValue: {
    fontSize: 16,
    color: "#4a9e5c",
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
