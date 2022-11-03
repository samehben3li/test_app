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
    justifyContent: "flex-end",
  },
  doneImgContainer: {
    backgroundColor: colors.done,
    // padding: 50,
    // paddingVertical: 10,
    // paddingHorizontal: 70,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 50,
  },
  img: {
    height: 40,
    width: 70,
    resizeMode: "contain",
  },
});
