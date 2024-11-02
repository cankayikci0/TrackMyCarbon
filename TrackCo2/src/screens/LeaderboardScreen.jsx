import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const users = [
  {
    id: "1",
    name: "Alice",
    score: 980,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "Bob",
    score: 950,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "Charlie",
    score: 870,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Daisy",
    score: 830,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "5",
    name: "Edward",
    score: 790,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Leaderboard = () => {
  const renderPodium = (user, index) => (
    <View style={[styles.podiumItem, styles[`podium${index + 1}`]]}>
      <Text style={styles.rank}>{index + 1}</Text>
      <Image source={{ uri: user.avatar }} style={styles.avatarLarge} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.score}>{user.score} pts</Text>
    </View>
  );

  const renderList = ({ item, index }) => {
    if (index < 3) return null;
    return (
      <View style={styles.listItem}>
        <Text style={styles.rank}>{index + 1}</Text>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.score}>{item.score} pts</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7ED4AD", "#21CBF3"]}
        style={styles.background}
      />
      <Text style={styles.title}>Leaderboard</Text>

      <View style={styles.podiumContainer}>
        {users.slice(0, 3).map((user, index) => renderPodium(user, index))}
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderList}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  podiumContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  podiumItem: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: 80,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  podium1: {
    backgroundColor: "#ffd700",
    height: 120,
  },
  podium2: {
    backgroundColor: "#c0c0c0",
    height: 100,
  },
  podium3: {
    backgroundColor: "#cd7f32",
    height: 80,
  },
  rank: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  avatarLarge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  score: {
    fontSize: 12,
    color: "#fff",
  },
  listContainer: {
    paddingTop: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DAD4B5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  score: {
    fontSize: 14,
    color: "#888",
  },
});

export default Leaderboard;
