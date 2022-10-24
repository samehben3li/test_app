import { View, Pressable, Image, Text } from "react-native";
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
        <Image
          style={[styles.image, route.name === "createFlag" && styles.selected]}
          source={newFlagIcon}
        />
      </Pressable>
      <Pressable
        style={[styles.btn, styles.btnBorder]}
        onPress={() => navigation.navigate("recentFlags")}
      >
        <Image
          style={[
            styles.image,
            route.name === "recentFlags" && styles.selected,
          ]}
          source={recentFlagsIcon}
        />
      </Pressable>
    </View>
  );
}
