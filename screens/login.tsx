import { Text, View, TextInput, Pressable } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import styles from "../styles/login.style";
import { useValidation, defaultMessages } from "react-simple-form-validator";
import { LOGIN } from "../requests/mutations";
import { useMutation } from "@apollo/client";
import { authContextType } from "../types/interfaces";
import colors from "../theme/colors";

const LoginScreen = () => {
  const [loginUser] = useMutation(LOGIN);
  const { setAuth } = useContext(AuthContext) as authContextType;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    let timer: any;
    if (error) {
      timer = setTimeout(() => setError(""), 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const submitHandler = async () => {
    if (isFormValid) {
      try {
        setLoading(true);
        const data = await loginUser({ variables: { email, password } });
        setAuth(data.data.login);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setLoading(false);
          setError(err.message);
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.errorContainer}>
        {error && (
          <View style={styles.loginError}>
            <Text style={styles.loginErrorText}>{error}</Text>
          </View>
        )}
      </View>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Email Address"
      />
      <View style={styles.error}>
        {isFieldInError("email") &&
          email &&
          getErrorsInField("email").map(
            (errorMessage: string, index: number) => (
              <Text style={styles.errorText} key={index}>
                {errorMessage}
              </Text>
            )
          )}
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
          getErrorsInField("password").map(
            (errorMessage: string, index: number) => (
              <Text style={styles.errorText} key={index}>
                {errorMessage}
              </Text>
            )
          )}
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? colors.primary1dark : colors.primary1,
            opacity: isFormValid ? 1 : 0.7,
          },
          styles.submit,
        ]}
        onPress={submitHandler}
        disabled={!isFormValid || loading}
      >
        <Text style={styles.submitText}>{loading ? "..." : "Login"}</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
