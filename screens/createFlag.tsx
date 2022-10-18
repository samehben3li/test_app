import { Text, View } from "react-native";
import Header from "../components/header";
import styles from "../styles/createFlag.style";
import ScreenSwitch from "../components/screenSwitch";
import FlagOptions from "../components/flagOptions";
import NewFlag from "../components/newFlag";

export default function CreateFlagScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ScreenSwitch navigation={navigation} />
      <NewFlag />
      <FlagOptions />
    </View>
  );
}
