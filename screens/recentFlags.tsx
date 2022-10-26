import { View } from "react-native";
import Header from "../components/header";
import ScreenSwitch from "../components/screenSwitch";
import styles from "../styles/recentFlags.style";
import FlagList from "../components/flagList";

export default function RecentFlagsScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Header home={false} />
      <ScreenSwitch navigation={navigation} route={route} />
      <FlagList />
    </View>
  );
}
