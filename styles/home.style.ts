import { StyleSheet } from "react-native";
import colors from "../theme/colors";
// import { type, size } from "../theme/fonts";

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
    borderRadius: 6,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  image: {
    width: "55%",
    resizeMode: "contain",
  },
  image2: {
    width: "60%",
    resizeMode: "contain",
  },
});
