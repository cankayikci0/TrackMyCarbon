import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "./src/screens/LoginScreen";
import RegisterPage from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
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
          name="RecommendationScreen"
          component={RecommendationScreen}
          options={{ title: "RecommendationScreen" }}
        />
        <Stack.Screen
          name="Facts"
          component={FactsScreen}
          options={{ title: "Facts" }}
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
