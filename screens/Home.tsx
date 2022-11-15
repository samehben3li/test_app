import { View, Pressable, Image, Text } from "react-native";
import { homeStyles as styles } from "../styles";
import { Header } from "../components";
import { flagIcon, recentIcon } from "../assets";

const Button = ({
  fn,
  icon,
  style,
}: {
  fn: () => void;
  icon: any;
  style: any;
}) => {
  return (
    <Pressable style={styles.btn} onPress={fn}>
      <Image style={style} source={icon} />
      <Text style={styles.btnText}>NEW FLAG</Text>
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
        />
        <Button
          style={styles.image2}
          icon={recentIcon}
          fn={() => navigation.navigate("recentFlags")}
        />
      </View>
    </View>
  );
}
