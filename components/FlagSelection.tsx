import { selectedTab, option } from "../screens/CreateFlag";
import { Text, View, Image, Pressable } from "react-native";
import i18n from "../i18n/translations";
import { newFlagStyles as styles } from "../styles";
import { optionsData } from "../data/options";
import Animated, { FadeIn } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const API_URI = process.env.apiUrl;

interface selectionProps {
  setSelectedTab: React.Dispatch<React.SetStateAction<selectedTab>>;
  selectedTab: selectedTab;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  title: string;
  option: option | null;
  tab: number;
}

const FlagSelection = ({
  setSelectedTab,
  selectedTab,
  setCompleted,
  name,
  option,
  title,
  tab,
}: selectionProps) => {
  return (
    <AnimatedPressable
      onPress={() => {
        setSelectedTab(optionsData[tab]);
        setCompleted(false);
      }}
      style={styles.col}
      entering={FadeIn.delay(300)}
    >
      <View style={styles.title}>
        <Text
          style={[
            styles.titleTxt,
            (selectedTab.name === name || option) && styles.selected,
          ]}
        >
          {i18n.t(title)}
        </Text>
      </View>
      <View style={styles.selection}>
        <Image
          style={styles.selectionImage}
          source={{ uri: `${API_URI}${option?.imgUrl}` }}
        />
      </View>
      <View
        style={[
          styles.name,
          (selectedTab.name === name || option) && styles.selectedName,
          ,
          option && styles.done,
        ]}
      >
        <Text
          numberOfLines={1}
          style={[styles.nameTxt, option && styles.selectedTxt]}
        >
          {option ? option.name : "?"}
        </Text>
      </View>
    </AnimatedPressable>
  );
};

export default FlagSelection;
