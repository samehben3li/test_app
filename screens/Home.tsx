import { View, Pressable, Image } from "react-native";
import { homeStyles as styles } from "../styles";
import { Header } from "../components";
import { newFlagIcon, recentFlagsIcon } from "../assets";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header home={true} />
      <View style={styles.main}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("createFlag")}
        >
          <Image style={styles.image} source={newFlagIcon} />
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("recentFlags")}
        >
          <Image style={styles.image} source={recentFlagsIcon} />
        </Pressable>
      </View>
    </View>
  );
}
