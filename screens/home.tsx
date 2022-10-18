import { View, Pressable, Image } from "react-native";
import styles from "../styles/home.style";
import Header from "../components/header";
import newFlagIcon from "../assets/newFlag.png";
import recentFlagsIcon from "../assets/recentFlags.png";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
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
