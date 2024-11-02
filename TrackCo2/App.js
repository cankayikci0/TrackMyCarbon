import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "./src/screens/LoginScreen";
import RegisterPage from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import InitialCreationScreen from "./src/screens/InitialCreationScreen";
import ChallengeScreen from "./src/screens/ChallengeScreen";
import LeaderboardScreen from "./src/screens/LeaderboardScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FactsScreen from "./src/screens/FactsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ChallengesScreen from "./src/screens/ChallengesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="InitialCreation"
          component={InitialCreationScreen}
          options={{ title: "InitialCreation" }}
        />
        <Stack.Screen
          name="Challenge"
          component={ChallengeScreen}
          options={{ title: "Challenge" }}
        />
        <Stack.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{ title: "Leaderboard" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "ProfileScreen" }}
        />
        <Stack.Screen
          name="ChallengesScreen"
          component={ChallengesScreen}
          options={{ title: "ChallengesScreen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
