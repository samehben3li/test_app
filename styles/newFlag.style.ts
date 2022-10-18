import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 15,
    margin: 20,
    marginBottom: 40,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 75,
    elevation: 40,
    borderRadius: 15,
  },
  image: {
    height: 30,
    width: 100,
    resizeMode: "contain",
    marginLeft: 5,
  },
  row: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  col: {
    backgroundColor: colors.white,
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 75,
    elevation: 20,
    overflow: "hidden",
  },
  title: {
    flex: 1,
    borderBottomColor: colors.blackOp,
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  selection: {
    flex: 2,
  },
  name: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  nameTxt: {
    color: colors.white,
    fontSize: size.medium,
    fontFamily: type.bold,
  },
  titleTxt: {
    textAlign: "center",
    fontFamily: type.semiBold,
    fontSize: size.small,
    lineHeight: 15,
    width: "90%",
  },
});
