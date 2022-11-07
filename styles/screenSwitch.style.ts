import { StyleSheet } from "react-native";
import colors from "../theme/colors";
// import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.black,
    // marginTop: -40,
    // paddingTop: 40,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    flexDirection: "row",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  btnBorder: {
    borderLeftColor: colors.goldOp,
    borderLeftWidth: 2,
  },
  image: {
    tintColor: colors.gold,
    height: "30%",
    resizeMode: "contain",
    opacity: 0.5,
  },
  selected: {
    opacity: 1,
  },
});
