import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  hint: {
    width: "90%",
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 10,
    fontFamily: type.bold,
    fontSize: size.small,
  },
  optionsContainer: {
    backgroundColor: colors.black,
    flex: 1,
    marginVertical: 10,
    width: "90%",
    borderRadius: 10,
    padding: 2,
  },
  title: {
    color: colors.white,
    textAlign: "center",
    paddingVertical: 7,
    fontFamily: type.bold,
    fontSize: size.medium,
  },
  options: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 8,
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
    flexWrap: "wrap",
    padding: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  optionContainer: {
    width: "33%",
    height: "50%",
    paddingHorizontal: 8,
    alignItems: "center",
  },
  btn: {
    backgroundColor: colors.white,
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 5,
  },
  image: {
    height: "55%",
    resizeMode: "contain",
  },
  optionName: {
    fontFamily: type.bold,
    fontSize: size.small,
  },
  selected: {
    backgroundColor: colors.gold,
    borderWidth: 2,
  },
});
