import { View, Pressable, Image, Text } from "react-native";
import { homeStyles as styles } from "../styles";
import { Header } from "../components";
import { newFlagIcon, recentFlagsIcon, flagIcon, recentIcon } from "../assets";
import i18n from "../i18n/translations";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header home={true} />
      <View style={styles.main}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("createFlag")}
        >
          <Image style={styles.image} source={flagIcon} />
          <Text style={styles.btnText}>{i18n.t("home.new_flag")}</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("recentFlags")}
        >
          <Image style={styles.image2} source={recentIcon} />
          <Text style={styles.btnText}>{i18n.t("home.recent_flags")}</Text>
        </Pressable>
      </View>
    </View>
  );
}
