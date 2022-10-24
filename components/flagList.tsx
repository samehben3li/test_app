import { Text, View, ScrollView, Image } from "react-native";
import i18n from "../i18n/tanslations";
import styles from "../styles/flagList.style";
import flagIcon from "../assets/flag.png";
import bugIcon from "../assets/bug.png";
import { list } from "../screens/options";

export default function FlagList() {
  return (
    <ScrollView style={styles.container}>
      {list.map((item, index) => (
        <View key={index} style={styles.flagContainer}>
          <View style={styles.header}>
            <Image source={flagIcon} style={styles.img} />
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.grid}>
            <View style={styles.col}>
              <View style={styles.title}>
                <Text style={styles.titleTxt}>{i18n.t("riskCategory")}</Text>
              </View>
              <View style={styles.selection}>
                <Image style={styles.image} source={bugIcon} />
              </View>
              <View style={styles.name}>
                <Text style={styles.nameTxt}>{item.risk}</Text>
              </View>
            </View>
            <View style={styles.col}>
              <View style={styles.title}>
                <Text style={styles.titleTxt}>{i18n.t("pestType")}</Text>
              </View>
              <View style={styles.selection}>
                <Image style={styles.image} source={bugIcon} />
              </View>
              <View style={styles.name}>
                <Text style={styles.nameTxt}>{item.type}</Text>
              </View>
            </View>
            <View style={styles.col}>
              <View style={styles.title}>
                <Text style={styles.titleTxt}>{i18n.t("plantPart")}</Text>
              </View>
              <View style={styles.selection}>
                <Image style={styles.image} source={bugIcon} />
              </View>
              <View style={styles.name}>
                <Text style={styles.nameTxt}>{item.part}</Text>
              </View>
            </View>
            <View style={styles.col}>
              <View style={styles.title}>
                <Text style={styles.titleTxt}>{i18n.t("location")}</Text>
              </View>
              <View style={styles.selection}>
                <Image style={styles.image} source={bugIcon} />
              </View>
              <View style={styles.name}>
                <Text style={styles.nameTxt}>{item.location}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
