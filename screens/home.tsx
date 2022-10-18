import { View, Pressable, Image, Text } from "react-native";
import styles from "../styles/home.style";
import Header from "../components/header";
import newFlagIcon from "../assets/newFlag.png";
import recentFlagsIcon from "../assets/recentFlags.png";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Pressable style={styles.btn} onPress={() => {}}>
          <Image style={styles.image} source={newFlagIcon} />
        </Pressable>
        <Pressable style={styles.btn} onPress={() => {}}>
          <Image style={styles.image} source={recentFlagsIcon} />
        </Pressable>
      </View>
    </View>
  );
}
