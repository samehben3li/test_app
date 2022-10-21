import { Text, View, Image, Pressable } from "react-native";
import i18n from "../i18n/tanslations";
import styles from "../styles/flagReady.style";
import helpIcon from "../assets/help.png";
import lunaHelperIcon from "../assets/lunaHelper.png";

export default function FlagReady() {
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <View style={styles.triangle}></View>
        <View style={styles.helpContainer}>
          <View style={styles.header}>
            <Image source={lunaHelperIcon} style={styles.imgWide} />
            <Image source={helpIcon} style={styles.imgIcon} />
          </View>
          <Text style={styles.helpText}>{i18n.t("makeChangesHelp")}</Text>
        </View>
      </View>
      <View style={styles.bottomPart}>
        <Text style={styles.confirmText}>{i18n.t("confirmSelection")}</Text>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>{i18n.t("createFlag")}</Text>
        </Pressable>
      </View>
    </View>
  );
}
