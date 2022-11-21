import { View, Pressable, Image, Text } from "react-native";
import { homeStyles as styles } from "../styles";
import { Header } from "../components";
import { flagIcon, recentIcon } from "../assets";
import i18n from "../i18n/translations";

const Button = ({
  fn,
  icon,
  style,
  name,
}: {
  fn: () => void;
  icon: any;
  style: any;
  name: string;
}) => {
  return (
    <Pressable style={styles.btn} onPress={fn}>
      <Image style={style} source={icon} />
      <Text style={styles.btnText}>{name}</Text>
    </Pressable>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header home={true} />
      <View style={styles.main}>
        <Button
          style={styles.image}
          icon={flagIcon}
          fn={() => navigation.navigate("createFlag")}
          name={i18n.t("home.new_flag")}
        />
        <Button
          style={styles.image2}
          icon={recentIcon}
          fn={() => navigation.navigate("recentFlags")}
          name={i18n.t("home.recent_flags")}
        />
      </View>
    </View>
  );
}
