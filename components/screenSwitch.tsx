import { Text, View, Pressable, Image } from "react-native";
import styles from "../styles/screenSwitch.style";
import newFlagIcon from "../assets/newFlag.png";
import recentFlagsIcon from "../assets/recentFlags.png";

export default function ScreenSwitch({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("createFlag")}
      >
        <Image style={styles.image} source={newFlagIcon} />
      </Pressable>
      <Pressable
        style={[styles.btn, styles.btnBorder]}
        onPress={() => navigation.navigate("recentFlags")}
      >
        <Image style={styles.image} source={recentFlagsIcon} />
      </Pressable>
    </View>
  );
}
