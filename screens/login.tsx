import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default function LoginScreen() {
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
            backgroundColor: pressed ? colors.primary1dark : colors.primary1,
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
    backgroundColor: colors.bgPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: size.large,
    fontFamily: type.bold,
    marginBottom: 30,
  },
  input: {
    width: "70%",
    height: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    borderRadius: 7,
    marginBottom: 15,
    fontFamily: type.regular,
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
    fontSize: size.medium,
    fontFamily: type.semiBold,
  },
});
