import { Text, View, StyleSheet } from "react-native";
import i18n from "../i18n/translations";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t("utils.loading")}</Text>
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
