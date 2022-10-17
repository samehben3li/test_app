import { StyleSheet } from "react-native";
import colors from "../theme/colors";
// import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    width: "60%",
    marginVertical: 10,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 75,
    elevation: 20,
  },
  image: {
    width: "60%",
    resizeMode: "contain",
  },
});
