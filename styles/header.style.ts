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
    paddingBottom: 40,
    height: 170,
    width: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    shadowColor: colors.primary3,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 75,
    elevation: 40,
  },
  logoTitle: {
    fontFamily: type.regular,
    fontSize: size.small,
  },
  logoContainer: {
    width: 120,
  },
  btn: {
    width: 40,
    marginBottom: 10,
  },
  image: {
    height: 40,
    width: "auto",
    resizeMode: "contain",
  },
});
