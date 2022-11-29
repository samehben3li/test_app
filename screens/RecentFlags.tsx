import { View } from "react-native";
import { Header, ScreenSwitch, FlagList } from "../components";
import { recentFlagsStyles as styles } from "../styles";

export default function RecentFlagsScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Header home={false} />
      <ScreenSwitch navigation={navigation} route={route} />
      <FlagList />
    </View>
  );
}
