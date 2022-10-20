import { Text, View } from "react-native";
import Header from "../components/header";
import ScreenSwitch from "../components/screenSwitch";
import styles from "../styles/recentFlags.style";
import FlagList from "../components/flagList";

export default function RecentFlagsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ScreenSwitch navigation={navigation} />
      <FlagList />
    </View>
  );
}
