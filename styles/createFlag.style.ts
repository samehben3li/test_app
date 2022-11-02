import { StyleSheet } from "react-native";
import colors from "../theme/colors";
// import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgSecondary,
  },
  done: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  doneImgContainer: {
    backgroundColor: colors.done,
    borderRadius: 200,
    padding: 50,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
});
