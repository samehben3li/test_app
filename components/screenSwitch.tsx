import { View, Pressable, Image } from "react-native";
import styles from "../styles/screenSwitch.style";
import newFlagIcon from "../assets/newFlag.png";
import recentFlagsIcon from "../assets/recentFlags.png";

export default function ScreenSwitch({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("createFlag")}
      >
        <Image style={styles.image} source={newFlagIcon} />
      </Pressable>
      <Pressable
        style={[
          styles.btn,
          styles.btnBorder,
          route?.name === "createFlag" && styles.selected,
        ]}
        onPress={() => navigation.navigate("recentFlags")}
      >
        <Image style={styles.image} source={recentFlagsIcon} />
      </Pressable>
    </View>
  );
}
