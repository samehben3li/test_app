import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useValidation, defaultMessages } from "react-simple-form-validator";

interface Props {
  route: any;
  messages: any;
}
const LoginScreen = ({ route }: Props) => {
  const [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
    fieldsRules: {
      email: { email: true, required: true },
      password: { required: true, minlength: 7, maxlength: 20 },
    },
    state: { email, password },
    messages: {
      en: {
        ...defaultMessages.en,
        email: "Please enter a valid email",
        minlength: "Must be longer than {1}",
        maxlength: "Must be shorter than {1}",
        required: "Required",
      },
    },
  });

  const submitHandler = () => {};
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Email Address"
      />
      <View style={styles.error}>
        {isFieldInError("email") &&
          email &&
          getErrorsInField("email").map((errorMessage: any) => (
            <Text style={styles.errorText} key={Math.random().toString()}>
              {errorMessage}
            </Text>
          ))}
      </View>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
      />
      <View style={styles.error}>
        {isFieldInError("password") &&
          password &&
          getErrorsInField("password").map((errorMessage: any) => (
            <Text style={styles.errorText} key={Math.random().toString()}>
              {errorMessage}
            </Text>
          ))}
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#f5c000" : "#FFDE6A",
          },
          styles.submit,
        ]}
        onPress={submitHandler}
      >
        <Text style={styles.submitText}>Login</Text>
      </Pressable>
    </View>
  );
};

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
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 7,
    marginTop: 15,
    fontFamily: "Poppins_400Regular",
  },
  submit: {
    borderRadius: 7,
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  submitText: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
  error: {
    width: "75%",
    height: 15,
  },
  errorText: {
    color: "red",
    fontSize: 10,
  },
});

export default LoginScreen;
