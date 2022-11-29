import { View } from "react-native";
import { screenSwitchStyles as styles } from "../styles";
import { newFlagIcon, recentFlagsIcon } from "../assets";
import Button from "./Button";
interface Props {
  navigation: any;
  route: any;
}

export default function ScreenSwitch({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Button
        image={newFlagIcon}
        route={route}
        fn={() => navigation.navigate("createFlag")}
        name="createFlag"
        style={styles.btn}
        globalStyles={styles}
        variant="screenSwitch"
      />
      <Button
        image={recentFlagsIcon}
        route={route}
        fn={() => navigation.navigate("recentFlags")}
        name="recentFlags"
        style={[styles.btn, styles.btnBorder]}
        globalStyles={styles}
        variant="screenSwitch"
      />
    </View>
  );
}
