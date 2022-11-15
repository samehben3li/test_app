import { View, Pressable, Image } from "react-native";
import { screenSwitchStyles as styles } from "../styles";
import { newFlagIcon, recentFlagsIcon } from "../assets";

const Button = ({
  fn,
  route,
  image,
  name,
  style,
}: {
  fn: () => void;
  route: any;
  image: any;
  name: string;
  style: any;
}) => {
  return (
    <Pressable style={style} onPress={fn}>
      <Image
        style={[styles.image, route.name === name && styles.selected]}
        source={image}
      />
    </Pressable>
  );
};

export default function ScreenSwitch({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Button
        image={newFlagIcon}
        route={route}
        fn={() => navigation.navigate("createFlag")}
        name="createFlag"
        style={styles.btn}
      />
      <Button
        image={recentFlagsIcon}
        route={route}
        fn={() => navigation.navigate("recentFlags")}
        name="recentFlags"
        style={[styles.btn, styles.btnBorder]}
      />
    </View>
  );
}
