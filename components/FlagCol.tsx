import { Text, View, Image } from "react-native";
import { flagListStyles as styles } from "../styles";
import i18n from "../i18n/translations";
import { flagTab } from "../types/interfaces";

const API_URI = process.env.apiUrl;

interface Props {
  name: string;
  item: flagTab;
}

const FlagCol = ({ item, name }: Props) => (
  <View style={styles.col}>
    <View style={styles.title}>
      <Text style={styles.titleTxt}>{i18n.t(name)}</Text>
    </View>
    <View style={styles.selection}>
      <Image
        style={styles.image}
        source={{ uri: `${API_URI}${item?.imgUrl}` }}
      />
    </View>
    <View style={styles.name}>
      <Text style={styles.nameTxt}>{item?.name}</Text>
    </View>
  </View>
);

export default FlagCol;
