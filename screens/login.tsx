import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function LoginScreen() {
  const [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#f5c000" : "#FFDE6A",
          },
          styles.submit,
        ]}
        onPress={() => alert("login")}
      >
        <Text style={styles.submitText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebecef",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "Poppins_700Bold",
    marginBottom: 30,
  },
  input: {
    width: "70%",
    height: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 7,
    marginBottom: 15,
    fontFamily: "Poppins_400Regular",
  },
  submit: {
    borderRadius: 7,
    width: "70%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  submitText: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
});
