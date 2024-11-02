import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { images } from "../constants";
import { useNavigation } from "@react-navigation/native";

const InitialCreationScreen = () => {
  const navigation = useNavigation();

  // Transportation habits
  const [dailyDrivingHours, setDailyDrivingHours] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [publicTransportFrequency, setPublicTransportFrequency] = useState("");
  const [walkingCyclingDistance, setWalkingCyclingDistance] = useState("");

  // Housing energy consumption
  const [housingType, setHousingType] = useState("");
  const [heatingSystem, setHeatingSystem] = useState("");
  const [monthlyElectricityBill, setMonthlyElectricityBill] = useState("");
  const [monthlyWaterConsumption, setMonthlyWaterConsumption] = useState("");

  // Eating habits
  const [weeklyMeatConsumption, setWeeklyMeatConsumption] = useState("");
  const [dairyConsumptionFrequency, setDairyConsumptionFrequency] =
    useState("");
  const [vegetableFruitPreference, setVegetableFruitPreference] = useState("");

  // Shopping habits
  const [shoppingLocation, setShoppingLocation] = useState("");
  const [annualClothingPurchaseCount, setAnnualClothingPurchaseCount] =
    useState("");

  // Waste recycling
  const [newClothingFrequency, setNewClothingFrequency] = useState("");
  const [secondHandPreference, setSecondHandPreference] = useState(false);
  const [wasteRecycling, setWasteRecycling] = useState("");
  const [recyclingAtHome, setRecyclingAtHome] = useState(false);
  const [annualWasteEstimate, setAnnualWasteEstimate] = useState("");

  // Recyclable materials
  const [recyclableMaterials, setRecyclableMaterials] = useState({
    plastic: false,
    paper: false,
    glass: false,
  });

  // Travel habits
  const [annualFlightCount, setAnnualFlightCount] = useState("");
  const [
    preferredTransportDuringHolidays,
    setPreferredTransportDuringHolidays,
  ] = useState("");
  const [flightType, setFlightType] = useState("");

  const handleClick = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <ImageBackground
      source={images.InitialCreation}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>CO2 Emission Tracker</Text>

        {/* Transportation Habits */}
        <Text style={styles.label}>Daily driving hours:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter hours"
          keyboardType="numeric"
          value={dailyDrivingHours}
          onChangeText={setDailyDrivingHours}
        />

        <Text style={styles.label}>Type of vehicle:</Text>
        <Picker
          selectedValue={vehicleType}
          onValueChange={(itemValue) => setVehicleType(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select vehicle type" value="" />
          <Picker.Item label="Car" value="car" />
          <Picker.Item label="Truck" value="truck" />
          <Picker.Item label="Motorcycle" value="motorcycle" />
          <Picker.Item label="Bicycle" value="bicycle" />
        </Picker>

        <Text style={styles.label}>Fuel type:</Text>
        <Picker
          selectedValue={fuelType}
          onValueChange={(itemValue) => setFuelType(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select fuel type" value="" />
          <Picker.Item label="Gasoline" value="gasoline" />
          <Picker.Item label="Diesel" value="diesel" />
          <Picker.Item label="Electric" value="electric" />
          <Picker.Item label="Hybrid" value="hybrid" />
        </Picker>

        <Text style={styles.label}>Frequency of public transport use:</Text>
        <Picker
          selectedValue={publicTransportFrequency}
          onValueChange={(itemValue) => setPublicTransportFrequency(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select frequency" value="" />
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Rarely" value="rarely" />
        </Picker>

        <Text style={styles.label}>Walking or cycling distance (km):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter distance"
          keyboardType="numeric"
          value={walkingCyclingDistance}
          onChangeText={setWalkingCyclingDistance}
        />

        {/* Housing Energy Consumption */}
        <Text style={styles.label}>Type of housing:</Text>
        <Picker
          selectedValue={housingType}
          onValueChange={(itemValue) => setHousingType(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select housing type" value="" />
          <Picker.Item label="Apartment" value="apartment" />
          <Picker.Item label="House" value="house" />
          <Picker.Item label="Condo" value="condo" />
          <Picker.Item label="Townhouse" value="townhouse" />
        </Picker>

        <Text style={styles.label}>Heating system:</Text>
        <Picker
          selectedValue={heatingSystem}
          onValueChange={(itemValue) => setHeatingSystem(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select heating system" value="" />
          <Picker.Item label="Central" value="central" />
          <Picker.Item label="Electric" value="electric" />
          <Picker.Item label="Gas" value="gas" />
          <Picker.Item label="Wood" value="wood" />
        </Picker>

        <Text style={styles.label}>Monthly electricity bill (currency):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={monthlyElectricityBill}
          onChangeText={setMonthlyElectricityBill}
        />

        <Text style={styles.label}>Monthly water consumption (liters):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter consumption"
          keyboardType="numeric"
          value={monthlyWaterConsumption}
          onChangeText={setMonthlyWaterConsumption}
        />

        {/* Eating Habits */}
        <Text style={styles.label}>Weekly meat consumption (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter kg"
          keyboardType="numeric"
          value={weeklyMeatConsumption}
          onChangeText={setWeeklyMeatConsumption}
        />

        <Text style={styles.label}>Dairy consumption frequency:</Text>
        <Picker
          selectedValue={dairyConsumptionFrequency}
          onValueChange={(itemValue) => setDairyConsumptionFrequency(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select frequency" value="" />
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Rarely" value="rarely" />
        </Picker>

        <Text style={styles.label}>Do you prefer vegetables/fruits?</Text>
        <Picker
          selectedValue={vegetableFruitPreference}
          onValueChange={(itemValue) => setVegetableFruitPreference(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select option" value="" />
          <Picker.Item label="Yes" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>

        {/* Shopping Habits */}
        <Text style={styles.label}>Shopping location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter shopping location"
          value={shoppingLocation}
          onChangeText={setShoppingLocation}
        />

        <Text style={styles.label}>Annual clothing purchase count:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number"
          keyboardType="numeric"
          value={annualClothingPurchaseCount}
          onChangeText={setAnnualClothingPurchaseCount}
        />

        {/* Waste Recycling */}
        <Text style={styles.label}>Do you recycle at home?</Text>
        <Picker
          selectedValue={recyclingAtHome}
          onValueChange={(itemValue) => setRecyclingAtHome(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select option" value="" />
          <Picker.Item label="Yes" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>

        <Text style={styles.label}>Annual waste estimate (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter kg"
          keyboardType="numeric"
          value={annualWasteEstimate}
          onChangeText={setAnnualWasteEstimate}
        />

        {/* Travel Habits */}
        <Text style={styles.label}>Annual flight count:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number"
          keyboardType="numeric"
          value={annualFlightCount}
          onChangeText={setAnnualFlightCount}
        />

        <Text style={styles.label}>Preferred transport during holidays:</Text>
        <Picker
          selectedValue={preferredTransportDuringHolidays}
          onValueChange={(itemValue) =>
            setPreferredTransportDuringHolidays(itemValue)
          }
          style={styles.input}
        >
          <Picker.Item label="Select transport type" value="" />
          <Picker.Item label="Car" value="car" />
          <Picker.Item label="Train" value="train" />
          <Picker.Item label="Airplane" value="airplane" />
          <Picker.Item label="Bus" value="bus" />
        </Picker>

        <Text style={styles.label}>New clothing frequency:</Text>
        <Picker
          selectedValue={newClothingFrequency}
          onValueChange={(itemValue) => setNewClothingFrequency(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select frequency" value="" />
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Rarely" value="rarely" />
        </Picker>

        <Text style={styles.label}>Do you prefer second-hand clothing?</Text>
        <View style={styles.switchContainer}>
          <Picker
            selectedValue={secondHandPreference}
            onValueChange={(itemValue) => setSecondHandPreference(itemValue)}
            style={styles.input}
          >
            <Picker.Item label="No" value="no" />
            <Picker.Item label="Yes" value="yes" />
          </Picker>
          <Text>Yes</Text>
        </View>

        <Text style={styles.label}>Annual clothing purchase count:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number"
          keyboardType="numeric"
          value={annualClothingPurchaseCount}
          onChangeText={setAnnualClothingPurchaseCount}
        />

        <Text style={styles.label}>Waste Recycling:</Text>
        <Picker
          selectedValue={wasteRecycling}
          onValueChange={(itemValue) => setWasteRecycling(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select option" value="" />
          <Picker.Item label="Yes" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>

        <Text style={styles.label}>Select recyclable materials:</Text>
        <Picker
          selectedValue={recyclableMaterials}
          onValueChange={(itemValue) => setRecyclableMaterials(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Plastic" value="plastic" />
          <Picker.Item label="Paper" value="paper" />
          <Picker.Item label="Glass" value="glass" />
        </Picker>

        <Text style={styles.label}>Flight type:</Text>
        <Picker
          selectedValue={flightType}
          onValueChange={(itemValue) => setFlightType(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Select flight type" value="" />
          <Picker.Item label="Domestic" value="domestic" />
          <Picker.Item label="International" value="international" />
        </Picker>

        <Button title="Submit" onPress={() => handleClick()} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "rgba(256, 256, 256, 0.5)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 40,
    marginVertical: 5,
    backgroundColor: "rgba(256, 256, 256, 0.8)",
  },
});

export default InitialCreationScreen;
