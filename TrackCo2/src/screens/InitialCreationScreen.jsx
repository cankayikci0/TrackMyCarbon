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
  const [carUsage, setCarUsage] = useState("");
  const [areaType, setAreaType] = useState("");
  const [publicTransport, setPublicTransport] = useState("");
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={images.InitialCreation}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>CO2 Emission Tracker</Text>

        <Text style={styles.label}>Kaç saat araba kullanıyorsun?</Text>
        <TextInput
          style={styles.input}
          placeholder="Saat giriniz"
          keyboardType="numeric"
          value={carUsage}
          onChangeText={setCarUsage}
        />

        <Text style={styles.label}>Kullandığın alan tipi</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={areaType}
            onValueChange={(itemValue) => setAreaType(itemValue)}
          >
            <Picker.Item label="Şehir" value="city" />
            <Picker.Item label="Kırsal" value="rural" />
            <Picker.Item label="Banliyö" value="suburban" />
          </Picker>
        </View>

        <Text style={styles.label}>Toplu taşıma kullanıyor musun?</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={publicTransport}
            onValueChange={(itemValue) => setPublicTransport(itemValue)}
          >
            <Picker.Item label="Evet" value="yes" />
            <Picker.Item label="Hayır" value="no" />
          </Picker>
        </View>

        <Text style={styles.label}>Toplu taşıma kullanıyor musun?</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={publicTransport}
            onValueChange={(itemValue) => setPublicTransport(itemValue)}
          >
            <Picker.Item label="Evet" value="yes" />
            <Picker.Item label="Hayır" value="no" />
          </Picker>
        </View>

        <View style={styles.finishButton}>
          <Button
            title="Finish"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(256,256,256,0.6)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#5d868e",
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#eae7e6",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#fff",
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#eae7e6",
  },
  finishButton: {
    marginVertical: 20,
  },
});

export default InitialCreationScreen;
