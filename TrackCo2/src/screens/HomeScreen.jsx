import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const TreeWithLeavesAndAnimation = () => {
  const [leaves, setLeaves] = useState([]);

  const addLeaf = () => {
    const treeWidth = 100;
    const treeHeight = 280;
    const leafRadius = 15;

    const minHeight = treeHeight / 2;
    const maxHeight = treeHeight - leafRadius * 2;
    const randomHeight =
      Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    const randomOffset = Math.floor(Math.random() * 141) - 70;

    const newLeaf = {
      id: leaves.length,
      top: randomHeight,
      left: (screenWidth - treeWidth) / 2 + randomOffset + leafRadius,
    };

    setLeaves((prevLeaves) => [...prevLeaves, newLeaf]);

    // Eğer yaprak sayısı 20'ye ulaşırsa resetle
    if (leaves.length + 1 >= 20) {
      resetLeaves();
    }
  };

  const resetLeaves = () => {
    // Yaprakları temizle
    setLeaves([]);
  };

  useEffect(() => {
    addLeaf(); // İlk yaprağı ekle
  }, []);

  return (
    <Layout>
      <View style={styles.container}>
        <Image
          source={require("../assets/tree.png")}
          style={styles.treeImage}
        />
        {leaves.map((leaf) => (
          <Image
            key={leaf.id}
            source={require("../assets/leaf.png")}
            style={[styles.leaf, { top: leaf.top, left: leaf.left }]}
          />
        ))}
        <View style={styles.touchArea} onTouchStart={addLeaf} />

        <Text style={styles.title}>Daily Emissions</Text>
        <View style={styles.circle}>
          <Text style={styles.emissionText}>71 lbs of CO₂</Text>
        </View>
        <Text style={styles.subtitle}>What makes up your footprint?</Text>
        <View style={styles.breakdown}>
          <Text style={styles.breakdownText}>Electricity and Gas: 40%</Text>
          <Text style={styles.breakdownText}>Home Heating/AC: 35%</Text>
          <Text style={styles.breakdownText}>Transportation: 15%</Text>
          <Text style={styles.breakdownText}>Diet: 9%</Text>
        </View>

        {/* Coin ve Star bölümü */}
        <View style={styles.topRightContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/coin.png")}
              style={[styles.icon, { transform: [{ rotate: "90deg" }] }]}
            />
            <Text style={styles.iconText}>100</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require("../assets/star.png")} style={styles.icon} />
            <Text style={styles.iconText}>5</Text>
          </View>
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
  leaf: {
    width: 30,
    height: 30,
    position: "absolute",
    resizeMode: "contain",
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
  treeImage: {
    width: 300,
    height: 400,
    resizeMode: "contain",
  },
  touchArea: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  topRightContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  iconText: {
    fontSize: 16,
    color: "white",
    marginLeft: 5,
  },
});

export default TreeWithLeavesAndAnimation;
