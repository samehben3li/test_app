import { View, Pressable, Image, Text } from "react-native";
import { homeStyles as styles } from "../styles";
import { Header } from "../components";
import { newFlagIcon, recentFlagsIcon, flagIcon, recentIcon } from "../assets";

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
          <Text style={styles.btnText}>NEW FLAG</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("recentFlags")}
        >
          <Image style={styles.image2} source={recentIcon} />
          <Text style={styles.btnText}>RECENT FLAGS</Text>
        </Pressable>
      </View>
    </View>
  );
}
