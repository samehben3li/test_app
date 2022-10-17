import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: size.large,
    fontFamily: type.bold,
    marginBottom: 10,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    borderRadius: 7,
    marginTop: 15,
    fontFamily: type.regular,
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
    fontSize: size.medium,
    fontFamily: type.semiBold,
  },

  error: {
    width: "75%",
    height: 15,
    marginVertical: 5,
  },
  errorText: {
    color: colors.red,
    fontSize: size.small,
  },
  errorContainer: {
    height: 40,
    width: "80%",
  },
  loginError: {
    height: "100%",
    width: "100%",
    marginBottom: 15,
    borderRadius: 5,
    color: "red",
    backgroundColor: colors.errorBg,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  loginErrorText: {
    color: colors.errorTxt,
  },
});
