import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  imgWide: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },
  imgIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  topPart: {
    flex: 1,
    width: 300,
    height: 100,
  },
  triangle: {
    width: 0,
    height: 0,
    borderRightWidth: 15,
    borderColor: "transparent",
    borderBottomWidth: 15,
    borderBottomColor: colors.white,
    zIndex: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
  },
  helpContainer: {
    backgroundColor: colors.white,
    height: "75%",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    padding: 15,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  helpText: {
    width: "80%",
    fontFamily: type.bold,
    fontSize: size.regular,
  },
  bottomPart: {
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmText: {
    fontFamily: type.bold,
    fontSize: size.small,
    textAlign: "center",
  },
  btn: {
    backgroundColor: colors.done,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 50,
    marginTop: 10,
    elevation: 5,
    borderRadius: 10,
  },
  btnText: {
    fontFamily: type.bold,
    fontSize: size.medium,
  },
  hint: {
    fontFamily: type.bold,
    fontSize: size.small,
    textAlign: "center",
    opacity: 0.5,
    marginTop: 10,
  },
});
