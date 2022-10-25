import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgSecondary,
  },
  img: {
    height: 25,
    width: 40,
    resizeMode: "contain",
    marginLeft: 5,
    marginBottom: 5,
  },
  flagContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 160,
    borderRadius: 10,
    elevation: 40,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: size.small,
    fontFamily: type.bold,
  },
  grid: {
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
    elevation: 10,
    overflow: "hidden",
  },
  title: {
    flex: 1,
    borderBottomColor: colors.blackOp,
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  selection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    flex: 1,
    backgroundColor: colors.done,
    alignItems: "center",
    justifyContent: "center",
  },
  nameTxt: {
    color: colors.black,
    fontSize: size.extraSmall,
    fontFamily: type.bold,
    textAlign: "center",
  },
  titleTxt: {
    textAlign: "center",
    fontFamily: type.semiBold,
    fontSize: size.extraSmall,
    lineHeight: 15,
    width: "90%",
  },
  image: {
    height: 30,
    width: 100,
    resizeMode: "contain",
    marginLeft: 5,
    marginBottom: 5,
  },
  locationNameTxt: {
    color: colors.black,
    fontSize: size.small,
    fontFamily: type.bold,
    textAlign: "center",
    lineHeight: 10,
  },
  locationGrid: {
    height: "80%",
    width: "60%",
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    overflow: "hidden",
  },
  gridCol: {
    flex: 1,
  },
  gridItem: {
    borderWidth: 1,
    flex: 1,
  },
  gridSelected: {
    backgroundColor: colors.gold,
  },
  day: {
    backgroundColor: colors.black,
    width: 140,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    marginTop: 10,
    borderRadius: 20,
  },
  dayText: {
    color: colors.white,
    fontSize: size.light,
    fontFamily: type.semiBold,
  },
});
