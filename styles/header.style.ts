import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingBottom: 30,
    height: 150,
    width: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  bg: {
    width: "100%",
  },
  black: {
    backgroundColor: colors.black,
  },
  logoTitle: {
    fontFamily: type.regular,
    fontSize: size.regular,
    fontWeight: "400",
  },
  logoContainer: {
    width: 120,
  },
  btn: {
    width: 40,
    height: 30,
    marginBottom: 10,
  },
  image: {
    height: 40,
    width: "auto",
    resizeMode: "contain",
  },
  btnImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
