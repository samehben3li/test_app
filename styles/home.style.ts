import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgSecondary,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  btn: {
    backgroundColor: colors.white,
    width: 220,
    marginVertical: 6,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 6,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.51,
    elevation: 15,
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  image2: {
    height: 22,
    width: 22,
    resizeMode: "contain",
  },
  btnText: {
    marginLeft: 10,
    fontFamily: type.semiBold,
    fontSize: size.regular,
  },
});
