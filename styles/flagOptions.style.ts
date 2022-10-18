import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import { type, size } from "../theme/fonts";

export default StyleSheet.create({
  container: {
    flex: 1.8,
    backgroundColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
});
