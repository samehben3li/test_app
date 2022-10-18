import { Text, View, Image } from "react-native";
import i18n from "../i18n/tanslations";
import styles from "../styles/newFlag.style";
import newFlagIcon from "../assets/newFlag.png";

export default function NewFlag() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={newFlagIcon} />
      <View style={styles.row}>
        <View style={styles.col}>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("riskCategory")}</Text>
          </View>
          <View style={styles.selection}></View>
          <View style={styles.name}>
            <Text style={styles.nameTxt}>?</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("pestType")}</Text>
          </View>
          <View style={styles.selection}></View>
          <View style={styles.name}>
            <Text style={styles.nameTxt}>?</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("plantPart")}</Text>
          </View>
          <View style={styles.selection}></View>
          <View style={styles.name}>
            <Text style={styles.nameTxt}>?</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{i18n.t("location")}</Text>
          </View>
          <View style={styles.selection}></View>
          <View style={styles.name}>
            <Text style={styles.nameTxt}>?</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
