import { View, Pressable, Image } from "react-native";
import { screenSwitchStyles as styles } from "../styles";
import { newFlagIcon, recentFlagsIcon } from "../assets";

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
