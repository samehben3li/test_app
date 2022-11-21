import { View } from "react-native";
import { homeStyles as styles } from "../styles";
import { Header } from "../components";
import { flagIcon, recentIcon } from "../assets";
import Button from "../components/Button";

interface Props {
  navigation: any;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Header home={true} />
      <View style={styles.main}>
        <Button
          style={styles.image}
          icon={flagIcon}
          fn={() => navigation.navigate("createFlag")}
          variant="home"
          globalStyles={styles}
        />
        <Button
          style={styles.image2}
          icon={recentIcon}
          fn={() => navigation.navigate("recentFlags")}
          variant="home"
          globalStyles={styles}
        />
      </View>
    </View>
  );
}
