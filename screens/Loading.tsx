import { Text, View, StyleSheet } from "react-native";
import i18n from "../i18n/tanslations";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t("loading")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
