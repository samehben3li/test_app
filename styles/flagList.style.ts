import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgSecondary,
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginLeft: 5,
    marginBottom: 5,
  },
  flagContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 140,
    borderRadius: 10,
    elevation: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    width: "100%",
    justifyContent: "space-between",
  },
  flagTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagName: {
    backgroundColor: colors.gold,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginTop: -3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flagNameText: {
    fontFamily: type.bold,
    fontSize: size.extraSmall,
  },
  shapeIcon: {
    height: 10,
    resizeMode: "contain",
  },
  date: {
    fontSize: size.small,
    fontFamily: type.bold,
    marginBottom: 5,
    marginLeft: 5,
  },
  grid: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  col: {
    backgroundColor: colors.done,
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  title: {
    flex: 1,
    borderBottomColor: colors.blackOp,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderTopEndRadius: 3,
    borderTopStartRadius: 3,
  },
  selection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderBottomEndRadius: 3,
    borderBottomStartRadius: 3,
  },
  name: {
    flex: 1,
    backgroundColor: colors.done,
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  nameTxt: {
    color: colors.black,
    fontSize: size.thin,
    fontFamily: type.bold,
    textAlign: "center",
  },
  titleTxt: {
    textAlign: "center",
    fontFamily: type.semiBold,
    fontSize: size.thin,
    lineHeight: 10,
    width: "90%",
  },
  image: {
    height: 25,
    width: 100,
    resizeMode: "contain",
    marginLeft: 5,
    marginBottom: 5,
  },
  locationNameTxt: {
    color: colors.black,
    fontSize: size.thin,
    fontFamily: type.bold,
    textAlign: "center",
  },
  locationGrid: {
    height: "80%",
    width: "50%",
    borderWidth: 0.5,
    borderRadius: 3,
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
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  dayText: {
    color: colors.white,
    fontSize: size.light,
    fontFamily: type.semiBold,
  },
});
