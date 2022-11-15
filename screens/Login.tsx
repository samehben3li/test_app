import { Text, View, TextInput, Pressable } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { loginStyles as styles } from "../styles";
import { useValidation, defaultMessages } from "react-simple-form-validator";
import { LOGIN } from "../requests/mutations";
import { useMutation } from "@apollo/client";
import { authContextType } from "../types/interfaces";
import colors from "../theme/colors";
import i18n from "../i18n/translations";

const errorRefresh = (
  error: string,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  let timer: any;
  if (error) {
    timer = setTimeout(() => setError(""), 5000);
  }
  return () => {
    clearTimeout(timer);
  };
};

const FieldError = ({
  isFieldInError,
  getErrorsInField,
  state,
  filedName,
}: any) => {
  return (
    <View style={styles.error}>
      {isFieldInError(filedName) &&
        state &&
        getErrorsInField(filedName).map(
          (errorMessage: string, index: number) => (
            <Text style={styles.errorText} key={index}>
              {errorMessage}
            </Text>
          )
        )}
    </View>
  );
};

const SubmitButton = ({ loading, submitHandler, isFormValid }: any) => {
  return (
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
      <Text style={styles.submitText}>
        {loading ? "..." : i18n.t("login.login")}
      </Text>
    </Pressable>
  );
};

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
        email: i18n.t("login.invalidEmail"),
        minlength: i18n.t("login.inputLonger"),
        maxlength: i18n.t("login.inputShorter"),
        required: i18n.t("login.required"),
      },
    },
  });
  useEffect(() => {
    errorRefresh(error, setError);
  }, [error]);

  const submitHandler = async () => {
    try {
      setLoading(true);
      const data = await loginUser({ variables: { email, password } });
      setAuth(data.data.login);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      err instanceof Error &&
        setError(
          i18n.t(`errors.${err.message}`, { defaultValue: err.message })
        );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("login.welcome")}</Text>
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
        placeholder={i18n.t("login.email")}
      />
      <FieldError
        isFieldInError={isFieldInError}
        getErrorsInField={getErrorsInField}
        state={email}
        filedName="email"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry={true}
        placeholder={i18n.t("login.password")}
      />
      <FieldError
        isFieldInError={isFieldInError}
        getErrorsInField={getErrorsInField}
        state={password}
        filedName="password"
      />
      <SubmitButton
        loading={loading}
        submitHandler={submitHandler}
        isFormValid={isFormValid}
      />
    </View>
  );
};

export default LoginScreen;
